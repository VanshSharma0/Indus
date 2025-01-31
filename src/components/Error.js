import React from "react";
import error from "../Assets/other/404-error.jpg";
import { Link } from "react-router-dom";

// Uncomment the line below if you have a CSS file to import
// import './css/index.css';

function Error() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          className="w-screen h-64 md:h-screen"
          src={error}
          alt="Error page"
        />

        {/* Adjusted the className for positioning the Link */}
        <Link
          className="absolute top-1/5 right-0 bottom-10 md:bottom-20 flex flex-col justify-end items-end md:pr-36"
          to="/"
        >
          <button className="bg-[#547779] z-30 text-white md:text-2xl font-bold m-3 py-2 md:p-4 my-auto md:mr-8 px-8 mr-5 rounded-2xl hover:bg-green-300 hover:text-black hover:font-bold focus:outline-none font-merriweather ">
            Go To HOME Page
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error;
