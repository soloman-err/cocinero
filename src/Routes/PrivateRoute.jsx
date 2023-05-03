import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate state={{ from: location }} to="/login" replace />;
  } else {
    return children;
  }

  return <div></div>;
};

export default PrivateRoute;
