import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
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
      <Link to="/">
        <h1
          translate="no"
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Cocinero
        </h1>
      </Link>

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

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <ImCross size={25} /> : <FaBars size={25} />}
      </div>
    </nav>
  );
};

export default NavBar;
