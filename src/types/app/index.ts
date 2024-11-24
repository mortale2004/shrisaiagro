import { ReactNode } from 'react';

export type RoutePermittedRole =
  | 'SUPER_ADMIN'
  | 'USER'
  | 'PUBLIC'
  | 'ADMIN'
  | 'BOOTH_HEAD';

export type RouterConfigData = {
  title: string;
  icon?: string | ReactNode;
  type: 'item' | 'group' | 'collapse' | 'divider';
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole[];
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
};

export type DeviceType = 'Mobile' | 'Tablet' | 'Desktop';
