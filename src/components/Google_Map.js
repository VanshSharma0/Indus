import React from "react";
import line from "../Assets/bg_img/underline.png";

function Google_Map({ google_map }) {
  return (
    <div className="margin-lg-115t margin-sm-50t no-padd">
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        data-vc-stretch-content="true"
        className="contact_map row-fluid no-padd margin-lg-115t margin-sm-50t no-padd relative box-border"
      >
        <div className="google-maps w-full">
          <h3 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl pt-5 md:pt-16 pb-5 md:pb-10 font-merriweather text-center p-3">
            GOOGLE LOCATION <br />
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.0490906901196!2d79.67352231457781!3d29.39811995576963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7f7740c0bc9%3A0xe9baaef9dd824df2!2sIndus%20Valley%20Sunderkhal%20Mukteshwar%20District%20Nainital!5e0!3m2!1sen!2sin!4v1636700789384!5m2!1sen!2sin"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Google_Map;
