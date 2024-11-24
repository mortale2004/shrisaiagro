'use client';
import { sideBarAtom } from '@/store/layout';
import { RouterConfigData } from '@/types/app';
import { usePathname } from 'next/navigation';
import React, { memo, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import AppContentView from '../AppContentView';
import AppHeader from './Header';
import MainContent from './MainContent';
import AppSidebar from './SideBar';

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};

const excludeFooter = ['/voting/dashboard'];
const Layout = ({ children, routesConfig }: Props) => {
  const pathname = usePathname();
  const setSideBarOpen = useSetRecoilState(sideBarAtom);

  useEffect(() => {
    setSideBarOpen(false);
  }, [pathname, setSideBarOpen]);

  return (
    <>
      <AppSidebar routesConfig={routesConfig} />
      <MainContent>
        <AppHeader routesConfig={routesConfig} />
        <AppContentView>{children}</AppContentView>
      </MainContent>
    </>
  );
};

export default memo(Layout);
