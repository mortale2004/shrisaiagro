import { RoutePermittedRole, RouterConfigData } from '@/types/app/index';
import List from '@mui/material/List';
import React, { memo } from 'react';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import NavVerticalGroup from './VerticalNavGroup';

type Props = {
  routesConfig: RouterConfigData[];
  role_name: RoutePermittedRole;
};

const VerticalNav: React.FC<Props> = ({ routesConfig, role_name }) => {
  return (
    <List
      sx={{
        position: 'relative',
        padding: 0,
      }}
      component="div"
    >
      {routesConfig.map((item: RouterConfigData, index) => (
        <React.Fragment key={index}>
          {item.type === 'collapse' && (
            <NavVerticalGroup role_name={role_name} item={item} level={0} />
          )}

          {item.type === 'group' && (
            <VerticalCollapse role_name={role_name} item={item} level={0} />
          )}

          {item.type === 'item' && (
            <VerticalItem role_name={role_name} item={item} level={0} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default memo(VerticalNav);
