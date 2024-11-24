import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import React, { memo } from 'react';

type AppTooltipProps = {
  title: any;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  children: React.ReactElement<any, any>;
};

const AppTooltip: React.FC<AppTooltipProps> = ({
  title,
  placement = 'top',
  children,
}) => {
  return (
    <Tooltip
      title={title}
      TransitionComponent={Zoom}
      placement={placement}
      arrow
    >
      {children}
    </Tooltip>
  );
};
export default memo(AppTooltip);
