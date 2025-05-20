<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  title: string;
  count: number;
  color: string; // e.g. 'indigo', 'emerald', 'sky', 'amber', 'rose', 'gray'
}>();

// Compute the dynamic class names for background and text based on color prop
const bgClass = computed(() => `bg-${props.color}-100`);
const textClass = computed(() => `text-${props.color}-600`);
const iconBgClass = computed(() => `bg-${props.color}-200`);
</script>

<template>
  <div
    :class="[
      'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4 flex items-center justify-between',
      bgClass,
    ]"
  >
    <div>
      <h3 class="text-lg font-semibold text-gray-700">{{ title }}</h3>
      <p :class="['mt-1 text-2xl font-bold', textClass]">{{ count }}</p>
    </div>
    <div :class="['w-10 h-10 rounded-full flex items-center justify-center', iconBgClass]">
      <!-- Example icon placeholder: adjust or replace with your SVG/icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :class="textClass"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h6l6 6v8a2 2 0 01-2 2z"
        />
      </svg>
    </div>
  </div>
</template>
