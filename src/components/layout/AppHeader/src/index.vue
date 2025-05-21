<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import SignStep from './SignStep.vue';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const logout = () => {
  console.log('logout called');
  authStore.logout();
  router.push({ name: 'login' });
};

const SIGN_STEP_ROUTES = ['upload', 'signature', 'complete', 'send'];
const shouldShowSignStep = computed(() => SIGN_STEP_ROUTES.includes(route.name as string));
</script>

<template>
  <header
    class="app-header fixed top-0 inset-x-0 z-30 bg-white dark:bg-slate-800 shadow flex items-center justify-between px-4 h-16 xl:pl-60"
  >
    <!-- Left: Logo -->
    <router-link
      to="/"
      class="flex items-center flex-shrink-0"
    >
      <img
        src="@/assets/logo/logo_darkbg_horizontal.png"
        alt="logo"
        class="w-[150px] h-auto object-contain"
      />
    </router-link>

    <!-- Center: Search + SignStep -->
    <div
      v-if="isAuthenticated && route.name !== 'login'"
      class="ml-20 flex flex-col flex-grow space-y-1"
    >
      <input
        v-if="isAuthenticated && route.name !== 'login' && (route.name === 'dashboard' || route.name === 'home')"
        type="text"
        placeholder="Search (ctrl+k)"
        class="w-[350px] px-2 py-1 h-8 border rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:placeholder-gray-400 dark:bg-slate-800 dark:border-gray-700"
      />
      <sign-step v-if="shouldShowSignStep && isAuthenticated" />
    </div>

    <!-- Right: Profile and Logout -->
    <div
      v-if="isAuthenticated && route.name !== 'login'"
      class="flex items-center space-x-4 flex-shrink-0 ml-auto"
    >
      <!-- Profile Avatar -->
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com"
        alt="Madhavan"
        class="rounded-full w-8 h-8"
      />
      <!-- Profile Name -->
      <span class="hidden md:inline-block text-gray-700 dark:text-gray-200 font-medium">Madhavan Elango </span>
      <!-- Logout Icon -->
      <div
        class="flex items-center cursor-pointer py-2 px-3 lg:w-16 justify-center hover:text-indigo-600 dark:text-white dark:hover:text-slate-400"
        @click="logout"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          class="inline-block mr-1"
        >
          <path
            fill="currentColor"
            d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
          />
        </svg>
        <span class="lg:hidden">Logout</span>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.index-menu {
  display: flex;
  gap: 4px;
  margin-left: 20px;
}

.index-menu li {
  border: 2px solid var(--color-gray-70);
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  padding-top: 8px;
  height: 42px;
  cursor: pointer;
  transition: background-color 0.2s;
  filter: drop-shadow(var(--drop-shadow-md));
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

.index-menu li:hover {
  background-color: white;
}

.index-menu li img {
  width: 22px;
}

@media (min-width: 768px) {
  .index-menu {
    flex-direction: column;
    gap: 10px;
    transform: translateY(82px);
  }

  .index-menu li {
    width: 62px;
    height: 56px;
    transform: translateX(4px) rotate(-90deg);
  }

  .index-menu li img {
    width: 28px;
    transform: rotate(90deg);
  }
}

.router-link-exact-active {
  font-weight: 400;
}

.app-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px;
  z-index: 0;
  background-color: #fff;
  height: 6.3125rem;
}

.app-header-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.app-header-icon:active {
  transform: scale(0.9);
}

.app-header-menu {
  position: fixed;
  height: fit-content;
  padding: 0.5rem;
  background-color: white;
  box-shadow:
    0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)),
    0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  border-radius: 0.5rem;
  top: 3rem;
  right: 0.75rem;
  transform-origin: top;
  z-index: 1;
}

.app-header-menu-arrow {
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  border-width: 8px;
  border-color: transparent;
  border-bottom-color: white;
  transform-origin: bottom;
  clip-path: inset(0 0 1.5px 0);
}

.app-header-language {
  max-height: 50dvh;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.app-header-language li {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.app-header-language li:hover {
  background-color: var(--color-primary);
  color: black;
}

.app-header-transition {
  transition:
    scale 0.3s,
    opacity 0.3s;
}

@media (min-width: 768px) {
  .app-header {
    padding: 1rem;
  }

  .app-header-icon {
    width: 2rem;
    height: 2rem;
  }

  .app-header-menu {
    top: 70px;
    right: 1.25rem;
  }

  .app-header-language {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.25rem 1.5rem;
  }
}
</style>
