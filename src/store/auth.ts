import { onAuthStateChanged, signOut, User } from 'firebase/auth';
// store/auth.ts
import { defineStore } from 'pinia';
import { auth } from '@/firebase'; // Your initialized Firebase app

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string; name: string },
    loading: true,
  }),
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (firebaseUser: User | null) => {
        if (firebaseUser) {
          this.user = {
            email: firebaseUser.email || '',
            name: firebaseUser.displayName || '',
          };
        } else {
          this.user = null;
        }
        this.loading = false;
      });
    },
    login(user: { email: string; name: string }) {
      this.user = user;
    },
    async logout() {
      await signOut(auth);
      this.user = null;
    },
  },
  persist: true,
});
