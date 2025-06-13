<script setup lang="ts">
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';

import { storeToRefs } from 'pinia';
import { computed, defineAsyncComponent, onMounted, ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { showToast } from '@/components/common';
import SignStepBtn from '@/components/SignStepBtn.vue';
import { DRAG_MOVE_STEP } from '@/constants/common';
import { db } from '@/firebase';
import { useLoadCanvas } from '@/hooks/use-load-canvas';
import { usePointerFabric } from '@/hooks/use-pointer-fabric';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { onAfterRouteLeave } from '@/router';
import { useConfigStore, usePdfStore } from '@/store';
import { sleep } from '@/utils/common';
import { canvasToFile } from '@/utils/image';
import type { DragOffset } from '@/types/drag';
import type { SignatureTool } from '@/types/menu';

import SignatureImage from './SignatureImage.vue';
import SignatureLiteral from './SignatureLiteral.vue';
import SignatureLoading from './SignatureLoading.vue';
import SignatureMergePopup from './SignatureMergePopup.vue';
import SignaturePage from './SignaturePage.vue';
import SignaturePanel from './SignaturePanel.vue';
import SignatureSign from './SignatureSign.vue';
import SignatureToolbar from './SignatureToolbar.vue';

const route = useRoute();
const storage = getStorage();
const docId = computed(() => route.params.docId as string);
const firestoreDocId = ref<string | null>(null);
const isPublicRoute = ref<boolean>(!!(route.params.public && route.params.docId));

const auth = getAuth();
const pdfStore = usePdfStore();
const { setCurrentPDF } = usePdfStore();

const CANVAS_SCALE = 0.6;
const SignatureCanvasItem = defineAsyncComponent(() => import('@component-hook/pdf-canvas/vue'));
const currentTool = ref<SignatureTool | ''>('');
const isCancelMerge = ref(false);
const currentPage = ref(1);
const isShowNextWarnPopup = ref(false);
const isShowMergePopup = ref(false);
const fileContainerRef = useTemplateRef<HTMLDivElement>('fileContainer');
const fileZoom = ref(1);
const dragOffset = ref<DragOffset>({ x: 0, y: 0, width: 0, height: 0 });
const isActivatedFabric = ref(false);
const { currentPDF } = storeToRefs(pdfStore);
const configStore = useConfigStore();
const { t } = useI18n();
const { isShowWarnPopup, SignPopup, goBack, goPage, toggleWarnPopup } = useWarnPopup();
const { handlePointerDown, handlePointerMove, handlePointerUp } = usePointerFabric(fileContainerRef);

const {
  canvasItems: signatureCanvasItems,
  loadedState,
  isCompleted,
  canvasRect,
  handleCanvasLoaded,
  handleCanvasReload,
} = useLoadCanvas(currentPDF, true);

const canvasWidth = computed(() => `${canvasRect.value.width * fileZoom.value * CANVAS_SCALE}px`);
const canvasHeight = computed(() => `${canvasRect.value.height * fileZoom.value * CANVAS_SCALE}px`);

const currentCanvasItem = computed(() => {
  if (!signatureCanvasItems.value) return null;
  return signatureCanvasItems.value.at(currentPage.value - 1);
});

let isGiveUpSignature = false;
let requestFrame: number | null = null;

async function mergeFile() {
  toggleNextWarnPopup(false);
  toggleMergePopup(true);
  await sleep();

  window.requestAnimationFrame(async () => {
    try {
      if (!signatureCanvasItems.value || signatureCanvasItems.value.length === 0) {
        throw new Error('No signature canvases to process');
      }

      const { setCurrentPDFCanvas, addPDF, updatePDF } = usePdfStore();

      // Convert canvas to compressed images
      const compressPromises = signatureCanvasItems.value.map(async ({ canvasRef }) => {
        if (!canvasRef) return '';
        const imageFile = await canvasToFile(canvasRef);
        return imageCompression(imageFile, { useWebWorker: true });
      });

      const compressedBlobs = await Promise.all(compressPromises);
      const blobToBase64Promises = compressedBlobs.map(blob => blob && imageCompression.getDataUrlFromFile(blob));
      const canvas = await Promise.all(blobToBase64Promises);

      if (isCancelMerge.value) {
        isCancelMerge.value = false;
        return;
      }

      setCurrentPDFCanvas(canvas);
      const file = { ...currentPDF.value, PDFBase64: '', updateDate: Date.now() };

      if (!file.name) throw new Error('Missing file name in currentPDF');
      const resolvedDocId = docId.value || currentPDF.value?.PDFId;
      if (!resolvedDocId) throw new Error('Missing document ID');

      if (file.isUpdate) {
        updatePDF(file);
      } else {
        addPDF(file);
      }

      const userId = auth.currentUser?.uid || 'public';
      if (!userId) {
        showToast({ message: 'User not authenticated', type: 'error' });
        return;
      }

      const filePath = userId !== 'public' ? `uploads/${userId}/${resolvedDocId}/${file.name}` : file?.filePath;
      // const filePath = `uploads/${userId}/${resolvedDocId}/${file.name}`;
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF();

      canvas.forEach((imgDataUrl, index) => {
        if (index !== 0) pdf.addPage();
        const imgProps = pdf.getImageProperties(imgDataUrl);
        const ratio = imgProps.width / imgProps.height;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pageWidth / ratio;
        pdf.addImage(imgDataUrl, 'JPEG', 0, 0, pageWidth, pageHeight);
      });

      const pdfBlob = await pdf.output('blob');
      const fileRef = storageRef(storage, filePath);
      await uploadBytes(fileRef, pdfBlob);

      const downloadURL = await getDownloadURL(fileRef);
      // await loadPDFByUrl(downloadURL);
      const contractDocRef = doc(db, 'contracts', resolvedDocId);
      await updateDoc(contractDocRef, {
        ...(isPublicRoute.value ? { signedByEmployee: true } : { signedByHR: true }),
        signedUrl: downloadURL,
        signedAt: serverTimestamp(),
        status: 'signed',
      });

      // Public route handling
      if (isPublicRoute.value) {
        // Notify HR via email
        const docSnap = await getDoc(doc(db, 'contracts', resolvedDocId));
        if (!docSnap.exists()) throw new Error('Document not found');

        const contractData = docSnap.data();
        const hrEmail = contractData?.hrEmail || 'hr@example.com'; // fallback

        const publicroute = 'public';
        // const signLink = `http://localhost:8080/${publicroute}/${resolvedDocId}`;
        const signLink = `https://esign.madello.com/${publicroute}/${resolvedDocId}`;

        const templateParams = {
          to_email: hrEmail,
          to_name: 'HR',
          document_link: signLink,
          sender_name: contractData.employeeName || 'Employee',
          file_name: file.name,
          document_url: downloadURL,
        };

        await sendEmailToHR(templateParams); // Define this separately
      } else {
        showToast(t('prompt.file_created_success'));
        goPage('complete', { resolvedDocId });
      }
    } catch (error) {
      console.error('Merge error:', error);
      showToast({ message: t('prompt.operation_timed_out'), type: 'error' });
    } finally {
      toggleMergePopup(false);
    }
  });
}

async function sendEmailToHR(params: {
  to_email: string;
  to_name: string;
  document_link: string;
  sender_name: string;
  file_name: string;
  document_url: string;
}) {
  try {
    console.log(params);
    await emailjs.send('service_madello', 'template_bzrw36k', params, 'vgo38fj40ywZbvn76');
    showToast({ message: 'Notification sent to HR.', type: 'success' });
    goPage('success');
  } catch (error) {
    console.error('Email send error:', error);
    showToast({ message: 'Failed to notify HR.', type: 'error' });
  }
}

function addFabric(value: string, type?: string) {
  console.log(value, currentCanvasItem.value);
  const canvas = currentCanvasItem.value;
  if (!canvas) return;
  const action = type === 'text' ? canvas.addText : canvas.addImage;
  action(value);
}

function usePage(page: number) {
  currentCanvasItem.value?.clearActive();
  currentPage.value = page;
  scrollTo({ top: 0, left: 0 });
}

function scrollTo(options: ScrollToOptions) {
  if (!fileContainerRef.value) return;
  fileContainerRef.value.scrollTo(options);
}

function toggleNextWarnPopup(isOpen: boolean) {
  signatureCanvasItems.value?.forEach(({ clearActive }) => clearActive());
  isShowNextWarnPopup.value = isOpen;
}

function toggleMergePopup(isOpen: boolean) {
  isShowMergePopup.value = isOpen;
}

function giveUpSignature() {
  isGiveUpSignature = true;
  goBack();
}

function cancelMergeFile() {
  isCancelMerge.value = true;
  toggleMergePopup(false);
}

function handleDragOver(event: DragEvent) {
  if (!fileContainerRef.value) return;
  const { clientX, clientY } = event;
  const rect = fileContainerRef.value.getBoundingClientRect();
  const { x, y, height, width } = dragOffset.value;
  const top = clientY <= rect.top + y;
  const bottom = clientY >= rect.bottom - (height - y);
  const left = clientX <= rect.left + x;
  const right = clientX >= rect.right - (width - x);
  let offsetX = 0;
  let offsetY = 0;

  cancelScrollToPerFrame();

  if (left || right) offsetX = left ? -DRAG_MOVE_STEP : DRAG_MOVE_STEP;
  if (top || bottom) offsetY = top ? -DRAG_MOVE_STEP : DRAG_MOVE_STEP;

  if (!offsetX && !offsetY) return;

  requestFrame = window.requestAnimationFrame(() => {
    scrollToPerFrame(offsetX, offsetY);
  });
}

function scrollToPerFrame(offsetX: number, offsetY: number) {
  if (!fileContainerRef.value) return;
  const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = fileContainerRef.value;
  const top = scrollTop + offsetY;
  const left = scrollLeft + offsetX;

  if (top < 0 || left < 0 || top + clientHeight > scrollHeight || left + clientWidth > scrollWidth) {
    cancelScrollToPerFrame();
    return;
  }

  requestFrame = requestAnimationFrame(() => {
    scrollTo({ top, left });
    scrollToPerFrame(offsetX, offsetY);
  });
}

function cancelScrollToPerFrame() {
  if (!requestFrame) return;
  cancelAnimationFrame(requestFrame);
  requestFrame = null;
}

async function resolveDocIdAndLoadPDF() {
  const resolvedDocId = docId.value;
  if (!resolvedDocId) {
    showToast({ message: 'Invalid document ID', type: 'error' });
    return;
  }
  firestoreDocId.value = resolvedDocId;
  await loadDocumentByDocId(resolvedDocId);
}

async function loadDocumentByDocId(docuid: string) {
  try {
    let docData: any = null;

    if (isPublicRoute.value) {
      // Public route: use a query to fetch by docId field
      const contractsRef = collection(db, 'contracts');
      const q = query(contractsRef, where('docId', '==', docuid));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showToast({ message: 'Document not found', type: 'error' });
        return;
      }

      docData = snapshot.docs[0].data();
    } else {
      // Internal route: fetch directly using document ID
      const docRef = doc(db, 'contracts', docuid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        showToast({ message: 'Document not found', type: 'error' });
        return;
      }

      docData = docSnap.data();
    }
    const pdfUrl = docData.signedUrl || docData.fileUrl;

    if (!pdfUrl) {
      showToast({ message: 'No PDF file found', type: 'error' });
      return;
    }

    await loadPDFByUrl({
      fileUrl: pdfUrl,
      fileName: docData.fileName,
      updatedAt: docData.updatedAt || Date.now(),
      createdAt: docData.createdAt || Date.now(),
      docId: docuid,
      filePath: docData.filePath,
    });
  } catch (error) {
    console.error('Error loading document:', error);
  }
}

