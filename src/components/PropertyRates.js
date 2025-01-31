import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import line from "../Assets/bg_img/underline.png";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../Assets/r2m/Budget-logo-1.png";
import img2 from "../Assets/r2m/Budget-logo-2.png";
import img3 from "../Assets/r2m/Budget-logo-3.png";
import img4 from "../Assets/r2m/Budget-logo-4.png";
import img5 from "../Assets/r2m/Budget-logo-5.png";

const PropertyRates = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div data-aos-anchor-placement="top-center" data-aos="fade-up">
      <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl font-merriweather text-center p-3">
        PRICE RANGE
      </h3>
      <h3 className="w-fit text-[#74613C] mx-auto text-sm md:text-xl font-merriweather text-center p-3 md:pb-7">
        (PROPERTY IN UTTARAKHAND FOR SALE)
      </h3>
      <div className="flex flex-col justify-center md:flex-row py-5 md:pt-0 gap-5 md:gap-10 md:px-5">
        <div className="flex justify-around md:justify-center md:gap-10 items-center">
          <Link to="/PriceRange1">
            <img
              src={img1}
              alt="img 1"
              className=" w-36 md:w-48 object-contain md:hover:scale-125 duration-500 "
            />
          </Link>
          <Link to="/PriceRange2">
            <img
              src={img2}
              alt="img 2"
              className=" w-36 md:w-48 object-contain md:hover:scale-125 duration-500"
            />{" "}
          </Link>
        </div>
        <div className="flex justify-around md:justify-center md:gap-10 items-center">
          <Link to="/PriceRange3">
            <img
              src={img3}
              alt="img 3"
              className=" w-36 md:w-48 object-contain md:hover:scale-125 duration-500"
            />
          </Link>
          <Link to="/PriceRange4">
            <img
              src={img4}
              alt="img 4"
              className=" w-36 md:w-48 object-contain md:hover:scale-125 duration-500"
            />
          </Link>
        </div>

        <Link to="/PriceRange5">
          <img
            src={img5}
            alt="img 5"
            className="w-36 mx-auto md:w-48 object-contain md:hover:scale-125 duration-500"
          />
        </Link>
      </div>

      <div className=" w-full bg-[#74613C] bg-opacity-50 border-2 rounded-xl">
        <div className="flex flex-col md:flex-row justify-center gap-2 items-center p-2 text-sm md:text-lg text-pretty text-[#F5F3EF] lg:text-3xl font-merriweather px-5">
          <p className="text-center">
            "Affordable Excellence: Where Quality Meets Value"
          </p>
          {/* <p className="text-center"> (apartments and cottages) </p> */}
          {/* <p className="text-center">starting from Rs-35 Lacs to Rs-3 Cr ! </p> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyRates;
