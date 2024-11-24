import AppCollapsibleTable from '@/components/AppCollapsibleTable';

const getFieldValue = (item: any, key: any, index: number) => {
  if (typeof key === 'object' && !Array.isArray(key) && key !== null) {
    return (
      Boolean(item[key?.parentKey]?.length) && (
        <AppCollapsibleTable
          tableData={item[key?.parentKey]}
          kye={index}
          {...key}
        />
      )
    );
  } else if (typeof key === 'function') {
    return key(item, index);
  }
};

export default getFieldValue;
