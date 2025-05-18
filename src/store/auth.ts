// @/store/auth.ts
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ email: string; name?: string } | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  const isAuthenticated = computed(() => !!user.value);

  const login = (userData: { email: string; name?: string }) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
});
