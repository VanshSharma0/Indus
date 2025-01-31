// Import necessary dependencies
import React from "react";
// import { Helmet } from "react-helmet";
import bgContact from "../Assets/bg_img/contact_bg2.png";
// import ContactForm from "./ContactForm";
// import CompanyDetail from "./CompanyDetail";
import ContactAddress from "./ContactAddress";

// Define the functional component for the form
const Contact = () => {
  return (
    <>
      {/* <Helmet>
        <title>
          Contact Us To Buy Cottage, Plot And Apartments In Nainital
        </title>
        <meta
          name="description"
          content="Get property in Uttarakhand. We sell 1 BHK, 2 BHK, and studio apartments in Nainital, Mukteshwar. Our customers say we sell the finest cottages and plots in Uttarakhand."
        />
      </Helmet> */}

      {/* <CompanyDetail/> */}
      <div
        style={{ backgroundImage: `url(${bgContact})` }}
        className="bg-cover bg-black bg-opacity-30 flex flex-col justify-center items-center mx-auto bg-center pt-16 pb-5 md:pb-10 md:py-32"
      >
        <h1 className="animate__zoomIn text-2xl md:text-5xl text-center font-merriweather md:pb-5 px-3">
        We are here to help you get your Dream Home In Uttarakhand!
        </h1>
        {/* <p className="text-lg md:text-2xl font-merriweather my-2 mx-5 text-center">
          We are here to help you get your Dream Home!
        </p> */}
        <ContactAddress />

        {/* <ContactForm/> */}
      </div>
    </>
  );
};

// Export the component
export default Contact;
