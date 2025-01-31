import { useState, useEffect } from "react";
import logo from "../Assets/bg_img/logo6.png";
// import logos from "../Assets/bg_img/lo"
import whatsapp from "../Assets/icons/whatsapp.png";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// Bars3Icon,
// import { Link } from "react-router-dom";

const Header3 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`brightness-100 backdrop-brightness-100 w-full flex justify-between  bg-black z-10 sticky top-0
            ${scrolling ? "bg-opacity-70" : "bg-opacity-100"}`}
      >
        {/* Menu Button */}
        <div className="flex gap-5">
          <button
            type="button"
            className="flex items-center px-4 md:px-7 py-4 md:py-10 z-10 text-sm md:text-xl text-[#F3F086]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon
                className="h-6 md:h-10 w-6 md:w-10 md:mr-4 text-[#74613C] font-bold"
                aria-hidden="true"
              />  */}
            MENU
          </button>
        </div>

        {/* Logo */}
        <a
          href="/"
          className="flex justify-center fixed top-0 left-[35%] md:left-[42.5%]"
        >
          <img
            className="w-28 md:w-60 z-10 rounded-2xl"
            src={logo}
            alt="Company Logo"
          />
        </a>

        {/* <a
          href="/"
          className="flex justify-center fixed top-0 right-6"
        >
          <img
            className="w-28 md:w-60 z-10 rounded-2xl"
            src={logo}
            alt="Company Logo"
          />
        </a> */}
      </nav>

      <Dialog
        as="div"
        // (*** Here is a change in menu button **** )
        // className="lg:hidden"

        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white bg-opacity-80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 bg-opacity-80 bg-cover">
              <span className="sr-only">Your Company</span>
              <img
                className=" w-36 md:w-52 bg-black bg-opacity-70 p-1 rounded-xl"
                src={logo}
                alt="Company Logo "
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8 font-bold" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  HOME
                </a>
                <a
                  href="https://www.tsgoc.in/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  ABOUT US
                </a>
                <a
                  href="/project-details/property-in-mukteshwar-for-sale"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  PROJECT DETAIL
                </a>

                <a
                  href="/google_map"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  GOOGLE MAP
                </a>

                <a
                  href="/site-layout"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  SITE LAYOUT
                </a>
                {/* <a
                    href="/floor_plan"
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                  >
                    Floor Plan
                  </a> */}
                <a
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  GALLERY
                </a>
                <a
                  href="/ready_to_move"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  READY TO MOVE
                </a>
                <a
                  href="/nearby"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  POINT OF INTEREST
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base md:text-xl font-semibold font-merriweather leading-7 text-[#74613C] hover:text-[#bb9f69] hover:bg-gray-100"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* WhatsApp Button */}
      <div
        // className="left-[20px] md:left-[92vw]"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 30 }}
      >
        <a
          href="https://wa.me/918510850101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </a>
      </div>
    </>
  );
};

export default Header3;
