<script lang="ts" setup>
defineOptions({ name: 'AppFooter' });
</script>

<template>
  <div class="app-footer">
    © 2025 Madello AI  | Madello Consulting
  </div>
  
</template>

<style lang="css" scoped>
.app-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  z-index: -1;
  margin: 8px;

  img {
    transform: translateX(-100vw);
  }
}

@media (min-width: 768px) {
  .app-footer img {
    transform: translateX(0);
  }
}
</style>
