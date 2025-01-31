import React, { useState } from "react";
// import bg_cover from "../Assets/bg_img/bg_cover1.webp";
// import detail_photo from "../Assets/photos/detail_pic.png";

function HomeContent() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const content = `Welcome to Indus Valley Mukteshwar, a tranquil getaway in the Kumaon foothills of Nainital, just 326 km from New Delhi. This property is nestled at 7,358 ft above sea level. It offers breathtaking 360-degree views of the snow-covered Nanda Devi Himalayan range, surrounded by pine and deodar trees, valleys and fruit orchards.<br/>

  The Indus Valley is strategically located on the future road to Pithoragarh to Kailash Mansarovar

  We offers various accommodation options, including plots, studios, and apartments, as well as customized cottages and premium semi-wooden villas, all with government approvals, including NOC from RERA. Our amenities include a clubhouse, restaurant, parking, solar street lights, CCTV security, and a gated society along the state highway. Possession of cottages and apartments has been handed over to satisfied residents.
  
  Our unique selling proposition (USP) is to deliver ready-to-move-in cottages, such as studio, 1-BHK, 2-BHK, 3-BHK, 4-BHK, and tailor-made cottages of the customer's choice in just eight months. Moreover, if any resident wants to sell their property, Indus Valley buys back the property with good returns and benefits.
  
  For anyone looking for a property in Nainital, a cottage in Mukteshwar, a cottage for sale in Nainital, a property in Uttarakhand  or cottages for sale in Mukteshwar,  ideal place for second homes, gateway homes, vacation homes, or retirement homes and is the best gift that one can give to their loved ones.
  
  The Indus Valley is not just a property; it's an investment opportunity in the hills, offering the best returns up to 200 times in the last decade with a track record of over 15 years.
  
  Live amidst the beauty of the Himalayas!`;

  const displayContent = () => {
    const lines = content.split("\n");
    if (!showFullContent && window.innerWidth >= 40) {
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
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-3 md:py-5 justify-center">

        <div className="w-fit md:w-1/4 flex flex-col justify-center items-center mx-auto md:mx-0">
          <h1 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl font-merriweather text-center p-3 md:p-0">
          Indus Valley Mukteshwar
        </h1>
        <h3 className="w-fit text-[#74613C] mx-auto text-xl md:text-3xl font-merriweather text-center p-3">
          Cottages and Apartments
        </h3>
        </div>
    <div className="flex flex-col gap-3 md:py-5 w-fit md:w-2/4">
       <p className="text-lg md:text-2xl md:mx-16 font-extralight px-3 font-merriweather text-justify">
          {displayContent()}
        </p>
        {window.innerWidth >= 40 && (
          <button
            className="text-white w-fit mx-auto bg-black bg-opacity-40 font-bold p-2 rounded-md my-2"
            onClick={toggleContent}
          >
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
    </div>
       
      </div>
    </div>
  );
}

export default HomeContent;
