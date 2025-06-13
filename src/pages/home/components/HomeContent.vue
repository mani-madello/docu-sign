<script setup lang="ts">
import { computed } from 'vue';
import type { MenuTab } from '@/types/menu';
// import HomeArchives from './HomeArchives.vue';
import HomeFiles from './HomeFiles.vue';
import HomeTrash from './HomeTrash.vue';

interface Props {
  currentTab: MenuTab;
}

const { currentTab } = defineProps<Props>();
// const { goPage } = useRedirect();
const title = computed(() => {
  const titleMap = {
    file: 'my_files',
    // archive: 'archived_files',
    trash: 'trash_bin',
  };
  return titleMap[currentTab];
});

const currentCom = computed(() => {
  const componentMap = {
    file: HomeFiles,
    // archive: HomeArchives,
    trash: HomeTrash,
  };
  return componentMap[currentTab];
});
</script>

<template>
  <div class="h-[calc(100%-90px)] w-full rounded-lg">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2
        class="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageTitle"
      >
        My Files
      </h2>
      <nav>
        <ol class="flex items-center gap-1.5">
          <li>
            <a
              href="/"
              class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
            >
              Home
              <svg
                class="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></a>
          </li>
          <li class="text-sm text-gray-800 dark:text-white/90">My Files</li>
        </ol>
      </nav>
    </div>
    <h5 class="title">
      <!-- <img
        v-if="title === 'archived_files'"
        src="@/assets/icon/folder-with-files-svgrepo-com.svg"
        alt="trash icon"
        style="width: 30px; display: inline"
      /> -->
      <img
        v-if="title === 'trash_bin'"
        src="@/assets/icon/trash-bin-minimalistic-svgrepo-com.svg"
        alt="trash icon"
        style="width: 30px; display: inline"
      />
    </h5>

    <keep-alive>
      <component :is="currentCom" />
    </keep-alive>
  </div>
</template>

<style lang="css" scoped>
.index-content-add {
  width: 60px;
  height: 60px;
  position: absolute;
  right: 12px;
  top: -32px;
}

@media (min-width: 768px) {
  .index-content-add {
    width: 80px;
    height: 80px;
    right: -40px;
    top: 40px;
  }
}
</style>
