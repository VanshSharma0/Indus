import React, { useState, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';

// import { Helmet } from "react-helmet";
import bg from "../Assets/bg_img/Website-page5.png"
// import HomeContent from "./HomeContent";
// import Banner from "./Banner";
import Banner2 from "./Banner2";
// import Banner3 from "./Banner3";
import Contact2 from "./Contact2";
import ReadyToMove2 from "./Ready_To_Move2";
import GoogleMap2 from "./Google_Map2";
import DetailsContent from "./DetailsContent";
import SiteLayout2 from "./Site_Layout2";
// import Gallery from "./Gallery";
// import Floor_Plan from "./Floor_Plan";
import NearBy2 from "./NearBy2";
// import NoticeBanner from "./NoticeBanner";
import PropertyRates from "./PropertyRates";
import Gallery2 from "./Gallery2";
// import GalleryCarousel from "./GalleryCarousel";
// import Banner2 from "./Banner2";
// import CustomerReview2 from "./CustomerReview2";
// import CustomerReview from "./CustomerReview";


function Home() {

  return (
    <div className="w-full bg-orange-50"
        style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <Helmet>
        <title>
          Property In Nainital | Cottages In Mukteshwar | Plot For Sale In
          Uttarakhand
        </title>
        <meta
          name="description"
          content="We are selling property in Nainital, our properties include studio apartments and cottages in Mukteshwar. Our Visitors say these are the best cottages in Nainital"
        />
      </Helmet> */}
     
      <Banner2/>
      <DetailsContent />
      <Gallery2/>
      {/* <Banner3/> */}
      {/* <HomeContent /> */}
      {/* <GalleryCarousel/> */}
      <PropertyRates/>
      <GoogleMap2 />
      <SiteLayout2 />
      {/* <Floor_Plan/> */}
      <ReadyToMove2 />
     
      {/* <Gallery /> */}
      <NearBy2 />
      {/* <CustomerReview/> */}
      {/* <CustomerReview2/> */}
      {/* <NoticeBanner /> */}
      <Contact2 />
   
    </div>
  );
}

export default Home;
