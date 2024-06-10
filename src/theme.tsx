import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#D96846',
    },
    secondary: {
      main: green[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;