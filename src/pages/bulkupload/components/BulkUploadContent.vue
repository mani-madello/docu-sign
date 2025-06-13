<script setup lang="ts">
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

  const selectedDocIds = selectedFiles.map(f => f.docId);

  goPage('bulksignature', {
    params: { docIds: selectedDocIds }, // Must be an array
  });
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
          <!-- Flex Row: File Info + Checkbox + Trash -->
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

          <!-- Show signer fields ONLY if this file is selected -->
          <div v-if="selectedFileIndexes.includes(index)">
            <!-- Signer rows -->
            <div
              v-for="(signer2, sIndex) in signerInfoMap[file.docId] || []"
              :key="sIndex"
              class="flex flex-wrap md:flex-nowrap gap-4 items-center p-4"
            >
              <input
                v-model="signer2.name"
                type="text"
                required
                placeholder="Signer Name"
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <input
                v-model="signer2.email"
                type="email"
                required
                placeholder="Signer Email"
                class="flex-1 min-w-[180px] px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <input
                v-model.number="signer2.order"
                type="number"
                placeholder="Order to Sign"
                class="w-32 px-3 py-2 h-12 border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700"
              />
              <button
                type="button"
                class="w-12 h-12 flex items-center justify-center text-white bg-red-600 rounded hover:bg-red-700 transition"
                title="Remove signer"
                @click="removeSigner(file.docId, sIndex)"
              >
                ✕
              </button>
            </div>

            <!-- Add signer button: ONLY once per document -->
            <div class="pl-4">
              <button
                class="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                @click="addSigner(file.docId)"
              >
                + Add another signer
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Uploaded Files List -->

      <div class="mt-6 space-y-4">
        <div class="flex justify-center">
          <button
            class="flex justify-center items-center py-2 px-4 border rounded-sm border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-colors"
            :disabled="!selectedFileIndexes.length"
            @click="proceedToSignature"
          >
            Next: Sign Selected Files
          </button>
        </div>
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
</style>
