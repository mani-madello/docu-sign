<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
defineOptions({ name: 'AppSidebar' });

const router = useRouter();
const currentTab = ref('dashboard');
const isSidebarOpen = ref(false); // mobile visibility toggle

const baseClass = 'flex items-center py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition';
const activeClass = 'flex items-center py-2 rounded-lg cursor-pointer bg-white text-indigo-600 font-semibold';

const changeTab = (tab: string) => {
  currentTab.value = tab;
  router.push({ name: tab });
  isSidebarOpen.value = false; // auto close on mobile
};
</script>

<template>
  <!-- Mobile menu toggle -->
  <div class="lg:hidden p-4">
    <button
      class="text-gray-600 focus:outline-none"
      @click="isSidebarOpen = !isSidebarOpen"
    >
      <svg
        v-if="!isSidebarOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <aside
    id="aside"
    :class="[
      'fixed z-[1] top-0 left-0 h-full w-60 bg-white shadow-lg lg:static lg:block transition-transform duration-300 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:translate-x-0',
    ]"
  >
    <div class="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
      <div class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars dark:aside-scrollbars-[slate] p-4">
        <ul>
          <li
            :class="currentTab === 'dashboard' ? activeClass : baseClass"
            @click="changeTab('dashboard')"
          >
            <a
              aria-current="page"
              class="router-link-active router-link-exact-active flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none aside-menu-item-active font-bold"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12 aside-menu-item-active font-bold">Dashboard</span
              ><!----></a
            ><!---->
          </li>
          <li
            :class="currentTab === 'home' ? activeClass : baseClass"
            @click="changeTab('home')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">My Files</span
              ><!----></a
            ><!---->
          </li>
          <li
            :class="currentTab === 'upload' ? activeClass : baseClass"
            @click="changeTab('upload')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Add Sign</span
              ><!----></a
            ><!---->
          </li>
          <!-- <li
            :class="currentTab === 'send-signed-files' ? activeClass : baseClass"
            @click="changeTab('signed-files')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Sent Files</span></a
            >
          </li> -->
          <!-- <li
            :class="currentTab === 'archive' ? activeClass : baseClass"
            @click="changeTab('archive')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Archived</span></a
            >
          </li> -->
          <!-- <li
            :class="currentTab === 'trash' ? activeClass : baseClass"
            @click="changeTab('trash')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Trash</span></a
            >
          </li> -->
          <li
            :class="currentTab === 'profile' ? activeClass : baseClass"
            @click="changeTab('profile')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Profile</span
              ><!----></a
            ><!---->
          </li>
          <!-- <li
            :class="currentTab === 'settings' ? activeClass : baseClass"
            @click="changeTab('kanban')"
          >
            <a class="flex cursor-pointer py-3 aside-menu-item dark:text-slate-300 dark:hover:text-white"
              ><span class="inline-flex justify-center items-center w-16 h-6 flex-none"
                ><svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  class="inline-block"
                >
                  <path
                    fill="currentColor"
                    d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  /></svg></span
              ><span class="grow text-ellipsis line-clamp-1 pr-12">Status</span></a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background-color: #ac94fc;
  color: white;
  padding: 1rem;
  position: fixed;
  left: 0;
  z-index: 10;
}
.sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.sidebar li {
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: 0.2s;
}
.sidebar li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.sidebar ul li {
  cursor: pointer;
  padding: 10px !important;
  user-select: none;
  transition: background-color 0.2s ease;
}

.sidebar ul li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
