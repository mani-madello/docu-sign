<!-- eslint-disable @typescript-eslint/no-shadow -->
<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from 'firebase/firestore';

import { getDownloadURL, getStorage, ref as storageRef } from 'firebase/storage';
import { storeToRefs } from 'pinia';

import { computed, defineAsyncComponent, onMounted, ref, useTemplateRef, watchEffect } from 'vue';
// import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { showToast } from '@/components/common';
import { DRAG_MOVE_STEP } from '@/constants/common';
import { useLoadCanvas } from '@/hooks/use-load-canvas';
import { usePointerFabric } from '@/hooks/use-pointer-fabric';
import { useConfigStore, usePdfStore } from '@/store';
import { SignatureTool } from '@/types/menu';
import { sleep } from '@/utils/common';
// import { mergeSignatureToPDF } from '@/utils/merge';
import BulkSignatureImage from './BulkSignatureImage.vue';
import BulkSignatureLiteral from './BulkSignatureLiteral.vue';
import BulkSignaturePage from './BulkSignaturePage.vue';
import BulkSignatureSign from './BulkSignatureSign.vue';
import BulkSignatureToolbar from './BulkSignatureToolbar.vue';

const db = getFirestore();
const storage = getStorage();
const route = useRoute();
// const { t } = useI18n();

const step = ref(1);
const selectAll = ref(false);
const documents = ref<any[]>([]);
const selectedDocIds = ref<string[]>([]);
const signedUrls = ref<string[]>([]);
const firstPdfUrl = ref('');
const signatureImage = ref<string | null>(null);
const signaturePosition = ref<{ x: number; y: number } | null>(null);
const CANVAS_SCALE = 0.6;
const currentDocIndex = ref(0);
const currentPage = ref(1);

const pdfStore = usePdfStore();
const configStore = useConfigStore();

const currentTool = ref<SignatureTool | ''>('');
const dragOffset = ref({ x: 0, y: 0, width: 0, height: 0 });

const fileZoom = ref(1);
const isActivatedFabric = ref(false);

const SignatureCanvasItem = defineAsyncComponent(() => import('@component-hook/pdf-canvas/vue'));
const fileContainerRef = useTemplateRef<HTMLDivElement>('fileContainer');

const totalPages = computed(() => currentPDF?.pages?.length || 1);
const { currentPDF } = storeToRefs(pdfStore);
const auth = getAuth();
const userEmail = auth.currentUser?.email;
const isShowNextWarnPopup = ref(false);
const isShowMergePopup = ref(false);
// const isUpdating = false;
let requestFrame: number | null = null;

const {
  canvasItems: signatureCanvasItems,
  // loadedState,
  // canvasRect,
  handleCanvasLoaded,
  handleCanvasReload,
} = useLoadCanvas(currentPDF, true);

const { handlePointerDown, handlePointerMove, handlePointerUp } = usePointerFabric(fileContainerRef);

// const canvasWidth = computed(() => `${canvasRect.value.width * fileZoom.value * 0.6}px`);
// const canvasHeight = computed(() => `${canvasRect.value.height * fileZoom.value * 0.6}px`);

// const currentCanvasItem = computed(() => {
//   if (!signatureCanvasItems.value) return null;
//   return signatureCanvasItems.value.at(currentPage.value - 1);
// });

const docIds = computed(() => {
  // Route param docIds expected as comma-separated string or array
  if (!route.params.docIds) return [];
  if (Array.isArray(route.params.docIds)) {
    return route.params.docIds.filter(id => id.trim() !== '');
  }
  // If string, split by commas
  return (route.params.docIds as string)
    .split(',')
    .map(id => id.trim())
    .filter(id => id !== '');
});

// Load documents metadata from Firestore on mount
onMounted(async () => {
  if (!docIds.value.length) return;
  const chunkSize = 10;
  const fetchedDocs: any[] = [];

  for (let i = 0; i < docIds.value.length; i += chunkSize) {
    const chunk = docIds.value.slice(i, i + chunkSize);
    const q = query(collection(db, 'contracts'), where('__name__', 'in', chunk));
    const snap = await getDocs(q);
    snap.forEach(doc => {
      fetchedDocs.push({ id: doc.id, ...doc.data() });
    });
  }
  documents.value = fetchedDocs;
});

// Watch selectAll to update selectedDocIds accordingly
watchEffect(() => {
  if (selectAll.value) {
    selectedDocIds.value = documents.value.map(doc => doc.id);
  } else {
    selectedDocIds.value = [];
  }
});

