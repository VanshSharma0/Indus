import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Gallery from "./Gallery_Plot_2bhk_Wooden";
import pdf_log_simplex from "./r2m_pdf/pdf_log_simplex.pdf";
import Slider_Plot_2bhk_Wooden from "./Slider_Plot_2bhk_Wooden";
import Fp1 from "./r2m_images/Plot_2bhk_Wooden/2BHK WOODEN.jpg";
import Ph1 from "./r2m_images/Plot_2bhk_Wooden/wooden render site plan.jpg"

const images = [Fp1];
const photos=[Ph1];

function Plot_2bhk_Wooden() {

     // ***********Image controller**************
     const [fullscreenImage, setFullscreenImage] = useState(null);
     const [currentIndex, setCurrentIndex] = useState(0);
   
     const openFullscreen = (image) => {
       setFullscreenImage(image);
     };
   
     const closeFullscreen = () => {
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
    window.open(pdf_log_simplex, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Gallery />

      <section className="w-fit mt-0 p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather my-5 text-center">
          OVERVIEW
        </h3>
        <div className=" w-fit flex flex-col md:flex-row gap-3 md:gap-10 border-y-2">
          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
            <li className="flex gap-3">
              <p>&#x2022;</p> Cottage Land Area 250 sq. yards
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Cottage Build Up Super Area 1500 sq.ft.
            </li>
            <li className="flex gap-3">
              <p> &#x2022; </p>2 Bedroom with attached toilet + Living Area +
              Lobby with Dining Area + 1
              Balcony + Patio + Personal Parking.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Open Modular Kitchen
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Personal Car Parking
            </li>
            {/* <li className="flex gap-3">
              <p>&#x2022;</p> 2 Large Bedrooms with attached bathrooms
            </li> */}
             <li className="flex gap-3">
              <p> &#x2022; </p> Wooden Flooring across the villa.
            </li>
          </ul>

          <ul className="flex flex-col gap-3 text-lg md:text-xl font-merriweather w-full md:w-96">
           
          <li className="flex gap-3">
              <p> &#x2022; </p> Bathroom Fixture And Fittings
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p>UPVC Fenesta Windows With Tuffen Glass 
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large windows all around the villa for better sun
              light and with 180 degree Himalayan view.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Large open personal garden.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Wide front view.
            </li>
            <li className="flex gap-3">
              <p>&#x2022;</p> Complete privacy from surrounding villas.
            </li>
          </ul>
        </div>
      </section>

      <section className="p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather pb-5 md:pb-10 text-center">
          FLOOR PLAN
        </h3>

        <div className="flex flex-col md:flex-row  gap-10 md:gap-20 bg-cover border-y-2 md:py-5 bg-center">
          {images.map((image, index) => (
            <img
              key={index}
              className="shadow-md shadow-amber-50 gap-5 w-fit md:w-96 m-auto rounded-xl md:hover:scale-110 md:duration-700 cursor-pointer"
              src={image}
              alt={`Gallery Img ${index + 1}`}
              onClick={() => openFullscreen(image)}
            />
          ))}
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


      <section className="p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather pb-5 md:pb-10 text-center">
          SITE PLAN
        </h3>

        <div className="flex flex-col md:flex-row  gap-10 md:gap-20 bg-cover border-y-2 md:py-5 bg-center">
          {photos.map((photo, index) => (
            <img
              key={index}
              className="shadow-md shadow-amber-50 gap-5 w-fit md:w-[40vw] m-auto rounded-xl md:hover:scale-110 md:duration-700 cursor-pointer"
              src={photo}
              alt={`Gallery Img ${index + 1}`}
              onClick={() => openFullscreen(photo)}
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



<section className="p-3">
          <h3 className="text-2xl md:text-4xl font-semibold font-merriweather pb-5 md:pb-10 text-center">
            GALLERY
          </h3>

          <Slider_Plot_2bhk_Wooden/>
        </section>


        <section className="py-5 md:mx-5 flex">
        <button
          className="bg-green-900 text-white font-semibold text-xs md:text-xl font-merriweather m-3  p-3 md:p-4 my-auto md:mr-8 md:px-8 mr-5 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
          href={pdf_log_simplex}
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
            href="/ready_to_move"  // Replace "/ready-to-move" with your actual route
            className="bg-green-900 text-white font-semibold text-xs md:text-xl  font-merriweather p-3 mr-3 md:p-4 my-auto md:mr-8 md:px-8 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
 >
            Go Back
          </a>
      </section>
    </div>
  );
}

export default Plot_2bhk_Wooden;
