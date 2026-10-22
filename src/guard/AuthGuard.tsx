import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthGuard;