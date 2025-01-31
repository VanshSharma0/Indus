import React, { useState } from "react";
// import bg_cover from "../Assets/bg_img/bg_cover1.webp";
import bg from "../Assets/bg_img/nearby_bg.avif";

// import detail_photo from "../Assets/photos/detail_pic.png";

function IntroductoryDetails() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const content = `We would like to welcome you to Indus Valley Mukteshwar, a peaceful retreat located in the Kumaon foothills of Nainital, Uttarakhand, just 326 km from New Delhi.
  Our property is nestled at 7,358 ft above sea level and offers stunning 360-degree views of the snow-covered Himalayan ranges, including Nanda Devi and Om Parbat.
  Surrounded by fruit orchids and a pollution-free environment, our location is the perfect escape to live amidst the beauty of the Himalayas.
  Strategically located on the future road to Pithoragarh and Kailash Mansarovar, Indus Valley offers various accommodation options, including plots, studios, apartments, and cottages, with or without fully furnished options.
  We offer tailor-made villas that suit your budget, along with EMI options.
  Our unique selling point (USP) is our ready-to-move-in properties like 2 BHK, 3BHK, and 4BHK.
  Our amenities include a clubhouse, restaurant, parking, solar street lights, CCTV security, and a gated society along the state highway.
  Indus Valley is not just a property; it's an investment opportunity in the hills, with a track record of 200% over 15 years.
  We offer a one-night stay to all our prospective customers so they can experience their dream house personally.
  Customer satisfaction is our main priority. We request you to plan a site visit as per your convenience and explore our independent cottages with breathtaking Himalayan views from every window.`;

  const displayContent = () => {
    const lines = content.split("\n");
    if (!showFullContent && window.innerWidth <= 768) {
      return (
        <>
          {lines.slice(0, 4).join("\n")}
          {lines.length > 4 && <span>...</span>}
        </>
      );
    } else {
      return content;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
      className="w-full bg-cover md:bg-auto bg-opacity-10 "
    >
      <div className="flex flex-col gap-3 p-3 md:mx-20 md:py-10">
        <h1 className="text-3xl md:text-5xl bg-black rounded-xl bg-opacity-70 text-center w-fit mx-auto p-2 text-white font-bold font-merriweather">
          Thankyou for showing interest in our projects
        </h1>

        <p className="text-lg md:text-xl bg-black bg-opacity-40 text-white rounded-xl  md:mt-10 p-5 font-merriweather text-justify">
          {displayContent()}
        </p>
        {window.innerWidth <= 768 && (
          <button
            className="text-white w-fit mx-auto bg-black bg-opacity-40 font-bold p-2 rounded-md my-2"
            onClick={toggleContent}
          >
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default IntroductoryDetails;
