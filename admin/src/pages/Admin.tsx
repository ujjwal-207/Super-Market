import React from "react";
import { Route, Routes } from "react-router-dom";
import Addproduct from "../components/Addproduct";
import Listproduct from "../components/Listproduct";

export const Admin = () => {
  return (
    <div>
      <Routes>
        <Routes>
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/listproduct" element={<Listproduct />} />
        </Routes>
      </Routes>
    </div>
  );
};
