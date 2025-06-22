<script setup lang="ts">
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { jsPDF } from 'jspdf';
import { getDocument } from 'pdfjs-dist';
import { ref } from 'vue';
import { storage } from '@/firebase'; // adjust path
import BulkSignaturePanel from './BulkSignaturePanel.vue';

const selectedDocs = ref<string[]>(['uploads/doc1.pdf', 'uploads/doc2.pdf']); // dynamic

const signatureImage = ref<string>('');
const signaturePosition = ref<{ x: number; y: number } | null>(null);

const onSignatureSaved = (image: string) => {
  signatureImage.value = image;
};

const handleCanvasClick = (event: MouseEvent) => {
  const canvas = event.target as HTMLCanvasElement;
  const rect = canvas.getBoundingClientRect();
  signaturePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

async function applySignatureToAll() {
  if (!signatureImage.value || !signaturePosition.value) {
    alert('Signature and position required!');
    return;
  }

  for (const docPath of selectedDocs.value) {
    const url = await getDownloadURL(storageRef(storage, docPath));
    const pdf = await getDocument(url).promise;
    const doc = new jsPDF();

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;

      const imgData = canvas.toDataURL('image/jpeg');
      if (i > 1) doc.addPage();
      doc.addImage(imgData, 'JPEG', 0, 0, 210, 297); // A4 size

      if (i === pdf.numPages) {
        doc.addImage(signatureImage.value, 'PNG', signaturePosition.value.x, signaturePosition.value.y, 40, 20);
      }
    }

    const outputBlob = doc.output('blob');
    const fileRef = storageRef(storage, docPath); // same path or use `/signed/${docId}.pdf`
    await uploadBytes(fileRef, outputBlob);
  }

  alert('All documents signed!');
}
</script>

<template>
  <div class="bulk-signer">
    <h2>Sign All Selected Documents</h2>

    <BulkSignaturePanel @save="onSignatureSaved" />

    <div>
      <h3>Click on sample to place signature</h3>
      <canvas
        class="preview-canvas"
        width="600"
        height="800"
        @click="handleCanvasClick"
      ></canvas>
    </div>

    <button @click="applySignatureToAll">Sign All Documents</button>
  </div>
</template>

<style scoped>
.preview-canvas {
  border: 1px dashed #aaa;
  cursor: crosshair;
}
</style>
