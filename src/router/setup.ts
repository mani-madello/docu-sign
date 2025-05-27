import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { auth } from '@/firebase';
import Complete from '@/pages/complete/index.vue';
import Dashboard from '@/pages/dashboard/index.vue';
import Home from '@/pages/home/index.vue';
import Kanban from '@/pages/kanban/index.vue';
import Login from '@/pages/login/index.vue';
import Profile from '@/pages/profile/index.vue';
import Send from '@/pages/send/index.vue';
import Signature from '@/pages/signature/index.vue';
import Upload from '@/pages/upload/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: Kanban,
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
    path: '/signature',
    name: 'signature',
    component: Signature,
    meta: { allowGuest: true },
  },
  {
    path: '/:employeeName/:docId',
    name: 'public-signature',
    component: Signature,
    meta: { allowGuest: true },
  },
  {
    path: '/complete',
    name: 'complete',
    component: Complete,
  },
  {
    path: '/send',
    name: 'send',
    component: Send,
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
