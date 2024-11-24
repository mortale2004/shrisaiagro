import {
  getFormattedDate,
  getFormattedDateTime,
  getFormattedTime,
} from './dateHelper';
import getStatusBadge from './statusBadge';

export const sliceAndGetCharts = (string: string, slice: number): string => {
  return string.slice(0, slice);
};

const formatString = (item: any, key: string) => {
  if (
    item[key] === 'true' ||
    item[key] === true ||
    item[key] === 'false' ||
    item[key] === false ||
    key?.includes('status')
  ) {
    return getStatusBadge(item[key], getValueFromKeyAndData(key, item));
  } else if (key.includes('date_time')) {
    return item[key] && getFormattedDateTime(new Date(item[key]));
  } else if (key.includes('date')) {
    return item[key] && getFormattedDate(new Date(item[key]));
  } else if (key.includes('time')) {
    return item[key] && getFormattedTime(new Date(item[key]));
  }
  return item[key];
};

const getValueFromKeyAndData = (key: any, item: any) => {
  switch (key) {
    case 'voting_status':
    case 'is_active':
    case 'is_default':
      return item[key] === 'true' || item[key] === true
        ? 'Yes'
        : item[key] === 'false' || item[key] === false
          ? 'No'
          : '';

    case key?.startsWith('is_') ? key : null:
      return item[key] === 'true' || item[key] === true
        ? 'Yes'
        : item[key] === 'false' || item[key] === false
          ? 'No'
          : '';

    case key?.includes('lock') ? key : null:
      return item[key] === 'true' || item[key] === true
        ? 'Yes'
        : item[key] === 'false' || item[key] === false
          ? 'No'
          : '';
    case key?.includes('status'):
      return item?.[key] ? item?.[key] : 'PENDING';
  }
};

export default formatString;
