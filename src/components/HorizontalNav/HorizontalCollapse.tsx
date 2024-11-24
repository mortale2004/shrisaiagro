import { Fonts, sideBar } from '@/constants/styles';
import { RoutePermittedRole, RouterConfigData } from '@/types/app';
import {
  Grow,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { memo, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import HorizontalGroup from './HorizontalGroup';
import HorizontalItem from './HorizontalItem';

import { isRoutePermitted } from '@/helpers/permissionHelper';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type HorizontalCollapseProps = {
  item: RouterConfigData;
  nestedLevel: number;
  dense?: number;
  role_name: RoutePermittedRole;
};

const HorizontalCollapse: React.FC<HorizontalCollapseProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const pathname = usePathname();

  if (!isRoutePermitted(props.role_name, props.item.permittedRole)) return;

  const { item, nestedLevel, dense } = props;
  const active = isUrlInChildren(item, pathname);

  const handleToggle = (open: boolean) => {
    setOpened(open);
  };

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
    <List
      sx={{
        py: 0,
        '& .list-item-text': {
          padding: '0 0 0 16px',
        },
      }}
      className="navbarNavSubmenu"
    >
      <Manager>
        <Reference>
          {({ ref }) => (
            <ListItem
              ref={ref}
              sx={{
                textTransform: 'uppercase',
                fontWeight: Fonts.BOLD,
                padding: '0px 12px',
                '&.active, &.active:hover, &.active:focus': {
                  backgroundColor:
                    sideBar.sidebarMenuSelectedBgColor + '!important',
                  color: sideBar.sidebarMenuSelectedTextColor + '!important',
                },
                '&.open': {
                  backgroundColor: 'rgba(0,0,0,.08)',
                },
                '&.dense': {
                  padding: '0px 12px',
                  '& .list-item-text': {
                    padding: '0 0 0 8px',
                  },
                },
              }}
              className={clsx(
                'navItemSubmenu',
                opened && 'open',
                dense && 'dense',
                active && 'active'
              )}
              onMouseEnter={() => handleToggle(true)}
              onMouseLeave={() => handleToggle(false)}
            >
              {item.icon && (
                <Icon
                  sx={{
                    color: active
                      ? sideBar.sidebarMenuSelectedTextColor
                      : 'action',
                    mr: 3.5,
                    fontSize: { xs: 16, xl: 18 },
                  }}
                >
                  {item.icon}
                </Icon>
              )}
              <ListItemText
                sx={{
                  fontWeight: Fonts.BOLD,
                }}
                primary={item.title}
              />
              <Box p={0}>
                <IconButton disableRipple>
                  <Icon
                    sx={{
                      color: active
                        ? sideBar.sidebarMenuSelectedTextColor
                        : 'action',
                    }}
                  >
                    {<MdOutlineKeyboardArrowRight />}
                  </Icon>
                </IconButton>
              </Box>
            </ListItem>
          )}
        </Reference>
        <Popper placement="right">
          {({ ref, style, placement }) =>
            opened && (
              <Box
                ref={ref}
                sx={{
                  boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                  zIndex: 1110 + nestedLevel + 1,
                  ...style,
                  '& .popperClose': {
                    pointerEvents: 'none',
                  },
                }}
                data-placement={placement}
                className={clsx({
                  popperClose: !opened,
                })}
              >
                <Grow in={opened}>
                  <Paper
                    onMouseEnter={() => handleToggle(true)}
                    onMouseLeave={() => handleToggle(false)}
                  >
                    {item.children && (
                      <List
                        sx={{
                          px: 0,
                        }}
                      >
                        {item.children.map((item, index) => (
                          <React.Fragment key={index}>
                            {item.type === 'group' && (
                              <HorizontalGroup
                                role_name={props.role_name}
                                item={item}
                                nestedLevel={nestedLevel + 1}
                              />
                            )}

                            {item.type === 'collapse' && (
                              <HorizontalCollapse
                                role_name={props.role_name}
                                item={item}
                                nestedLevel={nestedLevel + 1}
                              />
                            )}

                            {item.type === 'item' && (
                              <HorizontalItem
                                role_name={props.role_name}
                                item={item}
                                nestedLevel={nestedLevel + 1}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </Paper>
                </Grow>
              </Box>
            )
          }
        </Popper>
      </Manager>
    </List>
  );
};

export default memo(HorizontalCollapse);
