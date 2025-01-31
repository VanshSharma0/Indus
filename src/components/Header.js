import { Fragment, useState, useEffect } from "react";
import logo from "../Assets/bg_img/logo3.png";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  MapIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Google Map",
    description: "Get a better understanding of your traffic",
    href: "/google_map",
    icon: MapIcon,
  },
  {
    name: "Details",
    description: "Your customers data will be safe and secure",
    href: "/details",
    icon: FingerPrintIcon,
  },
  {
    name: "Site Layout",
    description: "A design like never before",
    href: "/site_layout",
    icon: CursorArrowRaysIcon,
  },

  {
    name: "Floor Plan",
    description: "We Construct Your Vision",
    href: "/floor_plan",
    icon: SquaresPlusIcon,
  },
  {
    name: "Gallery",
    description: "Real Site View",
    href: "/gallery",
    icon: ArrowPathIcon,
  },
];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
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
      <header
        className={` bg-transparent 
            ${scrolling ? "bg-opacity-0" : "bg-transparent"}`}
      >
        <nav
          className="flex items-center justify-between  px-10 md:pr-20"
          aria-label="Global"
        >
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="w-20 md:w-24 bg-black md:bg-opacity-75 bg-opacity-25 z-10 mt-3 fixed rounded-2xl"
              src={logo}
              alt="Company Logo "
            />
          </a>

          {/* <div className="flex lg:hidden"> */}
          <div className="flex">
            <button
              type="button"
              className="  inline-flex items-center justify-center rounded-md p-2.5 px-3 z-10 mt-8 fixed bg-black md:rounded-2xl bg-opacity-45 md:bg-opacity-70 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-8 w-8  text-white font-bold"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center"> */}
          {/* (We make changes in header to hide all the content...) */}
          <Popover.Group className="hidden items-center">
            <a
              href="/"
              className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 text-white"
            >
              Home
            </a>

            <a
              href="https://www.tsgoc.in"
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 text-white"
            >
              About Us
            </a>
            <Popover className="relative">
              <Popover.Button className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 text-white mt-4 pt-1">
                Project Details
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 text-white hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="/ready_to_move"
              className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 text-white"
            >
              Ready To Move
            </a>
            <a
              href="/nearby"
              className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 text-white"
            >
              Nearby Sites
            </a>
            <a
              href="/contact"
              className="text-lg hover:text-lime-100 animate__zoomIn2 font-merriweather leading-6 bg-black rounded-xl p-2 bg-opacity-50 text-white"
            >
              Get In Touch
            </a>
          </Popover.Group>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>

        <Dialog
          as="div"
          // (*** Here is a change in menu button **** )
          // className="lg:hidden"

          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-1.5 p-1.5 bg-black bg-opacity-80 bg-cover"
              >
                <span className="sr-only">Your Company</span>
                <img className="h-14 w-24" src={logo} alt="Company Logo " />
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="https://www.tsgoc.in/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/ready_to_move"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Ready To Move
                  </a>
                  <a
                    href="/nearby"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Nearby Sites
                  </a>
                  <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