// Toggle select all docs
const toggleSelectAll = computed({
  get() {
    return selectedDocIds.value.length === documents.value.length;
  },
  set(value) {
    if (value) {
      selectedDocIds.value = documents.value.map(doc => doc.id);
    } else {
      selectedDocIds.value = [];
    }
  },
});

const goToSignatureStep = async () => {
  if (!selectedDocIds.value.length) return;
  const firstDoc = documents.value.find(d => selectedDocIds.value.includes(d.id));
  if (!firstDoc?.fileUrl) return;

  const response = await fetch(firstDoc.fileUrl);
  const arrayBuffer = await response.arrayBuffer();
  const rawPdfString = arrayBufferToPdfString(arrayBuffer);
  const estimatedPages = estimatePageCountFromArrayBuffer(arrayBuffer);

  pdfStore.setCurrentPDF({
    ...firstDoc,
    PDFBase64: rawPdfString,
    pages: Array.from({ length: estimatedPages }, (_, i) => i + 1),
  });

  currentDocIndex.value = documents.value.indexOf(firstDoc);
  currentPage.value = 1;
  firstPdfUrl.value = firstDoc.fileUrl;
  step.value = 2;
};

// Signature handlers
const onSignatureSave = (img: string) => {
  // console.log('img', img, currentCanvasItem.value);
  signatureImage.value = img;
};

// function onSignatureSave(payload: any, type: string) {
//   console.log('onSignatureSave:', type, payload);

//   if (typeof payload === 'string' && payload.startsWith('data:image')) {
//     signatureImage.value = payload;
//   } else {
//     console.warn('Ignoring non-image payload:', payload);
//   }
// }

const onSignatureClear = () => {
  signatureImage.value = null;
  signaturePosition.value = null;
};

const onCanvasClick = (position: { x: number; y: number }) => {
  console.log(position);
  signaturePosition.value = position;
};

// Navigation between documents
function prevDoc() {
  if (currentDocIndex.value > 0) {
    currentDocIndex.value--;
    updateCurrentPDF();
  }
}
function nextDoc() {
  if (currentDocIndex.value < documents.value.length - 1) {
    currentDocIndex.value++;
    updateCurrentPDF();
  }
}

async function updateCurrentPDF() {
  const doc = documents.value[currentDocIndex.value];
  if (!doc || !doc.fileUrl) return;

  const response = await fetch(doc.fileUrl);
  const arrayBuffer = await response.arrayBuffer();
  const rawPdfString = arrayBufferToPdfString(arrayBuffer);
  const estimatedPages = estimatePageCountFromArrayBuffer(arrayBuffer);

  pdfStore.setCurrentPDF({
    ...doc,
    PDFBase64: rawPdfString,
    pages: Array.from({ length: estimatedPages }, (_, i) => i + 1),
  });

  currentPage.value = 1;
  firstPdfUrl.value = doc.fileUrl;
}

// Page navigation inside PDF
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
function nextPage() {
  if (currentPDF.value && currentPage.value < currentPDF.value.pages.length) {
    currentPage.value++;
  }
}

function toggleNextWarnPopup(isOpen: boolean) {
  Object.values(signatureCanvasItems.value || {}).forEach(({ clearActive }) => {
    clearActive?.();
  });
  isShowNextWarnPopup.value = isOpen;
}

function toggleMergePopup(isOpen: boolean) {
  isShowMergePopup.value = isOpen;
}

