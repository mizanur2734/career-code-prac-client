import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";

const RootLayouts = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayouts;
