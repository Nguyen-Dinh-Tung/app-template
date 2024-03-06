import { ConfirmModal } from "components/UI/confirm";
import { ToastComponent } from "components/UI/toast";
import { ApiLoading } from "components/layout/ApiLoading";
import AppProvider from "store";
import ScreenRouter from "./screens";

export const App = () => {
  return (
    <AppProvider>
      <ScreenRouter />

      <ConfirmModal />
      <ToastComponent />
      <ApiLoading />
    </AppProvider>
  );
};

export default App;
