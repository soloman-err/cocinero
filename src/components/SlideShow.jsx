import React from "react";
import Marquee from "react-fast-marquee";
import { FaAward } from "react-icons/fa";

const SlideShow = () => {
  return (
    <Marquee className="py-1">
      <h2 className="flex items-center gap-2 text-xl md:text-4xl text-amber-100 font-bold uppercase italic">
        Experience the taste of Mexican authentic mouth-watering traditional
        dishes! <FaAward />
      </h2>
    </Marquee>
  );
};

export default SlideShow;
