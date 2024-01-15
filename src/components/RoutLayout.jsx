import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RoutLayout = () => {
  return (
    <div className="max-w-container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default RoutLayout;
