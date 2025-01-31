import React from "react";

const IntroductoryFooter = () => {
  const handleButtonClick1 = () => {
    window.open("/", "_blank");
  };

  const handleButtonClick2 = () => {
    window.open("/IntroductoryPdfPage", "_blank");
  };

  return (
    <div className="flex flex-col p-5 md:p-16 gap-5 bg-[#f0d6aa]">
      <section className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        <p className="text-lg md:text-3xl text-zinc-600 md:mx-16 px-3 font-merriweather text-justify">
          For more information, we request you to visit our website
        </p>

        <button
          onClick={handleButtonClick1}
          className="bg-[#74613C] text-white font-semibold text-sm md:text-xl md:mx-auto  font-merriweather m-2 p-3 md:p-4 my-auto md:mr-8 px-8 mr-5 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
        >
          CLICK HERE
        </button>
      </section>

      <section className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        <p className="text-lg md:text-3xl text-zinc-600 md:mx-16 px-3 font-merriweather text-justify">
          For all
          <span className="font-semibold animate__zoomIn2 text-[#74613C] hover:shadow-sm">
            {" "}
            PPT Layout
          </span>{" "}
          of Cottages, we request you to Click on the Link
        </p>

        <button
          onClick={handleButtonClick2}
          className="bg-[#74613C] text-white font-semibold text-sm md:text-xl md:mx-auto font-merriweather m-2 p-3 md:p-4 my-auto md:mr-8 px-8 mr-5 rounded-xl hover:bg-[#B7AB90] hover:text-black hover:font-bold focus:outline-none"
        >
          CLICK HERE
        </button>
      </section>
    </div>
  );
};

export default IntroductoryFooter;
