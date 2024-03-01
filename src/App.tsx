import { ApiLoading } from "components/layout/ApiLoading";
import AppProvider from "store";
import ScreenRouter from "./screens";
import { ToastComponent } from "components/UI/toast";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
      <ToastComponent />
      <ApiLoading />
    </AppProvider>
  );
};

export default App;
