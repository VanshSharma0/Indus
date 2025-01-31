import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Marquee from "react-fast-marquee";

// SliderComponent with Marquee
const SliderComponent = ({ imageUrls }) => {
  return (
    <div>
      {/* Marquee Component */}
      <Marquee gradient={false} speed={50} direction="left" className="my-5">
        {imageUrls.map((item, index) => (
          <div key={index} className="mx-3">
            <img
              src={item}
              className="h-[90vw] md:h-[36vw] w-full object-cover"
              alt={`marquee-banner-${index}`}
            />
          </div>
        ))}
      </Marquee>

      {/* Lightbox Grid */}
      <SlideshowLightbox
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-5 pb-0 w-full bg-cover mx-auto items-center"
        showThumbnails
      >
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`lightbox-${index}`}
            className="w-full  object-cover rounded-lg p-2 md:w-[380px] md:h-[150px]"
          />
        ))}
      </SlideshowLightbox>
    </div>
  );
};

export default SliderComponent;
