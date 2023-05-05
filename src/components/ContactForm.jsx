import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const [selected, setSelected] = useState("");

  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="md:w-[90%] lg:w-[60%] my-10 mx-auto border-2 border-l-0 border-b-0 p-3 bg-orange-900 text-white rounded-xl shadow-xl">
      <h2 className="font-bold text-xl md:text-2xl text-center underline underline-offset-8 uppercase">
        Schedule an Appointment
      </h2>
      <div className="space-y-4 mt-5 text-xs">
        Hola, my name is{" "}
        <input
          type="text"
          className="bg-transparent border-b outline-none text-center"
          placeholder="Type Here.."
        />
        and I'm looking for
        {/* select option */}
        <select
          className="bg-transparent text-center border-b outline-non"
          onChange={handleOptionChange}
        >
          <option value="" className="text-white">
            Select an option
          </option>
          <option value="Catering chef">Catering chef</option>
          <option value="Sous chef">Sous chef</option>
          <option value="Prep cook">Prep cook</option>
          <option value="Executive chef">Executive chef</option>
        </select>
        <input
          type="text"
          className="bg-transparent outline-none text-center"
          placeholder={selected}
        />
        Get in touch with me at{" "}
        {/* <input type="text" className="bg-transparent border-b outline-none" /> */}
        <input
          type="email"
          name="email"
          className="bg-transparent border-b outline-none text-center"
          placeholder="Your email ID"
        />
        {"!"}
      </div>
      <br />
      <button className="flex items-center gap-2 border-2 border-l-0 border-b-0 p-2 rounded-xl shadow-xl hover:shadow-md">
        Send Enquiry
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ContactForm;
