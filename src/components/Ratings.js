import React, { useEffect } from "react";
import slash from "../Assets/icons/Slash.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Ratings = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      className="w-full flex flex-col gap-5 justify-center items-center md:items-start pb-5 md:py-10 text-[#74613C]"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <p
        style={{
          fontSize: "24px",
          lineHeight: "40px",
          letterSpacing: "1px",
          textAlign: "center",
          fontFamily: "Merriweather",
          color: "#74613C",
          padding: "0px 20px",
        }}
      >
        With 18 years of expertise, The Shubham Group is dedicated to crafting
        vibrant communities in Uttarakhand and Himachal Pradesh. Our focus on
        quality and customer satisfaction ensures every home we build is
        timeless and harmonious with its surroundings. We are not selling
        properties; we are selling you the environment that we are creating
        around you.
      </p>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mx-auto font-merriweather">
        <div className="w-24 sm:w-36 md:w-48 xl:w-72 flex">
          <div className="pt-2 sm:pt-3 md:pt-5 md">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-center font-merriweather font-extralight">
              20
            </p>
            <p className="text-center text-xs sm:text-sm md:text-base">
              acres of residential area developed
            </p>
          </div>
          <img
            className="h-32 sm:h-40 md:h-48 lg:h-56 hidden xl:block"
            src={slash}
            alt="slash"
          />
        </div>

        <div className="w-24 sm:w-36 md:w-48 xl:w-72 flex">
          <div className="pt-2 sm:pt-3 md:pt-5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-center font-merriweather font-extralight">
              4
            </p>
            <p className="text-center text-xs sm:text-sm md:text-base">
              residential projects completed
            </p>
          </div>
          <img
            className="h-32 sm:h-40 md:h-48 lg:h-56 w-fit hidden xl:block"
            src={slash}
            alt="slash"
          />
        </div>

        <div className="w-24 sm:w-36 md:w-48 xl:w-72 flex">
          <div className="pt-2 sm:pt-3 md:pt-5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-merriweather font-extralight text-center">
              18
            </p>
            <p className="text-center text-xs sm:text-sm md:text-base">
              years of expertise in developing hillside communities
            </p>
          </div>
          <img
            className="h-32 sm:h-40 md:h-48 lg:h-56 hidden xl:block"
            src={slash}
            alt="slash"
          />
        </div>

        <div className="w-24 sm:w-36 md:w-48">
          <div className="pt-2 sm:pt-3 md:pt-5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-merriweather font-extralight text-center">
              150+
            </p>
            <p className="text-center text-xs sm:text-sm md:text-base">
              happy residents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
