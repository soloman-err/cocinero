import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Cocinero</h1>

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Blog</li>
        <li>About us</li>
      </ul>

      <div>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default NavBar;
