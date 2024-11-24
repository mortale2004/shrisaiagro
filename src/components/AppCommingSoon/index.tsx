import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

import { Fonts } from '@/constants/styles';
import AppImage from '../AppImage';

const AppComingSoon = () => {
  return (
    <>
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
            '& svg': {
              width: '100%',
              maxWidth: 400,
            },
          }}
        >
          <AppImage
            src="/assets/images/comingsoon.png"
            alt="Comming Soon"
            width={600}
            height={600}
          />
        </Box>
        <Box
          sx={{
            mb: { xs: 3, xl: 4 },
            fontSize: { xs: 20, md: 24 },
            fontWeight: Fonts.MEDIUM,
          }}
        >
          Coming Soon!
        </Box>

        <Box
          sx={{
            mb: { xs: 4, xl: 5 },
            color: grey[600],
          }}
        >
          <Typography style={{ fontSize: 18, marginTop: 3 }}>
            We are updating this page
          </Typography>
          <Typography style={{ fontSize: 18 }}>
            and we will back soon.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AppComingSoon;
