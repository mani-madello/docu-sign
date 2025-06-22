<script setup lang="ts">
import * as fabric from 'fabric';
import { doc as firestoreDoc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { jsPDF } from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist';
import { getDocument } from 'pdfjs-dist';
import { nextTick, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import BulkSignaturePanel from './BulkSignaturePanel.vue';

interface SignatureField {
  id: string;
  pageIndex: number;
  left: number;
  top: number;
  width: number;
  height: number;
  signer: 'HR' | 'Employee' | null;
  signed: boolean;
  signedAt?: number;
  signatureDataUrl?: string;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const route = useRoute();
const storage = getStorage();
const firestore = getFirestore();

const pdfViewer = ref<HTMLDivElement | null>(null);
const loading = ref(true);
const docIds = ref<string[]>([]);
const loadedDocuments = ref<
  Array<{
    docId: string;
    pdfUrl: string;
    signatureFields: SignatureField[];
    canSign: boolean;
  }>
>([]);
const fabricCanvasPages = reactive<fabric.Canvas[]>([]);
const currentUserRole = ref<'HR' | 'Employee'>('Employee');

const selectedSignature = ref<string | null>(null);
const placingSignature = ref(false);

// Load signature from panel
function onSignatureSaved(data_url: string) {
  selectedSignature.value = data_url;
  placingSignature.value = true;
  alert('Now click on the document to place your signature');
}

// initialization
async function init() {
  const routeDocIds = route.params.docIds;
  if (Array.isArray(routeDocIds)) docIds.value = routeDocIds;
  else if (typeof routeDocIds === 'string') docIds.value = [routeDocIds];

  if (!docIds.value.length) {
    loading.value = false;
    return;
  }

  for (const id of docIds.value) {
    const docSnap = await getDoc(firestoreDoc(firestore, 'contracts', id));
    if (!docSnap.exists()) continue;

    const d = docSnap.data()!;
    const url = d.signedUrl || d.fileUrl || (await getDownloadURL(storageRef(storage, `uploads/${id}.pdf`)));

    loadedDocuments.value.push({
      docId: id,
      pdfUrl: url,
      signatureFields: Array.isArray(d.signatureFields) ? d.signatureFields : [],
      canSign: true,
    });
  }

  if (loadedDocuments.value.length > 0) {
    await renderPdfWithCanvas(loadedDocuments.value[0]);
  }
  loading.value = false;
}

// renders PDF pages and overlay canvases
async function renderPdfWithCanvas(doc: { docId: string; pdfUrl: string; signatureFields: SignatureField[] }) {
  if (!pdfViewer.value) return;
  pdfViewer.value.innerHTML = '';
  fabricCanvasPages.length = 0;

  const pdf = await getDocument(doc.pdfUrl).promise;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const vp = page.getViewport({ scale: 1.5 });

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    const baseCanvas = document.createElement('canvas');
    Object.assign(baseCanvas, { width: vp.width, height: vp.height });
    wrapper.append(baseCanvas);

    const ctx = baseCanvas.getContext('2d')!;
    await page.render({ canvasContext: ctx, viewport: vp }).promise;

    const overlayCanvas = document.createElement('canvas');
    Object.assign(overlayCanvas, { width: vp.width, height: vp.height });
    Object.assign(overlayCanvas.style, { position: 'absolute', top: '0', left: '0' });
    wrapper.append(overlayCanvas);

    pdfViewer.value.append(wrapper);

    const fcanvas = new fabric.Canvas(overlayCanvas, { selection: false });
    const pageIndex = i - 1;

    // Render existing signature fields on this page
    for (const field of doc.signatureFields) {
      if (field.pageIndex !== pageIndex) continue;

      const rect = new fabric.Rect({
        left: field.left,
        top: field.top,
        width: field.width,
        height: field.height,
        fill: field.signed ? 'rgba(0,200,0,0.3)' : 'rgba(0,0,255,0.2)',
        stroke: field.signed ? 'green' : 'blue',
        strokeWidth: 1,
        selectable: false,
      });
      fcanvas.add(rect);

      if (field.signed && field.signatureDataUrl) {
        await new Promise<void>(resolve => {
          fabric.Image.fromURL(field.signatureDataUrl!, img => {
            img.set({ left: field.left, top: field.top, width: field.width, height: field.height, selectable: false });
            fcanvas.add(img);
            resolve();
          });
        });
      }
    }

    // Click handler for placing new signature
    fcanvas.on('mouse:down', async opt => {
      if (!placingSignature.value || !selectedSignature.value) return;

      const pointer = fcanvas.getPointer(opt.e);
      const x = pointer.x;
      const y = pointer.y;
      const w = 150;
      const h = 50;

      // Add signature image
      await new Promise<void>(resolve => {
        fabric.Image.fromURL(selectedSignature.value!, img => {
          img.set({ left: x, top: y, width: w, height: h, selectable: false });
          fcanvas.add(img);
          resolve();
        });
      });

      // Add signer/date text below signature
      const text = new fabric.Text(`Signed by ${currentUserRole.value}\n${new Date().toLocaleString()}`, {
        left: x,
        top: y + h + 5,
        fontSize: 12,
        fill: '#333',
        selectable: false,
        fontWeight: 'bold',
      });
      fcanvas.add(text);

      // Add docId text below date text
      const docText = new fabric.Text(`Doc ID: ${doc.docId}`, {
        left: x,
        top: y + h + 25,
        fontSize: 10,
        fill: '#666',
        selectable: false,
      });
      fcanvas.add(docText);

      fcanvas.renderAll();

      // Add signature field metadata
      doc.signatureFields.push({
        id: crypto.randomUUID(),
        pageIndex,
        left: x,
        top: y,
        width: w,
        height: h,
        signer: currentUserRole.value,
        signed: true,
        signedAt: Date.now(),
        signatureDataUrl: selectedSignature.value,
      });

      // Reset placing state
      placingSignature.value = false;
      selectedSignature.value = null;
    });

    fabricCanvasPages.push(fcanvas);
  }
}

// sign all docs
async function signAndMergeDocuments() {
  for (const doc of loadedDocuments.value) {
    const storagePath = new URL(doc.pdfUrl).pathname.slice(1);
    const pdfBytesUrl = await getDownloadURL(storageRef(storage, storagePath));
    const pdf_orig = await getDocument(pdfBytesUrl).promise;

    const pdfDoc = new jsPDF();

    for (let i = 1; i <= pdf_orig.numPages; i++) {
      const page = await pdf_orig.getPage(i);
      const vp = page.getViewport({ scale: 2 });

      // Render original page into canvas
      const bgCanvas = document.createElement('canvas');
      bgCanvas.width = vp.width;
      bgCanvas.height = vp.height;
      const bgCtx = bgCanvas.getContext('2d')!;
      await page.render({ canvasContext: bgCtx, viewport: vp }).promise;

      // Overlay fabric canvas drawing
      const overlay = fabricCanvasPages[i - 1];
      if (overlay && overlay.getObjects().length) {
        overlay.setWidth(vp.width);
        overlay.setHeight(vp.height);
        overlay.renderAll();

        const overlayImg = new Image();
        overlayImg.src = overlay.toDataURL({ format: 'png' });

        await new Promise<void>(resolve => {
          overlayImg.onload = () => {
            bgCtx.drawImage(overlayImg, 0, 0);
            resolve();
          };
        });
      }

      // Add to PDF
      const imgData = bgCanvas.toDataURL('image/png');
      const pdfW = pdfDoc.internal.pageSize.getWidth();
      const pdfH = pdfDoc.internal.pageSize.getHeight();

      if (i > 1) pdfDoc.addPage();
      pdfDoc.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
    }

    // Output PDF blob
    const blob = pdfDoc.output('blob');

    // Upload back to same path in storage
    const ref = storageRef(storage, storagePath);
    await uploadBytes(ref, blob);

    // Get signed URL
    const signedUrl = await getDownloadURL(ref);

    // Update Firestore metadata
    await updateDoc(firestoreDoc(firestore, 'contracts', doc.docId), {
      signatureFields: doc.signatureFields,
      signedByHR: doc.signatureFields.some(f => f.signer === 'HR' && f.signed),
      signedByEmployee: doc.signatureFields.some(f => f.signer === 'Employee' && f.signed),
      signedAt: Date.now(),
      signedUrl,
    });
  }

  alert('All documents signed and uploaded!');
}

onMounted(async () => {
  await init();
  if (loadedDocuments.value.length) {
    await nextTick();
    await renderPdfWithCanvas(loadedDocuments.value[0]);
  }
  loading.value = false;
});
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Bulk Document Signing</h2>
    <div v-if="loading">Loading documents...</div>
    <div v-else-if="loadedDocuments.length === 0">
      <p>No documents to load or sign.</p>
    </div>
    <div
      v-else
      class="flex gap-6"
    >
      <!-- Signature Panel (left) -->
      <div class="w-1/3">
        <BulkSignaturePanel @signature-used="onSignatureSaved" />

        <p class="mt-2 text-gray-500 text-sm">Click 'Use Signature', then click on the document to place it.</p>
      </div>
      <!-- PDF Viewer with Canvas Overlays (right) -->
      <div
        ref="pdfViewer"
        class="w-2/3 space-y-8"
      ></div>
    </div>
    <button
      class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      @click="signAndMergeDocuments"
    >
      Sign Document(s)
    </button>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid #ddd;
}
</style>
