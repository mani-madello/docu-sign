<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePdfStore } from '@/store';

const router = useRouter();
const store = usePdfStore();
// const currentPDF = computed(() => store.currentPDF);
const { currentPDF, sentInfo } = storeToRefs(usePdfStore()); // Add `sentInfo` in your store

console.log(currentPDF);
console.log(sentInfo);
console.log(currentPDF);

const sentTime = computed(() => {
  const date = new Date(sentInfo.value?.timestamp || Date.now());
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
      <h1 class="mb-2 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">SUCCESS !</h1>
      <p class="mt-6 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
        Awesome! your document has been sent successfully.
      </p>
      <p class="mb-2">
        You’ve sent the document to:
        <span class="font-semibold">{{ sentInfo?.name || 'Recipient' }}</span>
        (<span class="text-blue-600">{{ sentInfo?.email }}</span
        >)
      </p>
      <p class="mb-2">
        File Name: <strong>{{ currentPDF?.name || 'Untitled.pdf' }}</strong>
      </p>
      <p class="mb-2">
        Sent on: <strong>{{ sentTime }}</strong>
      </p>
      <p class="mb-4">
        Document URL:
        <a
          :href="currentPDF?.url"
          target="_blank"
          class="text-blue-500 underline"
        >
          View Document
        </a>
      </p>
      <a
        href="/"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
      >
        Back to Home Page
      </a>
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
