import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateCV from "../pages/design/CreateCV";

const Router = () => {
  return (
    <Routes>
      <Route path='create-cv' element={<CreateCV />} />
    </Routes>
  );
};

export default Router;
