import React from "react";
import { Link } from "react-router-dom";
import apartment09 from "../../Assets/r2m/apartment09.webp";
import apartment5 from "../../Assets/r2m/apartment5.webp";
import apartment4 from "../../Assets/r2m/apartment4.webp";
import line from "../../Assets/bg_img/underline.png";

const PriceRange2 = () => {
  return (
    <div className="py-8 md:pt-20">
      <h2 className="text-[#74613C] mx-auto my-5 md:my-10 bg-white bg-opacity-60 px-3 rounded-2xl hover:text-slate-500 text-3xl md:text-4xl font-merriweather text-center font-bold py-2">
        UNDER 60 TO 80 LAKHS
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 p-3">
        {/* ....(1.2).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Plot_09">
            <img
              className="rounded-t-xl w-screen md:w-96 h-64"
              src={apartment09}
              alt="Card3"
            />
          </Link>
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                1 BHK APARTMENT
              </h2>
              <p className="text-xl font-merriweather">Plot No- 09</p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  55 Lakhs
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ....(2.1).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Plot_36">
            <img
              className="rounded-t-xl w-screen md:w-96 h-64"
              src={apartment5}
              alt="Card5"
            />
          </Link>
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather text-center">
                2 BHK APARTMENTS
              </h2>
              <p className="text-xl font-merriweather">Plot No- 36</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -{" "}
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  (60 Lakhs to 65 Lakhs)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ....(2.2).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Plot_26">
            <img
              className="rounded-t-xl w-screen md:w-96 h-64"
              src={apartment4}
              alt="Card4"
            />
          </Link>

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather text-center">
                2 BHK APARTMENTS
              </h2>
              <p className="text-xl font-merriweather">Plot No- 26</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  (70 Lakhs to 75 Lakhs)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center pt-5 md:pt-10">
          <Link
            to="/" // Replace "/ready-to-move" with your actual route
            className="bg-green-900 text-white w-fit font-semibold text-sm md:text-xl  font-merriweather m-3 p-3 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
          >
            Go Back
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default PriceRange2;
