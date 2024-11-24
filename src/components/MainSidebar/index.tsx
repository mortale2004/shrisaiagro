import React, { memo, ReactNode } from 'react';
import SidebarBGWrapper from './SidebarBGWrapper';
import SidebarWrapper from './SidebarWrapper';

type MainSidebarProps = {
  children: ReactNode;
};

const MainSidebar: React.FC<MainSidebarProps> = ({ children }) => {
  return (
    <SidebarWrapper>
      <SidebarBGWrapper>{children}</SidebarBGWrapper>
    </SidebarWrapper>
  );
};

export default memo(MainSidebar);
