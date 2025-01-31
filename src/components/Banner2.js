import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner2 = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="relative"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <video
        className="w-full h-auto xl:h-[850px] object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls
        poster="/bg_video/bg2_video.jpg"
      >
        <source
          src="https://d57jfigkzby0a.cloudfront.net/banner_video.mp4"
          type="video/mp4"
        />
        {/* Add additional source elements for other video formats if needed */}
      </video>
    </div>
  );
};

export default Banner2;
