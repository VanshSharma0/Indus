import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Gallery from "./Gallery_Plot_27";
import pdf_27_3BHK from "./r2m_pdf/pdf_27_3BHK.pdf";
import fp1 from "./r2m_images/Plot_27/GROUND FLOOR.jpg";
import fp2 from "./r2m_images/Plot_27/FIRST FLOOR.jpg";



const images = [
  fp1,
  fp2,

  // ... add more paths as needed
];

function Plot_27_layout() {
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

  // *****pDF controller************
  const handleButtonClick = () => {
    // window.open("/NoticeForm", "_blank");
    window.open("/contact", "_blank");

  };

  const openPdf = () => {
    window.open(pdf_27_3BHK, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-[#d2d2b4] bg-cover md:bg-opacity-90 text-[#40392d]">
    <h3 className="text-xl md:text-4xl font-semibold font-merriweather md:my-10 text-center p-3">
    3 BHK : Hilltop Getaway
      <br />
      Plot No - 27
      <br />
    </h3>
      <Gallery />

      <section className="w-full p-5 md:w-4/5 xl:w-3/4">
        <div>
          <p className="text-xl md:text-2xl xl:text-3xl  font-merriweather p-5  text-center">
            KEY FEATURES
          </p>
          <div className=" flex flex-col md:flex-row justify-around gap-3 md:gap-10">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-10 xl:gap-x-20 md:py-5 w-fit md:px-10 mx-auto text-lg md:text-xl font-merriweather  ">
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Super Built-up Area:{""}
                <span className="font-semibold">1750 sq ft</span>
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Land Area:{""}
                <span className="font-semibold">250 sq yard</span>
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Fully furnished cottage
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Bay windows with Nanda Devi Himalayan view
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Cozy fireplace for added warmth and ambiance
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Wooden flooring
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-center ">
          <div className="w-fit">
            <p className="text-xl md:text-2xl xl:text-3xl   font-merriweather p-5">
              LIVING AREA / KITCHEN
            </p>

            <ol className="grid grid-cols-1  gap-3 md:py-5 md:gap-x-16  text-lg md:text-xl font-merriweather ">
            <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Seating: Dining table, sofa
              </li> 
            <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Entertainment: LCD unit
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Design: Integrated modular kitchen
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Ventilation: Chimney
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Hot water: Geyser
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Air circulation: Exhaust fan
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Additional: Water filter
              </li>
            </ol>
          </div>

          <div className="w-fit">
            <p className="text-xl md:text-2xl xl:text-3xl font-merriweather p-5 text-center md:text-start">
             BEDROOM
            </p>

            <ol className="grid grid-cols-1  gap-3 md:py-5 md:gap-x-16  text-lg md:text-xl font-merriweather ">
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Furnishing: King size beds
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Space: 3 bedrooms with attached baths
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> View: Bay windows in bedroom with<br/> Nanda Devi Himalayan view
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Storage: Wardrobe, bedside table
              </li>
            </ol>
          </div>

          <div className="w-fit">
            <p className="text-xl md:text-2xl xl:text-3xl font-merriweather p-5 text-center md:text-start">
              BATHROOM
            </p>

            <ol className="grid grid-cols-1  gap-3 md:py-5 md:gap-x-16  text-lg md:text-xl font-merriweather ">
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Space: 3 washrooms
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Quality: High-end fixtures and fittingss
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Storage: Cabinets for toiletries
              </li>
            </ol>
          </div>

          <div className="w-fit">
            <p className="text-xl md:text-2xl xl:text-3xl font-merriweather p-5 text-center md:text-start">
              ADDITIONAL FEATURES
            </p>

            <ol className="grid grid-cols-1  gap-3 md:py-5 md:gap-x-16  text-lg md:text-xl font-merriweather ">
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Parking: Personal parking available
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Windows: UPVC Fenesta windows with toughened glass
              </li>
              <li className="flex animate__zoomIn3  px-2 gap-2 text-[#394422]  md:hover:text-yellow-50 ">
                <span> &#10146;</span> Flooring: Vitrified tiles and wooden flooring
              </li>
            </ol>
          </div>
 
        </div>

      
      </section>

      <section className="p-3">
        <h3 className="text-2xl md:text-4xl font-semibold font-merriweather pb-5 md:mb-10 text-center">
          FLOOR PLAN
        </h3>

        <div className="flex flex-col md:flex-row  gap-5 md:gap-20 bg-cover border-y-2 md:py-5 bg-center">
          {images.map((image, index) => (
            <img
              key={index}
              className="shadow-md shadow-amber-50 gap-5 w-fit md:h-72 m-auto rounded-xl md:hover:scale-110 md:duration-700 cursor-pointer"
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

      <section className="p-3 flex flex-col justify-center items-center mt-0 pb-5">
  <h3 className="text-2xl md:text-4xl font-semibold font-merriweather md:mb-5 pb-5 text-center">
    YOUTUBE LINK
  </h3>

  <div className="video-container">
    <iframe 
      className="w-screen md:w-[800px] h-96"
      src="https://www.youtube.com/embed/-cpH_3dkQKU"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


<section className="m-5 mt-0 md:pb-5 md:mb-0">        
        <p className="text-xl md:text-4xl font-semibold font-merriweather md:my-5 text-center  p-3">
        Price: 1.40 Cr
            </p>
      </section>

      <section className="py-5 md:mx-5 flex">
          <button
             className="bg-green-900 text-white font-semibold text-xs md:text-xl font-merriweather m-3  p-3 md:p-4 my-auto md:mr-8 md:px-8 mr-5 rounded-xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none"
            href={pdf_27_3BHK}
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

export default Plot_27_layout;
