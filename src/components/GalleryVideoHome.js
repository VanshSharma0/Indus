import React, { useEffect } from "react";
import line from "../Assets/bg_img/underline.png";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryVideoHome = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      className="block md:hidden"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row pt-5 lg:pt-10 justify-center items-center">
          <h2 className="w-fit text-[#74613C] mx-auto md:mx-0 text-2xl md:text-4xl font-merriweather text-center px-3 md:pl-10">
            THE GALLERY :
          </h2>
          <span className="w-fit text-[#74613C] mx-auto md:mx-0 text-2xl md:text-4xl font-merriweather text-center px-3 md:pl-0">
            ORIGINAL SITE PICS
          </span>
        </div>
        <h2 className="w-fit text-[#74613C] mx-auto text-sm md:text-xl font-merriweather text-center p-3">
          (COTTAGE IN MUKTESHWAR)
        </h2>
      </div>
      <video
        className="lg:object-cover w-full md:p-5 md:pb-0 md:w-2/5"
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/dpkvvpwv6/video/upload/v1717562530/IndusValleyResort/GalleryOv_hp6mdz.mp4"
      />
      <video
        className="lg:object-cover w-full py-5 md:p-5 md:pt-0 md:w-2/5"
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/dpkvvpwv6/video/upload/v1717562534/IndusValleyResort/Gallery2_awpjoe.mp4"
      />
    </div>
  );
};

export default GalleryVideoHome;
