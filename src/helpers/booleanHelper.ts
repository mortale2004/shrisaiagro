export const getBoolean = (value: any) => {
  if (value) {
    return value === 'true' || value === true ? true : false;
  }
  return false;
};
