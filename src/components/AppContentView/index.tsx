import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import React, { ReactNode } from 'react';
import AppErrorBoundary from '../AppErrorBoundary';
import AppSuspense from '../AppSuspense';
import AppContentViewWrapper from './AppContentViewWrapper';

type AppContentViewProps = {
  children: ReactNode;
  sxStyle?: SxProps;
};

const AppContentView: React.FC<AppContentViewProps> = ({
  children,
  sxStyle,
}) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          marginTop: { xs: '56px', sm: '70px', md: '70px', xl: '70px' },
          ...sxStyle,
        }}
        className="app-content"
      >
        <AppSuspense>
          <AppErrorBoundary>{children}</AppErrorBoundary>
        </AppSuspense>
      </Box>
    </AppContentViewWrapper>
  );
};

export default AppContentView;
