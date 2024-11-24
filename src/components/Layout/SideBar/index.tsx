import { sideBarAtom } from '@/store/layout';
import { RouterConfigData } from '@/types/app/index';
import Drawer from '@mui/material/Drawer';
import React, { memo } from 'react';
import { useRecoilState } from 'recoil';
import AppScrollbar from '../../AppScrollBar';
import MainSidebar from '../../MainSidebar';
import VerticalNav from '../../VerticalNav';
import StandardSidebarWrapper from './StandardSidebarWrapper';

type AppSidebarProps = {
  routesConfig: RouterConfigData[];
};

const AppSidebar: React.FC<AppSidebarProps> = ({ routesConfig }) => {
  const [isSideBarOpen, setSideBarOpen] = useRecoilState(sideBarAtom);

  return (
    <Drawer
      anchor={'left'}
      open={isSideBarOpen}
      onClose={() => setSideBarOpen(false)}
      style={{ position: 'absolute' }}
    >
      <StandardSidebarWrapper className="standard-sidebar">
        <MainSidebar>
          <AppScrollbar
            sx={{
              py: 2,
              height: 'calc(100vh - 70px) !important',
            }}
            scrolltotop="false"
          >
            <VerticalNav routesConfig={routesConfig} role_name="SUPER_ADMIN" />
          </AppScrollbar>
        </MainSidebar>
      </StandardSidebarWrapper>
    </Drawer>
  );
};
AppSidebar.displayName = 'AppSidebar';
export default memo(AppSidebar);
