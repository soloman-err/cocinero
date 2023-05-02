import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const LoginLayout = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
