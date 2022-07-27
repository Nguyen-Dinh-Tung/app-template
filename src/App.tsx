import React from "react";
import ScreenRouter from "./screens";
import AppProvider from "store";
import { Toast } from "components/UI/toast";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
      <Toast />
    </AppProvider>
  );
};

export default App;
