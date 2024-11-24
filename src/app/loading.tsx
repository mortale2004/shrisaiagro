import AppLoader from '@/components/AppLoader';
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <AppLoader />
    </Box>
  );
};

export default Loading;
