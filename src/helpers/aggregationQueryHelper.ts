import _ from 'lodash';

export const addFilterSortAndCount = (
  aggregationQuery: any,
  filter?: any,
  sortBy?: any,
  skip?: any,
  limit?: any,
  customFacet?: any
) => {
  if (filter && !_.isEmpty(filter)) {
    aggregationQuery.push({
      $match: filter,
    });
  }
  if (sortBy && !_.isEmpty(sortBy)) {
    aggregationQuery.push({
      $sort: sortBy,
    });
  }

  if (limit > 0) {
    aggregationQuery.push(
      customFacet
        ? customFacet
        : {
            $facet: {
              count: [{ $count: 'count' }],
              data: [{ $skip: skip }, { $limit: limit }],
            },
          }
    );
  } else if (skip > 0) {
    aggregationQuery.push(
      customFacet
        ? customFacet
        : {
            $facet: {
              count: [{ $count: 'count' }],
              data: [{ $skip: skip }],
            },
          }
    );
  } else {
    aggregationQuery.push(
      customFacet
        ? customFacet
        : {
            $facet: {
              count: [{ $count: 'count' }],
              data: [],
            },
          }
    );
  }
  return aggregationQuery;
};
