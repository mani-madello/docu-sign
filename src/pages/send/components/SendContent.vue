<script setup lang="ts">
import { doc, getDoc } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { db } from '@/firebase';

const router = useRouter();
const route = useRoute();

const employeeName = ref('');
const employeeEmail = ref('');
const sentAt = ref('');
const docReferenceId = ref('');
const fileName = ref('');

onMounted(async () => {
  const docId = route.params.docId;
  if (docId) {
    const docRef = doc(db, 'contracts', docId as string);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      employeeName.value = data.employeeName;
      employeeEmail.value = data.employeeEmail || '';
      sentAt.value = data.createdAt || '';
      docReferenceId.value = data.docId;
      fileName.value = data.fileName || '';
    }
  }
});

const sentTime = computed(() => {
  const date = new Date(sentAt.value || Date.now());
  return date.toLocaleString();
});

function returnHome() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg p-5">
    <div class="mx-auto w-full max-w-[274px] text-center sm:max-w-[555px]">
      <div class="mx-auto w-full max-w-[100px] text-center sm:max-w-[160px]">
        <img
          src="@/assets/img/success.svg"
          alt="success"
          class="dark:hidden"
        />
      </div>
      <h3 class="mb-2 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">BINGO !</h3>
      <p class="mt-6 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
        Awesome! document has been sent successfully.
      </p>
      <p class="mb-2">
        You’ve sent the document to:
        <span class="font-semibold">{{ employeeName }}</span>
        (<span class="text-blue-600">{{ employeeEmail }}</span
        >)
      </p>
      <p class="mb-2">
        File name Reference Id: <strong>{{ fileName }}</strong>
      </p>
      <p class="mb-2">
        Document Reference Id: <strong>{{ docReferenceId }}</strong>
      </p>
      <p class="mb-2">
        Sent on: <strong>{{ sentTime }}</strong>
      </p>
      <button
        class="btn inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
        type="submit"
        @click="returnHome"
      >
        <span class="px-2">{{ $t('return_home') }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.send-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
