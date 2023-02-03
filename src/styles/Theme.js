import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0000FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#021526',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