async function finalizeAndMerge() {
  console.log('signatureImage:', signatureImage.value);
  console.log('signaturePosition:', signaturePosition.value);
  console.log('signatureImage.value type:', typeof signatureImage.value, 'value:', signatureImage.value);

  if (!signatureImage.value || !signaturePosition.value) {
    alert('Please select a signature and position.');
    return;
  }

  toggleNextWarnPopup(false);
  toggleMergePopup(true);
  await sleep();

  try {
    for (const docId of selectedDocIds.value) {
      const docRef = doc(db, 'contracts', docId);
      const snap = await getDoc(docRef);
      if (!snap.exists()) continue;

      const data = snap.data();
      const userId = auth.currentUser?.uid;
      const filePath = `uploads/${userId}/${docId}/${data.fileName}`;

      const file: any = {
        docId,
        filePath,
        userId,
        name: data.fileName,
      };

      // const signedBlob = await mergeSignatureToPDF(file, signatureImage.value, signaturePosition.value);

      const signedRef = storageRef(storage, filePath);
      // await uploadBytes(signedRef, signedBlob);
      const downloadURL = await getDownloadURL(signedRef);

      const batch = writeBatch(db);
      const updatedSigners = (data.signers || []).map((s: any) =>
        s.email === userEmail ? { ...s, signed: true, signedAt: new Date() } : s,
      );

      batch.update(docRef, {
        signedByHR: true,
        signedUrl: downloadURL,
        signedAt: serverTimestamp(),
        status: 'signed',
        signers: updatedSigners,
        signaturePosition: signaturePosition.value,
      });

      await batch.commit();
      signedUrls.value.push(downloadURL);

      const nextSigner = updatedSigners.find((s: any) => !s.signed);
      if (nextSigner) {
        const signLink = `https://esign.madello.com/public/${docId}`;
        console.log(signLink);
        await emailjs.send(
          'service_madello',
          'template_bzrw36k',
          {
            to_email: nextSigner.email,
            to_name: nextSigner.name,
            document_link: signLink,
            sender_name: userEmail,
            file_name: file.name,
            document_url: downloadURL,
          },
          'vgo38fj40ywZbvn76',
        );
      }
    }

    alert('All selected documents signed and sent.');
    step.value = 3;
  } catch (error) {
    console.error('Error during finalizeAndMerge:', error);
    showToast({ message: 'Error signing documents.', type: 'error' });
  } finally {
    toggleMergePopup(false);
  }
}

watchEffect(() => {
  console.log('signatureImage:', signatureImage.value);
  console.log('firstPdfUrl:', firstPdfUrl.value);
});

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

function arrayBufferToPdfString(buffer: ArrayBuffer): string {
  const uint8Array = new Uint8Array(buffer);
  let rawString = '';
  for (const byte of uint8Array) {
    rawString += String.fromCharCode(byte);
  }
  return rawString;
}

function estimatePageCountFromArrayBuffer(buffer: ArrayBuffer): number {
  const text = new TextDecoder().decode(buffer);
  const matches = text.match(/\/Type\s*\/Page\b/g);
  return matches ? matches.length : 1;
}
</script>

