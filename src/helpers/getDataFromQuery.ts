const getDataFromQuery = (query: any) => {
  let filter: any = {};
  if (typeof query?.get === 'function') {
    return {
      search: (query && query?.get('search')) || '',
      page: +query?.get('page') || 0,
      limit: +query?.get('pageSize') || 0,
      skip: (+query?.get('page') || 0) * (+query?.get('pageSize') || 0),
      sortBy: {},
      filter: filter,
    };
  } else {
    return {
      search: (query && query?.search) || '',
      page: +query.page || 0,
      limit: +query.pageSize || 0,
      skip: (+query.page || 0) * (+query.pageSize || 0),
      sortBy: {},
      filter: filter,
    };
  }
};

export default getDataFromQuery;
