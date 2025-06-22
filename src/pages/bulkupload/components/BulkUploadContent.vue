<!-- <script setup lang="ts">
import { useFabric } from '@component-hook/pdf-canvas/vue';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
// import { useRoute } from 'vue-router';
import { showToast } from '@/components/common';
import { useWarnPopup } from '@/hooks/use-warn-popup';
// import SignIcon from '@/components/SignIcon.vue';
import { onAfterRouteLeave } from '@/router';
import { router } from '@/router/setup';
import { useAuthStore, useConfigStore } from '@/store';
import { sleep } from '@/utils/common';
import { checkFile, checkSingleFile } from '@/utils/reader';

interface UploadedFile {
  file: File;
  fileName: string;
  docId: string;
  filePath: string;
  fileUrl: string;
  uploadedAt: string;
  pages: number[];
}

// const route = useRoute();
const authStore = useAuthStore();
const auth = getAuth();
const { goPage } = useWarnPopup();
const uid = auth.currentUser?.uid;
const { user, loading } = storeToRefs(authStore);
const uploadedFiles = ref<UploadedFile[]>([]);

const isUserLoggedIn = computed(() => !!user.value?.email);

const fileName = ref('');
const projectName = ref('');
// const isShowPen = ref(true);
const isShowPasswordPopup = ref(false);
const pages = ref(1);
const { t, locale } = useI18n();
const { createCanvas, deleteCanvas, loadFile } = useFabric({ id: 'canvas' });
const { toggleLoading, updateFilePassword } = useConfigStore();
const regexp = /.pdf|.png|.jpg|.jpeg/;
// const activeFileIndex = ref(0);
// const previewMode = ref(true);
const selectedFileIndexes = ref<number[]>([]);
const signerInfoMap = ref<Record<string, { name: string; email: string; order: number }[]>>({});

const signer = ref('');

async function uploadToFirebase(docId: string, file: File, userId: string, department: string) {
  const storage = getStorage();
  const firestore = getFirestore();

  const filePath = `uploads/${userId}/${docId}/${file.name}`;
  const fileRef = storageRef(storage, filePath);
  const snapshot = await uploadBytes(fileRef, file);
  const fileUrl = await getDownloadURL(snapshot.ref);

  const contractDoc = doc(firestore, 'contracts', docId);

  await setDoc(contractDoc, {
    docId,
    createdBy: userId,
    employeeEmail: '',
    employeeName: '',
    assignedTo: user.value?.email,
    department,
    status: 'pending',
    signedByHR: false,
    signedByEmployee: false,
    fileName: file.name,
    filePath,
    fileUrl,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    signedDate: serverTimestamp(),
  });

  return { docId, filePath, fileUrl };
}

async function uploadFile(event: Event) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }

  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (!files || files.length === 0) return;

  for (const file of Array.from(files)) {
    if (!checkSingleFile(file, regexp)) continue;
    await renderFile(file);
  }

  target.value = '';
}

function dropFile(event: DragEvent) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }

  const { dataTransfer } = event;
  const files = dataTransfer?.files;

  readerFile(files);
}

function readerFile(files?: FileList | null) {
  const file = checkFile(files, regexp);
  if (!file) return;
  return renderFile(file);
}

async function renderFile(file: File) {
  try {
    const { filePassword } = useConfigStore();

    toggleLoading({ isShow: true, title: 'upload_file', content: 'file_uploading' });
    await sleep();

    const fileContent = await loadFile(file, filePassword);
    if (!fileContent) throw new Error('File content is empty');

    const department = 'Engineering';
    const newDocId = uuidv4();
    const { filePath, fileUrl } = await uploadToFirebase(newDocId, file, uid!, department);

    uploadedFiles.value.push({
      ...(fileContent as any),
      file,
      fileName: file.name,
      docId: newDocId,
      filePath,
      fileUrl,
      uploadedAt: new Date().toISOString(),
      pages: Array.from({ length: fileContent.pages ?? 1 }, (_, i) => i),
    });

    pages.value = fileContent.pages;
    showToast(t('prompt.file_upload_success'));
    fileName.value = file.name;
    projectName.value = file.name.replace(regexp, '');
  } catch (error) {
    if (`${error}`.includes('PasswordException')) {
      isShowPasswordPopup.value = true;
      if (`${error}` !== 'PasswordException: Incorrect Password') return;
      showToast({ message: t('prompt.incorrect_password'), type: 'error' });
      updateFilePassword('');
      return;
    }
    showToast({ message: t('prompt.file_upload_failed'), type: 'error' });
  } finally {
    toggleLoading({ isShow: false });
  }
}

