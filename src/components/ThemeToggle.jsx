import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.setAttribute("data-theme", "black");
    } else {
      htmlElement.setAttribute("data-theme", "acid");
    }
  };
  return (
    <div>
      <button onClick={toggleTheme} className="text-3xl text-black">
        {darkMode ? <FaToggleOn /> : <FaToggleOff />}
      </button>
    </div>
  );
};

export default ThemeToggle;
