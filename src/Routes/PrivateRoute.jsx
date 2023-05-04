import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

// CSS for Pacman Loading icon:
const pacman = {
  margin: "0 auto",
};

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <PacmanLoader cssOverride={pacman} color="#B45309"></PacmanLoader>;
  }

  if (!user) {
    return <Navigate state={{ from: location }} to="/login" replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
