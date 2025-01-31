import React from "react";
// import location from "./icons2/location.gif";
// import TSGOC_LOGO_F_8 from "../Assets/icons/TSGOC_LOGO_F_8.png"
// import logo from "../Assets/bg_img/logo.png";
import message from "../Assets/icons/message.gif";
import phone from "../Assets/icons/phone.gif";

import icon_facebook from "../Assets/icons/icon_facebook.png";
// import icon_twitter from "../Assets/icons/icon_twitter.png";
import icon_yt from "../Assets/icons/icon_yt.png";

import icon_insta from "../Assets/icons/icon_insta.png";
import icon_linkdin from "../Assets/icons/icon_linkedin.png";

function ContactAddress() {
  const phoneNumber = "8510850101";
  return (
    <section className="w-full xl:w-3/4 flex flex-col md:flex-row p-5 md:backdrop:pt-14 rounded-xl md:gap-10 md:mt-16 md:mb-44 bg-black bg-opacity-20">
      <div className="flex w-full xl:px-20 md:px-3 flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div>
            {/* <a href="/">
              <img className='w-48' src={logo} alt='logo'/>
              </a> */}
          </div>

          <div className="flex gap-3 py-3 md:py-5 px-5 md:px-0 items-center font-merriweather">
            <a href="mailto:info@theshubhamgoc.com">
              <img
                className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={message}
                alt="message"
              />
            </a>
            <a
              className="text-base md:text-xl text-white w-fit pl-0 md:p-3font-semibold hover:text-blue-400 "
              href="mailto:info@theshubhamgroup.com"
            >
              {"info@theshubhamgroup.com "}
            </a>
          </div>

          <div className="flex gap-3 py-3 px-5 md:px-0 items-center font-merriweather">
            <a href={`tel:${phoneNumber}`}>
              <img
                className="w-10 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={phone}
                alt="message"
              />
            </a>
            <p className="text-base md:text-xl text-white w-fit pl-0">
              +91 85108 50101
            </p>
            {/* <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> */}
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="text-2xl text-white w-fit md:text-3xl py-3 md:py-5 px-5 md:px-0 font-merriweather">
            Connect with us:
          </p>

          <div className="flex w-fit md:gap-8 px-5 md:px-0 gap-3 py-3">
            <a
              href="https://www.facebook.com/IndusValleyMukteshwar"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-9 w-11 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={icon_facebook}
                alt="Facebook Link.."
              />
            </a>

            <a
              href="https://www.youtube.com/@indusvalleymukteshwar"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-11 h-9 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={icon_yt}
                alt="Youtube Link.."
              />
            </a>

            <a
              href="https://www.instagram.com/indusvalley.mukteshwar/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-11 h-9 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={icon_insta}
                alt="Insta Link.."
              />
            </a>

            <a
              href="https://www.linkedin.com/company/71418972/admin/feed/posts/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-9 w-11 p-1 bg-white rounded-lg animate__zoomIn2 hover:shadow-lg hover:shadow-green-100"
                src={icon_linkdin}
                alt="Linkdin Link.."
              />
            </a>
          </div>
        </div>
      </div>
      <iframe
        className="text-3xl md:text-4xl w-fit md:w-1/3 py-10 md:px-3 text-white rounded-2xl font-semibold font-merriweather"
        title="CRM-form"
        id="Contact_Form"
        src="https://account.solidperformers.com/capture_form_data/MTIzNw=="
        border="0"
        style={{ border: 0, height: "400px", width: "50%" }}
      ></iframe>
    </section>
  );
}

export default ContactAddress;
