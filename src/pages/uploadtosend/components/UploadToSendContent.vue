<!-- eslint-disable @typescript-eslint/no-shadow -->
<script setup lang="ts">
import { useFabric } from '@component-hook/pdf-canvas/vue';
// import emailjs from '@emailjs/browser';

import { getAuth } from 'firebase/auth';
import { doc, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { showToast } from '@/components/common';
// import SignIcon from '@/components/SignIcon.vue';
import { db, storage } from '@/firebase';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { onAfterRouteLeave } from '@/router';
import { useAuthStore, useConfigStore, usePdfStore } from '@/store';
import { sleep } from '@/utils/common';
import { checkFile } from '@/utils/reader';

const authStore = useAuthStore();
const auth = getAuth();
const uid = auth.currentUser?.uid;
const { user, loading } = storeToRefs(authStore);

const isUserLoggedIn = computed(() => !!user.value?.email);

const selectedFiles = ref<File[]>([]);
const recipients = ref<string[]>([]);
const uploadedDocs = ref<
  Array<{
    file: File;
    name: string;
    filePath: string;
    fileUrl: string;
    docId: string;
    uploadedAt: string;
    pages: number[];
  }>
>([]);

const docId = ref('');
const fileName = ref('');
const projectName = ref('');
// const isShowPen = ref(true);
const isShowPasswordPopup = ref(false);
const pages = ref(1);
const { t, locale } = useI18n();
const { createCanvas, deleteCanvas, loadFile } = useFabric({ id: 'canvas' });
const { isShowWarnPopup, SignPopup, goPage, toggleWarnPopup } = useWarnPopup();
const { toggleLoading, updateFilePassword } = useConfigStore();
// const UploadPassword = defineAsyncComponent(() => import('./UploadToSendPassword.vue'));
const regexp = /.pdf|.png|.jpg|.jpeg/;
let currentFile: File | null = null;
// const { currentPDF } = storeToRefs(usePdfStore());

const isSendModalOpen = ref(false);
const recipientEmail = ref('');
const recipientName = ref('');
// const signedPdfUrl = ref<string | null>(null);

// eslint-disable-next-line @typescript-eslint/no-shadow
async function uploadToFirebase(docId: string, file: File, userId: string, department: string) {
  const storage11 = getStorage();
  const firestore = getFirestore();

  const filePath = `uploads/${userId}/${docId}/${file.name}`;
  const fileRef = storageRef(storage11, filePath);
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

function dropFile(event: DragEvent) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }

  const { dataTransfer } = event;
  const files = dataTransfer?.files;

  readerFile(files);
}

async function uploadFile(event: Event) {
  if (!isUserLoggedIn.value) {
    showToast({ message: t('prompt.login_required'), type: 'error' });
    return;
  }

  const input = event.target as HTMLInputElement;
  if (input.files) {
    selectedFiles.value = Array.from(input.files);
    recipients.value = selectedFiles.value.map(() => '');
  }
  const { files } = input;

  await readerFile(files);
  input.value = '';
}

function readerFile(files?: FileList | null) {
  const file = checkFile(files, regexp);
  if (!file) return;
  currentFile = file;
  return renderFile();
}

async function renderFile() {
  try {
    const { setCurrentPDF } = usePdfStore();
    const { filePassword } = useConfigStore();

    if (!selectedFiles.value.length) {
      showToast({ message: 'No files selected', type: 'warning' });
      return;
    }

    toggleLoading({ isShow: true, title: 'upload_file', content: 'file_uploading' });
    await sleep();

    // Clear previously uploaded documents if you want fresh batch every time
    uploadedDocs.value = [];

    for (let i = 0; i < selectedFiles.value.length; i++) {
      const file = selectedFiles.value[i];
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const docId = uuidv4();

      const fileContent = await loadFile(file, filePassword);
      if (!fileContent) {
        showToast({ message: `Failed to load file ${file.name}`, type: 'error' });
        continue; // skip this file, continue next
      }

      // Adjust department or other metadata as needed
      const department = 'Engineering';

      const { filePath, fileUrl } = await uploadToFirebase(docId, file, uid!, department);

      // Store all uploaded docs in reactive array for UI management
      uploadedDocs.value.push({
        file,
        name: file.name,
        filePath,
        fileUrl,
        docId,
        uploadedAt: new Date().toISOString(),
        pages: Array.from({ length: fileContent.pages ?? 1 }, (_, i) => i),
      });

      pages.value = fileContent.pages;

      // Only set currentPDF if exactly one file uploaded (to avoid overwrite on multiple)
      if (selectedFiles.value.length === 1) {
        setCurrentPDF({
          ...(fileContent as any),
          file,
          name: file.name,
          filePath,
          fileUrl,
          docId,
          uploadedAt: new Date().toISOString(),
          pages: Array.from({ length: fileContent.pages ?? 1 }, (_, i) => i),
        });
      }

      fileName.value = file.name;
      projectName.value = file.name.replace(regexp, '');
    }

    showToast({ message: `${uploadedDocs.value.length} files uploaded successfully`, type: 'success' });
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

function remove() {
  fileName.value = '';
  usePdfStore().clearCurrentPDF();
  updateFilePassword('');
}

async function giveUpUpload() {
  if (docId.value && currentFile) {
    const storage1 = getStorage();
    const filePath = `uploads/${uid}/${docId.value}/${currentFile.name}`;
    try {
      await deleteObject(storageRef(storage1, filePath));
    } catch (error) {
      console.warn('Failed to delete uploaded file:', error);
    }
  }
  remove();
  // goBack();
}

function closeSendModal() {
  isSendModalOpen.value = false;
  recipientEmail.value = '';
  recipientName.value = '';
}

async function sendDocuments() {
  if (!uploadedDocs.value.length || !recipients.value.length) {
    showToast('No documents or recipients found!', 'error');
    return;
  }

  if (!hasAtLeastOneValidEmail.value) {
    showToast('Please enter at least one valid email.', 'error');
    return;
  }

  const invalidIndexes = recipients.value
    .map((email, i) => (email.trim().includes('@') ? null : i))
    .filter(i => i !== null);

  if (invalidIndexes.length > 0) {
    showToast(`Please enter valid email for file #${invalidIndexes[0]! + 1}`, 'error');
    return;
  }

  showToast('Sending documents...', 'info');

  try {
    for (const [i, document] of uploadedDocs.value.entries()) {
      const recipientEntry = recipients.value[i]?.trim();
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const docId = document.docId;

      if (!docId || !recipientEntry || !recipientEntry.includes('@')) {
        console.warn(`Skipping index ${i}: Missing or invalid data.`);
        continue;
      }

      const docRef = doc(db, 'contracts', docId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.warn(`Document not found for docId: ${docId}`);
        continue;
      }

      const docData = docSnap.data();
      const filePath = docData.filePath;
      const fileName = docData.fileName;

      const fileRef = storageRef(storage, filePath);
      const downloadURL = await getDownloadURL(fileRef);

      const response = await fetch(downloadURL);
      const blob = await response.blob();
      const base64 = await blobToBase64(blob); // optional attachment

      const recipientEmail = recipientEntry;
      const recipientName = recipientEmail.split('@')[0];

      // update Firestore contract metadata
      await updateDoc(docRef, {
        employeeName: recipientName,
        employeeEmail: recipientEmail,
        sendAt: new Date().toISOString(),
        status: 'pending',
      });

      const signLink = `https://esign.madello.com/public/${docId}`;

      const templateParams = {
        to_email: recipientEmail,
        to_name: recipientName,
        document_link: signLink,
        sender_name: 'E Sign',
        file_name: fileName,
        // file_attachment: base64, // optional
        document_url: downloadURL,
      };

      console.log(templateParams);
      // await emailjs.send('service_madello', 'template_bzrw36k', templateParams, 'vgo38fj40ywZbvn76');

      updateSentInfo(recipientName, recipientEmail); // optional custom handler
      console.log(`Document sent to: ${recipientEmail}`);
    }

    showToast('All documents sent successfully.', 'success');
    closeSendModal();
    goPage('send', { docId });
  } catch (error) {
    console.error('Error sending documents:', error);
    showToast('Some documents failed to send.', 'error');
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result as string);
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    reader.onerror = reject;
  });
}

