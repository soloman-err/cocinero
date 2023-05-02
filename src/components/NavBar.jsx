import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [activeState, setActiveState] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveState(location.pathname);
  }, [location.pathname]);

  const activeStyle = {
    borderBottom: "2px solid #92400E",
  };

  return (
    <nav className="flex items-center justify-between">
      <h1 translate="no" className="text-2xl md:text-4xl lg:text-5xl font-bold">
        Cocinero
      </h1>

      <ul className="hidden md:flex gap-5 uppercase">
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

      <div className="hidden md:flex">
        <Link to="login">
          <Button>
            <p className="px-10">Login</p>
          </Button>
        </Link>
      </div>

      <FaBars className="md:hidden" />
    </nav>
  );
};

export default NavBar;
