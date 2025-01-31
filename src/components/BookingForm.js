import React, { useState } from "react";
import ChatBox from "../Assets/icons/note-pad.png";

function BookingForm() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      window.location.href = "/"; // Redirect to the homepage
    }
  };

  return (
    <>
      {showPopup && (
        <div
          className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center h-screen"
          onClick={handleOverlayClick}
        >
          <div className="md:w-[40%] rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl md:text-3xl tracking-wide p-2 font-merriweather text-white text-center">
              Enquire Now
            </h2>
            <iframe
              title="Contact form"
              className="text-3xl w-full md:text-4xl h-[360px] md:h-[35vw] xl:h-[26vw] text-white rounded-2xl font-semibold font-merriweather"
              id="Contact_Form"
              src="https://account.solidperformers.com/capture_form_data/MTIzNw=="
              style={{ border: 0 }}
            ></iframe>
            <button
              className="block mx-auto mt-4 bg-[#74613C] bg-opacity-50 border-2 md:hover:bg-white md:hover:text-black text-white border-white duration-700 rounded-3xl px-4 py-2"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingForm;
