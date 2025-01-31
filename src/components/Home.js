import React from "react";
import Banner2 from "./Banner2";
import Contact2 from "./Contact2";
import ReadyToMove2 from "./Ready_To_Move2";
import GoogleMap2 from "./Google_Map2";
import DetailsContent from "./DetailsContent";
import SiteLayout2 from "./Site_Layout2";
import PropertyRates from "./PropertyRates";

import RouteMap from "./RouteMap";
import Ratings from "./Ratings";
import GalleryVideoHome from "./GalleryVideoHome";
import Testimonials from "./Testi monials";

function Home() {
  return (
    <div className="w-full bg-[#d2d2b4] bg-cover bg-opacity-80 font-merriweather">
      <Banner2 />
      <DetailsContent />
      <SiteLayout2 />
      <Ratings />
      <GalleryVideoHome />
      <PropertyRates />
      <GoogleMap2 />
      <RouteMap />
      <ReadyToMove2 />
      <Testimonials />
      <Contact2 />
    </div>
  );
}
export default Home;
