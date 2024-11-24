import Image from 'next/image';
import { CSSProperties, memo } from 'react';

type AppImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

const AppImage = ({ src, alt, priority, ...props }: AppImageProps) => {
  return (
    <picture>
      <Image priority={priority} src={`${src}`} alt={alt} {...props} />
    </picture>
  );
};

export default memo(AppImage);
