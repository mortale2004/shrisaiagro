import { DeviceType } from '@/types/app';

export const detectDeviceType: () => DeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(
    userAgent
  );
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(
    userAgent
  );
  if (isMobile) return 'Mobile';
  if (isTablet) return 'Tablet';
  return 'Desktop';
};
