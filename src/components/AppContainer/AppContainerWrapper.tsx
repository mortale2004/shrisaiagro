import { Fonts } from '@/constants/styles';
import useDeviceDetection from '@/hooks/useDeviceDetection';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { memo, ReactNode } from 'react';

const AppContainerWrapper = ({
  children,
  sx,
  links,
  breadCrumbName,
  ...rest
}: {
  links?: any[];
  breadCrumbName?: string;
  sx?: object;
  children: ReactNode;
}) => {
  const isMobile = useDeviceDetection();
  return (
    <Box
      sx={{
        padding: { xl: '20px', lg: '20px', md: '10px', sm: '5px', xs: '2px' },
      }}
    >
      <Box
        sx={{
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          [isMobile ? 'minHeight' : 'height']: {
            xs: `calc(100vh - 64px - 40px) !important`,
            sm: `calc(100vh - 80px - 40px) !important`,
            md: `calc(100vh - 90px - 40px) !important`,
            lg: `calc(100vh - 110px - 40px) !important`,
            xl: `calc(100vh - 110px - 40px) !important`,
          },
          ...sx,
        }}
      >
        {breadCrumbName && (
          <Box
            sx={{
              p: 3,
              mb: 0,
              pb: 0,
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              {links?.map((link, index) => (
                <Link
                  key={index}
                  underline="hover"
                  color="inherit"
                  href={link?.href}
                >
                  {link?.name}
                </Link>
              ))}
              <Typography
                sx={{
                  fontWeight: Fonts.SEMI_BOLD,
                }}
                color="text.primary"
              >
                {breadCrumbName}
              </Typography>
            </Breadcrumbs>
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default memo(AppContainerWrapper);
