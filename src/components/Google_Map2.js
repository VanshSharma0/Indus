import React, { useState, useEffect } from 'react';

const GoogleMap2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('google-map-container');
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      setIsVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="google-map-container"
      className={`
        mt-10 md:mt-16
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="relative px-4 md:px-8">
        <h2
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
          A perfect location for your dream cottage
        </h2>

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
              GOOGLE LOCATION
            </h3>
          </div>

          <div className="w-3/5 h-[20rem] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.0490906901196!2d79.67352231457781!3d29.39811995576963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7f7740c0bc9%3A0xe9baaef9dd824df2!2sIndus%20Valley%20Sunderkhal%20Mukteshwar%20District%20Nainital!5e0!3m2!1sen!2sin!4v1636700789384!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full rounded-xl shadow-md transition-shadow duration-300 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap2;
