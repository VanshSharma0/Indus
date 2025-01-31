import React, { useState } from "react";
import Apartment_1bhkimg from "./floorplan_images/Apartment_1bhk.webp";
import img1_1 from "./floorplan_images/1.1.jpg";
import img1_2 from "./floorplan_images/1.2.jpg";

import ppt_1 from "./floorplan_pdf/ppt_1.pdf";

const images = [img1_1, img1_2];

function Apartment_1bhk() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Apartment_1bhkimg})` }}
        className="min-h-96 md:min-h-screen bg-cover flex justify-center items-center w-screen"
      >
        <h2 className="text-white bg-black bg-opacity-30 rounded-2xl text-3xl md:text-5xl text-center font-merriweather font-bold p-3">
          READY TO MOVE 1 BHK APARTMENT IN MUKTESHWAR, NAINITAL
        </h2>
      </div>

      <section className="flex flex-col m-5 md:p-20 gap-5">
        <h2 className="text-2xl md:text-3xl font-semibold font-merriweather ">
          1 BHK Property for Sale in Mukteshwar
        </h2>
        <p className="font-merriweather text-sm md:text-lg text-justify">
          1 BHK{" "}
          <span className="text-red-400">
            Luxury Family Cottages for Sale in Mukteshwar{" "}
          </span>{" "}
          Nainital 775 sqft unit is one of the most popular{" "}
          <span className="text-red-400">
            {" "}
            properties for sale in Mukteshwar{" "}
          </span>
          hill area. In this apartment, we have built 1 bedroom, 1 open kitchen,
          2 bathrooms with a living room with semi-furnished facilities and
          amenities. We have also built a modular kitchen with all the kitchen
          equipment. Basically, it's a second/holiday/retirement{" "}
          <span className="text-red-400">
            home in the hills Uttarakhand{" "}
          </span>{" "}
          for nature lovers.
        </p>
        <p className="font-merriweather text-sm md:text-lg text-justify">
          You will also get all the regular equipment and accessories in the
          apartment. In the winter season, you can enjoy the snowfall on the
          site.
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center">
          {images.map((image, index) => (
            <img
              key={index}
              className="shadow-md shadow-amber-50 gap-5 rounded-xl md:hover:scale-110 md:duration-700 h-96 w-96 cursor-pointer"
              src={image}
              alt={`Gallery Image ${index + 1}`}
              onClick={() => openFullscreen(image)}
            />
          ))}
        </div>
        {fullscreenImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen Image"
              className="max-h-full max-w-full cursor-pointer p-20 pt-32"
              onClick={closeFullscreen}
            />
          </div>
        )}
      </section>

      <section className="flex flex-col m-5 md:p-20 gap-10 md:pt-0">
        <h3 className="text-2xl md:text-3xl font-semibold font-merriweather text-center">
          Specifications
        </h3>

        <div className="flex flex-col gap-5 md:flex-row">
          <section className="w-full md:w-1/2">
            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              FLOORING
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Vitrified tiles with the wooden look in Bedroom & Living Rooms
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Anti-Skid tile in Bathroom
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              TOILET & BATHROOM
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Pedestal Basin
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Fixtures and fittings in SS
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Wall hung the flush system
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Walls tiles up to 7ft
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              INNER WALL FINISH
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ POP and wall putty
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Acrylic paint finish
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              ROOF
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Wooden Flash Cement Board
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Shingles Roof
              </li>
            </ul>
          </section>

          <section className="w-full md:w-1/2">
            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              DOORS & WINDOWS
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ UPVC – Fenesta or equivalent
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              BEDROOM
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Wall built-in almirah
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              KITCHEN
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Modular kitchen with granite top
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Single bowl sink in stainless steel
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Cabinet on walls
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Colored designer tiles on walls up to 2ft above counter
              </li>
            </ul>
          </section>
        </div>
        <button
          onClick={() => window.open(ppt_1, "_blank")}
          className="bg-gray-400 font-semibold md:text-xl font-merriweather px-4 py-2 rounded-2xl hover:bg-black text-white hover:font-bold focus:outline-none"
        >
          DOWNLOAD BROCHURE HERE
        </button>
      </section>
    </>
  );
}

export default Apartment_1bhk;
