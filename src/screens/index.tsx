import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryScreen from "./history";
import HomeScreen from "./home";

export const ScreenRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="*" element={<h1>404 No page!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ScreenRouter;
