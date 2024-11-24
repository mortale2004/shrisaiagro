import { USER_ROLE } from '@/constants/app';
import { RouterConfigData } from '@/types/app/index';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import React, { memo } from 'react';
import HorizontalCollapse from './HorizontalCollapse';
import HorizontalGroup from './HorizontalGroup';
import HorizontalItem from './HorizontalItem';

type Props = {
  routesConfig: RouterConfigData[];
  user?: any;
};
const HorizontalNav = ({ routesConfig, user }: Props) => {
  return (
    <List className="navbarNav">
      {routesConfig.map((item: RouterConfigData, index) => (
        <React.Fragment key={index}>
          {item.type === 'group' && (
            <HorizontalGroup
              role_name={user?.role_name || USER_ROLE.PUBLIC}
              item={item}
              nestedLevel={0}
            />
          )}

          {item.type === 'collapse' && (
            <HorizontalCollapse
              role_name={user?.role_name || USER_ROLE.PUBLIC}
              item={item}
              nestedLevel={0}
            />
          )}

          {item.type === 'item' && (
            <HorizontalItem
              role_name={user?.role_name || USER_ROLE.PUBLIC}
              item={item}
              nestedLevel={0}
            />
          )}

          {item.type === 'divider' && <Divider sx={{ my: 5 }} />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default memo(HorizontalNav);
