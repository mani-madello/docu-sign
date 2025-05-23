<script lang="ts" setup>
defineOptions({ name: 'AppFooter' });
</script>

<template>
  <footer class="z-[1] w-full py-4 px-6 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left text-sm text-gray-600 dark:text-gray-300"
    >
      <div>
        <b
          >©2025,
          <a
            href="https://madello.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:underline text-indigo-600 dark:text-indigo-400"
            >Madello Consulting</a
          >.
        </b>
        Get more with
        <a
          href="https://madello.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline ml-1"
          >Premium version</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  z-index: 10;
}
</style>
