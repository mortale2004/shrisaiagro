import { Fonts } from '@/constants/styles';
import { Typography } from '@mui/material';
import { memo, ReactNode } from 'react';

const AppFormHeader = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: object;
}) => {
  return (
    <Typography
      component={'h2'}
      sx={{
        fontWeight: Fonts.BOLD,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default memo(AppFormHeader);
