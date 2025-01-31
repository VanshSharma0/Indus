import React from "react";
import r2m_bg from "../Assets/bg_img/r2m_bg.webp";
import pdf_43_six from "../Assets/r2m_pdf/pdf_43_six.pdf";
import pdf_01 from "../Assets/r2m_pdf/pdf_01.pdf";
import pdf_69_first from "../Assets/r2m_pdf/pdf_69_first.pdf";
import pdf_36_five from "../Assets/r2m_pdf/pdf_36_five.pdf";
import pdf_26_fourth from "../Assets/r2m_pdf/pdf_26_fourth.pdf";
import pdf_27_3BHK from "../Assets/r2m_pdf/pdf_27_3BHK.pdf";
import pdf_5_6 from "../Assets/r2m_pdf/pdf_5_6.pdf";
import pdf_09 from "../Assets/r2m_pdf/pdf_09.pdf";
// import pdf_69_first from "../Assets/r2m_pdf/pdf_69_first.pdf";
// import pdf_69_second from "../Assets/r2m_pdf/pdf_69_second.pdf";
// import pdf_36_five from "../Assets/r2m_pdf/pdf_36_five.pdf";
import pdf_log_simplex from "../Assets/r2m_pdf/pdf_log_simplex.pdf";
import pdf_log_duplex from "../Assets/r2m_pdf/pdf_log_duplex.pdf";

import apartment1 from "../Assets/r2m/apartment1.webp";
import plot_01 from "../Assets/r2m/plot_01.webp";
import apartment4 from "../Assets/r2m/apartment4.webp";
import plot_27 from "../Assets/r2m/plot_27.webp";
import apartment5 from "../Assets/r2m/apartment5.webp";
import apartment6 from "../Assets/r2m/apartment6.webp";
import apartment09 from "../Assets/r2m/apartment09.webp";
import comming_soon from "../Assets/r2m/coming-soon-display-background-with-focus-light_1017-33741.avif";
import plot_5_6 from "../Assets/r2m/Plot_5_6.webp";
import log_simplex from "../Assets/r2m/log_simplex.webp";
import log_duplex from "../Assets/r2m/log_duplex.webp";
// import { Link } from "react-router-dom";

