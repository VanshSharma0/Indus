import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Gallery from "./Gallery_Plot_36";
import pdf_36_five from "./r2m_pdf/pdf_36_five.pdf";
import fp1 from "./r2m_images/plot_36/iv1.webp";
import fp2 from "./r2m_images/plot_36/iv2.webp";
import fp3 from "./r2m_images/plot_36/iv3.webp";
import fp4 from "./r2m_images/plot_36/iv4.webp";

const images = [
  fp1,
  fp2,
  fp3,
  fp4,
  // ... add more paths as needed
];

function Plot_36_layout() {
  // ***********Image controller**************
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Next button handler
  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    console.log("Next Index:", nextIndex);
    console.log("Next Image:", images[nextIndex]);

    setCurrentIndex(nextIndex);
    openFullscreen(images[nextIndex], nextIndex);
  };

  
  const handleButtonClick = () => {
    // window.open("/NoticeForm", "_blank");
    window.open("/contact", "_blank");

  };
  
// *****pDF controller************
  const openPdf = () => {
    window.open(pdf_36_five, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Gallery />

      <section className="m-5 mt-0 pb-5">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather my-10 text-center">
          OVERVIEW
        </h3>
        <div className=" flex flex-col md:flex-row gap-3 md:gap-10 border-y-2 py-5">
          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
            <li className="flex gap-3">
              <p>&#x2022;</p>SUPER BUILT UP AREA : 1921 sq.ft.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p>Plot Land Area 250 sq. yards
            </li>

            <li className="flex gap-3">
              <p> &#x2022; </p>2 Bedroom with attached toilet + Both floor
              Modular Kitchen + Living Area + Drawing with Dining Area + Commom
              Toilet + 2 Balcony + Entrance Lobby
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p>1 Personal Cars Parking
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Fully Furnished Optional
            </li>
           <li className="flex gap-3">
              <p>&#x2022;</p> Wide Front View
            </li>
          </ul>

          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
            <li className="flex gap-3">
              <p> &#x2022; </p> Vitrified Tile and Wooden Flooring Across The
              Villa
            </li>
            <li className="flex gap-3">
              <p> &#x2022; </p> Bathroom Fixture And Fittings
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p>UPVC Fenesta Windows With Tuffen Glass 
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large windows all around the Apartment for better
              sun light and with 180 degree Himalayan view
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large Open Common Garden
            </li>
           
          </ul>
        </div>
      </section>

      <section className="m-5 mt-0 pb-5">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather mb-10 text-center">
          FLOOR PLAN
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 bg-cover border-y-2 md:p-5 bg-center">
          {images.map((image, index) => (
            <img
              key={index}
              className="shadow-md shadow-amber-50 gap-5 w-fit md:w-80 m-auto rounded-xl md:hover:scale-110 md:duration-700 cursor-pointer"
              src={image}
              alt={`Gallery Img ${index + 1}`}
              onClick={() => openFullscreen(image)}
            />
          ))}
        </div>

        {fullscreenImage && (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center"
    onClick={closeFullscreen}
  >
    <button
      className="absolute bottom-52 left-20 text-white font-semibold text-2xl md:text-5xl font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:text-green-300 hover:font-bold focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        goBackToGallery();
      }}
    >
      &#x2B9C;
    </button>

    <button
      className="absolute bottom-52 right-20 text-white font-semibold text-2xl md:text-5xl font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:text-green-300 hover:font-bold focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        showNextImage();
      }}
    >
      &#x2B9E;
    </button>
    <img
      src={fullscreenImage}
      alt="Fullscreen Img"
      className="max-h-full max-w-full cursor-pointer md:p-20 md:pt-32"
      onClick={(e) => e.stopPropagation()} // Prevent click event propagation
    />
  </div>
)}
      </section>

      <section className="py-5 md:mx-5 flex">
          <button
             className="bg-green-900 text-white font-semibold text-xs md:text-xl font-merriweather m-3  p-3 md:p-4 my-auto md:mr-8 md:px-8 mr-5 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
            href={pdf_36_five}
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

export default Plot_36_layout;
