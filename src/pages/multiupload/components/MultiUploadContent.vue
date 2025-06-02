<!-- eslint-disable @typescript-eslint/no-shadow -->
<script setup lang="ts">
import { useFabric } from '@component-hook/pdf-canvas/vue';
import { getAuth } from 'firebase/auth';
import { collection, doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { showToast } from '@/components/common';
import SignIcon from '@/components/SignIcon.vue';
import SignStepBtn from '@/components/SignStepBtn.vue';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { onAfterRouteLeave } from '@/router';
import { useAuthStore, useConfigStore, usePdfStore } from '@/store';
import { UploadedPDF } from '@/store/pdf';
import { sleep } from '@/utils/common';
// import { checkFile } from '@/utils/reader';

interface UploadedFile extends File {
  uploadedAt: string;
  docId: string;
  filePath: string;
  fileUrl: string;
}

const auth = getAuth();
const uid = auth.currentUser?.uid;
const authStore = useAuthStore();
const { user, loading } = storeToRefs(authStore);

const isUserLoggedIn = computed(() => !!user.value?.email);

const docId = ref('');
const fileName = ref('');
const projectName = ref('');
const isShowPen = ref(true);
// const isShowPasswordPopup = ref(false);
const pages = ref(1);
const { t, locale } = useI18n();
const { createCanvas, deleteCanvas, loadFile } = useFabric({ id: 'canvas' });
const { isShowWarnPopup, SignPopup, goBack, goPage, toggleWarnPopup } = useWarnPopup();
const { toggleLoading, updateFilePassword } = useConfigStore();
// const UploadPassword = defineAsyncComponent(() => import('./UploadPassword.vue'));
const regexp = /.pdf|.png|.jpg|.jpeg/;

const files = ref<UploadedFile[]>([]);
const uploadResults = ref<{ name: string; docId: string }[]>([]);
const uploading = ref(false);
const progress = ref(0);

const isNextDisabled = computed(() => !fileName.value);

async function uploadToFirebase(
  uid: string,
  file: File,
  department: string,
): Promise<{
  filePath: string;
  fileUrl: string;
  docId: string;
}> {
  const storage = getStorage();
  const db = getFirestore();
  const docId = uuidv4();
  const filePath = `uploads/${uid}/${docId}/${file.name}`;
  const fileRef = storageRef(storage, filePath);

  await uploadBytes(fileRef, file);
  const fileUrl = await getDownloadURL(fileRef);

  const docRef = doc(collection(db, 'contracts'), docId);
  await setDoc(docRef, {
    docId,
    createdBy: uid,
    employeeEmail: '',
    employeeName: '',
    assignedTo: user.value?.email ?? '',
    fileName: file.name,
    filePath,
    fileUrl,
    department,
    uploadedBy: uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    signedDate: serverTimestamp(),
    status: 'pending',
    signedByHR: false,
    signedByEmployee: false,
    signedAt: null,
  });

  return { filePath, fileUrl, docId };
}

async function handleFileChange(event: Event) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }

  const input = event.target as HTMLInputElement;
  const selectedFiles = input.files;
  if (!selectedFiles) return;

  for (const file of Array.from(selectedFiles)) {
    if (regexp.test(file.name.toLowerCase())) {
      const uploadedFile = {
        ...file,
        uploadedAt: '',
        docId: '',
        filePath: '',
        fileUrl: '',
      };
      files.value.push(uploadedFile);
    }
  }

  input.value = ''; // reset file input
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

function readerFile(fileList?: FileList | null) {
  if (!fileList) return;

  const selectedFiles = Array.from(fileList).filter(file => regexp.test(file.name));
  if (!selectedFiles.length) return;

  // Prepare placeholder UploadedFile objects
  const placeholderFiles: UploadedFile[] = selectedFiles.map(file => ({
    ...file,
    uploadedAt: '', // Placeholder until you get real metadata
    docId: '', // Will be updated in renderFiles
    filePath: '',
    fileUrl: '',
  }));

  files.value = placeholderFiles;
  uploading.value = true;

  renderFiles(placeholderFiles); // Now passes the correct type
}

async function renderFiles(fileList: File[]) {
  const auth = getAuth();
  const uid = auth.currentUser?.uid;
  if (!uid) {
    showToast({ message: 'User not authenticated', type: 'error' });
    return;
  }

  const { setCurrentPDF } = usePdfStore();
  const { filePassword } = useConfigStore();
  const department = 'Engineering';

  toggleLoading({ isShow: true, title: 'upload_file', content: 'file_uploading' });
  await sleep();

  try {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      try {
        const fileContent = await loadFile(file, filePassword);
        if (!fileContent) throw new Error('File content is empty');

        const uploadResult = await uploadToFirebase(uid, file, department);
        const { filePath, fileUrl, docId: uploadedDocId } = uploadResult;

        setCurrentPDF({
          ...fileContent,
          file,
          name: file.name,
          filePath,
          fileUrl,
          docId: uploadedDocId,
          uploadedAt: '',
        } as UploadedPDF);

        uploadResults.value.push({ name: file.name, docId: uploadedDocId });
      } catch (error) {
        console.warn(`Error uploading ${file.name}:`, error);
      }

      progress.value = Math.round(((i + 1) / fileList.length) * 100);
    }

    showToast(t('prompt.file_upload_success'));
  } catch (error) {
    showToast({ message: t('prompt.file_upload_failed'), type: 'error' });
    console.error('Batch upload error:', error);
  } finally {
    uploading.value = false;
    toggleLoading({ isShow: false });
  }
}

