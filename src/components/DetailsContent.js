import React, { useState, useEffect } from "react";
// import bg_project from '../Assets/bg_img/bg_project.jpg';
import line from "../Assets/bg_img/underline.png";
import AOS from "aos";
import "aos/dist/aos.css";

function DetailsContent() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="flex flex-col gap-3 md:gap-0 text-[#74613C]"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:pt-10 font-merriweather text-center p-3">
          PROJECT OVERVIEW{" "}
        </h3>
        <h1 className="w-fit text-[#74613C] mx-auto text-sm md:text-xl font-merriweather text-center px-3">
          (PROPERTY FOR SALE IN NAINITAL)
        </h1>
      </div>

      <div className="flex flex-col gap-5 p-3 md:py-10 md:m-14 md:my-0 shadow-lg bg-white bg-opacity-30 font-merriweather">
  {/* style={{ backgroundImage: `url(${bg_project})`}} */}
  <p className="text-lg md:text-xl md:mx-16 px-3 font-semibold text-justify">
  Welcome to Indus Valley Mukhteshwar, a place that connects you to the majestic beauty of the Himalayas. Spanning across 10 acres of land, this private gated township in the lap of the Himalayas can be a perfect destination for you to invest in your Himalayan facing dream house. 
  </p>
  {showMore && (
    <>
      <p className="text-lg md:text-xl md:mx-16 px-3 text-justify">
        Located at a distance of 326 Km (7-hour drive) from Delhi and a 1.5-hour drive from Nainital, this property is nestled at 7,358 ft above sea level. It offers breathtaking 360-degree views of the snow-covered Nanda Devi Himalayan range, surrounded by pine and deodar trees, valleys, and fruit orchards. 
      </p>
      <p className="text-lg md:text-xl md:mx-16 px-3">
        <br /> "A RESIDENCE OF LORD SHIVA "
      </p>
      <p className="text-lg md:text-xl md:mx-16 px-3">
        This exclusive township is diversified to offer various accommodation options: studios and apartments, custom-built cottages, and premium semi-wooden villas. All the necessary government approvals, including the NOC from RERA, are in place. {" "}
        <span className="font-semibold text-[#74613C]">
          (all with government approvals, including NOC from RERA)
        </span>{" "}
        The amenities that come along with our gated community include electricity and water connections, dedicated parking spaces, a clubhouse, a restaurant, solar street lights, CCTV security, and much more. 
      </p>
      <p className="text-lg font-semibold md:text-xl md:mx-16 px-3">
        These Himalayan-facing cottages serve three purposes: vacation homes, retirement homes, and opportunities for those who want to run their homestay and seek a return on investment.
      </p>
      <p className="text-lg md:text-xl md:mx-16 px-3">
        Discover peace; Discover the Indus Valley.
      </p>
    </>
  )}

  {/* Read More Button (Mobile Only) */}
  {!showMore && window.innerWidth <= 768 ? (
    <button
      className="text-blue-500 hover:underline cursor-pointer"
      onClick={toggleReadMore}
    >
      Read More
    </button>
  ) : null}
</div>
    </div>
  );
}

export default DetailsContent;
