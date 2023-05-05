import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaMailBulk,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto px-5 space-y-2 py-2 text-center bg-slate-800">
      <div className="flex flex-col md:flex-row justify-around gap-10 mt-10">
        <div>
          <h2 className="font-bold text-3xl lg:text-4xl" translate="no">
            Cocinero
          </h2>
          <p className="text font-serif">
            A nobility to our respected cuisines
          </p>
        </div>
        <div className="space-y-2 text-start">
          <h3 className="font-bold">Get In Touch</h3>
          <div className="flex gap-2">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaMailBulk />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </div>

        <div className="space-y-2 text-start">
          <h3 className="font-bold">Explore</h3>
          <ul className="text-sm font-bold text-slate-300">
            <li>Services</li>
            <li>Works</li>
            <li>Journal</li>
            <li>About</li>
          </ul>
        </div>
        <div className="space-y-2 text-start">
          <h3 className="font-bold">Help</h3>
          <ul className="text-sm font-bold text-slate-300">
            <li>FAQ</li>
            <li>Help center</li>
            <li>Privacy & Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div>
        <small className="text-center">Copyright &copy; 2023 Cocinero</small>
      </div>
    </div>
  );
};

export default Footer;
