import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { memo } from 'react';

const AppSlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  // eslint-disable-next-line no-undef
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default memo(AppSlideTransition);
