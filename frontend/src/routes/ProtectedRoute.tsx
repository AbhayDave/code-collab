import { Navigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
