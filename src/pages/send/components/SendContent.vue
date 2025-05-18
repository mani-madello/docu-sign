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
  <div class="send-content content flex flex-col items-center justify-center p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Document Sent Successfully</h2>

    <div class="bg-gray-100 rounded-lg shadow p-6 max-w-xl w-full">
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

      <button
        class="btn btn-primary w-full"
        @click="returnHome"
      >
        ← Return to Home
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
