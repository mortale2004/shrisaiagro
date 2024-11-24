import { Card } from '@mui/material';
import { memo, ReactNode } from 'react';

const AppCard = ({ children, sx }: { children: ReactNode; sx?: object }) => {
  return <Card sx={{ borderRadius: 3, p: 5, ...sx }}>{children}</Card>;
};

export default memo(AppCard);
