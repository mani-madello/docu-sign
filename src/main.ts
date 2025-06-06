import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from '@/App.vue';

import errorHandlerPlugin from '@/plugins/error-handler';
import i18NPlugin from '@/plugins/i18n';
import preloadPlugin from '@/plugins/preload';
import router from '@/router';
import { useAuthStore } from './store/auth';
import 'virtual:svg-icons-register';
import '@/styles/index.css';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(i18NPlugin);
app.use(preloadPlugin);
app.use(errorHandlerPlugin);

const authStore = useAuthStore();
authStore.init();
app.mount('#app');

useAuthStore().$patch({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
});
