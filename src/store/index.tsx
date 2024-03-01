import "antd/dist/antd.min.css";
import { GlobalStyle, theme } from "libs/GlobalStyles";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./redux";

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
