import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
    <div className="pt-[40%] md:pt-[10%] lg:w-[50%] mx-auto">
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_yrq8gmfq.json"
        className=""
      ></Player>
    </div>
  );
};

export default ErrorPage;
