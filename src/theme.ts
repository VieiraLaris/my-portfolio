import { createTheme, responsiveFontSizes } from "@mui/material";
import './styles/fonts.css';


let theme = createTheme({
  palette: {
    primary: {
      main: '#231942',
    },
    secondary: {
      main: '#E8E9ED',
    },
  },

  typography: {
    fontFamily: "Poppins"
  }
});

theme = responsiveFontSizes(theme);

export default theme;


