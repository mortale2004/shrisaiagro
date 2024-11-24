import { sideBar } from '@/constants/styles';
import { isRoutePermitted } from '@/helpers/permissionHelper';
import { RoutePermittedRole, RouterConfigData } from '@/types/app';
import { Collapse, Icon, IconButton, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import VerticalItem from '../VerticalItem';
import VerticalCollapseItem from './VerticalCollapseItem';

const needsToBeOpened = (pathname: string, item: RouterConfigData): boolean => {
  return !!(pathname && isUrlInChildren(item, pathname));
};

const isUrlInChildren = (parent: RouterConfigData, url: string): boolean => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url || '')
    ) {
      return true;
    }
  }

  return false;
};

type VerticalCollapseProps = {
  item: RouterConfigData;
  level: number;
  role_name: RoutePermittedRole;
};

const VerticalCollapse: React.FC<VerticalCollapseProps> = ({
  item,
  level,
  role_name,
}) => {
  const pathname: any = usePathname();
  useEffect(() => {
    if (needsToBeOpened(pathname, item)) {
      setOpen(true);
    }
  }, [pathname, item]);

  const [open, setOpen] = useState<boolean>(() =>
    needsToBeOpened(pathname, item)
  );

  if (!isRoutePermitted(role_name, item.permittedRole)) return;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <VerticalCollapseItem
        level={level}
        sidebarTextColor={sideBar.sidebarMenuSelectedTextColor}
        button
        component="div"
        className={clsx('menu-vertical-collapse', open && 'open')}
        onClick={handleClick}
      >
        {item.icon && (
          <Box component="span">
            <Icon
              sx={{ mr: 4 }}
              color="action"
              className={clsx('nav-item-icon')}
            >
              {item.icon}
            </Icon>
          </Box>
        )}
        <ListItemText
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 14,
          }}
          className="nav-item-content"
          classes={{ primary: clsx('nav-item-text') }}
          primary={item.title}
        />
        <IconButton
          className="nav-item-icon-arrow-btn"
          sx={{ p: 0, mr: 0.75 }}
          disableRipple
          size="large"
        >
          <Icon className="nav-item-icon-arrow" color="inherit">
            {open ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </Icon>
        </IconButton>
      </VerticalCollapseItem>

      {item.children && (
        <Collapse in={open} className="collapse-children">
          {item.children.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === 'collapse' && (
                <VerticalCollapse
                  role_name={role_name}
                  item={item}
                  level={level + 1}
                />
              )}

              {item.type === 'item' && (
                <VerticalItem
                  role_name={role_name}
                  item={item}
                  level={level + 1}
                />
              )}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default React.memo(VerticalCollapse);
