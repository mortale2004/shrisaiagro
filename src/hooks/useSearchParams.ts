import { searchParamsToObject } from '@/utils/searchParamsToObject';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const useSharedSearchParams = (): [
  any,
  (params: Record<string, any>) => void,
] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initial = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    []
  );
  const [params, setParams] = useState(initial);

  const updateSearchParam = useCallback(
    (params: Record<string, any>) => {
      setParams((prev) => {
        const newParams = new URLSearchParams({
          ...searchParamsToObject(prev),
          ...params,
        });
        return newParams;
      });
    },
    [params]
  );

  useEffect(() => {
    // ensure that when component unmounts, shared state gets reset back to initial
    return () => {
      setParams(initial);
    };
  }, [initial]);

  useEffect(() => {
    router.push(pathname + '?' + params?.toString());
  }, [params]);

  return [searchParams, updateSearchParam];
};

export default useSharedSearchParams;
