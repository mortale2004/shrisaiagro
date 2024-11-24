import { isRoutePermitted } from '@/helpers/permissionHelper';
import { RoutePermittedRole, RouterConfigData } from '@/types/app';
import { Icon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import VerticalNavItem from './VerticalNavItem';

type VerticalItemProps = {
  item: RouterConfigData;
  level: number;
  role_name: RoutePermittedRole;
};

const VerticalItem: React.FC<VerticalItemProps> = ({
  role_name,
  level,
  item,
}) => {
  // const { user } = useAuthUser();
  const pathname = usePathname();

  useEffect(() => {
    if (
      (process as any).browser &&
      pathname === item.url &&
      document.getElementById(pathname)
    ) {
      setTimeout(() => {
        if (document.getElementById(pathname)) {
          (document as any)
            .getElementById(pathname)
            .scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1);
    }
  }, [pathname, item.url]);

  if (!isRoutePermitted(role_name, item.permittedRole)) return;
  // const hasPermission = useMemo(
  //   () => checkPermission(item.permittedRole, user?.role),
  //   [item.permittedRole, user?.role],
  // );

  // if (!hasPermission) {
  //   return null;
  // }

  return (
    <Link
      href={item.url as string}
      style={{ textDecoration: 'none' }}
      id={item.url}
      className={clsx({
        active: item.url === pathname,
      })}
    >
      <VerticalNavItem item={item} level={level} exact={item.exact}>
        {item.icon && (
          <Box component="span">
            <Icon
              sx={{
                fontSize: 18,
                display: 'block',
                mr: 4,
              }}
              className={clsx('nav-item-icon', 'material-icons-outlined')}
              color="action"
            >
              {item.icon}
            </Icon>
          </Box>
        )}
        <ListItemText
          className="nav-item-content"
          primary={item.title}
          classes={{ primary: 'nav-item-text' }}
        />
      </VerticalNavItem>
    </Link>
  );
};

export default React.memo(VerticalItem);
