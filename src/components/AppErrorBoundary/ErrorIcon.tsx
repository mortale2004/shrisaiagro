import { memo } from 'react';
import AppImage from '../AppImage';

const ErrorIcon = () => {
  return (
    <AppImage
      alt="something-wrong"
      src={`/assets/images/something-wrong.png`}
      width={400}
      height={400}
    />
  );
};

export default memo(ErrorIcon);
