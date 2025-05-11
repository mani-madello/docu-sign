<script setup lang="ts">
import type { MenuTab } from '@/types/menu';

const currentTab = defineModel<MenuTab>('currentTab');

function changeTab(tab: MenuTab) {
  currentTab.value = tab;
}
</script>

<template>
  <ul class="index-menu">
    <li
      :class="currentTab === 'file' ? 'bg-white' : 'bg-gray-60'"
      @click="changeTab('file')"
    >
    
      <img
      class="icon"
        src="@/assets/icon/ic_file_h.svg"
        alt="file icon"
        :class="currentTab === 'files' ? 'active-icon' : ''"
      />My Files
    </li>
    <li
      :class="currentTab === 'archive' ? 'bg-white' : 'bg-gray-60'"
      @click="changeTab('archive')"
    >
      <img
        src="@/assets/icon/ic_archive_h.svg"
        alt="archive icon"
      />Archived Files
    </li>
    <li
      :class="currentTab === 'trash' ? 'bg-white' : 'bg-gray-60'"
      @click="changeTab('trash')"
    >
      <img
        src="@/assets/icon/ic_trash_h.svg"
        alt="trash icon"
      />Trash Bin
    </li>
  </ul>
</template>

<style lang="css" scoped>
.index-menu {
  display: flex;
  gap: 12px;
  margin-left: 20px;
  position: absolute;
  z-index: 99999;
  flex-direction: row;
  margin-top:-6%;
}
.index-menu li {
  background:#ac94fc;
   
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: auto;
  padding: 8px 16px;
  height: 44px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 11px; /* pill shape */
  font-size: 14px;
  font-weight: 500;
  color: #fff; 
}

/* .index-menu li:hover {
  background-color: #dbeafe;
} */

.index-menu li img {
  width: 20px;
  height: 20px;
}

.index-menu li.bg-white {
 /* background: radial-gradient(100% 100% at 50% 0%, rgb(76, 0, 255) 0%, rgb(38, 6, 93) 100%);
 /* background:linear-gradient(
    359deg,
    rgba(109, 48, 142, 1) 0%,
    rgba(233, 14, 139, 1) 100%
  ); 
  background-color:rgb(31, 2, 100);
  /* background-color:   rgb(76, 0, 255); */

  color: white;
  /* border-color: #2563eb; */
}

.index-menu li.bg-white img {
  filter: brightness(2) invert(1);
}

/* Default color */
.icon {
  filter: grayscale(0%) brightness(100%);
}

/* Active state: Turn icon color to white */
.index-menu li.active .icon {
  filter: grayscale(0%) brightness(100%) invert(1); /* Makes the icon white */
}
</style>
