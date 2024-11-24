import { RoutePermittedRole } from '@/types/app';

export const isRoutePermitted = (
  roleName: RoutePermittedRole,
  routeRoles: RoutePermittedRole[] = []
) => {
  return routeRoles.includes(roleName);
};
