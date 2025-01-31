import React, { useState } from "react";
import Sunderkhal_1bhk_apartment from "./floorplan_images/Sunderkhal_1bhk_apartment.webp";
import img2_1 from "./floorplan_images/2.1.jpg";
import img2_2 from "./floorplan_images/2.2.jpg";

const images = [img2_1, img2_2];

function Sunderkhal1BHK_House() {
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
        style={{ backgroundImage: `url(${Sunderkhal_1bhk_apartment})` }}
        className="min-h-96 md:min-h-screen bg-cover flex justify-center items-center w-screen"
      >
        <h2 className="text-white bg-black bg-opacity-30 rounded-2xl text-2xl md:text-3xl text-center font-merriweather font-bold p-3">
          1 Bhk House for Sale in The Hills Sunderkhal Nainital
        </h2>
      </div>

      <section className="flex flex-col m-5 md:p-20 gap-5">
        <h2 className="text-2xl md:text-3xl font-semibold font-merriweather ">
          1BHK HOUSE FOR SALE IN UTTARAKHAND
        </h2>
        <p className="font-merriweather text-sm md:text-lg text-justify">
          1 BHK Apartment in Sunderkhal Nainital which has 861 sqft area, well
          furnished with all required facilities and amenities. If you are
          looking for a second{" "}
          <span className="text-red-400">
            home in the hills of Uttarakhand, property for sale in mukteshwar
          </span>{" "}
          could be the best and suitable option for you, where you have a
          complete valley view with 180 degrees snowcapped Nanda Devi Himalayan
          ranges. We have constructed 1 bedroom, 1 Kitchen, 2 bathrooms with
          living area in this apartment.
        </p>
        <p className="font-merriweather text-sm md:text-lg text-justify">
          We provide all the required equipments in the flat such as a bed,
          sofa, microwave, television, modular kitchen, and accessories, etc on
          requirement basis.
        </p>
        <p className="font-merriweather text-sm md:text-lg text-justify">
          The approach road is 16 ft which makes it deluxe 1 bhk{" "}
          <span className="text-red-400">house for sale in Nainital</span>. You
          can also use this unit for rental purposes and can get a handsome
          income.
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

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              BEDROOM
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Wall built-in almirah
              </li>
            </ul>
          </section>

          <section className="w-full md:w-1/2">
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
            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              DOORS & WINDOWS
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ UPVC – Fenesta or equivalent
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              ELECTRICAL WORKS
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Wiring, MCB, and distribution boards as per ISI
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ White modular switches
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Spotlights
              </li>
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                {" "}
                ⮞ Musical doorbell
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              OUTER WALL FINISH
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Stone finish
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              RAILINGS
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ Stainless Steel
              </li>
            </ul>

            <ul className="text-lg md:text-xl font-merriweather font-semibold border-b-2 py-10">
              FIREPLACE
              <li className="text-sm font-light font-merriweather md:text-lg p-2 pl-0">
                ⮞ In Living Room(only for cottages)
              </li>
            </ul>
          </section>
        </div>
        <button className="bg-gray-400 md:text-xl  font-semibold font-merriweather px-4 py-2 rounded-2xl hover:bg-black hover:text-white hover:font-bold focus:outline-none">
          DOWNLOAD BROUCHER HERE
        </button>
      </section>
    </>
  );
}

export default Sunderkhal1BHK_House;
