import { createTheme, responsiveFontSizes } from "@mui/material";
import './styles/fonts.css';


let theme = createTheme({
  palette: {
    primary: {
      main: '#1C1C1B',
    },
    secondary: {
      main: '#e9877e',
    },
  },

  typography: {
    fontFamily: "SpaceGrotesk"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
