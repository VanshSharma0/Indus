import React from "react";
// import arrow from "../Assets/icons/arrow.png";

function WebsiteLinks() {
  const handleButtonClick1 = () => {
    window.open("https://www.tsgoc.in/", "_blank");
  };

  const handleButtonClick2 = () => {
    window.open("/project-details/property-in-mukteshwar-for-sale", "_blank");
  };

  const handleButtonClick3 = () => {
    window.open("/gallery", "_blank");
  };

  const handleButtonClick4 = () => {
    window.open("/nearby", "_blank");
  };

  const handleButtonClick5 = () => {
    window.open("/ready_to_move", "_blank");
  };

  return (
    <div className="flex flex-col gap-3 md:gap-0">
      <div>
        <h3 className="w-fit mx-auto text-3xl md:text-6xl md:py-10 hover:underline font-merriweather font-bold text-center p-5">
          STEPS TO EASY ACCESS OUR WEBSITE
        </h3>
      </div>

      <section className="flex flex-col gap-5 border-4 md:py-10 md:m-14 md:mt-0 shadow-lg shadow-[#f0d6aa] bg-orange-50">
        <div className="flex items-center px-3 gap-3 md:gap-5 justify-between">
          <div className="w-1/2 md:w-fit md:mx-16 gap-0 md:gap-2 flex flex-col md:flex-row">
            <p className=" text-xl md:text-3xl text-zinc-600 font-merriweather font-semibold md:text-justify">
              Know
            </p>
            <p className="font-semibold text-xl md:text-3xl font-merriweather text-[#74613C]">
              About Us
            </p>
          </div>

          {/* <img className="w-16 md:m-auto md:ml-72" src={arrow} alt="arrow" /> */}
          <button
            onClick={handleButtonClick1}
            className="w-1/3 md:w-fit bg-[#74613C] text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 px-8 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
          >
            CLICK HERE
          </button>
        </div>

        <div className="flex  items-center px-3 gap-3 md:gap-5 justify-between">
          <div className="w-1/2 md:w-fit md:mx-16 gap-0 md:gap-2 flex flex-col md:flex-row">
            <p className="font-semibold text-zinc-600 text-xl md:text-3xl font-merriweather md:text-justify">
              For{" "}
            </p>
            <p className="font-semibold text-xl md:text-3xl font-merriweather text-[#74613C]">
              {" "}
              Project Details
            </p>
          </div>
          {/* <img className="w-16 md:mx-auto" src={arrow} alt="arrow" /> */}
          <button
            onClick={handleButtonClick2}
            className="bg-[#74613C] w-1/3 md:w-fit text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 px-8 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
          >
            CLICK HERE
          </button>
        </div>

        <div className="flex items-center px-3 gap-3 md:gap-5 justify-between">
          <div className="w-1/2 md:w-fit md:mx-16 gap-0 md:gap-2 flex flex-col md:flex-row">
            <p className="font-semibold text-zinc-600 text-xl md:text-3xl font-merriweather md:text-justify">
              For
            </p>
            <p className="font-semibold text-xl md:text-3xl font-merriweather text-[#74613C]">
              {" "}
              Photos / Gallery
            </p>
          </div>

          {/* <img className="w-16 md:m-auto md:ml-64" src={arrow} alt="arrow" /> */}
          <button
            onClick={handleButtonClick3}
            className="w-1/3 md:w-fit  bg-[#74613C] text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 px-8 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
          >
            CLICK HERE
          </button>
        </div>

        <div className="flex items-center px-3 md:gap-5 justify-between">
          <div className="w-1/2 md:w-fit md:mx-16 gap-0 md:gap-2 flex flex-col md:flex-row">
            <p className="font-semibold text-zinc-600 text-xl md:text-3xl font-merriweather md:text-justify">
              For{" "}
            </p>
            <p className="font-semibold text-xl md:text-3xl font-merriweather text-[#74613C]">
              {" "}
              Nearby Locations
            </p>
          </div>

          {/* <img className="w-16 ml-4 md:mx-16" src={arrow} alt="arrow" /> */}
          <button
            onClick={handleButtonClick4}
            className="w-1/3 md:w-fit bg-[#74613C] text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 px-8 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
          >
            CLICK HERE
          </button>
        </div>

        <div className="flex items-center px-3 gap-3 md:gap-1 justify-between">
          <div className="w-1/2 md:w-fit md:mx-16 gap-0 md:gap-2 flex flex-col md:flex-row">
            <p className="font-semibold text-zinc-600 text-xl md:text-3xl font-merriweather md:text-justify">
              For
            </p>
            <p className="font-semibold text-xl md:text-3xl font-merriweather text-[#74613C]">
              {" "}
              Ready To Move In Cottages
            </p>
          </div>
          {/* <img className="w-16 md:ml-20 " src={arrow} alt="arrow" /> */}
          <button
            onClick={handleButtonClick5}
            className="w-1/3 md:w-fit bg-[#74613C] hover:bg-[#B7AB90] text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-3 p-3 md:p-4 my-auto md:mr-8 px-8 rounded-xl hover:text-black hover:font-bold focus:outline-none"
          >
            CLICK HERE
          </button>
        </div>
      </section>
    </div>
  );
}

export default WebsiteLinks;
