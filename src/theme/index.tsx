import { createTheme } from '@mui/material/styles';
import { Fonts } from '../constants/styles';

const theme = createTheme({
  spacing: 4,
  direction: 'ltr', //ltr, rtl
  palette: {
    mode: 'light',
    background: {
      paper: '#FFFFFF',
      default: '#F4F7FE',
    },
    primary: {
      main: '#0A8FDC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F04F47',
    },
    success: {
      main: '#11C15B',
      light: '#D9F5E5',
    },
    warning: {
      main: '#FF5252',
      light: '#FFECDC',
    },
    text: {
      primary: 'rgb(17, 24, 39)',
      secondary: 'rgb(107, 114, 128)',
      disabled: 'rgb(149, 156, 169)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: 22,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 10px 10px 4px rgba(0, 0, 0, 0.04)',
          '& .MuiCardContent-root:last-of-type': {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          minWidth: 'unset',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 9,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: Fonts.REGULAR,
        },
      },
    },
  },
});

export default theme;
