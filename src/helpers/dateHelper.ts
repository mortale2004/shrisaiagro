import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat'; // load on demand
import relativeTime from 'dayjs/plugin/relativeTime'; // load on demand
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(AdvancedFormat); // use plugin
dayjs.extend(relativeTime); // use plugin

export const getDateObject = (dateObject: Date) => {
  if (dateObject) return dayjs(dateObject);
  return dayjs();
};

export const getFormattedDate = (dateObject: Date, format = 'DD MMM YYYY') => {
  if (dateObject) return dayjs(dateObject).utc().format(format);
  return dayjs().utc().format(format);
};

export const getCurrentMonthDate = (date: any, format = 'DD MMM YYYY') => {
  if (date) return dayjs().date(date).format(format);

  return dayjs().format(format);
};

export const getFormattedDateTime = (date: any, format = 'DD MMM YYYY LT') => {
  if (date) return dayjs(date).utc().format(format);
  return dayjs().utc().format(format);
};

export const getFormattedTime = (date: any, format = 'LT') => {
  if (date) return dayjs(date).utc().format(format);
  return dayjs().utc().format(format);
};

export const timeFromNow = (date: any) => {
  const timestamp = dayjs(date).format('X');
  const newDate = dayjs.unix(Number(timestamp));
  return dayjs(newDate).fromNow();
};

export const addDays = (
  days: any,
  currentDate = new Date(),
  format = 'DD MMM YYYY'
) => {
  const date = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000);
  if (date) return dayjs(date).utc().format(format);
  return dayjs().utc().format(format);
};

export const getHoursAndMinutesFromMinutes = (minutes: number) => {
  if (minutes) {
    minutes = Math.abs(minutes);
    if (minutes < 60) {
      return `${minutes} M.`;
    }
    return `${Math.trunc(minutes / 60)} H. ${minutes % 60} M.`;
  } else {
    return null;
  }
};
