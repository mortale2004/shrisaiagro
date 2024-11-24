import { sideBar } from '@/constants/styles';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import React, { memo, ReactNode } from 'react';

type SidebarBgWrapperProps = {
  children: ReactNode;
};

const SidebarBgWrapper: React.FC<SidebarBgWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: sideBar.sidebarBgColor,
        color: sideBar.sidebarTextColor,
        boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.04)',
        '&:before': {
          content: '""',
          display: 'none',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.5),
        },
        '& > *': {
          position: 'relative',
          zIndex: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default memo(SidebarBgWrapper);
