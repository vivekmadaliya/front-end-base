import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={1000}/>
      <Outlet />
    </div>
  );
};

export default Layout;
