import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../Assets/bg_img/underline.png";

function YoutubeSlider() {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 700;

  const YtVideo = [
    "https://www.youtube.com/embed/iSrSzcV5dVc",
    "https://www.youtube.com/embed/0d9Ul4AJlNc",
    "https://www.youtube.com/embed/jUGBQiQRAbs",
    "https://www.youtube.com/embed/6iOp7AhhsTc",
    "https://www.youtube.com/embed/-cpH_3dkQKU",
    "https://www.youtube.com/embed/UFnGsRCgm24",
    "https://www.youtube.com/embed/HWh5t-60P_E",
    "https://www.youtube.com/embed/jaMxsGWaB9k",
  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 3 : 1, // Adjust based on screen size
    slidesToScroll: 1,
    accessibility: true,
    focusOnSelect: true,
  };

  return (
    <div className="w-full bg-cover md:bg-opacity-80">
      <div className="py-5">
        <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl pt-5 md:pt-16 pb-5 md:pb-10 font-merriweather text-center p-3">
          YOUTUBE LINKS... <br />
        </h3>

        <div className="md:py-10 md:mx-14">
          <Slider {...settings} className="md:w-11/12 m-auto">
            {YtVideo.map((video, index) => (
              <div
                key={index}
                className="flex flex-col md:pt-5 md:h-80 justify-center gap-10 items-center text-center px-8 overflow-hidden"
              >
                <iframe
                  src={video}
                  title={`YouTube video ${index}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSlider;
