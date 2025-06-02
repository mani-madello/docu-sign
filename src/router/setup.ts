import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { auth } from '@/firebase';
import Complete from '@/pages/complete/index.vue';
import Dashboard from '@/pages/dashboard/index.vue';
import Home from '@/pages/home/index.vue';
import Login from '@/pages/login/index.vue';
import MultiSelect from '@/pages/multiselect/index.vue';
import MultiUpload from '@/pages/multiupload/index.vue';
import Profile from '@/pages/profile/index.vue';
import Send from '@/pages/send/index.vue';
import Signature from '@/pages/signature/index.vue';
import Starter from '@/pages/starter/index.vue';
import Success from '@/pages/success/index.vue';
import Upload from '@/pages/upload/index.vue';
import UploadToSend from '@/pages/uploadtosend/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  { path: '/', redirect: '/login' },
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
    path: '/multiupload',
    name: 'multiupload',
    component: MultiUpload,
  },
  {
    path: '/multiselect',
    name: 'multiselect',
    component: MultiSelect,
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
  const user = auth.currentUser;

  if (!user && to.path !== '/login' && !to.meta.allowGuest) {
    return next('/login');
  }

  return next();
});
