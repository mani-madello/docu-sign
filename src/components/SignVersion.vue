<script setup lang="ts">
const version = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <p class="absolute bottom-1 right-3 text-xs  md:bottom-2">ver: {{ version }}</p>
</template>
