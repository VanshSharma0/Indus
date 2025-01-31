import React, { useState, useEffect } from 'react';

const RouteMap = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('route-map-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.tagName !== 'IMG') {
      handleCloseClick();
    }
  };

  return (
    <div 
      id="route-map-container"
      className={`
        mt-10 md:mt-16
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="relative px-4 md:px-8">
        {/* <h2
          className="
            text-[#74613C] text-xl md:text-3xl 
            font-merriweather text-center
            mb-6 md:mb-8
            relative
            after:content-['']
            after:absolute
            after:bottom-[-8px]
            after:left-1/2
            after:transform
            after:-translate-x-1/2
            after:w-32 md:after:w-48
            after:h-1
            after:bg-[#74613C]
            after:rounded-full
          "
        >
          Route Map
        </h2> */}

        <div className="flex flex-col justify-center items-center gap-6 mt-8">
          <div className="w-full flex justify-center">
            <h3
              className="
                text-[#74613C] 
                text-sm md:text-lg
                font-merriweather 
                text-center 
                p-4 md:p-6
                bg-[#F3EDE2] 
                rounded-lg 
                shadow-md 
                transition-all 
                duration-300 
                hover:bg-[#74613C] hover:text-white
                hover:shadow-lg
                inline-block
              "
            >
              Route Map
            </h3>
          </div>

          <div className="w-3/5 h-[20rem] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src="https://indusvalleymukteshwar.s3.eu-north-1.amazonaws.com/route-map.png"
              alt="Route Map"
              className="w-full h-full rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={handleCloseClick}
          >
            ×
          </button>
          <img
            className="w-full h-full md:p-10 object-contain"
            src="https://indusvalleymukteshwar.s3.eu-north-1.amazonaws.com/route-map.png"
            alt="Route Map Full Screen"
          />
        </div>
      )}
    </div>
  );
};

export default RouteMap;
