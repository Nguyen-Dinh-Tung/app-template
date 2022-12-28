import { ApiLoading } from "components/layout/ApiLoading";
import { NotifyComponent } from "components/UI/notify";
import AppProvider from "store";
import ScreenRouter from "./screens";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />
      <NotifyComponent />
      <ApiLoading />
    </AppProvider>
  );
};

export default App;
