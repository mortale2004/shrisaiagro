import { Fonts, sideBar } from '@/constants/styles';
import { isRoutePermitted } from '@/helpers/permissionHelper';
import { RoutePermittedRole, RouterConfigData } from '@/types/app';
import { Icon, ListItem } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo } from 'react';

type HorizontalItemProps = {
  item: RouterConfigData;
  nestedLevel?: number;
  dense?: boolean;
  role_name: RoutePermittedRole;
};

const HorizontalItem: React.FC<HorizontalItemProps> = (props) => {
  const pathname = usePathname();

  if (!isRoutePermitted(props?.role_name, props.item.permittedRole)) return;

  const { item, dense } = props;
  const active = isUrlInChildren(item, pathname);

  function isUrlInChildren(parent: RouterConfigData, url: string) {
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
        url.includes(parent!.children![i].url!)
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <Link href={item.url as string} style={{ textDecoration: 'none' }}>
      <ListItem
        className={clsx('navItemSubmenu', dense && 'dense', {
          active: item.url === pathname,
        })}
        sx={{
          minHeight: 40,
          padding: '4px 12px',
          color: (theme) => theme.palette.text.primary,
          textDecoration: 'none!important',
          // minWidth: 160,
          '&.AppNavLinkTextSubmenu': {
            fontWeight: Fonts.BOLD,
          },
          '&.active': {
            backgroundColor: sideBar.sidebarMenuSelectedBgColor,
            color: sideBar.sidebarMenuSelectedTextColor + '!important',
            pointerEvents: 'none',
            '& .list-item-text-primary': {
              color: 'inherit',
            },
            '& .list-item-icon': {
              color: 'inherit',
            },
          },
          '& .list-item-text': {
            padding: '0 0 0 16px',
          },
          '&.dense': {
            padding: '4px 12px',
            minHeight: 40,
            '& .list-item-text': {
              padding: '0 0 0 8px',
            },
          },
        }}
      >
        {item.icon && (
          <Icon
            sx={{
              color: (theme) =>
                active ? theme.palette.secondary.main : 'action',
              mr: 3,
              fontSize: { xs: 16, xl: 18 },
            }}
            className="navLinkIcon"
          >
            {item.icon}
          </Icon>
        )}
        {/* <ListItemText
          className="AppNavLinkTextSubmenu"
          sx={{
            fontWeight: 600,
          }}
          primary={item.title}
        /> */}
        <li
          style={{
            fontWeight: '600',
            textTransform: 'uppercase',
            textWrap: 'nowrap',
          }}
        >
          {item.title}
        </li>
        {item.count && (
          <Box ml={4}>
            <Badge
              badgeContent={item.count}
              sx={{
                color: item.color,
              }}
            />
          </Box>
        )}
      </ListItem>
    </Link>
  );
};

export default memo(HorizontalItem);
