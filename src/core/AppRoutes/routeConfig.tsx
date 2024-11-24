import { USER_ROLE } from '@/constants/app';
import { RouterConfigData } from '@/types/app';

const routesConfig: RouterConfigData[] = [
  {
    title: 'Company Bill',
    type: 'item',
    permittedRole: [USER_ROLE.SUPER_ADMIN],
    url: '/',
  },
  {
    title: 'Lorry Bill',
    type: 'item',
    permittedRole: [USER_ROLE.SUPER_ADMIN],
    url: '/vehicle',
  },
];

export default routesConfig;
