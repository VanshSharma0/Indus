import React from "react";
import { Link } from "react-router-dom";
import apartment6 from "../../Assets/r2m/apartment6.webp";
import log_duplex from "../../Assets/r2m/log_duplex.webp";
import line from "../../Assets/bg_img/underline.png";

const PriceRange5 = () => {
  return (
    <div className="py-8 md:pt-20">
      <h2 className="text-[#74613C] mx-auto my-5 md:my-10 bg-white bg-opacity-60 px-3 rounded-2xl hover:text-slate-500 text-3xl md:text-4xl font-merriweather text-center font-bold py-2">
        ABOVE 1.5 Cr.
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-3 p-3">
        {/* ....(5.2).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Wooden_3bhk">
            <img
              className="rounded-t-xl w-screen md:w-96 h-72"
              src={log_duplex}
              alt="Card8"
            />
          </Link>
          <div>
            <div className="flex flex-col justify-center items-center">
              <p className=" text-2xl text-center text-[#74613C] font-merriweather">
                3 BHK DUPLEX <br />
                <span className="text-xl text-black">(UNDER CONSTRUCTION)</span>
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  (1.50 Cr to 1.70 Cr)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ....(5.3).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Cottage_4bhk">
            <img
              className="rounded-t-xl w-screen md:w-96 h-72"
              src={apartment6}
              alt="Card6"
            />
          </Link>
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                4 BHK Cottage
              </h2>
              <p className="text-xl font-merriweather">Plot No- 43</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  1.85 Cr
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center pt-5 md:pt-10">
          <Link
            to="/PropertyRates" // Replace "/ready-to-move" with your actual route
            className="bg-green-900 text-white w-fit font-semibold text-sm md:text-xl  font-merriweather m-3 p-3 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
          >
            Go Back
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default PriceRange5;
