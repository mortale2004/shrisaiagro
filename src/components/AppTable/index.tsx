import { Box, Table } from '@mui/material';
import { ReactNode } from 'react';
import AppNoDataFound from '../AppNoDataFound';
import ListSkeleton from '../AppSkeleton/ListSkeleton';

const AppTable = ({
  isEmpty,
  isLoading = true,
  children,
  stickyHeader = true,
  sxStyle,
  boxStyles,
  id,
}: {
  isEmpty?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  stickyHeader?: boolean;
  sxStyle?: object;
  boxStyles?: object;
  id?: string;
}) => {
  return isLoading ? (
    <ListSkeleton />
  ) : isEmpty ? (
    <AppNoDataFound />
  ) : (
    <Box
      sx={{
        overflow: 'scroll',
        height: '100%',

        ...boxStyles,
      }}
      id={id}
    >
      <Table
        stickyHeader={stickyHeader}
        sx={{
          '& tbody': {
            overflow: 'scroll',
          },
          '& tr > th, & tr > td': {
            whiteSpace: 'nowrap',
            fontSize: 14,
            animation: 'transition.slideUpIn',
            borderCollapse: 'unset !important',
          },
          '& td, & th': {
            padding: '10px 5px',
            '&:first-of-type': {
              paddingLeft: '20px',
            },
            '&:last-of-type': {
              paddingLeft: '20px',
            },
          },
          '& tbody tr': {
            position: 'relative',
            '&.rootCheck': {
              // backgroundColor: (theme) =>
              //   alpha(theme.palette.primary.main, 0.1),
              // boxShadow: (theme) =>
              //   `0 3px 5px 0 ${alpha(theme.palette.common.black, 0.08)}`,
            },
            '& .conActionHoverHideRoot': {
              transition: 'all 0.4s ease',
            },
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              '& .conActionHoverRoot': {
                opacity: 1,
                visibility: 'visible',
                right: 5,
              },
              '& .conActionHoverHideRoot': {
                opacity: 0,
                visibility: 'hidden',
              },
            },
          },
          ...sxStyle,
        }}
      >
        {children}
      </Table>
    </Box>
  );
};

export default AppTable;
