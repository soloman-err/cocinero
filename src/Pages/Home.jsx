// import React, { useState } from "react";
import Carousel from "../components/Carousel";
import ChefSec from "../components/ChefSec";
import ContactForm from "../components/ContactForm";
import SlideShow from "../components/SlideShow";

const Home = () => {
  return (
    <div className="">
      <Carousel></Carousel>
      {/* <SlideShow /> */}
      <ChefSec></ChefSec>
      <ContactForm />
    </div>
  );
};

export default Home;
