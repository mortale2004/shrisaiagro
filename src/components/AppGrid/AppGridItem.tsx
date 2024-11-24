import { Grid } from '@mui/material';
import { memo, ReactNode } from 'react';

const AppGridItem = ({
  children,
  xs = 12,
  md,
  lg,
  sm,
  xl,
  sx = {},
  className = '',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  rest?: any;
  xl?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  sx?: object;
}) => {
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      className={className}
      md={md}
      lg={lg}
      sx={sx}
      xl={xl}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default memo(AppGridItem);
