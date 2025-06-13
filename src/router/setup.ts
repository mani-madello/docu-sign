import { watch } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BulkSignature from '@/pages/bulksignature/index.vue';
import BulkUpload from '@/pages/bulkupload/index.vue';
import Complete from '@/pages/complete/index.vue';
import Dashboard from '@/pages/dashboard/index.vue';
import Home from '@/pages/home/index.vue';
import Login from '@/pages/login/index.vue';
import Profile from '@/pages/profile/index.vue';
import Send from '@/pages/send/index.vue';
import Signature from '@/pages/signature/index.vue';
import Starter from '@/pages/starter/index.vue';
import Success from '@/pages/success/index.vue';
import Upload from '@/pages/upload/index.vue';
import UploadToSend from '@/pages/uploadtosend/index.vue';
import { useAuthStore } from '@/store';

// const isAuthChecked = false;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/',
    redirect: () => {
      const authStore = useAuthStore();
      return authStore.isAuthenticated ? '/dashboard' : '/login';
    },
  },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/start',
    name: 'start',
    component: Starter,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
  {
    path: '/bulkupload',
    name: 'bulkupload',
    component: BulkUpload,
  },
  {
    path: '/bulksignature/:docIds+',
    name: 'bulksignature',
    component: BulkSignature,
  },
  {
    path: '/signature/:docId',
    name: 'signature',
    component: Signature,
    meta: { allowGuest: true },
  },
  {
    path: '/:public/:docId',
    name: 'public',
    component: Signature,
    meta: { allowGuest: true },
  },
  {
    path: '/complete/:docId',
    name: 'complete',
    component: Complete,
  },
  {
    path: '/send/:docId',
    name: 'send',
    component: Send,
  },
  {
    path: '/success',
    name: 'success',
    component: Success,
  },
  {
    path: '/uploadtosend',
    name: 'uploadtosend',
    component: UploadToSend,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // 🔄 If auth is still loading, wait until it's finished
  if (authStore.loading) {
    const stop = watch(
      () => authStore.loading,
      loading => {
        if (!loading) {
          stop(); // stop the watcher once it's no longer loading
          proceed();
        }
      },
    );
  } else {
    proceed();
  }

  function proceed() {
    if (!authStore.isAuthenticated && to.path !== '/login' && !to.meta.allowGuest) {
      return next('/login');
    }

    if (authStore.isAuthenticated && to.path === '/login') {
      return next('/dashboard');
    }

    return next();
  }
});
