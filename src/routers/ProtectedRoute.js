import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ authData, redirectPath = "/login", children }) => {
    if(!authData.isLoggedIn) return <Navigate to = {redirectPath} replace />;
    return children ? children : <Outlet />;
}

export default ProtectedRoute;