const sentInfo = ref({
  name: '',
  email: '',
  timestamp: '',
});

function updateSentInfo(name: string, email: string) {
  sentInfo.value = {
    name,
    email,
    timestamp: new Date().toISOString(),
  };
}

function removeFile(index: number) {
  uploadedDocs.value.splice(index, 1);
  recipients.value.splice(index, 1);
}

const hasAtLeastOneValidEmail = computed(() => recipients.value.some(email => email.trim() && email.includes('@')));

function copyFirstEmailToAll() {
  const firstEmail = recipients.value[0]?.trim();
  if (firstEmail && firstEmail.includes('@')) {
    recipients.value = recipients.value.map(() => firstEmail);
    showToast({ message: 'Email copied to all documents', type: 'info' });
  } else {
    showToast({ message: 'First email is invalid', type: 'error' });
  }
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
      v-show="uploadedDocs.length > 0"
      class="upload-content-box h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg"
    >
      <!-- Grid wrapper for 3 columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <!-- Single File Card -->
        <div
          v-for="(document, index) in uploadedDocs"
          :key="document.docId"
          class="p-4 border rounded bg-white shadow flex flex-col gap-4"
        >
          <!-- Header: File name and remove button -->
          <div class="flex justify-between items-center">
            <p class="font-medium truncate max-w-[80%]">{{ document.file.name }}</p>
            <sign-icon
              name="close"
              class="absolute -right-8 -top-2 cursor-pointer w-7 h-7 md:w-9 md:h-9 md:-right-12 md:-top-4"
              @click="removeFile(index)"
            />
            <button
              class="text-red-600 font-bold hover:underline"
              aria-label="Remove file"
              @click="removeFile(index)"
            >
              &times;
            </button>
          </div>

          <!-- Editable file name input -->
          <label class="w-full max-w-md">
            <input
              v-model="document.name"
              type="text"
              class="input w-full"
              placeholder="Edit file name"
            />
          </label>

          <!-- Recipient email input -->
          <input
            v-model="recipients[index]"
            type="text"
            placeholder="Recipient email(s), comma separated"
            class="w-full p-2 border rounded"
          />
        </div>
      </div>

      <!-- Copy Email Button -->
      <div class="flex justify-end px-4 pb-2">
        <button
          v-if="recipients.length > 1 && recipients[0]"
          class="text-sm text-blue-600 hover:underline"
          @click="copyFirstEmailToAll"
        >
          Copy first email to all
        </button>
      </div>

      <!-- Send Button -->
      <div class="flex justify-center p-4">
        <button
          :disabled="!hasAtLeastOneValidEmail"
          class="btn btn-primary inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 py-2 px-3"
          @click="sendDocuments"
        >
          Send document
        </button>
      </div>
    </div>

    <!-- Original empty state / drag-drop area -->
    <div
      v-if="uploadedDocs.length === 0"
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
          <h5 class="mb-3 hidden md:block">{{ $t('prompt.or_drag_file') }}</h5>
          <p class="px-4 text-center">
            {{ $t('prompt.support_filetype', { type: locale === 'en-US' ? 'PDF' : 'PDF' }) }}
          </p>
        </div>
      </div>
    </div>

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
