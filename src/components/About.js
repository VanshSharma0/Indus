import React from "react";
import bg5 from "../Assets/bg_img/bg5.avif";

import AboutDetail from "./AboutDetail";

function About() {
  return (
    <>
      <div
        className="p-4 flex flex-col gap-5 bg-cover"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold font-merriweather text-green-800 text-center bg-cover">
          About US...
        </h1>
        <AboutDetail />
      </div>
    </>
  );
}

export default About;
