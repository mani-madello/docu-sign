<script setup lang="ts">
import { computed } from 'vue';
import type { MenuTab } from '@/types/menu';
import HomeArchives from './HomeArchives.vue';
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
    archive: 'archived_files',
    trash: 'trash_bin',
  };
  return titleMap[currentTab];
});

const currentCom = computed(() => {
  const componentMap = {
    file: HomeFiles,
    archive: HomeArchives,
    trash: HomeTrash,
  };
  return componentMap[currentTab];
});
</script>

<template>
  <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] content">
    <h5 class="title">
      <img
        v-if="title === 'my_files'"
        src="@/assets/icon/archive-minimalistic-svgrepo-com.svg"
        alt="trash icon"
        style="width: 30px; display: inline"
      />
      <img
        v-if="title === 'archived_files'"
        src="@/assets/icon/folder-with-files-svgrepo-com.svg"
        alt="trash icon"
        style="width: 30px; display: inline"
      />
      <img
        v-if="title === 'trash_bin'"
        src="@/assets/icon/trash-bin-minimalistic-svgrepo-com.svg"
        alt="trash icon"
        style="width: 30px; display: inline"
      />

      {{ $t(title) }}
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
