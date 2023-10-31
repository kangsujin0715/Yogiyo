import { useMemo } from 'react';
import { useRouter } from 'next/router';

export const useRouterQuery = <
  T extends Record<string, string | undefined>,
>(): T => {
  const router = useRouter();

  return useMemo(() => {
    const result = router.query as any;

    return result as T;
  }, [router.isReady, router.query]);
};
