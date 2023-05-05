import React from "react";
import Review from "./Review";

const Feedback = () => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl md:text-5xl lg:text-7xl text-center">
        {" "}
        Clients to{" "}
        <span className="text-amber-700" translate="no">
          Cocinero
        </span>
      </h2>
      <Review />
    </div>
  );
};

export default Feedback;
