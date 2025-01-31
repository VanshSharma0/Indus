import React from "react";
import sitelayout from "../Assets/photos/IVM SITE 2024.png";
import line from "../Assets/bg_img/underline.png";

function Site_Layout() {
  return (
    <div>
      <div className="flex flex-col gap-3 md:gap-0 md:pt-10 md:pb-72 lg:pb-52 xl:p-0">
        <div>
          <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl pt-10 pb-5 md:pb-10 font-merriweather text-center p-3">
            SITE LAYOUT{" "}
          </h3>
        </div>
        <img className="w-screen" src={sitelayout} alt="site layout" />
        {/* src="https://res.cloudinary.com/dqeka0ibm/image/upload/v1719830244/IVM_SITE_2024_ugii6q.webp" */}
      </div>
    </div>
  );
}

export default Site_Layout;
