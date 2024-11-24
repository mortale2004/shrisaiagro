const removeFieldsFromData = (data: any, removeFields: string[] = []) => {
  Object.keys(data).map((key) => {
    if (Array.isArray(data[key])) {
      removeFieldsFromData(data[key], removeFields);
    } else if (
      typeof data[key] === 'object' &&
      !Array.isArray(data[key]) &&
      data[key] !== null
    ) {
      removeFieldsFromData(data[key], removeFields);
    } else if (key === '_id') {
      delete data[key];
    } else if (removeFields.includes(key)) {
      delete data[key];
    }
  });
};

export default removeFieldsFromData;
