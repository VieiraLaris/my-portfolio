import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: '#880e4f',
    },
    secondary: {
      main: '#00c853',
    },
  },

  typography: {
    fontFamily: [
      //'-apple-system',
      //'BlinkMacSystemFont',
      //'"Segoe UI"',
      //'Roboto',
      '"Helvetica Neue"',
      //'Arial',
      //'sans-serif',
      //'"Apple Color Emoji"',
      //'"Segoe UI Emoji"',
      //'"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
