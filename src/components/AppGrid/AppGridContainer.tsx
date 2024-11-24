import { Grid } from '@mui/material';
import React, { memo } from 'react';

const AppGridContainer = ({
  children,
  spacing = 3,
  sx = {},
  ...rest
}: {
  sx?: object;
  children: React.ReactNode;
  spacing?: number;
  rest?: any;
}) => {
  return (
    <Grid sx={sx} container spacing={spacing} {...rest}>
      {children}
    </Grid>
  );
};

export default memo(AppGridContainer);
