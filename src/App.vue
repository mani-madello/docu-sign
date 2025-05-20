<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppFooter, AppHeader, AppSidebar } from '@/components/layout';
import SignLoading from '@/components/SignLoading.vue';
import SignReload from '@/components/SignReload.vue';
import { emitRouteEvent } from '@/router/events';
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const shouldShowSidebar = computed(() => isAuthenticated.value && route.name !== 'login');

const routeCurrent = ref<string>('');
const routePrevious = ref<string>('');

router.beforeEach((to, from) => {
  routeCurrent.value = String(to.name);
  routePrevious.value = String(from.name);
});
</script>

<template>
  <div class="layout-container">
    <!-- Header -->
    <app-header />

    <!-- Main Layout -->
    <div
      class="layout-main"
      :class="{ 'with-sidebar': shouldShowSidebar }"
    >
      <!-- Sidebar -->
      <app-sidebar v-if="shouldShowSidebar" />

      <!-- Main Content -->
      <main class="layout-content">
        <router-view v-slot="{ Component }">
          <transition
            name="slide-fade"
            mode="out-in"
            @before-enter="emitRouteEvent('onBeforeEnter', routeCurrent)"
            @enter="emitRouteEvent('onEnter', routeCurrent)"
            @after-enter="emitRouteEvent('onAfterEnter', routeCurrent)"
            @before-leave="emitRouteEvent('onBeforeLeave', routePrevious)"
            @leave="emitRouteEvent('onLeave', routePrevious)"
            @after-leave="emitRouteEvent('onAfterLeave', routePrevious)"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>

    <!-- Footer -->
    <app-footer />

    <sign-loading />
    <sign-reload />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.layout-main {
  display: flex;
  flex: 1;
  overflow: hidden;
  padding-top: 6.5rem; /* header height */
  padding-bottom: 3rem; /* footer height */
}

/* Sidebar active pushes content */
.layout-main.with-sidebar {
  margin-left: 0; /* Sidebar width */
}

.layout-content {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f3f4f6;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 300ms ease-out;
}

.slide-fade-leave-active {
  transition: all 300ms ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

@media (min-width: 768px) {
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(40px);
  }
}
</style>
