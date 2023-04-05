import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Landing from "./Components/CoreComponents/Landing";

const theme = createTheme({
  baseColors: {
    colorPrimary: "#F3F3F3",
    colorSecondary: "#294153",
    white: "#fff",
  },
  defaultFontStyling: {
    fontSize: "16px",
  },
  // components: {
  //   MuiAppBar: {
  //     defaultProps: {
  //       borderBox: "unset",
  //     },
  //   },
  //   MuiToolbar:{
  //     defaultProps:{

  //     }
  //   }
  // },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </>
  );
};

export default App;
