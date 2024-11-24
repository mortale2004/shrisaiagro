import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

type AppFooterProps = {
  children: ReactNode;
  sx?: object;
};

const AppFooter: React.FC<AppFooterProps> = (props) => {
  const { children, sx } = props;
  return (
    <Box
      sx={{
        px: 5,
        py: 2,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        width: '100%',
        backgroundColor: 'white',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppFooter;
