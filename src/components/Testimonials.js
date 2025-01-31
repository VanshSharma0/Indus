import React, { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      className="w-full bg-cover md:bg-opacity-80 py-5 md:py-10"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
    >
      <h3
        className="text-2xl md:text-4xl text-center py-5 font-merriweather"
        style={{
          color: "#74613C",
        }}
      >
        Voice Of Indus Valley
      </h3>
      <div className="md:p-5 md:mx-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto">
          {[
            "lxsUgVAG5DU",
            "JJ4YaA4K2dg",
            "3VCF5F7AUx4",
            "ZPsYsz52Hms?start=2",
          ].map((videoId, index) => (
            <section
              key={index}
              className="text-center p-6 md:py-10 font-glacial transform transition-transform duration-500 hover:scale-110"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                height={200}
                width={300}
              ></iframe>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
