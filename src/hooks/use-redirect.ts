import { useRoute, useRouter } from 'vue-router';

export function useRedirect() {
  const router = useRouter();
  const route = useRoute();

  function goPage(name: string, params?: Record<string, any>) {
    if (params && Object.keys(params).length > 0) {
      router.push({ name, params });
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
