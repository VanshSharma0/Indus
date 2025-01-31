import React, { useEffect } from "react";
import sitelayout from "../Assets/photos/IVM SITE 2024.png";
import line from "../Assets/bg_img/underline.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Site_Layout2() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div data-aos-anchor-placement="top-center" data-aos="fade-up">
      <div className="flex flex-col gap-3 md:gap-0">
        <div>
          <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
            SITE LAYOUT{" "}
          </h3>
        </div>
        <img className="w-screen" src={sitelayout} alt="site layout" />
        {/* src="https://res.cloudinary.com/dqeka0ibm/image/upload/v1719830244/IVM_SITE_2024_ugii6q.webp" */}
      </div>
    </div>
  );
}

export default Site_Layout2;
