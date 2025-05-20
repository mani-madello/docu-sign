<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
defineOptions({ name: 'AppSidebar' });

const router = useRouter();
const currentTab = ref('dashboard');

const baseClass = 'flex items-center px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition';
const activeClass =
  'flex items-center px-4 py-2 rounded-lg cursor-pointer bg-white text-indigo-600 font-semibold shadow';

const changeTab = (tab: string) => {
  currentTab.value = tab;
  // Optional: use vue-router to navigate
  router.push({ name: tab });
};
</script>

<template>
  <ul class="p-6 space-y-2">
    <li
      :class="currentTab === 'dashboard' ? activeClass : baseClass"
      @click="changeTab('dashboard')"
    >
      <img
        src="@/assets/icon/ic_pic.svg"
        class="w-5 h-5 mr-3"
        alt="Dashboard"
      />
      Dashboard
    </li>

    <li
      :class="currentTab === 'upload' ? activeClass : baseClass"
      @click="changeTab('upload')"
    >
      <img
        src="@/assets/icon/ic_file.svg"
        class="w-5 h-5 mr-3"
        alt="Upload"
      />
      Add Signature
    </li>

    <li
      :class="currentTab === 'home' ? activeClass : baseClass"
      @click="changeTab('home')"
    >
      <img
        src="@/assets/icon/ic_file.svg"
        class="w-5 h-5 mr-3"
        alt="Files"
      />
      My Files
    </li>

    <li
      :class="currentTab === 'send-signed-files' ? activeClass : baseClass"
      @click="changeTab('signed-files')"
    >
      <img
        src="@/assets/icon/ic_send.svg"
        class="w-5 h-5 mr-3"
        alt="Sent"
      />
      Sent Files
    </li>

    <li
      :class="currentTab === 'archive' ? activeClass : baseClass"
      @click="changeTab('archive')"
    >
      <img
        src="@/assets/icon/ic_archive.svg"
        class="w-5 h-5 mr-3"
        alt="Archive"
      />
      Archived Files
    </li>

    <li
      :class="currentTab === 'trash' ? activeClass : baseClass"
      @click="changeTab('trash')"
    >
      <img
        src="@/assets/icon/ic_trash.svg"
        class="w-5 h-5 mr-3"
        alt="Trash"
      />
      Deleted Files
    </li>

    <li
      :class="currentTab === 'profile' ? activeClass : baseClass"
      @click="changeTab('profile')"
    >
      <img
        src="@/assets/icon/ic_user.svg"
        class="w-5 h-5 mr-3"
        alt="Profile"
      />
      Profile
    </li>

    <li
      :class="currentTab === 'settings' ? activeClass : baseClass"
      @click="changeTab('settings')"
    >
      <img
        src="@/assets/icon/ic_more.svg"
        class="w-5 h-5 mr-3"
        alt="Settings"
      />
      Settings
    </li>
  </ul>
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
