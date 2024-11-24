'use client';
import { Fonts } from '@/constants/styles';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

type UserInfoProps = {
  user?: any;
  isUserNameVisible?: boolean;
};
const UserInfo = ({ user, isUserNameVisible = true }: UserInfoProps) => {
  const getUserAvatar = () => {
    if (user.first_name) {
      return user.first_name.charAt(0).toUpperCase();
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!user) {
    return (
      <Button
        onClick={() => {
          router.push('/login');
        }}
      >
        Login
      </Button>
    );
  }
  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
        className="user-info"
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {user.photo_url ? (
            <Avatar
              sx={{
                height: { xs: 29, sm: 44 },
                width: { xs: 29, sm: 44 },
                fontSize: 24,
                backgroundColor: orange[500],
              }}
              src={user.photo_url}
            />
          ) : (
            <Avatar
              sx={{
                height: { xs: 29, sm: 44 },
                width: { xs: 29, sm: 44 },
                fontSize: 24,
                backgroundColor: orange[500],
              }}
            >
              {getUserAvatar()}
            </Avatar>
          )}
        </Box>
        {isUserNameVisible && (
          <Box
            sx={{
              width: 'calc(100% - 60px)',
              ml: 1.5,
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontSize: 14,
                fontWeight: Fonts.MEDIUM,
              }}
            >
              {user.first_name} <MdExpandMore />
            </Typography>

            {/* <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <span> Online</span>
          </Typography> */}
          </Box>
        )}
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default memo(UserInfo);
