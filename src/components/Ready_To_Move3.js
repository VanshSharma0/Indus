import React from "react";
// import r2m_bg from "../Assets/bg_img/r2m_bg.webp";
// import pdf_69_first from "../Assets/r2m_pdf/pdf_69_first.pdf";
// import pdf_69_second from "../Assets/r2m_pdf/pdf_69_second.pdf";
// import pdf_36_five from "../Assets/r2m_pdf/pdf_36_five.pdf";
// import pdf_log_simplex from "../Assets/r2m_pdf/pdf_log_simplex.pdf";
// import pdf_log_duplex from "../Assets/r2m_pdf/pdf_log_duplex.pdf";

import apartment1 from "../Assets/r2m/apartment1.webp";
import plot_01 from "../Assets/r2m/plot_01.webp";
import apartment4 from "../Assets/r2m/apartment4.webp";
import plot_27 from "../Assets/r2m/plot_27.webp";
import apartment5 from "../Assets/r2m/apartment5.webp";
import apartment6 from "../Assets/r2m/apartment6.webp";
import apartment09 from "../Assets/r2m/p_09.jpg";
import comming_soon from "../Assets/r2m/coming-soon-display-background-with-focus-light_1017-33741.avif";
import plot_5_6 from "../Assets/r2m/Plot_5_6.webp";
import log_simplex from "../Assets/r2m/log_simplex.webp";
import log_duplex from "../Assets/r2m/log_duplex.webp";
import { Link } from "react-router-dom";
import line from "../Assets/bg_img/underline.png";

function Ready_To_Move2() {
  return (
    <>
      <section
        // style={{ backgroundImage: `url(${r2m_bg})` }}
        className="bg-cover bg-center flex flex-col"
      >
        <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:pt-10 font-merriweather text-center p-3">
          READY TO MOVE-IN <br />
        </h2>

        <div className=" flex flex-col md:p-5">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(1.1).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:scale-90 duration-500">
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
                  <p className="text-xl font-merriweather">Plot No.- 09</p>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      50 Lakhs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(1.2).... */}
            <div className="w-fit  m-auto rounded-xl border-2  shadow-lg bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Studio_1bhk_Apart_layout">
                <img
                  className="rounded-t-xl w-screen md:w-96 h-64"
                  src={apartment1}
                  alt="Card1"
                />
              </Link>

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-[#74613C] font-merriweather">
                    1 BHK APARTMENT
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 69</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      (35 Lakhs to 50 Lakhs)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(1.3).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Plot_01">
                <img
                  className="rounded-t-xl w-screen md:w-96 h-64"
                  src={plot_01}
                  alt="Card2"
                />
              </Link>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-[#74613C] font-merriweather">
                    2 BHK Cottage
                  </h2>
                  <p className="text-xl font-merriweather">
                    Plot No.- 01 (Site B)
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      (95 Lakhs to 1 Cr)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(1.4).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
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
                  <p className="text-xl font-merriweather">Plot No.- 27</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      (1.25 Cr to 1.35 Cr)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(1.5).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Cottage_4bhk">
                <img
                  className="rounded-t-xl w-screen md:w-96 h-64"
                  src={apartment6}
                  alt="Card6"
                />
              </Link>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-[#74613C] font-merriweather">
                    4 BHK Cottage
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 43</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      (1.75 Cr to 1.85 Cr)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(1.6).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64 "
                src={comming_soon}
                alt="Card3"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-[#74613C] font-merriweather">
                    Coming Soon...
                  </h2>
                  <p className="text-xl pb-8 font-merriweather">Plot No.- XX</p>
                </div>
              </div>
            </div>
          </section>

          <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
            UNDER CONSTRUCTION
          </h2>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(2.1).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Plot_5_6">
                <img
                  className="rounded-t-xl w-screen md:w-96 h-64"
                  src={plot_5_6}
                  alt="Card4"
                />
              </Link>

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-[#74613C] font-merriweather text-center">
                    STUDIO & 1 BHK APARTMENTS
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 5/6</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      (35 Lakhs to 50 Lakhs)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ....(2.2).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
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
                  <p className="text-xl font-merriweather">Plot No.- 26</p>
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

            {/* ....(2.3).... */}
            <div className="w-fit rounded-xl border-2 bg-[#FAF9F6] shadow-lg m-auto md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
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
                  <p className="text-xl font-merriweather">Plot No.- 36</p>
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
          </section>

          <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
            PREMIUM SEMI WOODEN COTTAGES
          </h2>
          {/* <p className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl font-merriweather text-center p-3">
            On Invitation
          </p> */}

          <section className=" mx-auto flex flex-col md:flex-row justify-center overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(3.1).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Wooden_2bhk">
                <img
                  className="rounded-t-xl w-screen md:w-fit h-72"
                  src={log_simplex}
                  alt="Card7"
                />
              </Link>
              <div>
                <div className="flex flex-col justify-center items-center">
                  {/* <h2 className=" text-2xl text-[#74613C] font-merriweather">
          LOG COTTAGE
        </h2> */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-merriweather">
                      2 BHK SIMPLEX
                    </p>
                    <p className=" text-xl text-[#74613C] font-merriweather">
                      (UNDER CONSTRUCTION)
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      Price Rate -
                    </p>
                    <p className=" text-xl text-[#74613C] font-semibold font-merriweather">
                      {/* (1.10 Cr to 1.20 Cr) */}
                      (1.30 Cr to 1.40 Cr)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ....(3.2).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] md:hover:shadow-slate-200 md:hover:scale-90 duration-500">
              <Link to="/Wooden_3bhk">
                <img
                  className="rounded-t-xl w-screen md:w-fit h-72"
                  src={log_duplex}
                  alt="Card8"
                />
              </Link>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2">
                    <p className=" text-xl text-[#74613C] font-merriweather">
                      3 BHK DUPLEX
                    </p>
                    <p className=" text-xl text-[#74613C] font-merriweather">
                      (UNDER CONSTRUCTION)
                    </p>
                  </div>
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
          </section>
        </div>
      </section>
    </>
  );
}

export default Ready_To_Move2;
