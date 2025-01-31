import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import whatsapp from "../Assets/icons/whatsapp.png";
import call from "../Assets/photos/call.png";
import BookingForm from "./BookingForm";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full z-40 lg:absolute">
        <div
          className={`bg-[#E2CAAE] lg:bg-transparent ${
            scrolling ? "bg-opacity-100" : "bg-opacity-90"
          }`}
        >
          <div className="w-full flex justify-between h-28 md:h-[115px] items-center text-[#40392d]">
            {/* Logo */}
            <div className="flex flex-col justify-center items-center">
              <a href="/" onClick={() => setToggle(false)}>
                <img
                  className="w-28 md:w-40 py-1 md:mt-5 md:pt-4 ml-2 md:ml-5"
                  src="https://res.cloudinary.com/dpkvvpwv6/image/upload/v1718775848/Indus%20VAlley%20Mukteshwar/Logos/LOGO_INDUS_VALLEY_-_1_ixhvto.png"
                  alt="logo"
                />
              </a>
            </div>

            {/* Mobile contact options */}
            <div className="md:hidden flex flex-col">
              <a
                className="bg-[#434E57] text-sm text-white border-2 text-center border-yellow-600 duration-700 rounded-3xl p-1 m-2 font-glacial"
                href="https://wa.me/918744989989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Call Now"
              >
                REACH US
              </a>
              {/* <a
                className="flex gap-2 justify-center items-center text-sm font-semibold leading-6 text-black rounded-3xl py-1 px-2"
                href="tel:8510850101"
              >
                <img className="w-5" src={call} alt="Call Us" />
                Call Us 8510 850 101 */}
              {/* </a> */}
            </div>

            {/* Mobile menu toggle */}
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className="lg:hidden block text-2xl mx-4"
                aria-label="Close Menu"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="lg:hidden block text-2xl mx-4"
                aria-label="Open Menu"
              />
            )}

            {/* Desktop menu */}
            <div className="hidden lg:flex flex-row z-30 text-base px-4 gap-5">
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942] font-french-canon"
                href="/"
              >
                HOME
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942] font-french-canon"
                href="/project-details/property-in-mukteshwar-for-sale"
              >
                PROJECT
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942]  font-french-canon"
                href="https://www.indusvalleyresort.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESORT
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942]  font-french-canon"
                href="/ready_to_move"
              >
                READY TO MOVE
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942]  font-french-canon"
                href="/gallery"
              >
                GALLERY
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#96C942] font-french-canon"
                href="/nearby"
              >
                VISITOR'S ATTRACTION
              </a>
              <div className="flex mr-10 gap-5">
                <div className="flex flex-col gap-2">
                  {/* <a
                    className="bg-[#74613C] bg-opacity-50 border-2 md:hover:bg-white md:hover:text-black text-white border-white duration-700 rounded-3xl text-center px-2 py-1 font-glacial"
                    href="/contact"
                    aria-label="Book Now"
                  >
                    REACH US
                  </a> */}
                  <a
                    className="flex gap-2 justify-center items-center text-sm md:text-lg font-semibold leading-6 text-black md:hover:scale-110 md:hover:text-yellow-600 rounded-3xl px-2"
                    href="tel:8510850101"
                  >
                    <img className="w-7" src={call} alt="Call Us" />
                    {/* Call Us 8510 850 101 */}
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`lg:hidden flex flex-col fixed bg-[#475357] text-white pt-10 bg-opacity-75 top-[110px] w-full h-screen ${
                toggle ? "left-0" : "left-[-100%]"
              } duration-700`}
            >
              <a onClick={() => setToggle(false)} href="/" className="p-5">
                HOME
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/project-details/property-in-mukteshwar-for-sale"
                className="p-5"
              >
                PROJECT
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/site-layout"
                className="p-5"
              >
                SITE LAYOUT
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/ready_to_move"
                className="p-5"
              >
                READY TO MOVE
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/gallery"
                className="p-5"
              >
                GALLERY
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/nearby"
                className="p-5"
              >
                VISITOR'S ATTRACTION
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/contact"
                className="p-5"
              >
                REACH US
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <BookingForm />

      {/* WhatsApp Floating Button */}
      <div
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}
      >
        <a
          href="https://wa.me/918744989989"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>
    </>
  );
}

export default Header;
