import { Route, Navigate, Outlet } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";
// import { token } from "../store/authReducer";

const ProtectedRoute = () => {
  // const tokens = useSelector(token);
  const tokens="/users/me";
  const t = JSON.parse(localStorage.getItem("user"))?.token;
  return tokens || t ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
