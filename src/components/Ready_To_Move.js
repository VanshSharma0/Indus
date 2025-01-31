import React from "react";
import apartment1 from "../Assets/r2m/apartment1.webp";
import plot_01 from "../Assets/r2m/plot_01.webp";
import apartment4 from "../Assets/r2m/apartment4.webp";
import plot_27 from "../Assets/r2m/plot_27.webp";
import apartment5 from "../Assets/r2m/apartment5.webp";
import apartment6 from "../Assets/r2m/apartment6.webp";
import apartment09 from "../Assets/r2m/p_09.jpg";
import plot_5_6 from "../Assets/r2m/Plot_5_6.webp";
import log_simplex from "../Assets/r2m/log_simplex.webp";
import log_duplex from "../Assets/r2m/log_duplex.webp";
import Studio_1bhk_Apart_layout from "./r2m_layout/Studio_1bhk_Apart_layout.js"
// import { ThemeProvider } from './ThemeContext.js';
import { Link } from 'react-router-dom';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Card = ({ href, image, alt, title, plot, price }) => (
  <div className="w-fit rounded-xl border-2 shadow-lg m-auto bg-[#FAF9F6] transition-transform duration-500 hover:shadow-2xl hover:scale-105">
    <Link to={href} className="block">
      <img className="rounded-t-xl w-screen md:w-96 h-64 object-cover" 
           src={image} 
           alt={alt} 
           loading="lazy" />
    </Link>
    <div className="p-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl text-[#74613C] font-merriweather font-bold">{title}</h2>
        <p className="text-xl font-merriweather">{plot}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2 mt-2">
          <p className="text-xl text-[#74613C] font-semibold font-merriweather">Price Rate -</p>
          <p className="text-xl text-[#74613C] font-semibold font-merriweather">{price}</p>
        </div>
      </div>
    </div>
  </div>
);

function Ready_To_Move() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  const cardData = [
    { href: "/Studio_1bhk_Apart_layout", image: apartment1, alt: "Card1", title: "1 BHK APARTMENT", plot: "Plot No- 69 : F1/F2", price: "35 Lacs" },
    { href: "/Plot_09", image: apartment09, alt: "Card3", title: "1 BHK APARTMENT", plot: "Plot No- 09", price: "55 Lacs" },
    { href: "/Plot_01", image: plot_01, alt: "Card2", title: "2 BHK Cottage", plot: "Plot No- 01 (Site B)", price: "1 Cr" },
    { href: "/Plot_01", image: plot_01, alt: "Card2", title: "2 BHK Cottage", plot: "Plot No- 02 (Site B)", price: "1 Cr" },
    { href: "/Plot_27", image: plot_27, alt: "Card4", title: "3 BHK Cottage", plot: "Plot No- 27", price: "1.50 Cr" },
    { href: "/Cottage_4bhk", image: apartment6, alt: "Card6", title: "4 BHK Cottage", plot: "Plot No- 43", price: "2.10 Cr" },
    { href: "/Plot_5_6", image: plot_5_6, alt: "Card4", title: "STUDIO APARTMENTS", plot: "Plot No-", price: "36 lakhs" },
    { href: "/Plot_5_6", image: plot_5_6, alt: "Card4", title: "1 BHK APARTMENTS", plot: "Plot No- 26A", price: "51 lakhs" },
    { href: "/Plot_36", image: "images/plot36.jpg", alt: "Card5", title: "2 BHK APARTMENTS", plot: "Plot No- 36", price: "68 lakhs" },
    { href: "/Wooden_2bhk", image: log_simplex, alt: "Card7", title: "2 BHK SIMPLEX", plot: "(UNDER CONSTRUCTION)", price: "(1.30 Cr to 1.40 Cr)" },
    { href: "/Wooden_3bhk", image: log_duplex, alt: "Card8", title: "3 BHK DUPLEX", plot: "(UNDER CONSTRUCTION)", price: "(1.50 Cr to 1.70 Cr)" },
  ];

  return (
    <>
      <section className="min-h-screen bg-cover bg-center flex flex-col bg-[#d2d2b4] bg-opacity-60">
        <div className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl pt-5 md:pt-10 font-merriweather text-center p-3">
          READY TO MOVE-IN
        </div>
        <h1 className="w-fit text-[#74613C] mx-auto text-sm md:text-xl font-merriweather text-center px-3">
          (PROPERTY FOR SALE IN MUKTESHWAR)
        </h1>

        <div className="flex flex-col md:p-5">
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {cardData.slice(0, 6).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </section>

          <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
            UPCOMING APARTMENTS
          </h2>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3">
            {cardData.slice(6, 9).map((card, index) => (
              <Card key={index} {...card} />  
            ))}
          </section>

          <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
            PREMIUM SEMI WOODEN COTTAGES
          </h2>

          <section className="mx-auto flex flex-col md:flex-row justify-center overflow-hidden gap-3 md:gap-14 p-3">
            {cardData.slice(9).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Ready_To_Move;
