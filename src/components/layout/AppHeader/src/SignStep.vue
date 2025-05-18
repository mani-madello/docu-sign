<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeStep = computed(() => {
  switch (route.name) {
    case 'upload':
      return 1;
    case 'signature':
      return 2;
    case 'complete':
      return 3;
    case 'send':
      return 4;
    default:
      return 0;
  }
});

// const isUploadPage = computed(() => route.name === 'upload');
// const isSignaturePage = computed(() => route.name === 'signature');
// const isCompletePage = computed(() => route.name === 'complete');
// const isSendPage = computed(() => route.name === 'send');
</script>

<template>
  <div class="sign-step" :class="{ 'opacity-0': activeStep === 0 }">
    <!-- Step 1: Upload -->
    <div
      :class="[
        'sign-step-dot',
        { 'sign-step-dot-light': activeStep === 1 },
        { 'sign-step-dot-complete': activeStep > 1 }
      ]"
    >
      <span :class="['sign-step-text', activeStep === 1 ? 'text-primary' : '']">
        {{ $t('upload_file_lower') }}
      </span>
    </div>

    <progress
      class="sign-step-bar"
      :value="activeStep > 1 ? 100 : 0"
      max="100"
    ></progress>

    <!-- Step 2: Signature -->
    <div
      :class="[
        'sign-step-dot',
        { 'sign-step-dot-light': activeStep === 2 },
        { 'sign-step-dot-complete': activeStep > 2 }
      ]"
    >
      <span :class="['sign-step-text', activeStep === 2 ? 'text-primary' : '']">
        {{ $t('sign_file_lower') }}
      </span>
    </div>

    <progress
      class="sign-step-bar"
      :value="activeStep > 2 ? 100 : 0"
      max="100"
    ></progress>

    <!-- Step 3: Complete -->
    <div
      :class="[
        'sign-step-dot',
        { 'sign-step-dot-light': activeStep === 3 }
      ]"
    >
      <span :class="['sign-step-text', activeStep === 3 ? 'text-primary' : '']">
        {{ $t('sign_completed_lower') }}
      </span>
    </div>

    <progress
      class="sign-step-bar"
      :value="activeStep > 3 ? 100 : 0"
      max="100"
    ></progress>

    <!-- Step 4: Send -->
    <div
      :class="[
        'sign-step-dot',
        { 'sign-step-dot-complete': activeStep === 4 }
      ]"
    >
      <span :class="['sign-step-text', activeStep === 4 ? 'text-primary' : '']">
        {{ activeStep === 4 ? 'document sent' : 'send document' }}
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sign-step {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translate(-50%, 50px);
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.sign-step-dot {
  position: relative;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  background-color: white;
  border: 2px solid var(--color-gray-40);
  border-radius: 50%;
}

.sign-step-dot-light {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px #4c00ff;
  transition-property: background-color, border-color, box-shadow;
  transition-delay: 300ms;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  .sign-step-text {
    transition-delay: 300ms;
  }
}

.sign-step-dot-complete {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.sign-step-bar {
  width: 90px;
  height: 2px;
  appearance: none;
}

.sign-step-bar::-webkit-progress-bar {
  background-color: var(--color-gray-40);
}

.sign-step-bar::-webkit-progress-value {
  background-color: var(--color-primary);
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sign-step-text {
  font-weight: bold;
  display: none;
  position: absolute;
  font-size: 14px;
  line-height: 20px;
  bottom: -10px;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, 100%);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sign-step-dot {
  transition: all 0.3s ease-in-out;
}

.sign-step-dot-light {
  box-shadow: 0 0 8px 3px rgba(76, 0, 255, 0.4);
}

.sign-step-dot-complete {
  background-color: var(--color-primary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.sign-step-text {
  font-weight: 600;
  opacity: 0.6;
}

.sign-step-text.text-primary {
  opacity: 1;
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .sign-step {
    transform: translate(-50%, 0px);
  }

  .sign-step-dot {
    width: 16px;
    height: 16px;
  }

  .sign-step-bar {
    width: 210px;
  }

  .sign-step-text {
    display: block;
  }
}
</style>
