// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Verdana',
    fontSize: 11, // Note: this is in px, so ~15px for 11pt
    allVariants: {
      lineHeight: '28px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          fontFamily: 'Verdana',
          fontSize: '11pt',
          lineHeight: '28px',
        },
      },
    },
  },
});

export default theme;
