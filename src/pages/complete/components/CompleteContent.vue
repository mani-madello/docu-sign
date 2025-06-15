<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { computed, defineAsyncComponent, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { showToast } from '@/components/common';
import SignIcon from '@/components/SignIcon.vue';
import { db, storage } from '@/firebase';
import { useWarnPopup } from '@/hooks/use-warn-popup';
import { useConfigStore, usePdfStore } from '@/store';

type WarnType = 'archive' | 'trash';

const route = useRoute();
const docId = computed(() => route.params.docId as string);
const warnType = ref<WarnType>('archive');
const iShowEncryptPopup = ref(false);
const { currentPDF } = storeToRefs(usePdfStore());
const { t } = useI18n();
const { isShowWarnPopup, SignPopup, goPage, toggleWarnPopup } = useWarnPopup();
const SignEncryption = defineAsyncComponent(() => import('@/components/SignEncryption.vue'));
const warnContent = computed(() => {
  const contentMap = {
    archive: 'prompt.sure_archive_file',
    trash: 'prompt.sure_delete_file',
  };
  return contentMap[warnType.value];
});
const isSendModalOpen = ref(false);
const recipientEmail = ref('');
const recipientName = ref('');
const signedPdfUrl = ref<string | null>(null);

// function openWarnPopup(type: WarnType) {
//   warnType.value = type;
//   toggleWarnPopup(true);
// }

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

function warnConfirm() {
  const { addArchive, addTrash } = usePdfStore();
  const isArchive = warnType.value === 'archive';

  if (isArchive) {
    addArchive(currentPDF.value);
  } else {
    addTrash(currentPDF.value);
  }
  showToast(t(isArchive ? 'prompt.file_archived_success' : 'prompt.file_delete_success'));
  toggleWarnPopup(false);

  if (isArchive) return;
  goPage('start');
}

function toggleEncryptPopup(isShow: boolean) {
  iShowEncryptPopup.value = isShow;
}

function openSendModal() {
  isSendModalOpen.value = true;
}

function closeSendModal() {
  isSendModalOpen.value = false;
  recipientEmail.value = '';
  recipientName.value = '';
}

async function sendDocument() {
  if (!recipientName.value || !recipientEmail.value || !recipientEmail.value.includes('@')) {
    showToast(t('prompt.invalid_email'), 'error');
    return;
  }

  const file = currentPDF.value.name;
  if (!file) {
    showToast('No document file found to send!', 'error');
    return;
  }

  showToast('Uploading document...', 'info');

  try {
    const docRef = doc(db, 'contracts', docId.value);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error('Document not found');

    const data = docSnap.data();
    const filePath = data.filePath; // e.g., 'uploads/userId/docId/filename.pdf'
    const fileName = data.fileName;

    // Step 2: Get download URL
    const fileRef = storageRef(storage, filePath);
    const downloadURL = await getDownloadURL(fileRef);
    console.log(downloadURL);

    // Step 3: Fetch and convert to base64
    const response = await fetch(downloadURL);
    const blob = await response.blob();
    const base64 = await blobToBase64(blob);
    console.log(base64);

    await updateDoc(doc(db, 'contracts', docId.value), {
      employeeName: recipientName.value,
      employeeEmail: recipientEmail.value,
      sendAt: new Date().toISOString(),
      status: 'pending',
    });
    const publicroute = 'public';

    // const signLink = `http://localhost:8080/${publicroute}/${docId.value}`;
    const signLink = `https://esign.madello.com/${publicroute}/${docId.value}`;

    const templateParams = {
      to_email: recipientEmail.value,
      to_name: recipientName.value,
      document_link: signLink,
      sender_name: 'E Sign',
      file_name: fileName,
      // file_attachment: base64,
      document_url: downloadURL,
    };

    console.log(templateParams);
    await emailjs.send('service_madello', 'template_bzrw36k', templateParams, 'vgo38fj40ywZbvn76');

    updateSentInfo(recipientName.value, recipientEmail.value);
    showToast(t('prompt.document_sent_success', { email: recipientEmail.value }));
    closeSendModal();
    goPage('send');
  } catch (error) {
    console.error('Error sending document:', error);
    showToast(t('prompt.email_send_failed'), 'error');
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

async function fetchSignedUrl(docuId: string) {
  try {
    const contractRef = doc(db, 'contracts', docuId);
    const contractSnap = await getDoc(contractRef);

    if (!contractSnap.exists()) {
      throw new Error('Document not found');
    }

    const data = contractSnap.data();
    if (!data.signedUrl) {
      throw new Error('Signed URL missing');
    }
    signedPdfUrl.value = data.signedUrl;
  } catch (error) {
    console.error('Error loading signed PDF:', error);
    showToast(t('prompt.error_loading_document'), 'error');
  }
}

watch(
  currentPDF,
  pdf => {
    if (pdf?.docId) {
      fetchSignedUrl(pdf.docId); // this is correct
    }
  },
  { immediate: true },
);

onBeforeMount(() => useConfigStore().updateFilePassword(''));
onBeforeUnmount(() => {
  usePdfStore().clearCurrentPDF();
});
</script>

<template>
  <div class="complete-content content">
    <h5 class="title text-center w-full">
      {{ $t('sign_completed') }}
    </h5>

    <ul class="toolbar md:absolute md:right-10 md:top-5">
      <!-- <li>
        <sign-icon
          name="download"
          class="w-9 h-9"
          @click="toggleEncryptPopup(true)"
        />
      </li> -->
      <!-- <li>
        <sign-icon
          name="archive"
          class="w-9 h-9"
          @click="openWarnPopup('archive')"
        />
      </li>
      <li>
        <sign-icon
          name="trash"
          class="w-9 h-9"
          @click="openWarnPopup('trash')"
        />
      </li> -->
      <li>
        <!-- <sign-icon
          name="send"
          class="w-9 h-9"
          @click="openSendModal"
        /> -->
        <button
          class="btn btn-primary inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
          @click="openSendModal"
        >
          <span class="text-4xl font-thin"
            ><sign-icon
              name="send"
              class="w-9 h-9" /></span
          >Send document
        </button>
      </li>
    </ul>

    <div class="complete-content-file bg-gray-200 rounded-lg">
      <div class="scale-150 origin-top-left flex flex-col gap-5 md:scale-100">
        <template v-if="signedPdfUrl">
          <iframe
            :src="signedPdfUrl"
            type="application/pdf"
            width="100%"
            height="800px"
            class="border rounded-lg"
          ></iframe>
        </template>
        <template v-else-if="currentPDF.canvas?.length">
          <template
            v-for="canvas in currentPDF.canvas"
            :key="canvas"
          >
            <img
              :src="canvas"
              alt="PDF page"
            />
          </template>
        </template>
        <template v-else>
          <p>{{ $t('loading') }}...</p>
        </template>
      </div>
    </div>

    <button
      class="btn btn-primary md:absolute md:left-10 md:top-7"
      :disabled="false"
      @click="goPage('start')"
    >
      <span class="text-4xl font-thin">←</span>{{ $t('return_home') }}
    </button>

    <sign-popup
      v-if="isShowWarnPopup"
      :title="$t('warn')"
    >
      <p class="text-center">
        {{ $t(warnContent) }}
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
          @click="warnConfirm"
        >
          {{ $t('confirm') }}
        </button>
      </div>
    </sign-popup>

    <sign-encryption
      v-if="iShowEncryptPopup"
      :file="currentPDF"
      @close-encrypt-popup="toggleEncryptPopup(false)"
    />

    <sign-popup
      v-if="isSendModalOpen"
      :title="$t('send_document')"
    >
      <div class="flex flex-col gap-4 p-4">
        <label class="font-semibold">{{ $t('enter_name') }}</label>
        <input
          v-model="recipientName"
          type="email"
          placeholder="John Doe"
          class="input input-bordered w-full"
        />
        <label class="font-semibold">{{ $t('enter_email_address') }}</label>
        <input
          v-model="recipientEmail"
          type="email"
          placeholder="name@example.com"
          class="input input-bordered w-full"
        />
        <div class="flex justify-end gap-4 mt-4">
          <button
            class="btn btn-base"
            @click="closeSendModal"
          >
            {{ $t('cancel') }}
          </button>
          <button
            class="btn btn-primary"
            @click="sendDocument"
          >
            {{ $t('send') }}
          </button>
        </div>
      </div>
    </sign-popup>
  </div>
</template>

<style lang="css" scoped>
.complete-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.complete-content-file {
  margin-bottom: 20px;
  overflow: auto;
  width: calc(100% - 20px);
  height: calc(100% - 178px);
  max-width: 842px;
}

@media (min-width: 768px) {
  .complete-content-file {
    margin-top: 24px;
    height: calc(100% - 110px);
  }
}
</style>
