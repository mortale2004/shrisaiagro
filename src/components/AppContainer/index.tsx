import { memo, ReactNode } from 'react';
import AppContainerWrapper from './AppContainerWrapper';

const AppContainer = ({
  children,
  sx,
  links,
  breadCrumbName,
}: {
  children: ReactNode;
  sx?: object;
  links?: any[];
  breadCrumbName?: string;
}) => {
  return (
    <AppContainerWrapper links={links} breadCrumbName={breadCrumbName} sx={sx}>
      {children}
    </AppContainerWrapper>
  );
};

export default memo(AppContainer);
