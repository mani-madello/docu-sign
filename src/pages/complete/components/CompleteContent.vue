<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { storeToRefs } from 'pinia';
import { computed, defineAsyncComponent, onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { showToast } from '@/components/common';
import SignIcon from '@/components/SignIcon.vue';
import { storage } from '@/firebase';
import { useWarnPopup } from '@/hooks/use-warn-popup';

import { useConfigStore, usePdfStore } from '@/store';

type WarnType = 'archive' | 'trash';

const store = usePdfStore();
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
function openWarnPopup(type: WarnType) {
  warnType.value = type;
  toggleWarnPopup(true);
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
  goPage('home');
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
}

function sendDocument() {
  if (!recipientEmail.value || !recipientEmail.value.includes('@')) {
    showToast(t('prompt.invalid_email'), 'error');
    return;
  }

  console.log(recipientEmail.value);
  showToast(t('prompt.document_sent_success', { email: recipientEmail.value }));
  store.setSentInfo({
    name: recipientEmail.value.split('@')[0],
    email: recipientEmail.value,
    timestamp: Date.now(),
  });

  closeSendModal();
  goPage('send');

  const templateParams = {
    to_email: recipientEmail.value,
    to_name: recipientEmail.value.split('@')[0], // optional name
    // eslint-disable-next-line sonarjs/no-clear-text-protocols
    document_link: currentPDF.value.url || 'http://52.200.13.223/',
    sender_name: 'Maxign - E Sign',
  };

  emailjs
    .send(
      'service_madello', // replace with your actual service ID
      'template_n5cx46m', // replace with your actual template ID
      templateParams,
      'EIMwyDV3CvJ5_vTtk', // replace with your public key from EmailJS
    )
    .then(() => {
      updateSentInfo(templateParams.to_name, templateParams.to_email); // ✅ Track send info
      showToast(t('prompt.document_sent_success', { email: recipientEmail.value }));
      closeSendModal();
      goPage('send');
    })

    .catch(error => {
      console.error('EmailJS error:', error);
      showToast(t('prompt.email_send_failed'), 'error');
    });
}

// async function sendDocument() {
//   if (!recipientEmail.value || !recipientEmail.value.includes('@')) {
//     showToast(t('prompt.invalid_email'), 'error');
//     return;
//   }

//   const file = currentPDF.value.file;
//   if (!file) {
//     showToast('No document file found to send!', 'error');
//     return;
//   }

//   showToast('Uploading document...', 'info');

//   try {
//     // Step 1: Upload to Firebase
//     const firebaseFileRef = storageRef(storage, `documents/${Date.now()}-${file.name}`);
//     await uploadBytes(firebaseFileRef, file);
//     const downloadURL = await getDownloadURL(firebaseFileRef);

//     // Step 2: Send Email via EmailJS
//     const templateParams = {
//       to_email: recipientEmail.value,
//       to_name: recipientEmail.value.split('@')[0],
//       document_link: downloadURL,
//       sender_name: 'Maxign - E Sign',
//     };

//     await emailjs.send('service_madello', 'template_n5cx46m', templateParams, 'EIMwyDV3CvJ5_vTtk');

//     updateSentInfo(templateParams.to_name, templateParams.to_email);
//     showToast(t('prompt.document_sent_success', { email: recipientEmail.value }));
//     closeSendModal();
//     goPage('send');
//   } catch (error) {
//     console.error('Error sending document:', error);
//     showToast(t('prompt.email_send_failed'), 'error');
//   }
// }

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
      <li>
        <sign-icon
          name="download"
          class="w-9 h-9"
          @click="toggleEncryptPopup(true)"
        />
      </li>
      <li>
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
      </li>
      <li>
        <sign-icon
          name="send"
          class="w-9 h-9"
          @click="openSendModal"
        />
      </li>
    </ul>

    <div class="complete-content-file bg-gray-200 rounded-lg">
      <div class="w-fit h-fit py-5 px-3 scale-150 origin-top-left flex flex-col gap-5 md:scale-100 md:py-10 md:px-14">
        <template
          v-for="canvas in currentPDF.canvas"
          :key="canvas"
        >
          <img
            :src="canvas"
            alt="PDF document"
          />
        </template>
      </div>
    </div>

    <button
      class="btn btn-primary md:absolute md:left-10 md:top-7"
      :disabled="false"
      @click="goPage('home')"
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
