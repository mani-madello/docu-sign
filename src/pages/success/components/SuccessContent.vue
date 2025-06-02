<script setup lang="ts"></script>

<template>
  <div class="h-[calc(100%-90px)] w-full my-5 bg-white rounded-lg p-5">
    <div class="mx-auto w-full max-w-[274px] text-center sm:max-w-[555px]">
      <div class="mx-auto w-full max-w-[100px] text-center sm:max-w-[160px]">
        <img
          src="@/assets/img/success.svg"
          alt="success"
          class="dark:hidden"
        />
      </div>
      <h3 class="mb-2 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">BINGO !</h3>
      <p class="mt-6 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
        Awesome! document has been sent successfully.
      </p>
      <p class="mb-2">You’ve sent the document to HR</p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
