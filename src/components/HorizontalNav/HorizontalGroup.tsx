import { Fonts } from '@/constants/styles';
import { isRoutePermitted } from '@/helpers/permissionHelper';
import { RoutePermittedRole, RouterConfigData } from '@/types/app';
import {
  Grow,
  Icon,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { memo, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import HorizontalCollapse from './HorizontalCollapse';
import HorizontalItem from './HorizontalItem';

type HorizontalCollapseProps = {
  item: RouterConfigData;
  nestedLevel: number;
  dense?: number;
  role_name: RoutePermittedRole;
};

const HorizontalGroup: React.FC<HorizontalCollapseProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const pathname = usePathname();

  if (!isRoutePermitted(props.role_name, props.item.permittedRole)) return;
  const { item, nestedLevel } = props;

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
    <Manager>
      <Reference>
        {({ ref }) => (
          <ListItem
            ref={ref}
            className={clsx(
              'navItem',
              isUrlInChildren(item, pathname) && 'active'
            )}
            onMouseEnter={() => handleToggle(true)}
            onMouseLeave={() => handleToggle(false)}
          >
            {item.icon && (
              <Icon color="action" className="navLinkIcon">
                {item.icon}
              </Icon>
            )}
            <Typography
              component={'span'}
              sx={{
                textTransform: 'uppercase',
                fontWeight: Fonts.BOLD,
              }}
            >
              {item.title}
            </Typography>
            {nestedLevel > 0 && (
              <IconButton
                sx={{
                  ml: 2,
                }}
                disableRipple
              >
                <Icon
                  sx={{
                    fontSize: 18,
                  }}
                  className="arrow-icon"
                >
                  keyboard_arrow_right
                </Icon>
              </IconButton>
            )}
          </ListItem>
        )}
      </Reference>
      {/*<ClientOnlyPortal selector='#root'>*/}
      <Popper placement={nestedLevel === 0 ? 'bottom-start' : 'right'}>
        {({ ref, style, placement }) =>
          opened && (
            <Box
              ref={ref}
              sx={{
                ...style,
                boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                zIndex: 1110 + nestedLevel,
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
                              nestedLevel={nestedLevel}
                            />
                          )}

                          {item.type === 'collapse' && (
                            <HorizontalCollapse
                              role_name={props.role_name}
                              item={item}
                              nestedLevel={nestedLevel}
                            />
                          )}

                          {item.type === 'item' && (
                            <HorizontalItem
                              role_name={props.role_name}
                              item={item}
                              nestedLevel={nestedLevel}
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
  );
};

export default memo(HorizontalGroup);
