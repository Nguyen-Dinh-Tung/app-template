import React from "react";
import ScreenRouter from "./screens";
import AppProvider from "store";
import { Alert } from "components/UI/alert";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
      <Alert />
    </AppProvider>
  );
};

export default App;
