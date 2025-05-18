<script setup lang="ts">
import { ref } from 'vue';
import type { MenuTab } from '@/types/menu';
import HomeContent from './components/HomeContent.vue';

const currentTab = ref<MenuTab>('file');
</script>

<template>
  <div class="home layout step">
    <home-content :current-tab="currentTab" />
  </div>
</template>
