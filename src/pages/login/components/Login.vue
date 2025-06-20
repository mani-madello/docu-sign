<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    authStore.login({
      email: user.email || '',
      name: user.displayName || 'Madhavan',
    });

    error.value = '';
    router.push({ name: 'start' });
  } catch (error_) {
    error.value = 'Login failed: Invalid email or password';
    console.error(error_);
  }
};
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 dark:bg-slate-900">
    <form
      class="space-y-5 flex flex-col rounded-2xl dark:bg-slate-900/70 bg-white w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl p-6"
      @submit.prevent="handleLogin"
    >
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Sign in to your account</h1>
        <p class="mt-2 text-sm text-gray-500">Please login with your registered email and password</p>
      </div>

      <!-- Email -->
      <div>
        <label class="block font-bold mb-2">Email</label>
        <div class="relative">
          <input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="pl-10 px-3 py-2 h-12 w-full border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700 focus:ring-3"
          />
          <span
            class="absolute top-0 left-0 w-10 h-12 flex items-center justify-center text-gray-500 dark:text-slate-400"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <!-- Password -->
      <div>
        <label class="block font-bold mb-2">Password</label>
        <div class="relative">
          <input
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
            class="pl-10 px-3 py-2 h-12 w-full border rounded-sm bg-white dark:bg-slate-800 dark:placeholder-gray-400 border-gray-700 focus:ring-3"
          />
          <span
            class="absolute top-0 left-0 w-10 h-12 flex items-center justify-center text-gray-500 dark:text-slate-400"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                fill="currentColor"
                d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <!-- Remember Me -->
      <!-- <label class="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          name="remember"
        />
        <span>Remember me</span>
      </label> -->

      <!-- Error Message -->
      <div
        v-if="error"
        class="text-red-500 text-sm text-center"
      >
        {{ error }}
      </div>

      <!-- Submit -->
      <div>
        <button
          type="submit"
          class="w-full flex justify-center items-center py-2 px-4 border rounded-sm border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
