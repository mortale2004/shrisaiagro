import { initialURL } from '@/constants/app';
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import Link from 'next/link';
import React, { memo } from 'react';

const AppLogo: React.FC = () => {
  return (
    <Link
      href={initialURL}
      style={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
      }}
    >
      <Box
        sx={{
          height: { xs: 36, sm: 70 },
          padding: 2.5,
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          '& img': {
            height: { xs: 29, sm: 45 },
            objectFit: 'contain',
          },
        }}
      >
        {/* <AppImage
          src="/assets/images/logo-with-name.png"
          alt="App Logo"
          width={146}
          height={29}
          priority={true}
        /> */}
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: blue[600],
          }}
        >
          SAI AGRO
        </Typography>
      </Box>
    </Link>
  );
};

export default memo(AppLogo);
