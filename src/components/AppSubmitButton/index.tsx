import { LoadingButton } from '@mui/lab';
import { ReactNode } from 'react';
import { FaSave } from 'react-icons/fa';

const AppSubmitButton = ({
  startIcon = <FaSave />,
  children,
  loading = false,
  sx,
  onClick,
  size = 'medium',
}: {
  loading?: boolean;
  startIcon?: ReactNode;
  children: ReactNode;
  sx?: object;
  onClick?: () => void;
  size?: any;
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      sx={sx}
      size={size}
      loading={loading}
      startIcon={startIcon}
      type="submit"
      variant="contained"
    >
      {children}
    </LoadingButton>
  );
};

export default AppSubmitButton;
