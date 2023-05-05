import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const [selected, setSelected] = useState("");

  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="md:w-[90%] lg:w-[60%] my-10 mx-auto border-2 border-l-0 border-b-0 p-3 bg-slate-900 border-amber-900 rounded-xl shadow-xl">
      <h2 className="font-bold text-xl md:text-2xl text-center underline underline-offset-8 uppercase italic">
        Schedule an Appointment
      </h2>
      <div className="space-y-4 mt-5 text-xs">
        Hola, my name is{" "}
        <input
          type="text"
          className="bg-transparent border-b outline-none text-center"
          placeholder="Type Here.."
        />
        and I'm looking for {/* select option */}
        <select className="bg-transparent border" onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="chef1">chef1</option>
          <option value="chef2">chef2</option>
          <option value="chef3">chef3</option>
        </select>
        <input
          type="text"
          className="bg-transparent border-b outline-none text-center"
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
      <button className="flex items-center gap-2 border-2 border-l-0 border-b-0 p-2 border-amber-900 rounded-xl">
        Send Enquiry
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ContactForm;
