import { Box } from '@mui/material';
import { memo } from 'react';
import ContentLoader from 'react-content-loader';

export const Item = (props: any) => (
  <ContentLoader
    uniqueKey="skeleton"
    {...props}
    id="skeleton"
    viewBox="0 0 400 21"
  >
    <rect x="10" y="4" rx="3" ry="3" width="10" height="10" />
    <rect x="35" y="4" rx="0" ry="0" width="90" height="10" />
    <rect x="140" y="4" rx="0" ry="0" width="70" height="10" />
    <rect x="220" y="4" rx="0" ry="0" width="70" height="10" />
    <rect x="300" y="4" rx="0" ry="0" width="60" height="10" />
    <circle cx="380" cy="10" r="5" />
  </ContentLoader>
);
const ListSkeleton = () => {
  return (
    <Box
      sx={{
        width: { lg: '100%', md: '150%', sm: '200%', xs: '250%' },
        height: '100%',
      }}
    >
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
};

export default memo(ListSkeleton);
