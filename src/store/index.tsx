import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "libs/GlobalStyles";
import store from "./redux";
import { Provider } from "react-redux";

export const AppProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default AppProvider;
