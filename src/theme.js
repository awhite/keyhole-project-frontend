import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1DA1F2',
      dark: '#657786',
      contrastText: '#fff',
    },
    secondary: {
      light: '#E1E8ED',
      main: '#AAB8C2',
      dark: '#657786',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiInput: {
      input: {
        fontSize: '1.15rem',
        minWidth: 160,
        maxWidth: 400,
        color: 'white',
        paddingBottom: 8,
        fontFamily: 'Manrope',
      }
    },
    MuiOutlinedInput: {
      adornedStart: {
        maxWidth: 180,
      }
    }
  }
});

export default theme;
