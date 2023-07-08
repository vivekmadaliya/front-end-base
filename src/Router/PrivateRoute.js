import React from "react";
import Login from "../Components/Pages /Login";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Login/>
};

export default PrivateRoute;
