<script setup lang="ts">
interface Props {
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}

defineProps<Props>();
const emit = defineEmits(['prevStep', 'nextStep']);
</script>

<template>
  <div class="sign-step-btn">
    <button
      class="btn inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
      type="submit"
      :disabled="isPrevDisabled"
      @click="emit('prevStep')"
    >
      <span class="text-4xl font-thin">←</span> <span class="px-2">{{ $t('previous') }}</span>
    </button>
    <button
      class="btn btn-primary inline-flex justify-center items-center whitespace-nowrap focus:outline-hidden transition-colors focus:ring-3 duration-150 border cursor-pointer rounded-sm border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
      type="submit"
      :disabled="isNextDisabled"
      @click="emit('nextStep')"
    >
      <span class="px-2">{{ $t('next_step') }}</span
      ><span class="text-4xl font-thin">→</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.sign-step-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
}

@media (min-width: 768px) {
  .sign-step-btn {
    position: absolute;
    top: 24px;
    left: 20px;
    width: calc(100% - 70px);
  }
}
</style>
