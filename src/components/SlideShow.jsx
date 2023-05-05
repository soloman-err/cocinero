import React from "react";
import Marquee from "react-fast-marquee";
import { FaAward } from "react-icons/fa";

const SlideShow = () => {
  return (
    <div className="w-[60%] mx-auto">
      <Marquee className="py-1">
        <h2 className="flex items-center gap-2 text-sm text-amber-100 italic">
          La comida española es una deliciosa combinación de sabores!{" "}
          <FaAward />
        </h2>
      </Marquee>
    </div>
  );
};

export default SlideShow;
