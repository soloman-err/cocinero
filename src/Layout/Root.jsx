import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 min-h-screen flex flex-col">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
