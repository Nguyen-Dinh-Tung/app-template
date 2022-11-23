import React from "react";
import ScreenRouter from "./screens";
import AppProvider from "store";
import { NotifyComponent } from "components/UI/notify";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
      <NotifyComponent />
    </AppProvider>
  );
};

export default App;
