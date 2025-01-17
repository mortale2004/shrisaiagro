import { styled } from '@mui/material/styles';
import React, { memo, ReactNode } from 'react';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
const StyledSimpleBarReact = styled(SimpleBarReact)(() => ({
  height: '100%',
  width: '100%',
}));
type AppScrollbarProps = {
  children: ReactNode;
  className?: string;

  [x: string]: any;
};

const AppScrollbar: React.FC<AppScrollbarProps> = (props) => {
  const { children, ...others } = props;

  return <StyledSimpleBarReact {...others}>{children}</StyledSimpleBarReact>;
};

export default memo(AppScrollbar);
