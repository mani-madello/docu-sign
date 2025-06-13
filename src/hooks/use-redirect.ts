import { useRoute, useRouter } from 'vue-router';

export function useRedirect() {
  const router = useRouter();
  const route = useRoute();

  function goPage(name: string, options?: { params?: Record<string, any>; query?: Record<string, any> }) {
    if (options) {
      router.push({
        name,
        ...(options.params ? { params: options.params } : {}),
        ...(options.query ? { query: options.query } : {}),
      });
    } else {
      router.push({ name });
    }
  }

  function goBack() {
    router.go(-1);
  }

  return {
    goPage,
    goBack,
    route,
  };
}
