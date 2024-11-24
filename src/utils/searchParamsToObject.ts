export const searchParamsToObject = (
  searchParams: URLSearchParams
): Record<string, string | string[]> => {
  const obj: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    if (key?.endsWith('[]')) {
      obj[(key as string)?.slice?.(0, key.length - 2)] =
        searchParams?.getAll(key) || [];
    } else {
      obj[key] = value;
    }
  });
  return obj;
};