<template>
  <div class="p-6 w-full mx-auto">
    <div
      v-if="step === 1"
      class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex mb-6"
    >
      <div class="flex-1 p-6">
        <h2 class="text-2xl font-semibold mb-4">Select Documents to Sign</h2>

        <div class="mb-4">
          <label class="inline-flex items-center space-x-2 cursor-pointer">
            <input
              v-model="toggleSelectAll"
              type="checkbox"
              class="form-checkbox h-4 w-4"
            />
            <span class="text-sm font-medium">Select All</span>
          </label>
        </div>

        <div class="max-h-60 overflow-auto divide-y divide-gray-200 dark:divide-gray-700 border rounded-lg">
          <div
            v-for="doc in documents"
            :key="doc.id"
            class="flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            <div class="flex items-center space-x-4">
              <input
                v-model="selectedDocIds"
                type="checkbox"
                :value="doc.id"
                class="form-checkbox h-4 w-4 text-blue-600"
              />
              <div class="text-sm">
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ doc.fileName || doc.id }}
                </div>
                <div class="text-gray-500 dark:text-slate-400 text-xs">Document ID: {{ doc.id }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 text-right">
          <button
            class="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!selectedDocIds.length"
            @click="goToSignatureStep"
          >
            Next: Provide Signature
          </button>
        </div>
      </div>
    </div>

    <div
      v-else-if="step === 2"
      class="flex flex-col space-y-4"
    >
      <h2 class="text-xl font-semibold text-center mb-2">Provide Your Signature</h2>

      <div class="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 space-y-4 md:space-y-0 md:space-x-6">
        <div class="md:w-1/2 space-y-3">
          <bulk-signature-toolbar v-model:current-tool="currentTool" />
          <bulk-signature-sign
            v-model:current-tool="currentTool"
            v-model:drag-offset="dragOffset"
            @use-signature="img => onSignatureSave(img)"
            @clear="onSignatureClear"
          />
          <bulk-signature-image
            v-model:current-tool="currentTool"
            v-model:drag-offset="dragOffset"
            @use-image="img => onSignatureSave(img)"
          />
          <bulk-signature-literal
            v-model:current-tool="currentTool"
            v-model:drag-offset="dragOffset"
            @use-literal="img => onSignatureSave(img)"
          />
          <bulk-signature-page
            v-model:current-tool="currentTool"
            @use-page="page => onSignatureSave(page)"
          />
        </div>

        <div class="signature-content-file bg-gray-200 rounded-lg w-full">
          <div
            ref="fileContainer"
            class="relative w-full h-full overflow-auto touch-pan-x touch-pan-y pt-3 px-2 pb-11 md:pt-6 md:px-8"
            @dragover.stop.prevent="handleDragOver"
            @dragleave.stop.prevent="cancelScrollToPerFrame"
          >
            <div>
              <div
                class="bg-gray-100 rounded-lg relative flex flex-col"
                style="min-height: 400px"
              >
                <div
                  ref="fileContainerRef"
                  class="overflow-auto flex-1 relative"
                  @click.prevent="
                    e => {
                      // Use click coords to place signature
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      onCanvasClick({ x, y });
                    }
                  "
                >
                  <signature-canvas-item
                    v-if="firstPdfUrl"
                    ref="signatureCanvasItems"
                    :src="firstPdfUrl"
                    class="origin-top-left absolute"
                    :file="currentPDF"
                    :file-zoom="fileZoom"
                    :file-scale="6.8"
                    :page="currentPage"
                    :canvas-scale="CANVAS_SCALE"
                    :password="configStore.filePassword"
                    is-drop
                    manual-reload
                    :close-svg-options="{ src: '' }"
                    @loaded="handleCanvasLoaded(currentPage)"
                    @reload="handleCanvasReload"
                    @pointer-down="handlePointerDown"
                    @pointer-move="handlePointerMove"
                    @pointer-up="handlePointerUp"
                    @selection-created="isActivatedFabric = true"
                    @selection-cleared="isActivatedFabric = false"
                  />
                </div>

                <bulk-signature-panel
                  v-model:file-zoom="fileZoom"
                  :is-activated-fabric="isActivatedFabric"
                  @copy-fabric="currentCanvasItem?.copyActiveFabric"
                  @delete-fabric="currentCanvasItem?.deleteActiveFabric"
                />

                <div class="p-2 flex justify-between items-center border-t mt-2">
                  <button
                    class="btn btn-secondary"
                    :disabled="currentPage === 1"
                    @click="prevPage"
                  >
                    Previous Page
                  </button>
                  <div>Page {{ currentPage }} of {{ totalPages }}</div>
                  <button
                    class="btn btn-secondary"
                    :disabled="currentPDF && currentPage >= currentPDF?.pages?.length"
                    @click="nextPage"
                  >
                    Next Page
                  </button>
                </div>

                <div class="p-2 flex justify-between items-center border-t mt-2">
                  <button
                    class="btn btn-secondary px-4 py-2 rounded disabled:opacity-50"
                    :disabled="currentDocIndex === 0"
                    @click="prevDoc"
                  >
                    ← Previous
                  </button>

                  <div class="text-center text-sm leading-tight">
                    <div class="font-semibold">Document {{ currentDocIndex + 1 }} of {{ documents.length }}</div>
                    <div class="text-gray-600">
                      {{ currentPDF?.fileName || 'Unknown Filename' }}
                    </div>
                  </div>

                  <button
                    class="btn btn-secondary px-4 py-2 rounded disabled:opacity-50"
                    :disabled="currentDocIndex >= documents.length - 1"
                    @click="nextDoc"
                  >
                    Next →
                  </button>
                </div>

                <div class="p-2 border-t flex justify-center">
                  <button
                    class="btn btn-primary"
                    :disabled="!signatureImage || !signaturePosition"
                    @click="finalizeAndMerge"
                  >
                    Finish & Upload Signatures
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else-if="step === 3"
      class="h-[calc(100%-90px)] w-full my-5 bg-white dark:bg-slate-900 rounded-lg p-5"
    >
      <div class="mx-auto w-full max-w-[274px] text-center sm:max-w-[555px]">
        <div class="mx-auto w-full max-w-[100px] sm:max-w-[160px]">
          <img
            src="@/assets/img/success.svg"
            alt="success"
            class="dark:hidden"
          />
        </div>

        <h3 class="mb-2 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
          All selected documents signed and sent successfully!
        </h3>

        <p class="mt-4 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          The following signed documents are now available:
        </p>

        <ul class="list-disc list-inside text-left mt-4 text-sm sm:text-base text-blue-700 dark:text-blue-400">
          <li
            v-for="(url, i) in signedUrls"
            :key="i"
            class="hover:underline mb-1"
          >
            <a
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Document {{ i + 1 }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  padding: 0.5em 1em;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
}
.btn-primary:disabled {
  background-color: #93c5fd;
  cursor: not-allowed;
}
.btn-secondary {
  background-color: #d1d5db;
  color: #111827;
}
.btn-secondary:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}
</style>
<!-- 
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { showToast } from '@/components/common';
import SignIcon from '@/components/SignIcon.vue';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { useSignatureStore } from '@/store';
import type { DragOffset } from '@/types/drag';
import type { SignatureTool } from '@/types/menu';
import SignatureDrawPopup from './BulkSignatureDrawPopup.vue';
import SignaturePopup from './BulkSignaturePopup.vue';

