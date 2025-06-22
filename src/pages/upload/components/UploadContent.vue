<script setup lang="ts">
import { useFabric } from '@component-hook/pdf-canvas/vue';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { useRoute } from 'vue-router';
import { showToast } from '@/components/common';
import SignIcon from '@/components/SignIcon.vue';
import SignStepBtn from '@/components/SignStepBtn.vue';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { onAfterRouteLeave } from '@/router';
import { useAuthStore, useConfigStore, usePdfStore } from '@/store';
import { sleep } from '@/utils/common';
import { checkFile } from '@/utils/reader';

// const route = useRoute();
const authStore = useAuthStore();
const auth = getAuth();
// const isPublicRoute = ref<boolean>(!!(route.params.public && route.params.docId));
const uid = auth.currentUser?.uid;
const { user, loading } = storeToRefs(authStore);

const isUserLoggedIn = computed(() => !!user.value?.email);

const docId = ref('');
const fileName = ref('');
const projectName = ref('');
const isShowPen = ref(true);
const isShowPasswordPopup = ref(false);
const pages = ref(1);
const { t, locale } = useI18n();
const { createCanvas, deleteCanvas, loadFile } = useFabric({ id: 'canvas' });
const { isShowWarnPopup, SignPopup, goBack, goPage, toggleWarnPopup } = useWarnPopup();
const { toggleLoading, updateFilePassword } = useConfigStore();
const UploadPassword = defineAsyncComponent(() => import('./UploadPassword.vue'));
const regexp = /.pdf|.png|.jpg|.jpeg/;
let currentFile: File | null = null;

const isNextDisabled = computed(() => !fileName.value);
// eslint-disable-next-line @typescript-eslint/no-shadow
async function uploadToFirebase(docId: string, file: File, userId: string, department: string) {
  const storage = getStorage();
  const firestore = getFirestore();

  const filePath = `uploads/${userId}/${docId}/${file.name}`;
  const fileRef = storageRef(storage, filePath);
  const snapshot = await uploadBytes(fileRef, file);
  const fileUrl = await getDownloadURL(snapshot.ref);

  // await uploadBytes(fileRef, fileBlob);

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
  const { files } = target;

  await readerFile(files);
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
  currentFile = file;
  return renderFile(file);
}

async function renderFile(file: File) {
  try {
    const { setCurrentPDF } = usePdfStore();
    const { filePassword } = useConfigStore();

    toggleLoading({ isShow: true, title: 'upload_file', content: 'file_uploading' });
    await sleep();

    const fileContent = await loadFile(file, filePassword);
    if (!fileContent) throw new Error('File content is empty');

    const department = 'Engineering'; // You can make this dynamic later
    docId.value = uuidv4(); // generate it once here
    const { filePath, fileUrl } = await uploadToFirebase(docId.value, file, uid!, department);

    setCurrentPDF({
      ...(fileContent as any),
      file,
      name: file.name,
      filePath,
      fileUrl,
      docId: docId.value,
      uploadedAt: new Date().toISOString(), // use string
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

function closePasswordPopup(isEnterPassword = false) {
  isShowPasswordPopup.value = false;
  if (!isEnterPassword || !currentFile) return;
  renderFile(currentFile);
}

function remove() {
  fileName.value = '';
  usePdfStore().clearCurrentPDF();
  updateFilePassword('');
}

async function giveUpUpload() {
  if (docId.value && currentFile) {
    const storage = getStorage();
    const filePath = `uploads/${uid}/${docId.value}/${currentFile.name}`;
    try {
      await deleteObject(storageRef(storage, filePath));
    } catch (error) {
      console.warn('Failed to delete uploaded file:', error);
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

onMounted(createCanvas);
onAfterRouteLeave(deleteCanvas);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div
    v-else-if="isUserLoggedIn"
    class="upload-content content"
  >
    <h5 class="title text-center">
      {{ $t('upload_file') }}
    </h5>
    <div
      v-show="fileName"
      class="upload-content-box h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
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
        class="upload-content-box justify-center h-full w-full"
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

    <sign-step-btn
      :is-next-disabled="isNextDisabled"
      :is-public="false"
      @next-step="goPage('signature', { params: { docId } })"
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

    <upload-password
      v-if="isShowPasswordPopup"
      @close-password="closePasswordPopup"
    />
  </div>
  <div
    v-else
    class="text-center text-red-600"
  >
    {{ $t('prompt.login_required') }}
  </div>
</template>

<style lang="css" scoped>
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
</style>