watch(selectedFileIndexes, newIndexes => {
  newIndexes.forEach(i => {
    const docuId = uploadedFiles.value[i].docId;
    if (!signerInfoMap.value[docuId]) {
      signerInfoMap.value[docuId] = [{ name: '', email: '', order: 1 }];
    }
  });

  Object.keys(signerInfoMap.value).forEach(docuId => {
    const stillSelected = selectedFileIndexes.value.some(i => uploadedFiles.value[i].docId === docuId);
    if (!stillSelected) delete signerInfoMap.value[docuId];
  });
});

const addSigner = (docId2: string) => {
  if (!docId2) return null; // guard clause

  if (!signerInfoMap.value[docId2]) {
    signerInfoMap.value[docId2] = [];
  }

  const newSigner = {
    name: '',
    email: '',
    order: signerInfoMap.value[docId2].length + 1,
  };

  signerInfoMap.value[docId2].push(newSigner);
  return newSigner;
};

const removeSigner = (docId3: string, index: number) => {
  if (signerInfoMap.value[docId3]) {
    signerInfoMap.value[docId3].splice(index, 1);
  }
};

async function proceedToSignature() {
  const selectedFiles = selectedFileIndexes.value.map(i => uploadedFiles.value[i]);

  for (const file of selectedFiles) {
    const signers = signerInfoMap.value[file.docId];
    if (!signers?.length) {
      alert(`Please add at least one signer for ${file.fileName}`);
      return;
    }

    for (const signer1 of signers) {
      if (!signer1.name || !signer1.email || signer1.order <= 0) {
        alert(`Invalid signer info for ${file.fileName}`);
        return;
      }
    }

    const orderSet = new Set(signers.map(s => s.order));
    if (orderSet.size !== signers.length) {
      alert(`Duplicate signer order in ${file.fileName}`);
      return;
    }

    // Update Firestore with signer info
    const firestore = getFirestore();
    const contractRef = doc(firestore, 'contracts', file.docId);

    try {
      await updateDoc(contractRef, {
        signers: signers.map(s => ({
          name: s.name,
          email: s.email,
          order: s.order,
        })),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(`Error updating signers for ${file.fileName}:`, error);
      showToast({ message: `Failed to save signers for ${file.fileName}`, type: 'error' });
      return;
    }
  }

  // const selectedDocIds = selectedFiles.map(f => f.docId);

  // goPage('bulksignature', {
  //   params: { docIds: selectedDocIds }, // Must be an array
  // });

  router.push({ name: 'assignsigners' });
}

function removeFile(index: number) {
  const documentId = uploadedFiles.value[index].docId;
  uploadedFiles.value.splice(index, 1);
  delete signerInfoMap.value[documentId];
  selectedFileIndexes.value = selectedFileIndexes.value.filter(i => i !== index);
}

const formatDate = (timestamp: string | number | Date) => {
  if (!timestamp) return 'N/A';
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleString();
};

onMounted(createCanvas);
onAfterRouteLeave(deleteCanvas);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div
    v-else-if="isUserLoggedIn"
    class="bulkupload-content content"
    @dragover.prevent
    @drop.prevent="dropFile"
  >
    <h5 class="title text-center">
      {{ $t('bulk_upload_file') }}
    </h5>
    <div
      v-show="fileName"
      class="upload-content-box h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto"
    >
      <div
        v-if="uploadedFiles.length"
        class="w-full mb-6"
      >
        <section class="flex items-center justify-between mb-3 px-6">
          <div class="flex items-center justify-start">
            <h2 class="text-2xl leading-tight">Selected Files ({{ selectedFileIndexes.length || 0 }})</h2>
          </div>
        </section>
        <div
          v-for="(file, index) in uploadedFiles"
          :key="file.docId"
          class="block border-b last:border-b-0 py-4 px-4"
        >
          <div class="justify-between items-center block md:flex">
            <div class="flex items-center justify-center mb-4 md:mb-0">
              <div class="flex items-center justify-start md:flex">
                <div class="flex items-center justify-center mr-4">
                  <input
                    v-model="selectedFileIndexes"
                    type="checkbox"
                    :value="index"
                    class="form-checkbox h-5 w-5 text-blue-600"
                  />
                </div>
                <div class="text-center md:text-left">
                  <h4 class="text-base font-semibold">{{ file.fileName || 'Untitled' }}</h4>
                  <p class="text-gray-500 dark:text-slate-400">
                    <b>{{ formatDate(file.uploadedAt) }}</b>
                  </p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="text-center md:text-right space-y-2">
                <div
                  class="inline-flex items-center capitalize leading-none text-xs py-1 px-3"
                  @click="removeFile(index)"
                >
                  <svg
                    aria-hidden="true"
                    class="cursor-pointer transition-[color_transform] hover:text-primary w-8 h-8"
                  >
                    <use
                      href="#icon-ic_trash"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="selectedFileIndexes.includes(index)"
            class="mt-4 space-y-4"
          >
            <div
              v-for="(signer2, signerIndex) in signerInfoMap[file.docId]"
              :key="`${file.docId}-signer-${signerIndex}`"
              class="flex flex-wrap md:flex-nowrap gap-4 items-center p-4"
            >
              <input
                v-model="signer2.name"
                type="text"
                placeholder="Signer Name"
                required
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <input
                v-model="signer2.email"
                type="email"
                placeholder="Signer Email"
                required
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <input
                v-model.number="signer2.order"
                type="number"
                min="1"
                placeholder="Signing Order"
                class="w-32 px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <button
                type="button"
                class="w-6 h-6 flex items-center justify-center text-white bg-red-600 rounded hover:bg-red-700 transition"
                @click="removeSigner(file.docId, signerIndex)"
              >
                X
              </button>
            </div>
            <button
              type="button"
              class="w-40 h-8 mt-2 px-6 py-2 flex items-center justify-center text-white bg-blue-500 rounded hover:bg-blue-600 transition"
              @click="addSigner(file.docId)"
            >
              Add Signer
            </button>
          </div>
        </div>
      </div>


      <div class="mt-6 text-center">
        <button
          class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          @click="proceedToSignature"
        >
          Proceed to Signature
        </button>
      </div>
    </div>

    <div
      v-if="!fileName"
      class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
    >
      <div
        class="bulkupload-content-box justify-center h-full w-full"
        @dragover.stop.prevent
        @dragenter.stop.prevent
        @drop.stop.prevent="dropFile"
      >
        <img
          src="@/assets/img/img_photo.svg"
          alt="photo icon"
        />
        <div
          class="inline-flex items-center capitalize leading-none text-sm border rounded-full py-1.5 px-4 bg-blue-500 border-blue-500 text-white mr-3 last:mr-0 mb-3"
        >
          <span class="inline-flex justify-center items-center w-4 h-4 mr-2">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              class="inline-block"
            >
              <path
                fill="currentColor"
                d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"
              />
            </svg>
          </span>
          <span>
            <button>
              <input
                type="file"
                multiple
                accept="application/pdf"
                class="opacity-0 absolute w-[131px] h-[41px] cursor-pointer"
                @change="uploadFile"
              />
              {{ $t('select_file') }}
            </button>
          </span>
        </div>

        <div class="text-center">
          <h5 class="mb-3 hidden md:block">
            {{ $t('prompt.or_drag_file') }}
          </h5>
          <p class="px-4 text-center">
            {{ $t('prompt.support_filetype', { type: locale === 'en-US' ? 'PDF' : 'PDF' }) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="text-center text-red-600"
  >
    {{ $t('prompt.login_required') }}
  </div>
</template>

<style lang="css" scoped>
.bulkupload-content-box {
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .upload-content-box {
    padding: 48px 10px;
  }
}
</style> -->
<script setup lang="ts">
import { getAuth } from 'firebase/auth';
import { jsPDF } from 'jspdf';
import JSZip, { remove } from 'jszip';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, nextTick, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { showToast } from '@/components/common';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { useAuthStore } from '@/store';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

interface Signer {
  name: string;
  email: string;
  order: number;
  signedAt?: Date;
}

interface PdfFile {
  name: string;
  size: number;
  arrayBuffer: ArrayBuffer;
  selected: boolean;
  signers: Signer[]; // 👈 New signer list
}

const showSignerModal = ref(false);
const activeFile = ref<PdfFile | null>(null);

function openSignerModal(file: PdfFile) {
  activeFile.value = file;
  showSignerModal.value = true;
}

function closeSignerModal() {
  showSignerModal.value = false;
  activeFile.value = null;
}

function addSigner() {
  if (activeFile.value) {
    activeFile.value.signers.push({ name: '', email: '', order: activeFile.value.signers.length + 1 });
  }
}

function removeSigner(index: number) {
  activeFile.value?.signers.splice(index, 1);
}

// const route = useRoute();
const authStore = useAuthStore();
const auth = getAuth();
// const isPublicRoute = ref<boolean>(!!(route.params.public && route.params.docId));
const uid = auth.currentUser?.uid;
const { user } = storeToRefs(authStore);

const isUserLoggedIn = computed(() => !!user.value?.email);

const { t, locale } = useI18n();
const pdfFiles = reactive<PdfFile[]>([]);
const previewPdfFile = ref<PdfFile | null>(null);
const pdfContainer = ref<HTMLDivElement | null>(null);
const isLoading = ref(false);
const selectAll = ref(false);
const { isShowWarnPopup, SignPopup, goPage, toggleWarnPopup } = useWarnPopup();
const anySelected = computed(() => pdfFiles.some(f => f.selected));

function toggleAllSelection() {
  pdfFiles.forEach(f => (f.selected = selectAll.value));
}

function checkSelectAllStatus() {
  selectAll.value = pdfFiles.every(f => f.selected);
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} bytes`;
  else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  else return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function onFileUpload(event: Event) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  pdfFiles.splice(0);
  previewPdfFile.value = null;
  clearPreview();

  for (const file of Array.from(input.files)) {
    if (file.name.toLowerCase().endsWith('.zip')) {
      const zip = await JSZip.loadAsync(file);
      const pdfEntries = Object.values(zip.files).filter(
        entry =>
          !entry.dir &&
          entry.name.toLowerCase().endsWith('.pdf') &&
          !entry.name.startsWith('__MACOSX') &&
          !entry.name.split('/').some(part => part.startsWith('.')),
      );

      for (const entry of pdfEntries) {
        const arrayBuffer = await entry.async('arraybuffer');
        pdfFiles.push({
          name: entry.name,
          size: arrayBuffer.byteLength,
          arrayBuffer,
          selected: false,
          signers: [],
        });
      }
    } else if (file.name.toLowerCase().endsWith('.pdf')) {
      const arrayBuffer = await file.arrayBuffer();
      pdfFiles.push({
        name: file.name,
        size: file.size,
        arrayBuffer,
        selected: false,
        signers: [],
      });
    }
  }
}

function clearPreview() {
  if (pdfContainer.value) {
    pdfContainer.value.innerHTML = '';
  }
}

// === PDF Preview with signature position selection ===
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentCanvas: HTMLCanvasElement | null = null;

const signaturePosition = ref<{ x: number; y: number } | null>(null);

async function previewPdf(file: PdfFile) {
  isLoading.value = true;
  previewPdfFile.value = file;
  clearPreview();
  signaturePosition.value = null;
  currentCanvas = null;

  try {
    // Wait for DOM updates
    await nextTick();

    // Ensure container is mounted
    if (!pdfContainer.value) {
      console.error('PDF container not found.');
      return;
    }

    // Load PDF
    const loadingTask = pdfjsLib.getDocument({ data: file.arrayBuffer.slice(0) });
    const pdfDoc = await loadingTask.promise;

    const page = await pdfDoc.getPage(1);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.border = '1px solid #ccc';
    canvas.style.cursor = 'crosshair';
    pdfContainer.value.append(canvas);

    // Force rendering after DOM update
    await new Promise(resolve => requestAnimationFrame(resolve));

    const context = canvas.getContext('2d')!;
    await page.render({ canvasContext: context, viewport }).promise;

    currentCanvas = canvas;

    canvas.addEventListener('click', (ev: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      signaturePosition.value = { x, y };

      // Redraw marker
      page.render({ canvasContext: context, viewport }).promise.then(() => {
        const ctx = canvas.getContext('2d')!;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
      });
    });
  } catch (error) {
    console.error('PDF rendering failed:', error);
    alert('Failed to load PDF.');
  } finally {
    isLoading.value = false;
  }
}

function closePreview() {
  previewPdfFile.value = null;
  clearPreview();
  signaturePosition.value = null;
  currentCanvas = null;
}

// === Signature drawing ===

const signatureCanvas = ref<HTMLCanvasElement | null>(null);
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(event: MouseEvent) {
  if (!signatureCanvas.value) return;
  isDrawing = true;
  const rect = signatureCanvas.value.getBoundingClientRect();
  lastX = event.clientX - rect.left;
  lastY = event.clientY - rect.top;
}

function draw(event: MouseEvent) {
  if (!isDrawing || !signatureCanvas.value) return;
  const ctx = signatureCanvas.value.getContext('2d')!;
  const rect = signatureCanvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function stopDrawing() {
  isDrawing = false;
}

// Touch support for drawing
function startDrawingTouch(event: TouchEvent) {
  if (!signatureCanvas.value) return;
  isDrawing = true;
  const rect = signatureCanvas.value.getBoundingClientRect();
  const touch = event.touches[0];
  lastX = touch.clientX - rect.left;
  lastY = touch.clientY - rect.top;
}

function drawTouch(event: TouchEvent) {
  if (!isDrawing || !signatureCanvas.value) return;
  const ctx = signatureCanvas.value.getContext('2d')!;
  const rect = signatureCanvas.value.getBoundingClientRect();
  const touch = event.touches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function clearSignatureDrawing() {
  if (!signatureCanvas.value) return;
  const ctx = signatureCanvas.value.getContext('2d')!;
  ctx.clearRect(0, 0, signatureCanvas.value.width, signatureCanvas.value.height);
}

// === Batch sign selected PDFs ===

async function batchSignSelected() {
  if (!signaturePosition.value) {
    alert('Please set signature position by clicking on the PDF preview.');
    return;
  }
  if (!signatureCanvas.value) {
    alert('Signature canvas not ready.');
    return;
  }
  // Get signature image data URL
  const signatureDataUrl = signatureCanvas.value.toDataURL('image/png');

  // Clear previous results
  signedResults.splice(0);

  for (const file of pdfFiles.filter(f => f.selected)) {
    const signedPdfUrl = await signPdfWithImage(file, signatureDataUrl, signaturePosition.value);
    signedResults.push({ name: `signed-${file.name}`, url: signedPdfUrl });
  }

  alert('Batch signing complete!');
}

async function signPdfWithImage(
  file: PdfFile,
  signatureDataUrl: string,
  position: { x: number; y: number },
): Promise<string> {
  const loadingTask = pdfjsLib.getDocument({ data: file.arrayBuffer.slice(0) });
  const pdfDoc = await loadingTask.promise;

  const pdf = new jsPDF();
  const signatureWidth = 150;
  const signatureHeight = 50;

  // Generate or use existing docId (for demo we generate one)

  const docId = uuidv4();

  // Format date/time
  const now = new Date();
  const dateTimeStr = now.toLocaleString();

  for (let pageIndex = 0; pageIndex < pdfDoc.numPages; pageIndex++) {
    const page = await pdfDoc.getPage(pageIndex + 1);
    const viewport = page.getViewport({ scale: 1.5 });

    // Render page to canvas
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d')!;
    await page.render({ canvasContext: ctx, viewport }).promise;

    // Draw signature image on every page
    const img = new Image();
    img.src = signatureDataUrl;
    await new Promise(resolve => (img.onload = resolve));

    ctx.drawImage(img, position.x, position.y, signatureWidth, signatureHeight);

    // Draw date/time text below signature
    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Signed: ${dateTimeStr}`, position.x, position.y + signatureHeight + 15);

    // Draw docId text below date/time
    ctx.font = '10px Arial';
    ctx.fillText(`Doc ID: ${docId}`, position.x, position.y + signatureHeight + 30);

    const imgData = canvas.toDataURL('image/jpeg', 1);

    if (pageIndex > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  }

  const pdfBlob = pdf.output('blob');
  return URL.createObjectURL(pdfBlob);
}

const signedResults = reactive<{ name: string; url: string }[]>([]);
</script>

<template>
  <div class="upload-content content">
    <h5 class="title text-center">
      {{ $t('upload_file') }}
    </h5>
    <div
      v-if="pdfFiles.length === 0"
      class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
    >
      <div
        class="upload-content-box justify-center h-full w-full"
        @dragover.stop.prevent
        @dragenter.stop.prevent
      >
        <img
          src="@/assets/img/img_photo.svg"
          alt="photo icon"
        />
        <div
          class="inline-flex items-center capitalize leading-none text-sm border rounded-full py-1.5 px-4 bg-blue-500 border-blue-500 text-white mr-3 last:mr-0 mb-3"
        >
          <span class="inline-flex justify-center items-center w-4 h-4 mr-2">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              class="inline-block"
            >
              <path
                fill="currentColor"
                d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"
              />
            </svg>
          </span>
          <span>
            <button>
              <input
                type="file"
                multiple
                accept=".pdf,.zip"
                class="opacity-0 absolute w-[131px] h-[41px] cursor-pointer"
                @change="onFileUpload"
              />
              {{ $t('select_file') }}
            </button>
          </span>
        </div>

        <p v-if="pdfFiles.length === 0">Only supports PDF files or Upload a ZIP file containing PDFs.</p>
      </div>
    </div>

    <div
      v-if="pdfFiles.length > 0"
      style="margin-top: 1rem"
      class="my-5 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto"
    >
      <section class="mb-6 flex items-center justify-between mt-6">
        <div class="flex items-center justify-start">
          <h2 class="text-2xl leading-tight">Select PDFs to Sign</h2>
        </div>
      </section>
      <label>
        <input
          v-model="selectAll"
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600"
          @change="toggleAllSelection"
        />
        Select All
      </label>

      <ul class="block border-b last:border-b-0">
        <li
          v-for="file in pdfFiles"
          :key="file.name"
          class="items-center block md:flex border-b last:border-b-0 py-4"
        >
          <label>
            <input
              v-model="file.selected"
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              @change="checkSelectAllStatus"
            />
            {{ file.name }} ({{ formatBytes(file.size) }})
          </label>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
            @click="previewPdf(file)"
          >
            Preview
          </button>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
            @click="openSignerModal(file)"
          >
            Signers
          </button>
        </li>
      </ul>
    </div>

    <!-- Signer Modal -->
    <div
      v-if="showSignerModal"
      class="modal"
    >
      <div class="modal-content">
        <h3>Manage Signers for: {{ activeFile?.name }}</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Order</th>
            <th></th>
          </tr>
          <tr
            v-for="(signer, i) in activeFile?.signers"
            :key="i"
          >
            <td>
              <input
                v-model="signer.name"
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
            </td>
            <td>
              <input
                v-model="signer.email"
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
            </td>
            <td>
              <input
                v-model.number="signer.order"
                type="number"
                min="1"
                class="w-32 px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
            </td>
            <td>
              <button
                type="button"
                class="w-6 h-6 flex items-center justify-center text-white bg-red-600 rounded hover:bg-red-700 transition"
                @click="removeSigner(i)"
              >
                X
              </button>
            </td>
          </tr>
        </table>
        <button
          type="button"
          class="w-40 h-8 mt-2 px-6 py-2 flex items-center justify-center text-white bg-blue-500 rounded hover:bg-blue-600 transition"
          @click="addSigner"
        >
          Add Signer
        </button>
        <button
          class="btn btn-base w-40 h-8 mt-2 px-6 py-2 flex items-center justify-center transition"
          @click="closeSignerModal"
        >
          Close
        </button>
      </div>
    </div>

    <hr style="margin: 1rem 0" />
    <div v-if="previewPdfFile">
      <section class="mb-6 flex items-center justify-between mt-6">
        <div class="flex items-center justify-start">
          <h2 class="text-2xl leading-tight">Draw Your Signature</h2>
        </div>
      </section>
      <canvas
        ref="signatureCanvas"
        style="border: 1px solid #ccc; touch-action: none"
        class="my-5 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto"
        width="400"
        height="150"
        @mousedown="startDrawing"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @mousemove="draw"
        @touchstart.prevent="startDrawingTouch"
        @touchmove.prevent="drawTouch"
        @touchend.prevent="stopDrawing"
      ></canvas>
      <br />
      <button
        :disabled="!anySelected"
        class="inline-flex items-center px-4 py-2 rounded-md transition-colors border border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700"
        @click="batchSignSelected"
      >
        Sign Selected PDFs
      </button>
      <button
        class="btn inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
        @click="clearSignatureDrawing"
      >
        Clear Signature
      </button>
    </div>

    <div
      v-if="isLoading"
      class="text-center my-4"
    >
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"
      ></div>
      <p>Loading PDF preview...</p>
    </div>

    <div
      v-if="previewPdfFile"
      style="margin-top: 2rem; border: 1px solid #ccc; padding: 1rem"
      class="my-5 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto"
    >
      <section class="mb-6 flex items-center justify-between mt-6">
        <div class="flex items-center justify-start">
          <h2 class="text-2xl leading-tight">Preview: {{ previewPdfFile.name }}</h2>
        </div>
      </section>

      <p class="my-5 bg-white rounded-lg overflow-auto">
        Click on the PDF canvas to set signature position.<br />
        Signature position:
        <b>{{
          signaturePosition ? `x: ${signaturePosition.x.toFixed(1)}, y: ${signaturePosition.y.toFixed(1)}` : 'Not set'
        }}</b>
      </p>
      <div
        ref="pdfContainer"
        style="border: 1px solid black; max-height: 600px; overflow: auto; position: relative"
      ></div>
      <button
        style="margin-top: 1rem"
        class="btn inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
        @click="closePreview"
      >
        Close Preview
      </button>
    </div>

    <div
      v-if="signedResults.length > 0"
      style="margin-top: 2rem"
      class="my-5 bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-auto"
    >
      <section class="mb-6 flex items-center justify-between mt-6">
        <div class="flex items-center justify-start">
          <h2 class="text-2xl leading-tight">Signed PDFs ready to download</h2>
        </div>
      </section>

      <ul class="block border-b last:border-b-0">
        <li
          v-for="result in signedResults"
          :key="result.name"
          class="items-center block md:flex border-b last:border-b-0 py-4"
        >
          {{ result.name }} -
          <a
            :href="result.url"
            :download="result.name"
            class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
            >Download Signed PDF</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-left: 0.5rem;
  cursor: pointer;
}
.upload-content-box {
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .upload-content-box {
    padding: 48px 10px;
  }
}
.spinner-border {
  border: 4px solid #ccc;
  border-top-color: #2196f3;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  width: 50rem;
  max-width: 90vw;
}
.modal-content table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}
.modal-content td,
.modal-content th {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
</style>
