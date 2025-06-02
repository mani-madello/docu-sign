<script setup lang="ts">
import { ref } from 'vue';
import type { MenuTab } from '@/types/menu';
import MultiSelectContent from './components/MultiSelectContent.vue';

const currentTab = ref<MenuTab>('file');
</script>

<template>
  <div class="multi-select layout step">
    <multi-select-content :current-tab="currentTab" />
  </div>
</template>
