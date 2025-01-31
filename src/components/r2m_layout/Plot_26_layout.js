import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Gallery from "./Gallery_Plot_26";
import pdf_26_fourth from "./r2m_pdf/pdf_26_fourth.pdf";
import fp1 from "./r2m_images/plot_26/26.5.jpg";
// import fp2 from "./r2m_images/plot_26/26.6.webp";

function Plot_26_layout() {
  // ***********Image controller**************
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // Back button handler
  const goBackToGallery = () => {
    setFullscreenImage(null);
  };

  // *****pDF controller************
  const handleButtonClick = () => {
    // window.open("/NoticeForm", "_blank");
    window.open("/contact", "_blank");

  };

  const openPdf = () => {
    window.open(pdf_26_fourth, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Gallery />

      <section className="p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather my-10 text-center">
          OVERVIEW
        </h3>
        <div className=" flex flex-col md:flex-row gap-3 md:gap-10 border-y-2">
          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
            <li className="flex gap-3">
              <p>&#x2022;</p> Plot land area 250 sq. yards.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Super Buildup area 1020 sq.ft.
            </li>
            <li className="flex gap-3">
              <p> &#x2022; </p>2 Bedroom with attached toilet + Living Area +
              Dining Area + 2 Balcony + Modular Kitchen + Entrance Porch +
              Common Toilet.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> 1 Personal Car Parking.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Fully Furnished Optional
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Complete privacy.
            </li>
            
          </ul>

          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
            <li className="flex gap-3">
              <p> &#x2022; </p> Vitrified Tile and Wooden Flooring across the
              villa.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> High-End Bathroom Fittings & UPVC Fenesta windows.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large windows all around the Apartment for better
              sun light and with 180 degree Himalayan view.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large open common garden.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Wide front view.
            </li>
          </ul>
        </div>
      </section>

      <section className="p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather pb-10 text-center">
          FLOOR PLAN
        </h3>

        <div className="flex flex-col md:flex-row  gap-10 md:gap-20 bg-cover border-y-2 md:py-5 bg-center">
          <img
            className="shadow-md shadow-amber-50 gap-5 w-fit md:w-[600px] m-auto rounded-xl md:hover:scale-110 md:duration-700 cursor-pointer"
            src={fp1}
            onClick={() => openFullscreen(fp1)}
          />
        </div>

        {fullscreenImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <button
              className="absolute bottom-28 left-20 text-Black bg-white font-semibold text-sm md:text-xl font-merriweather m-3  p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none
            "
              onClick={goBackToGallery}
            >
              Back
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen Img"
              className="max-h-full max-w-full cursor-pointer p-3 md:p-20 md:pt-32"
              onClick={closeFullscreen}
            />
          </div>
        )}
      </section>
      <section className="py-5 md:mx-5 flex">
        <button
          className="bg-green-900 text-white font-semibold text-xs md:text-xl font-merriweather m-3  p-3 md:p-4 my-auto md:mr-8 md:px-8 mr-5 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
          href={pdf_26_fourth}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openPdf}
        >
          Download PDF
        </button>
        <button
          onClick={handleButtonClick}
          className="bg-green-900 text-white font-semibold text-xs md:text-xl  font-merriweather p-3 md:p-4 my-auto md:mr-8 px-8 mr-5 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
        >
          Rate On Request
        </button>
        <a
          href="/ready_to_move" // Replace "/ready-to-move" with your actual route
          className="bg-green-900 text-white font-semibold text-xs md:text-xl  font-merriweather p-3 mr-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
        >
          Go Back
        </a>
      </section>
    </div>
  );
}

export default Plot_26_layout;
