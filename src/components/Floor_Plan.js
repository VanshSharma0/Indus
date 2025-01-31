import React from "react";
import _1bhk_apartment_nainital_5 from "./floorplan_layout/floorplan_images/_1bhk_apartment_nainital_5.jpg";
import Sunderkhal_1bhk_apartment_1 from "./floorplan_layout/floorplan_images/Sunderkhal_1bhk_apartment.webp";
// import duplex_cottage_2bhk from "./floorplan_layout/floorplan_images/duplex-cottage_2bhk.webp";
// import cottage_in_nainital_4 from "./floorplan_layout/floorplan_images/4bhk-cottage-in-nainital.webp";
import studio_apartment_5 from "./floorplan_layout/floorplan_images/studio_apartment_5.jpg";
import cottage_in_naiital_3bhk_6 from "./floorplan_layout/floorplan_images/_3bhk_cottage_in_nainital.webp";
import _2bhk_duplex_property_7 from "./floorplan_layout/floorplan_images/2bhk-duplex_property.webp";
// import indepwndent_house_villa_8 from "./floorplan_layout/floorplan_images/independent_house_villa_for_sale_in_nainital.webp";
import wooden_cottage_9 from "./floorplan_layout/floorplan_images/wooden_cottage_property_in_mukteshwar.webp";

// import ppt_3 from "./floorplan_layout/floorplan_pdf/ppt_3.pdf"
import ppt_5 from "./floorplan_layout/floorplan_pdf/ppt_5.pdf"
import ppt_7 from "./floorplan_layout/floorplan_pdf/ppt_7.pdf"
// import ppt_8 from "./floorplan_layout/floorplan_pdf/ppt_8.pdf"


function Floor_Plan() {

  // const openPdf3 = () => {
  //   window.open(ppt_3, "_blank");
  // };
  const openPdf5 = () => {
    window.open(ppt_5, "_blank");
  };
  const openPdf7 = () => {
    window.open(ppt_7, "_blank");
  };
  // const openPdf8 = () => {
  //   window.open(ppt_8, "_blank");
  // };

  return (
<>
<h2 className="text-4xl md:text-6xl md:py-10 hover:underline font-merriweather text-center p-5">
        Floor Plan
      </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-3 md:gap-14 py-10 p-3">

   {/* (.........1.......) */}
   <a href='/Sunderkhal1BHK_House'>
        <div
          style={{ backgroundImage: `url(${Sunderkhal_1bhk_apartment_1})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
          4BHK COTTAGE
          </h3>
        </div>
      </a>

       {/* (......6........) */}
       <a href="#">
        <div
          style={{ backgroundImage: `url(${cottage_in_naiital_3bhk_6})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            3BHK COTTAGE
          </h3>
        </div>
      </a>
      {/* (...7....) */}
      <a
        href={ppt_7}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openPdf7}
      >
        <div
          style={{ backgroundImage: `url(${_2bhk_duplex_property_7})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-85">
            2BHK COTTAGE
          </h3>
        </div>
      </a>
      {/* ....1.......... */}
      <a
        href="/Apartment_1bhk"
      >
        <div
          style={{ backgroundImage: `url(${_1bhk_apartment_nainital_5})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center place-items-end pb-4 m-auto rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            1BHK APARTMENT
          </h3>
        </div>
      </a>
     
      {/* (......3.......) */}
      {/* <a
        href={ppt_3}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openPdf3}
      >
        <div
          style={{ backgroundImage: `url(${duplex_cottage_2bhk})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            2BHK DUPLEX COTTAGE
          </h3>
        </div>
      </a> */}
      {/* (........4........) */}
      {/* <a href="">
        <div
          style={{ backgroundImage: `url(${cottage_in_nainital_4})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center m-auto flex justify-center place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            COTTAGE IN NAINITAL
          </h3>
        </div>
      </a> */}
      {/* (.......5.......) */}
      <a
        href={ppt_5}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openPdf5}
      >
        <div
          style={{ backgroundImage: `url(${studio_apartment_5})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            STUDIO APARTMENT
          </h3>
        </div>
      </a>
     
      {/* (...8....) */}
      {/* <a
        href={ppt_8}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openPdf8}
      >
        <div
          style={{ backgroundImage: `url(${indepwndent_house_villa_8})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            INDEPENDENT HOUSE VILLA
          </h3>
        </div>
      </a>{" "} */}
      {/* (...9....) */}
      <a href="">
        <div
          style={{ backgroundImage: `url(${wooden_cottage_9})` }}
          className="w-full md:w-96 h-80 bg-cover bg-center flex justify-center m-auto place-items-end pb-4 rounded-2xl animate__zoomIn3"
        >
          <h3 className="text-white font-merriweather text-2xl bg-slate-900 p-2 rounded-xl bg-opacity-45">
            WOODEN COTTAGE
          </h3>
        </div>
      </a>
    </div>
</>
   
  );
}

export default Floor_Plan;
