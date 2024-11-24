import TablePagination from '@mui/material/TablePagination';
import React from 'react';

type AppsPaginationProps = {
  count: number;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  rowsPerPage?: number;
  [x: string]: any;
  hasRowsPerPageOptions?: boolean;
};

const rowsPerPageOptions = [
  50, 100, 300, 700, 1000, 2000, 5000, 10000, 15000, 20000,
];

const AppsPagination: React.FC<AppsPaginationProps> = ({
  count,
  page,
  rowsPerPage = 15,
  onPageChange,
  onRowsPerPageChange,
  hasRowsPerPageOptions = true,
}) => {
  // const rowsPerPageOptions = useMemo(
  //   () =>
  //     // [
  //     //   PAGE_SIZE,
  //     //   ...Array.from({ length: Math.ceil(count / 3) }, (_, index) =>
  //     //     Number((index + 1) * 4)
  //     //   ),
  //     // ].sort((a, b) => a - b),
  //     [50, 100, 300, , 700, 1000, 2000],
  //   [count]
  // );

  return (
    <TablePagination
      labelRowsPerPage=""
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={hasRowsPerPageOptions ? rowsPerPageOptions : []}
    />
  );
};

export default AppsPagination;
