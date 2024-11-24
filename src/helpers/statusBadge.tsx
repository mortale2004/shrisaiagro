import { COLOR } from '@/constants/app';
import { Fonts } from '@/constants/styles';
import { Box } from '@mui/material';

import { green, pink, purple, red, yellow } from '@mui/material/colors';

export const getStatusColor = (currentStatus: any) => {
  switch (currentStatus) {
    // true or false
    case true:
    case 'true':
    case COLOR.GREEN:
    case 'Yes':
      return `${green[900]}`;

    case false:
    case 'false':
    case 'No':
    case COLOR.RED:
      return `${red[600]}`;

    case 'Male':
      return `${purple[900]}`;

    case 'Female':
      return `${pink[600]}`;

    case COLOR.YELLOW:
    default:
      return `${yellow[500]}`;
  }
};

const getStatusBadge = (
  currentStatus?: string,
  value?: any,
  sx?: any,
  customColor?: string
) => {
  const statusColor = customColor || getStatusColor(currentStatus);
  return (
    <Box
      component="span"
      sx={{
        padding: '5px 14px',
        borderRadius: 30,
        fontSize: 12,
        fontWeight: Fonts.SEMI_BOLD,
        minWidth: 85,
        textAlign: 'center',
        color: statusColor,
        backgroundColor: statusColor + '33',
        ...sx,
      }}
    >
      {value ? value : currentStatus}
    </Box>
  );
};

export default getStatusBadge;
