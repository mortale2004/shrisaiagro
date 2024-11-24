import { Button, ButtonOwnProps } from '@mui/material';
import { memo, ReactNode } from 'react';

const AppButton = ({
  children,
  onClick,
  type = 'button',
  disabled,
  variant = 'contained',
  sx,
  startIcon,
  fullWidth,
  size = 'medium',
  ...props
}: {
  fullWidth?: boolean;
  startIcon?: ReactNode;
  type?: any;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean | undefined;
  variant?: ButtonOwnProps['variant'];
  props?: any;
  sx?: object;
  size?: any;
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      sx={sx}
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default memo(AppButton);
