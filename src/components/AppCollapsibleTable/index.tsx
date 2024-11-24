'use client';
import formatString from '@/helpers/stringHelper';
import getFieldValue from '@/helpers/tableCellFormatter';
import {
  Collapse,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { Fragment, memo, useState } from 'react';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import AppTable from '../AppTable';

type AppCollapsibleTableProps = {
  isLoading?: boolean;
  isEmpty?: boolean;
  stickyHeader?: boolean;
  tableHeadings?: any;
  tableData?: any;
  tableDataKeys?: any;
  isTableCollapsed?: boolean;
  isCollapsibleTable?: boolean;
  sx?: object;
};

const AppCollapsibleTable: React.FC<AppCollapsibleTableProps> = ({
  isLoading = false,
  isEmpty = false,
  stickyHeader = true,
  tableHeadings = [],
  tableData,
  tableDataKeys,
  isTableCollapsed = true,
  isCollapsibleTable = true,
  sx,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isTableCollapsed);
  return (
    <Fragment>
      <TableCell>
        {isCollapsibleTable && (
          <Fragment>
            {' '}
            {isCollapsed ? (
              <IconButton
                onClick={() => setIsCollapsed(false)}
                sx={buttonStyles}
              >
                <MdOutlineExpandMore />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => setIsCollapsed(true)}
                sx={buttonStyles}
              >
                <MdOutlineExpandLess />
              </IconButton>
            )}
          </Fragment>
        )}
        <Collapse unmountOnExit in={isCollapsibleTable ? !isCollapsed : true}>
          <AppTable
            isLoading={isLoading}
            isEmpty={isEmpty}
            stickyHeader={stickyHeader}
            sxStyle={{
              overflow: 'none',
              '& th': {
                zIndex: 1,
                p: 0,
              },
              '& td': {
                p: 0.5,
              },
              ...sx,
              my: 2,
            }}
          >
            <TableHead>
              <TableRow>
                {tableHeadings?.map((header: string, index: number) => (
                  <TableCell variant="head" key={index}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((dataItem: any, rowIndex: number) => (
                <TableRow key={rowIndex}>
                  {tableDataKeys?.map((key: any, index: number) =>
                    typeof key === 'string' ? (
                      <TableCell key={index}>
                        {formatString(dataItem, key)}
                      </TableCell>
                    ) : (
                      <TableCell key={index}>
                        {getFieldValue(dataItem, key, rowIndex)}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          </AppTable>
        </Collapse>
      </TableCell>
    </Fragment>
  );
};

export default memo(AppCollapsibleTable);

const buttonStyles = {
  borderRadius: '0.3rem',
  padding: 0,
  width: '100%',
};
