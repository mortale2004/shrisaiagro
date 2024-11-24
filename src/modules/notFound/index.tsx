'use client';
import { initialURL } from '@/constants/app';
import { Fonts } from '@/constants/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const onGoBackToHome = () => {
    router.push(initialURL);
  };

  return (
    <Box
      sx={{
        py: { xl: 8 },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          mb: { xs: 4, xl: 8 },
          width: '100%',
          maxWidth: { xs: 200, sm: 300, xl: 706 },
          '& img': {
            width: '100%',
            maxWidth: 400,
          },
        }}
      >
        <Image
          alt="404"
          src={'/assets/images/404.png'}
          width={400}
          height={400}
        />
      </Box>
      <Box
        sx={{
          mb: { xs: 4, xl: 5 },
        }}
      >
        <Box
          component="h3"
          sx={{
            mb: { xs: 3, xl: 4 },
            fontSize: { xs: 20, md: 24 },
            fontWeight: Fonts.MEDIUM,
          }}
        >
          404 Error.
        </Box>
        <Box
          sx={{
            mb: { xs: 4, xl: 5 },
            color: grey[600],
            fontSize: 16,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          <Typography>We can&apos;t find the page that</Typography>
          <Typography>you are looking for.</Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: Fonts.MEDIUM,
            fontSize: 16,
            textTransform: 'capitalize',
          }}
          onClick={onGoBackToHome}
        >
          Go Back To Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
