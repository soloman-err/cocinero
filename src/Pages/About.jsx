import React from "react";
import Marquee from "react-fast-marquee";
import { MapContainer, Popup, TileLayer } from "react-leaflet";
// import { Marker } from "react-google-maps";

const About = () => {
  return (
    <div className="w-[60%] mx-auto text-center my-10">
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      {/* Headline */}
      <div className="flex justify-center items-center my-10">
        <span className="border-b border-t w-60 px-20 h-5 text-transparent">
          -
        </span>
        <h1 className="text-center font-bold text-2xl uppercase">About us</h1>
        <span className="border-b border-t w-60 px-20 h-5 text-transparent">
          -
        </span>
      </div>

      <div className="font-serif">
        At Cocinero, we are passionate about connecting talented chefs with
        top-notch culinary opportunities. We understand that great chefs are the
        heart and soul of any successful restaurant, catering company, or food
        service operation.
        <br />
        <br />
        Our team of experienced recruiters works tirelessly to identify and
        attract top culinary talent from across the country.
        <br />
        <br />
        We partner with a diverse range of food service providers, including
        restaurants, hotels, caterers, and corporate dining facilities, to
        provide our clients with the highest level of culinary expertise.
      </div>

      <div>
        <div className="flex justify-center items-center my-10">
          <span className="border-b border-t w-60 px-20 h-5 text-transparent">
            -
          </span>
          <h1 className="text-center font-bold uppercase">Sponsors</h1>
          <span className="border-b border-t w-60 px-20 h-5 text-transparent">
            -
          </span>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <Marquee speed={20} pauseOnHover>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
            beatae?
          </p> */}
          <img
            className="h-10 opacity-90 ml-2"
            src="https://www.digital.ink/wp-content/uploads/airbnb_logo_detail.jpg"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-Nestle-Logo.jpg"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjgM7yLMCKiXB7L45K2qt1yVVhDTUOxV-iw&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclmJqWaiGZGYMqxaOYRnoSdks6iw18sYhdQ&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGlRA6fofDUwK9H9uqM3L2CIoXQIgWeITYQ&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QourDIaH88B9vYfsm-CgHqzNBjxc04mjIQ&usqp=CAU"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://www.hopekids.org/wp-content/uploads/2016/08/general-mills-logo.jpg"
            alt=""
          />
          <img
            className="h-10 opacity-90 ml-2"
            src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/569/200/original/KHC_transparent.png?1608172443"
            alt=""
          />
          {/* <img
            src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbSSh9tb2Bowa-jjL1aFUG_k_7qoY5yPCdj5uwUcA%3Ds96-c&w=48&q=75"
            alt=""
          />
          <img
            src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbSSh9tb2Bowa-jjL1aFUG_k_7qoY5yPCdj5uwUcA%3Ds96-c&w=48&q=75"
            alt=""
          />
          <img
            src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbSSh9tb2Bowa-jjL1aFUG_k_7qoY5yPCdj5uwUcA%3Ds96-c&w=48&q=75"
            alt=""
          />
          <img
            src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxbSSh9tb2Bowa-jjL1aFUG_k_7qoY5yPCdj5uwUcA%3Ds96-c&w=48&q=75"
            alt=""
          /> */}
        </Marquee>
      </div>
    </div>
  );
};

export default About;
