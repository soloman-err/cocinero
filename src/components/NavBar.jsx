import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeState, setActiveState] = useState("");
  const location = useLocation();
  console.log(activeState);

  useEffect(() => {
    setActiveState(location.pathname);
  }, [location.pathname]);

  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Cocinero</h1>

      <ul className="flex gap-5">
        <Link to="/" style={activeState == "/" ? activeStyle : null}>
          Home
        </Link>
        <Link to="blog" style={activeState == "/blog" ? activeStyle : null}>
          Blog
        </Link>
        <Link to="about" style={activeState == "/about" ? activeStyle : null}>
          About us
        </Link>
      </ul>

      <div>
        <Link to="login">
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