function arrayBufferToPdfString(buffer: ArrayBuffer): string {
  const uint8Array = new Uint8Array(buffer);
  let rawString = '';
  for (const element of uint8Array) {
    rawString += String.fromCharCode(element);
  }
  return rawString;
}

function estimatePageCountFromArrayBuffer(buffer: ArrayBuffer): number {
  const text = new TextDecoder().decode(buffer);
  const matches = text.match(/\/Type\s*\/Page\b/g);
  return matches ? matches.length : 1;
}

async function loadPDFByUrl({
  fileUrl,
  fileName,
  updatedAt,
  createdAt,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  docId,
  filePath,
}: {
  fileUrl: string;
  fileName: string;
  updatedAt: number;
  createdAt: number;
  docId: string;
  filePath: string;
}) {
  try {
    const response = await fetch(fileUrl);
    const arrayBuffer = await response.arrayBuffer();
    const fileSize = arrayBuffer.byteLength;
    const rawPdfString = arrayBufferToPdfString(arrayBuffer);
    const estimatedPages = estimatePageCountFromArrayBuffer(arrayBuffer);
    const safeTimestamp = typeof updatedAt === 'number' && !Number.isNaN(updatedAt) ? updatedAt : Date.now();

    const completePDF = {
      PDFId: `${fileName}-${Date.now()}`,
      docId,
      name: fileName,
      updateDate: updatedAt,
      createdAt,
      fileUrl,
      filePath,
      url: fileUrl, // Required by your PDF type
      file: {
        name: fileName,
        size: fileSize,
        type: 'application/pdf',
        lastModified: safeTimestamp,
        lastModifiedDate: new Date(safeTimestamp),
        webkitRelativePath: '',
      },
      pages: [estimatedPages], //Array.from({ length: pageCount }, (_, i) => i + 1),
      PDFBase64: rawPdfString,
    };

    setCurrentPDF(completePDF);
  } catch (error) {
    console.error('Error loading PDF:', error);
    showToast({ message: 'Failed to load PDF', type: 'error' });
  }
}

