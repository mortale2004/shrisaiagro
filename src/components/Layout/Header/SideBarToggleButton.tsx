import { sideBarAtom } from '@/store/layout';
import { Hidden, IconButton } from '@mui/material';
import { MdMenu } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';

const SideBarToggleButton = () => {
  const setSideBarOpen = useSetRecoilState(sideBarAtom);

  return (
    <Hidden lgUp>
      <IconButton
        sx={{
          marginRight: (theme) => theme.spacing(2),
          color: 'text.secondary',
          '& svg': {
            width: { xs: 29, sm: 35 },
            height: { xs: 29, sm: 35 },
          },
        }}
        edge="start"
        className="menu-btn"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setSideBarOpen(true)}
        size="large"
      >
        <MdMenu />
      </IconButton>
    </Hidden>
  );
};

export default SideBarToggleButton;