function IntroductoryPdfPage() {
  // const openPdf2 = () => {
  //   window.open(pdf_69_second, "_blank");
  // };

  const openPdf47 = () => {
    window.open(pdf_43_six, "_blank");
  };

  const openPdf01 = () => {
    window.open(pdf_01, "_blank");
  };

  const openPdf7 = () => {
    window.open(pdf_log_simplex, "_blank");
  };
  const openPdf8 = () => {
    window.open(pdf_log_duplex, "_blank");
  };

  const openPdf69 = () => {
    window.open(pdf_69_first, "_blank");
  };

  const openPdf36 = () => {
    window.open(pdf_36_five, "_blank");
  };

  const openPdf26 = () => {
    window.open(pdf_26_fourth, "_blank");
  };

  const openPdf5_6 = () => {
    window.open(pdf_5_6, "_blank");
  };

  const openPdf27 = () => {
    window.open(pdf_27_3BHK, "_blank");
  };
  const openPdf09 = () => {
    window.open(pdf_09, "_blank");
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url(${r2m_bg})` }}
        className="min-h-screen bg-cover bg-center flex flex-col"
      >
        <h2 className=" mx-auto my-5 md:mt-10 bg-white bg-opacity-60 text-slate-900 px-3 rounded-2xl hover:text-slate-500 text-3xl md:text-5xl font-merriweather text-center font-bold py-2">
          READY TO MOVE-IN
        </h2>

        <div className=" flex flex-col md:p-10">
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(1.1).... */}
            <div className="w-fit md:w-96 rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={apartment6}
                alt="Card6"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather">
                    4 BHK Cottage
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 43</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_43_six}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf47}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(1.2).... */}
            <div className="w-fit md:w-96 rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={plot_27}
                alt="Card4"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather text-center">
                    3 BHK Cottage
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 27</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_27_3BHK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf27}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(1.3).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#EFEFEF] hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={plot_01}
                alt="Card2"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather">
                    2 BHK Cottage
                  </h2>
                  <p className="text-xl font-merriweather">
                    Plot No.- 01 (Site B)
                  </p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_01}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf01}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(1.4).... */}
            <div className="w-fit  m-auto rounded-xl border-2  shadow-lg bg-[#EFEFEF] hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={apartment1}
                alt="Card1"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather">
                    STUDIO & 1 BHK APARTMENT
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 69</p>
                </div>

                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_69_first}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf69}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(1.5).... */}
            <div className="w-fit rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={apartment09}
                alt="Card3"
              />
              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather">
                    1 BHK APARTMENT
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 09</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_09}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf09}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(1.6).... */}
            <div className="w-fit rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64 "
                src={comming_soon}
                alt="Card3"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather">
                    Coming Soon...
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- XX</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-24 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  //   href={pdf_26_fourth}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   onClick={openPdf}
                >
                  PDF Available Soon
                </button>
              </div>
            </div>
          </section>

          <h2 className="text-slate-900 mx-auto my-5 md:my-10 bg-white bg-opacity-60 px-3 rounded-2xl hover:text-slate-500 text-3xl md:text-5xl font-merriweather text-center font-bold py-2">
            UNDER CONSTRUCTION
          </h2>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(2.1).... */}
            <div className="w-fit rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={apartment5}
                alt="Card5"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather text-center">
                    2 BHK APARTMENTS
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 36</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_36_five}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf36}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(2.2).... */}
            <div className="w-fit rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={apartment4}
                alt="Card4"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather text-center">
                    2 BHK APARTMENTS
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 26</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_26_fourth}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf26}
                >
                  Download PDF
                </button>
              </div>
            </div>

            {/* ....(2.3).... */}
            <div className="w-fit rounded-xl border-2 bg-[#EFEFEF] shadow-lg m-auto hover:shadow-slate-200 animate__zoomIn3">
              <img
                className="rounded-t-xl w-screen md:w-96 h-64"
                src={plot_5_6}
                alt="Card4"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" text-2xl text-green-800 font-merriweather text-center">
                    STUDIO & 1 BHK APARTMENTS
                  </h2>
                  <p className="text-xl font-merriweather">Plot No.- 5/6</p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-28 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_5_6}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf5_6}
                >
                  Download PDF
                </button>
              </div>
            </div>
          </section>

          <h2 className="text-slate-900 mx-auto md:mt-10 bg-white bg-opacity-60 px-3 rounded-2xl hover:text-slate-600 text-3xl md:text-5xl font-merriweather text-center font-bold py-2">
            PREMIUM WOODEN COTTAGES
          </h2>
          <p className="text-slate-900 mx-auto md:mb-10 bg-white px-3 rounded-b-2xl bg-opacity-60 hover:text-slate-600 text-2xl md:text-5xl font-Srisakdi text-center font-bold md:pb-2">
            (On Invitation)
          </p>

          <section className=" mx-auto flex flex-col md:flex-row justify-center overflow-hidden gap-3 md:gap-14 p-3">
            {/* ....(3.1).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#EFEFEF] hover:shadow-slate-200 animate__zoomIn">
              <img
                className="rounded-t-xl w-screen md:w-fit h-72"
                src={log_duplex}
                alt="Card8"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  <p className=" text-2xl text-green-800 font-merriweather">
                    3 BHK DUPLEX
                  </p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-36 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  href={pdf_36_five}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf8}
                >
                  Download PDF
                </button>
              </div>
            </div>
            {/* ....(3.2).... */}
            <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#EFEFEF] hover:shadow-slate-200 animate__zoomIn">
              <img
                className="rounded-t-xl w-screen md:w-fit h-72"
                src={log_simplex}
                alt="Card7"
              />

              <div>
                <div className="flex flex-col justify-center items-center">
                  {/* <h2 className=" text-2xl text-green-800 font-merriweather">
          LOG COTTAGE
        </h2> */}
                  <p className=" text-2xl text-green-800 font-merriweather">
                    2 BHK SIMPLEX
                  </p>
                </div>
                <button
                  className="bg-green-900  text-white font-semibold text-sm md:text-xl font-merriweather m-3 w-fit items-center ml-36 rounded-xl p-4  hover:bg-green-300 hover:text-black hover:font-bold "
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openPdf7}
                >
                  Download PDF
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default IntroductoryPdfPage;
