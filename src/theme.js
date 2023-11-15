import { createTheme } from '@mui/material';

export const theme = createTheme({
	typography: {
		HtmlFontSize: '10px',
	},
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          fontSize: '1.6rem',
		
        },
        size: 'medium',
        variant: 'outlined',
      },
    },
  },
  palette: {
	primary: {
		main: '#bfbfbf',
		contrastText: '#000000',
	  },
    text: {
      primary: '#000000',
    },
  },
});