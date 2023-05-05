import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

const API_KEY = `AIzaSyCMlURkFf80VVTvN4dxm4BplZ2SYzU-M88`;
const LATITUDE = 40.416775;
const LONGITUDE = -3.70379;
const ZOOM = 14;

const About = () => {
  const Map = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      </GoogleMap>
    ))
  );

  return (
    <div>
      <h4 className="font-bold text-2xl text-center underline underline-offset-8">
        About Cocinero
      </h4>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={LATITUDE}
        lng={LONGITUDE}
        zoom={ZOOM}
      />
    </div>
  );
};

export default About;
// AIzaSyCMlURkFf80VVTvN4dxm4BplZ2SYzU - M88;
