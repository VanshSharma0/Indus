import React from "react";
import bg from "../Assets/bg_img/Website-page5.png";
import IntroductoryDetails from "./IntroductoryDetails";
import GoogleMap from "./Google_Map";
// import WebsiteLinks from './WebsiteLinks';
// import NoticeBanner from './NoticeBanner';
import IntroductoryFooter from "./IntroductoryFooter";
import NearBy2 from "./NearBy2";
import ReadyToMove2 from "./Ready_To_Move2";
import YoutubeSlider from "./IntroductoryPageYTSlider";

const IntroductoryPage = () => {
  return (
    <div
      className="w-full bg-orange-50"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <Banner /> */}
      <IntroductoryDetails />
      <GoogleMap />
      <YoutubeSlider />
      {/* <Gallery2/> */}
      <ReadyToMove2 />
      <NearBy2 />
      {/* <WebsiteLinks/> */}
      {/* <NoticeBanner/> */}
      <IntroductoryFooter />
    </div>
  );
};

export default IntroductoryPage;
