import React from "react";
import brand_logo from "../Assets/icons/the-shubham-group1final.png";

import icon_facebook from "../Assets/icons/icon_facebook.png";
import icon_twitter from "../Assets/icons/icon_twitter.png";
import icon_insta from "../Assets/icons/icon_insta.png";
import icon_yt from "../Assets/icons/icon_yt.png";
import icon_linkdin from "../Assets/icons/icon_linkdin.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#BDC0A4",
      }}
      className="bg-cover bg-bottom"
    >
      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "60%",
          }}
          className="gap-8"
        >
          <a href="https://www.facebook.com/theshubhamGroup/" target="_blank">
            <img
              className="w-12 h-12 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-slate-300"
              src={icon_facebook}
              alt="Facebook Link.."
            />
          </a>

          <a href="https://twitter.com/theshubhamgroup" target="_blank">
            <img
              className="w-12 h-12 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-slate-300"
              src={icon_twitter}
              alt="Twitter Link.."
            />
          </a>

          <a href="https://www.instagram.com/theshubhamgroup/" target="_blank">
            <img
              className="w-12 h-12 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-slate-300"
              src={icon_insta}
              alt="Insta Link.."
            />
          </a>

          <a
            href="https://www.youtube.com/@indusvalleymukteshwar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-12 h-12 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
              src={icon_yt}
              alt="Youtube Link.."
            />
          </a>

          <a
            href="https://www.linkedin.com/in/the-shubham-group-of-company/"
            target="_blank"
          >
             <img
              className="w-12 h-12 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-slate-300"
              src={icon_linkdin}
              alt="LinkedIn Link.."
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row w-full justify-around mx-auto px-5 md:px-0 xl:px-5 gap-5 md:gap-0 xl:gap-5 bg-[#BDC0A4] bg-opacity-90">
        <section className="flex flex-col w-full items-center justify-center mx-auto text-center">
  <a
    href="https://www.theshubhamgroup.com"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className="rounded-lg p-2 w-48 h-auto max-h-60 object-contain animate__zoomIn"
      src={brand_logo}
      alt="Brand Logo"
    />
  </a>
</section>
          <section className="flex flex-col items-center text-center md:text-start px-5 w-full md:mt-5 gap-3">
            <p className="text-black text-2xl md:text-3xl font-merriweather font-semibold">
              Corporate Office
            </p>
            <p className="text-black text-base md:text-lg font-merriweather font-thin">
              315, Block-B, Sector-105, Noida,
              <br />
              Uttar Pradesh. Pincode - 201304
            </p>
          </section>

          <section className="flex flex-col items-center text-center md:text-start px-5 md:pl-10 w-full gap-3 md:mt-5">
            <p className="text-black text-2xl md:text-3xl font-merriweather font-semibold">
              Contact Us
            </p>
            <div className="flex flex-col">
              <a
                className="text-black text-base md:text-lg hover:underline hover:text-blue-400"
                href="mailto:info@theshubhamgroup.com"
              >
                info@theshubhamgroup.com
              </a>

              <a href="tel:8510850101">
                <p className="text-black text-base md:text-lg hover:text-yellow-600">
                  8510 850 101
                </p>
              </a>

              <p className="text-black text-base pt-2">
                Prashant Sharma
                <br /> (Site Manager)
              </p>
              <a href="tel:9711258989">
                <p className="text-black text-base md:text-lg hover:text-yellow-600">
                  9711 258 989
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>

      <section className="py-5 md:pt-0 bg-[#BDC0A4] bg-opacity-90 copy-right">
        <p className="text-black text-center text-sm font-merriweather">
          Copyright © 2009 The Shubham Group.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
