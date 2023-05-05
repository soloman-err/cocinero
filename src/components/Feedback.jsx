import React from "react";
import Review from "./Review";

const Feedback = () => {
  return (
    <div className="mt-10">
      <h2 className="text-amber-800 font-bold text-2xl md:text-5xl lg:text-7xl text-center">
        {" "}
        Clients to{" "}
        <span className="" translate="no">
          Cocinero
        </span>
      </h2>
      <Review />
    </div>
  );
};

export default Feedback;
