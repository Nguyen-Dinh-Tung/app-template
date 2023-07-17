import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryScreen from "./history";
import { HomeScreen } from "./home";
import LoginScreen from "./login";
import { AuthLayout, LoginLayout } from "./main";

export const ScreenRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
        </Route>

        <Route element={<LoginLayout />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>

        <Route path="*" element={<h1>404 No page!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ScreenRouter;
