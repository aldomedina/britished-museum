import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import paths from "./paths";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={paths.home()} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
