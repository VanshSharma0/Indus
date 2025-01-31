import React, { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

// import { Helmet } from "react-helmet";
import bg from "../Assets/bg_img/Website-page5.png";
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
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBannerVisible(true);
    }, 3000);

    const scroll = new LocomotiveScroll();
    return () => {
      clearTimeout(timer);
      if (scroll) scroll.destroy();
    };
  }, []);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };
  return (
    <div
      className="w-full bg-orange-50"
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
      {/* <Banner /> */}
      {isBannerVisible ? (
        <div
          id="banner1"
          className="bg-orange-50 fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="w-full max-w-lg p-10 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl tracking-wide p-2 font-merriweather text-center">
              Cottages In Mukteshwar
            </h2>
            <p className="text-xl md:text-2xl p-2 font-merriweather text-center">
              Starting Price @ 35-50 Lac.
            </p>
            <iframe
              title="Contact form"
              className="text-3xl w-full md:text-4xl h-[320px] md:h-[22vw] text-white rounded-2xl font-semibold font-merriweather"
              id="Contact_Form"
              src="https://account.solidperformers.com/capture_form_data/OTM3"
              border="0"
              style={{ border: 0 }}
            ></iframe>
            <p className="text-sm font-merriweather text-center">
              *will only call on working hours (10am-6pm).
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleCloseBanner}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Banner2 />
          <DetailsContent />
          <Gallery2 />
          {/* <Banner3/> */}
          {/* <HomeContent /> */}
          {/* <GalleryCarousel/> */}
          <PropertyRates />
          <GoogleMap2 />

          <SiteLayout2 />
          {/* <Floor_Plan/> */}
          <ReadyToMove2 />

          {/* <Gallery /> */}
          <NearBy2 />
          {/* <CustomerReview/> */}
          {/* <CustomerReview2/> */}
          {/* <NoticeBanner /> */}
          {/* <Contact2 /> */}
        </>
      )}
    </div>
  );
}

export default Home;
