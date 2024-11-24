import { Box } from '@mui/material';
import { memo } from 'react';
import AppImage from '../AppImage';

const AppNoDataFound = () => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        height: '100%',
        flex: 1,
        display: 'flex',
        p: 2,
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: 'transparent',
        borderRadius: '4px',
        textAlign: 'center',
        maxHeight: '70vh',
        img: {
          height: '80%',
          width: '80%',
          objectFit: 'contain',
        },
      }}
    >
      <AppImage
        src="/assets/images/no_data_found.svg"
        width={700}
        height={700}
        alt="No Data Found"
      />
    </Box>
  );
};

export default memo(AppNoDataFound);
