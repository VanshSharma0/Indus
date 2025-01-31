import { Carousel, IconButton } from "@material-tailwind/react";

import img1 from "./r2m_images/Plot_3bhk_Wooden/IMG_01.webp";
import img2 from "./r2m_images/Plot_3bhk_Wooden/IMG_02.webp";
import img3 from "./r2m_images/Plot_3bhk_Wooden/IMG_03.webp";
import img4 from "./r2m_images/Plot_3bhk_Wooden/IMG_04.webp";
import img5 from "./r2m_images/Plot_3bhk_Wooden/IMG_05.webp";
import img6 from "./r2m_images/Plot_3bhk_Wooden/3.jpg";


const Gallery_Plot_3bhk_Wooden = () => {
    const theme = {
        carousel: {
          defaultProps: {
            prevArrow: ({ loop, handlePrev, firstIndex }) => {
              return (
                <button
                  onClick={handlePrev}
                  disabled={!loop && firstIndex}
                  className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                >
                  
                </button>
              );
            },
            nextArrow: ({ loop, handleNext, lastIndex }) => (
              <button
                onClick={handleNext}
                disabled={!loop && lastIndex}
                className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
              >
             
              </button>
            ),
            navigation: ({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                      activeIndex === i ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            ),
            autoplay: false,
            autoplayDelay: 5000,
            transition: {
              type: "tween",
              duration: 0.5,
            },
            loop: false,
            className: "",
          },
          styles: {
            base: {
              carousel: {
                position: "relative",
                width: "w-full",
                height: "h-full",
                overflowX: "overflow-x-hidden",
                display: "flex",
              },
       
              slide: {
                width: "w-full",
                height: "h-full",
                display: "inline-block",
                flex: "flex-none",
              },
            },
          },
        },
      };
    
    return (
      <Carousel
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src={img1}
          alt="img 1"
          className="md:h-[600px] w-full object-contain"
        />
          <img
          src={img2}
          alt="img 2"
          className="md:h-[600px] w-full object-contain"
        />
          <img
          src={img3}
          alt="img 3"
          className="md:h-[600px] w-full object-contain"
        />
          <img
          src={img4}
          alt="img 4"
          className="md:h-[600px] w-full object-contain"
        />
            <img
          src={img5}
          alt="img 5"
          className="md:h-[600px] w-full object-contain"
        />
            <img
          src={img6}
          alt="img 6"
          className="md:h-[600px] w-full object-contain"
        />
      </Carousel>
    );
    }
export default Gallery_Plot_3bhk_Wooden
