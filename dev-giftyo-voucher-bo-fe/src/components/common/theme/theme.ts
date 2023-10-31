import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& svg': { width: '18px', height: '18px' },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'medium',
      },
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            width: '20px',
            height: '20px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontSize: '13px',
        },
        size: 'medium',
        variant: 'outlined',
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          height: '40px',
          fontSize: '16px',
          '&.Mui-disabled': {
            fieldset: {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              borderColor: 'rgba(0, 0, 0, 0.23)',
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgba(33, 150, 243, 1)',
    },
    warning: {
      main: 'rgba(239, 108, 0, 0.5)',
    },
    info: {
      main: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    fontSize: 10,
  },
});
