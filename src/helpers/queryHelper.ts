export const queryToObject = (query: any) => {
  const queryObject: any = {};
  query.forEach((value: string, key: string) => {
    queryObject[key] = value;
  });

  return queryObject;
};