const emit = defineEmits(['useSignature']);
const currentTool = defineModel<SignatureTool | ''>('currentTool');
const dragOffset = defineModel<DragOffset>('dragOffset', { required: true });

const currentSelect = ref<string>('');
const isShowDrawPopup = ref(false);
const { signatureList } = storeToRefs(useSignatureStore());
const { t } = useI18n();
const { isShowWarnPopup, SignPopup, toggleWarnPopup } = useWarnPopup();

function useSignature() {
  if (currentSelect.value) {
    emit('useSignature', {
      image: currentSelect.value,
      timestamp: new Date().toISOString(),
    });
    close();
  }
}

function selectSignature(signature: string) {
  currentSelect.value = signature;
}

function deleteSignature() {
  useSignatureStore().deleteSignature(currentSelect.value);
  showToast(t('prompt.signature_delete_success'));
  toggleWarnPopup(false);
  currentSelect.value = '';
}

function toggleDrawPopup(isOpen: boolean) {
  isShowDrawPopup.value = isOpen;
}

function dragSignature(event: DragEvent) {
  const { src, offsetHeight, offsetWidth } = event.target as HTMLImageElement;
  const offsetX = event.offsetX / offsetWidth;
  const offsetY = event.offsetY / offsetHeight;

  event.dataTransfer?.setData('text/uri-list', src);
  event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
  dragOffset.value = { x: event.offsetX, y: event.offsetY, width: offsetWidth, height: offsetHeight };
}

function close() {
  currentTool.value = '';
}
</script>

<template>
  <signature-popup
    :is-show-popup="currentTool === 'sign'"
    :title="$t('signature_file')"
    :is-disabled="!currentSelect"
    @close="close"
    @use="useSignature"
  >
    <ul
      v-if="signatureList.length"
      class="signature-list"
    >
      <img
        src="@/assets/icon/ic_add_dark.svg"
        alt="add signature"
        width="60"
        height="60"
        class="iconScale mb-3"
        @click="toggleDrawPopup(true)"
      />
      <li
        v-for="signature in signatureList"
        :key="signature"
        :class="[
          'rounded-[20px] relative w-full flex justify-center cursor-pointer h-[98px]',
          currentSelect === signature ? 'bg-primary opacity-70' : 'bg-white',
        ]"
        @click="selectSignature(signature)"
      >
        <img
          :src="signature"
          alt="signature"
          class="object-contain rounded-[20px]"
          @dragstart="dragSignature"
        />
        <sign-icon
          v-show="currentSelect === signature"
          name="close_s"
          class="absolute top-1 right-1 w-8 h-8 text-gray-80"
          hover-color="hover:text-danger"
          @click="toggleWarnPopup(true)"
        />
      </li>
    </ul>

    <div
      v-else
      class="signature-list justify-center"
    >
      <img
        src="@/assets/icon/images.svg"
        alt="empty signature"
        width="80"
        height="80"
        class="iconScale mb-5"
        @click="toggleDrawPopup(true)"
      />
      <h5 class="text-secondary text-center">
        {{ $t('add_signature_file') }}
      </h5>
    </div>
  </signature-popup>

  <signature-draw-popup
    v-if="isShowDrawPopup"
    @close="toggleDrawPopup(false)"
  />

  <SignPopup
    v-if="isShowWarnPopup"
    :title="$t('warn')"
  >
    <p class="text-center">
      {{ $t('prompt.sure_delete_signature') }}
    </p>
    <div class="flex justify-between">
      <button
        class="btn btn-base"
        @click="toggleWarnPopup(false)"
      >
        {{ $t('not_yet') }}
      </button>
      <button
        class="btn btn-primary"
        @click="deleteSignature"
      >
        {{ $t('delete') }}
      </button>
    </div>
  </SignPopup>
</template>
-->
