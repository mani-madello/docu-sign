<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const authStore = useAuthStore();

const handleLogin = () => {
  if (email.value === 'hello@madello.com' && password.value === 'madello') {
    const mockUser = {
      email: email.value,
      name: 'Madello User',
    };
    authStore.login(mockUser);
    error.value = '';
    router.push({ name: 'dashboard' });
  } else {
    error.value = 'Invalid email or password';
  }
};
</script>

<template>
  <div class="min-h-0 flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900">Sign in to your account</h1>
        <p class="mt-2 text-sm text-gray-500">Use <code>hello@madello.com</code> / <code>madello</code></p>
      </div>

      <form
        class="space-y-5"
        @submit.prevent="handleLogin"
      >
        <div>
          <label
            for="email"
            class="block font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            for="password"
            class="block font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div
          v-if="error"
          class="text-red-500 text-sm text-center"
        >
          {{ error }}
        </div>

        <button
          type="submit"
          class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
