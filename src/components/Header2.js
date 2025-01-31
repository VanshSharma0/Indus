import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import bg from "../assets/bg/WebsiteBg3.avif";
import Ivm_Resort from "../Assets/bg_img/LastLogo.png";
import whatsapp from "../Assets/icons/whatsapp.png";
import call from "../Assets/photos/call.png";
// import ChatBox from "../Assets/icons/ChatBox.png";
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
      <header className={`w-full z-40 sticky top-0`}>
        <div
          className={`bg-[#BDC0A4]  ${
            scrolling ? "bg-opacity-100" : "bg-opacity-80"
          }`}
        >
          <div className="w-full flex justify-between h-28 md:h-32 xl:h-[118px] items-center text-[#40392d]">
            <div className="flex flex-col justify-center items-center">
              <a href="/" onClick={() => setToggle(false)}>
                <img
                  className="w-28 h-28 md:w-36 md:h-36 py-1 md:py-3 ml-2 md:ml-5 "
                  src="/images/ivm32.png"
                  // src={Ivm_Resort}
                  // src="https://res.cloudinary.com/dpkvvpwv6/image/upload/v1718775848/Indus%20VAlley%20Mukteshwar/Logos/LOGO_INDUS_VALLEY_-_1_ixhvto.png"
                  alt="logo"
                />
              </a>
            </div>
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className="xl:hidden block text-2xl md:text-4xl mx-4"
                aria-label="Close Menu"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="xl:hidden block text-2xl md:text-4xl mx-4"
                aria-label="Open Menu"
              />
            )}
            <div
              className="hidden xl:flex flex-row z-30 text-base px-4 gap-5  font-merriweather 
            "
            >
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="/"
              >
                HOME
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="/project-details/property-in-mukteshwar-for-sale"
              >
                PROJECT
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="https://www.indusvalleyresort.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HOMESTAY
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="/ready_to_move"
              >
                READY TO MOVE
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="/gallery"
              >
                GALLERY
              </a>
              <a
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
                href="/nearby"
              >
                VISITOR'S ATTRACTION
              </a>
              <a
                href="/blogs"
                className="md:hover:scale-110 duration-500 hover:text-[#178C46] font-merriweather leading-[1.5] tracking-wide"
              >
                BLOGS
              </a>
            </div>
            <div
              className={`xl:hidden flex flex-col fixed bg-[#475357] text-sm md:text-4xl font-merriweather text-white gap-5 md:gap-10 pt-5 md:pt-10 pl-5 md:pl-10 bg-opacity-75 top-28 md:top-32 w-full h-screen ${
                toggle ? "left-0" : "left-[-100%]"
              } duration-700`}
            >
              <a onClick={() => setToggle(false)} href="/">
                HOME
              </a>
              <a
                onClick={() => setToggle(false)}
                href="/project-details/property-in-mukteshwar-for-sale"
              >
                PROJECT
              </a>
              <a
                onClick={() => setToggle(false)}
                href="https://www.indusvalleyresort.com/"
                target="_blank"
              >
                HOMESTAY
              </a>
              <a onClick={() => setToggle(false)} href="/site-layout">
                SITE LAYOUT
              </a>
              <a onClick={() => setToggle(false)} href="/ready_to_move">
                READY TO MOVE
              </a>
              <a onClick={() => setToggle(false)} href="/gallery">
                GALLERY
              </a>
              <a onClick={() => setToggle(false)} href="/nearby">
                VISITOR'S ATTRACTION
              </a>
              <a onClick={() => setToggle(false)} href="/blogs">
                BLOGS
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <div
        style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: 30 }}
      >
        <a
          href="https://wa.me/918744989989"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ChatBox}
            alt="WhatsApp"
            style={{ width: "50px", height: "50px", borderRadius: "40%" }}
          />
        </a>
      </div> */}

      <BookingForm />
    </>
  );
}

export default Header;
