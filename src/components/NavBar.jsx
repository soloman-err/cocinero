import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const { displayName, photoURL } = user;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [activeState, setActiveState] = useState("");
  const location = useLocation();

  // User log out:
  const handleLogOut = () => {
    logOut();
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

      <ul
        className={`absolute z-10 flex flex-col md:flex-row ${
          open
            ? "top-0 left-0 bg-amber-800 md:bg-transparent ps-2 space-y-5 md:space-y-0 pr-3 pb-10 pt-10 "
            : "top-16 -left-96"
        } duration-300 md:static md:space-x-3 text-sm font-extrabold`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={activeState == "/" ? activeStyle : null}
        >
          Home
        </Link>
        <Link
          to="blog"
          onClick={() => setOpen(false)}
          style={activeState == "/blog" ? activeStyle : null}
        >
          Blog
        </Link>
        <Link
          to="about"
          onClick={() => setOpen(false)}
          style={activeState == "/about" ? activeStyle : null}
        >
          About us
        </Link>
        <div className="flex gap-2 md:hidden">
          <Link to="login">
            <button
              onClick={() => setOpen(false)}
              className="px-2 py-1 font-bold bg-amber-900 hover:bg-amber-950 border hover:shadow-lg"
            >
              Login
            </button>
          </Link>
          <Link to="register">
            <button
              onClick={() => setOpen(false)}
              className="px-2 py-1 font-bold bg-amber-900 hover:bg-amber-950 border hover:shadow-lg"
            >
              Register
            </button>
          </Link>
        </div>
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