onMounted(async () => {
  await resolveDocIdAndLoadPDF();
});

onAfterRouteLeave(() => {
  if (!isGiveUpSignature) return;
  pdfStore.clearCurrentPDF();
});
</script>

<template>
  <div class="signature-content content flex flex-col">
    <h5
      class="title text-center"
      :class="{ 'animate-pulse': !isCompleted }"
    >
      {{ $t('sign_file') }}
      <span
        v-if="!isCompleted"
        class="text-xs text-gray-60 md:text-sm"
        >({{ $t('file_uploading') }})</span
      >
    </h5>

    <div class="flex flex-col min-h-0 flex-1 md:flex-row bg-white rounded-lg m-6">
      <div class="md:border-r-2 md:border-primary md:py-4 md:px-6">
        <signature-toolbar v-model:current-tool="currentTool" />
        <signature-sign
          v-model:current-tool="currentTool"
          v-model:drag-offset="dragOffset"
          @use-signature="addFabric"
        />
        <signature-image
          v-model:current-tool="currentTool"
          v-model:drag-offset="dragOffset"
          @use-image="addFabric"
        />
        <signature-literal
          v-model:current-tool="currentTool"
          v-model:drag-offset="dragOffset"
          @use-literal="addFabric"
        />
        <signature-page
          v-model:current-tool="currentTool"
          @use-page="usePage"
        />
      </div>

      <div class="signature-content-file bg-gray-200 rounded-lg">
        <div
          ref="fileContainer"
          class="relative w-full h-full overflow-auto touch-pan-x touch-pan-y pt-3 px-2 pb-11 md:pt-6 md:px-8"
          @dragover.stop.prevent="handleDragOver"
          @dragleave.stop.prevent="cancelScrollToPerFrame"
        >
          <div :style="{ width: canvasWidth, height: canvasHeight }">
            <template
              v-for="page in currentPDF.pages"
              :key="page"
            >
              <template v-if="loadedState[page - 1]">
                <signature-canvas-item
                  v-show="currentPage === page"
                  ref="signatureCanvasItems"
                  class="origin-top-left absolute"
                  :file="currentPDF"
                  :file-zoom="fileZoom"
                  :file-scale="6.8"
                  :page="page"
                  :canvas-scale="CANVAS_SCALE"
                  :password="configStore.filePassword"
                  is-drop
                  manual-reload
                  :close-svg-options="{ src: '' }"
                  :on-destroy="onAfterRouteLeave"
                  @loaded="handleCanvasLoaded(page)"
                  @reload="handleCanvasReload"
                  @pointer-down="handlePointerDown"
                  @pointer-move="handlePointerMove"
                  @pointer-up="handlePointerUp"
                  @selection-created="isActivatedFabric = true"
                  @selection-cleared="isActivatedFabric = false"
                />
              </template>
            </template>
          </div>

          <signature-loading
            v-if="!loadedState[currentPage]"
            class="absolute"
          />
        </div>

        <signature-panel
          v-model:file-zoom="fileZoom"
          :is-activated-fabric="isActivatedFabric"
          @copy-fabric="currentCanvasItem?.copyActiveFabric"
          @delete-fabric="currentCanvasItem?.deleteActiveFabric"
        />
      </div>
    </div>

    <sign-step-btn
      class="pb-2.5"
      :is-prev-disabled="!isCompleted"
      :is-next-disabled="!isCompleted"
      :is-public="isPublicRoute"
      @next-step="toggleNextWarnPopup(true)"
      @prev-step="toggleWarnPopup(true)"
    />
    <sign-popup
      v-if="isShowWarnPopup"
      :title="$t('warn')"
    >
      <p class="text-center">
        {{ $t('prompt.sure_discard_edited_content') }}
      </p>
      <div class="flex justify-between md:justify-evenly">
        <button
          class="btn btn-base"
          @click="toggleWarnPopup(false)"
        >
          {{ $t('not_yet') }}
        </button>
        <button
          class="btn btn-primary"
          @click="giveUpSignature"
        >
          {{ $t('give_up') }}
        </button>
      </div>
    </sign-popup>

    <sign-popup
      v-if="isShowNextWarnPopup"
      :title="$t('create_file')"
    >
      <p class="text-center">
        {{ $t('prompt.sure_completed_sign') }}
      </p>
      <div class="flex justify-between md:justify-evenly">
        <button
          class="btn btn-base"
          @click="toggleNextWarnPopup(false)"
        >
          {{ $t('wait') }}
        </button>
        <Button
          class="btn btn-primary"
          :disabled="signatureCanvasItems?.length === 0"
          @click="mergeFile"
        >
          {{ $t('confirm') }}
        </Button>
      </div>
    </sign-popup>

    <signature-merge-popup
      :is-show-merge-popup="isShowMergePopup"
      :cancel-merge-file="cancelMergeFile"
    />
  </div>
</template>

<style lang="css" scoped>
.signature-content-file {
  margin: 0 10px 28px;
  background-color: var(--color-gray-30);
  border: 2px solid var(--color-gray-30);
  width: calc(100% - 20px);
  min-height: 0;
  flex: 1 1 0%;
  position: relative;
}

@media (min-width: 768px) {
  .signature-content-file {
    margin: 24px 5% 0;
    min-width: 0;
    height: calc(100% - 58px);
  }
}
</style>
