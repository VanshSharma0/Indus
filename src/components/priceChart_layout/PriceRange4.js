import React from "react";
import { Link } from "react-router-dom";
import plot_27 from "../../Assets/r2m/plot_27.webp";
import log_simplex from "../../Assets/r2m/log_simplex.webp";
import line from "../../Assets/bg_img/underline.png";

const PriceRange4 = () => {
  return (
    <div className="py-8 md:pt-20">
      <h2 className="text-[#74613C] mx-auto my-5 md:my-10 bg-white bg-opacity-60 px-3 rounded-2xl hover:text-slate-500 text-3xl md:text-4xl font-merriweather text-center font-bold py-2">
        UNDER 1.00 TO 1.5 Cr.
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-3 p-3">
        {/* ....(4.1).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Plot_27">
            <img
              className="rounded-t-xl w-screen md:w-96 h-64"
              src={plot_27}
              alt="Card4"
            />
          </Link>

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather text-center">
                3 BHK Cottage
              </h2>
              <p className="text-xl font-merriweather">Plot No- 27</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  1.40 Cr
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ....(4.2).... */}
        <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
          <Link to="/Wooden_2bhk">
            <img
              className="rounded-t-xl w-screen md:w-96 h-72"
              src={log_simplex}
              alt="Card7"
            />
          </Link>
          <div>
            <div className="flex flex-col justify-center items-center">
              {/* <h2 className=" text-2xl text-[#74613C] font-merriweather">
          LOG COTTAGE
        </h2> */}
              <p className=" text-2xl text-center text-[#74613C] font-merriweather">
                2 BHK SIMPLEX <br />
                <span className="text-xl text-black">(UNDER CONSTRUCTION)</span>
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  Price Rate -
                </p>
                <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                  (1.30 Cr to 1.40 Cr)
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

export default PriceRange4;
