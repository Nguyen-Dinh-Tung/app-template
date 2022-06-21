import React from "react";
import ScreenRouter from "./screens";
import AppProvider from "store";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
    </AppProvider>
  );
};

export default App;
