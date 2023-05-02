import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-white font-bold px-5 py-1 bg-amber-700">
      {children}
    </button>
  );
};

export default Button;
