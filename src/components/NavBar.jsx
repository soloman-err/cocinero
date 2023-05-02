import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Cocinero</h1>

      <ul className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="blog">Blog</Link>
        <Link to="about">About us</Link>
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
