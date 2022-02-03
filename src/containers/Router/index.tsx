import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CollectionPage from "../../views/Collection";
import Home from "../../views/Home";
import paths from "./paths";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={paths.home()} element={<Home />} />
      <Route path={paths.collection()} element={<CollectionPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
