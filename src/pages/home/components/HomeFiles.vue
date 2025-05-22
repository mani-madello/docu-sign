<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRedirect } from '@/hooks/use-redirect';
import { usePdfStore } from '@/store';
import HomeSignFiles from './HomeSignFiles.vue';

const { goPage } = useRedirect();
const { PDFList } = storeToRefs(usePdfStore());
</script>

<template>
  <div class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg index-files index-container">
    <home-sign-files
      v-if="PDFList.length"
      type="file"
      :list="PDFList"
    />

    <div
      v-else
      class="h-full flex flex-col items-center justify-center gap-5"
    >
      <img
        src="@/assets/icon/add-folder-svgrepo-com.svg"
        alt="create file"
        class="iconScale w-[80px] h-[80] md:w-[100px] md:h-[136px]"
        @click="goPage('upload')"
      />
      <h3 class="text-center p-6">
        {{ $t('prompt.create_file') }}
      </h3>
    </div>
  </div>
</template>
