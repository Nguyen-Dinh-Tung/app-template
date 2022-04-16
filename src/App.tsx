import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./libs/GlobalStyles";
import ScreenRouter from "./screens";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScreenRouter />
    </ThemeProvider>
  );
};

export default App;
