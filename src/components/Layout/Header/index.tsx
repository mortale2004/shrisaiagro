import { sideBar } from '@/constants/styles';
import { RouterConfigData } from '@/types/app/index';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { memo } from 'react';
import AppLogo from '../../AppLogo';
import HorizontalNav from '../../HorizontalNav';
import SideBarToggleButton from './SideBarToggleButton';
type Props = {
  routesConfig: RouterConfigData[];
};
const AppHeader = ({ routesConfig }: Props) => {
  return (
    <AppBar
      color="inherit"
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        width: {
          xs: '100%',
        },
      }}
      className="app-bar"
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: { xs: 36, sm: 50 },
          px: { xs: 0 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { lg: 1140, xl: 1420 },
            mx: 'auto',
            px: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SideBarToggleButton />

          <Box
            sx={{
              mr: 2,
              '& .app-logo': {
                pl: 0,
              },
              '& .logo-text': {
                display: { xs: 'none', sm: 'block' },
              },
            }}
          >
            <AppLogo />
          </Box>
          <Hidden lgDown>
            <Box
              sx={{
                ml: 5,
                '& .navbarNav': {
                  display: 'flex',
                  padding: 0,
                  mx: { xs: -4, lg: -5 },
                  marginRight: -16,
                },
                '& .navItem': {
                  width: 'auto',
                  cursor: 'pointer',
                  px: { xs: 4, lg: 5 },
                  py: 1,
                  borderRadius: 1,
                  '&.active': {
                    color: sideBar.sidebarMenuSelectedTextColor,
                    backgroundColor: alpha(
                      sideBar.sidebarMenuSelectedBgColor,
                      0.8
                    ),
                    '& .navLinkIcon': {
                      color: (theme) => theme.palette.secondary.main,
                    },
                  },
                },
                '& .navLinkIcon': {
                  mr: 2.5,
                  color: (theme) => theme.palette.primary.main,
                  fontSize: 15,
                },
              }}
            >
              <HorizontalNav
                routesConfig={routesConfig}
                user={{
                  role_name: 'SUPER_ADMIN',
                }}
              />
            </Box>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default memo(AppHeader);
