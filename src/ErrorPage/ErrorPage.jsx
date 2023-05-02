import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_yrq8gmfq.json"
        className="pt-[50%] md:pt-[10%] lg:w-[50%] mx-auto"
      ></Player>
    </div>
  );
};

export default ErrorPage;
