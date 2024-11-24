'use client';
import { debounce } from 'lodash';
import { useLayoutEffect, useState } from 'react';

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (!window) {
      return;
    }

    setIsMobile(window?.innerWidth < 768);
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', debounce(updateSize, 250));
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useDeviceDetection;
