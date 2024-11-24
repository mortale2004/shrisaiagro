import clsx from 'clsx';
import React, { memo } from 'react';
import VerticalCollapse from '../VerticalCollapse';
import VerticalItem from '../VerticalItem';
import VerticalNavGroupItem from './VerticalNavGroupItem';

import { sideBar } from '@/constants/styles';
import { isRoutePermitted } from '@/helpers/permissionHelper';
import { RoutePermittedRole, RouterConfigData } from '@/types/app/index';

type VerticalNavGroupProps = {
  item?: RouterConfigData;
  level?: any;
  role_name: RoutePermittedRole;
};

const VerticalNavGroup: React.FC<VerticalNavGroupProps> = ({
  role_name,
  item,
  level,
}) => {
  if (!isRoutePermitted(role_name, item?.permittedRole)) return;

  return (
    <>
      <VerticalNavGroupItem
        level={level}
        sidebarTextColor={sideBar.sidebarMenuSelectedTextColor}
        component="div"
        className={clsx('nav-item nav-item-header')}
      >
        {item?.title}
      </VerticalNavGroupItem>

      {item!.children && (
        <>
          {item!.children.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === 'group' && (
                <NavVerticalGroup
                  role_name={role_name}
                  item={item}
                  level={level}
                />
              )}

              {item.type === 'collapse' && (
                <VerticalCollapse
                  role_name={role_name}
                  item={item}
                  level={level}
                />
              )}

              {item.type === 'item' && (
                <VerticalItem role_name={role_name} item={item} level={level} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

const NavVerticalGroup = VerticalNavGroup;

export default memo(NavVerticalGroup);