function remove() {
  fileName.value = '';
  usePdfStore().clearCurrentPDF();
  updateFilePassword('');
}

async function giveUpUpload() {
  if (docId.value && files) {
    const storage = getStorage();
    for (const file of files.value) {
      const filePath = `uploads/${uid}/${docId.value}/${file.name}`;
      try {
        await deleteObject(storageRef(storage, filePath));
      } catch (error) {
        console.warn('Failed to delete uploaded file:', error);
      }
    }
  }
  remove();
  goBack();
}

function focus() {
  isShowPen.value = false;
}

function blur() {
  isShowPen.value = true;
  usePdfStore().setCurrentPDFName(projectName.value);
}

function removeFile(index: number) {
  files.value.splice(index, 1);
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
    class="multiupload-content content"
  >
    <h5 class="title text-center">
      {{ $t('upload_file') }}
    </h5>
    <div
      v-show="fileName"
      class="multiupload-content-box h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
    >
      <div class="flex flex-col gap-2 items-center w-full h-fit">
        <div class="relative h-fit">
          <sign-icon
            name="close"
            class="absolute -right-8 -top-2 cursor-pointer w-7 h-7 md:w-9 md:h-9 md:-right-12 md:-top-4"
            @click="remove"
          />
          <canvas
            id="canvas"
            class="border-2 border-gray-20 w-full"
          ></canvas>
        </div>
        <h5 class="w-full text-ellipsis overflow-hidden whitespace-nowrap text-center">
          {{ fileName }}
        </h5>
        <p>{{ $t('page', pages) }}</p>
      </div>

      <div class="w-full flex flex-col gap-4 items-center">
        <p>{{ $t('project_name') }}</p>
        <label class="w-[90%] relative max-w-[400px]">
          <input
            v-model.trim="projectName"
            type="text"
            class="input"
            @focus="focus"
            @blur="blur"
          />
          <img
            src="@/assets/icon/ic_edit.svg"
            alt="edit icon"
            :class="[
              'absolute right-1 top-[2px] w-9 h-9 transition-all pointer-events-none',
              isShowPen ? 'opacity-100' : 'opacity-0',
            ]"
          />
        </label>
      </div>
    </div>

    <div
      v-if="!fileName"
      class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
    >
      <div
        class="multiupload-content-box justify-center h-full w-full"
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
                accept="application/pdf, .jpg, .png"
                class="opacity-0 absolute w-[131px] h-[41px] cursor-pointer"
                @change="handleFileChange"
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
        <div
          v-if="files.length"
          class="my-4"
        >
          <h5>{{ $t('selected_files') }}</h5>
          <ul class="w-full space-y-4 px-4">
            <li
              v-for="(file, index) in files"
              :key="index"
              class="flex items-center justify-between gap-4 bg-gray-800 text-white p-4 rounded-lg"
            >
              <!-- File Name -->
              <p class="flex-1 truncate">{{ file.name }}</p>

              <!-- Uploaded Time -->
              <p class="w-48 text-right text-sm text-gray-300">
                {{ file?.uploadedAt ? formatDate(file?.uploadedAt) : 'N/A' }}
              </p>

              <!-- Trash Icon -->
              <button
                title="Remove"
                @click="removeFile(index)"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-red-400 hover:text-red-600 transition-colors"
                >
                  <use href="#icon-ic_trash" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <sign-step-btn
      :is-next-disabled="isNextDisabled"
      @next-step="goPage('signature')"
      @prev-step="toggleWarnPopup(true)"
    />
    <sign-popup
      v-if="isShowWarnPopup"
      :title="$t('warn')"
    >
      <p class="text-center">
        {{ $t('prompt.give_up_edit') }}
      </p>
      <div class="flex justify-between md:justify-around">
        <button
          class="btn btn-base"
          @click="toggleWarnPopup(false)"
        >
          {{ $t('not_yet') }}
        </button>
        <button
          class="btn btn-primary"
          @click="giveUpUpload"
        >
          {{ $t('give_up') }}
        </button>
      </div>
    </sign-popup>
  </div>
  <div
    v-else
    class="text-center text-red-600"
  >
    {{ $t('prompt.login_required') }}
  </div>
</template>

<style lang="css" scoped>
.multiupload-content-box {
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .multiupload-content-box {
    padding: 48px 10px;
  }
}
</style>
