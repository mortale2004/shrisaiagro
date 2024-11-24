import _ from 'lodash';

export const prepareQueryParams = (query: any, params: any, filter?: any) => {
  for (let param of params) {
    if (query && query?.get?.(param)) {
      if (query?.get?.(param) === 'true' || query?.get?.(param) === true) {
        filter[`${param}`] = true;
      } else if (
        query?.get?.(param) === 'false' ||
        query?.get?.(param) === false
      ) {
        filter[`${param}`] = false;
      } else {
        filter[`${param}`] = query?.get?.(param);
      }
    }
  }
  return filter;
};

export const prepareQueryParamsFilters = (
  query: any,
  params: any,
  filter?: any
) => {
  for (let param of params) {
    if (!_.isEmpty(query?.[param])) {
      if (query?.[param] === 'true' || query?.[param] === true) {
        filter[`${param}`] = true;
      } else if (query?.[param] === 'false' || query?.[param] === false) {
        filter[`${param}`] = false;
      } else {
        filter[`${param}`] = query?.[param];
      }
    }
  }
  return filter;
};
export const prepareDateQueryParams = (
  query?: any,
  params?: any,
  filter?: any
) => {
  for (let param of params) {
    if (query?.[param?.min] && query?.[param?.max]) {
      if (param.setHours) {
        query[param?.min] = new Date(query[param.min]).setHours(0, 0, 0, 0);
        query[param?.max] = new Date(query[param.max]).setHours(23, 59, 59, 0);
      }

      filter[param.key] = {
        $gte: new Date(query[param.min]),
        $lte: new Date(query[param.max]),
      };
    } else if (query?.[param?.min]) {
      if (param.setHours) {
        query[param?.min] = new Date(query[param.min]).setHours(0, 0);
      }

      filter[param.key] = { $gte: new Date(query[param.min]) };
    } else if (query?.[param?.max]) {
      if (param.setHours) {
        query[param?.max] = new Date(query[param.max]).setHours(23, 59);
      }

      filter[param.key] = { $lte: new Date(query[param.max]) };
    }
  }
  return filter;
};
