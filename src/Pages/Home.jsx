// import React, { useState } from "react";
import Carousel from "../components/Carousel";
import ChefSec from "../components/ChefSec";
import ContactForm from "../components/ContactForm";
import Feedback from "../components/Feedback";
import Review from "../components/Review";
import SlideShow from "../components/SlideShow";

const Home = () => {
  return (
    <div className="">
      <Carousel></Carousel>
      {/* <SlideShow /> */}
      <ChefSec></ChefSec>
      <Feedback />
    </div>
  );
};

export default Home;
