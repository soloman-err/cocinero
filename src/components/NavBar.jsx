import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // const { displayName, photoURL } = user;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [activeState, setActiveState] = useState("");
  const location = useLocation();

  // User log out:
  const handleLogOut = () => {
    logOut();
    console.log("logged out");
  };

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

      {/* Conditional user state: Login/Logout */}
      <div className="hidden md:flex">
        {user ? (
          <div className="flex gap-2 items-center">
            <img
              className="rounded-full w-10 h-10"
              src={user.photoURL ? user?.photoURL : user?.displayName}
              alt="user-image"
            />
            <button
              onClick={handleLogOut}
              className="px-10 py-1 font-bold bg-amber-800 hover:bg-amber-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="login">
              <button className="px-5 py-1 font-bold bg-amber-800 hover:bg-amber-700">
                Login
              </button>
            </Link>
            <Link to="register">
              <button className="px-5 py-1 font-bold bg-amber-800 hover:bg-amber-700">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <ImCross size={25} /> : <FaBars size={25} />}
      </div>
    </nav>
  );
};

export default NavBar;
