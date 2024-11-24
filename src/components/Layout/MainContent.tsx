import { Box } from '@mui/material';
import React, { memo, ReactNode } from 'react';

type MainContentProps = {
  children: ReactNode;

  [x: string]: any;
};

const MainContent: React.FC<MainContentProps> = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.5s ease',
        minHeight: '100vh',
        '& .app-content, & .footerContainer': {
          width: '100%',
          maxWidth: { lg: 1140, xl: 1420 },
          mx: 'auto',
        },
      }}
      className="mainContent"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default memo(MainContent);
