import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../Assets/other/formbg1.jpg";

function Notice_Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if terms are agreed before submitting
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        "https://getform.io/f/464eb917-f853-4f6c-9c0f-d9a6ad242bdd",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("We received your message!");
        // Additional actions after successful submission
      } else {
        alert("Form submission failed");
        // Handle the failure
      }
    } catch (error) {
      alert("Error during form submission:", error);
      // Handle the error
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-[#3A6240] flex flex-col md:flex-row w-full">
        <section
          style={{ backgroundImage: `url(${bg1})` }}
          className="bg-cover bg-center w-screen"
        >
          <div className="md:w-1/3  mx-auto flex flex-col justify-center px-5 md:px-0 py-36">
            {/* Existing form code... */}
            <form
              className=" py-36 pb-40 md:pb-20"
              onSubmit={handleSubmit}
              method="post"
              name="Indus Valley Mukteshwar"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black w-fit text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none text-[#3E6527] hover:font-bold animate__zoomIn focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4"></div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-black text-lg w-fit font-medium mb-2"
                >
                  Phone No
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  // placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none text-[#3E6527] hover:font-bold animate__zoomIn focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="visitingDate"
                  className="block text-black text-lg w-fit font-medium mb-2"
                >
                  Visiting Date
                </label>
                <input
                  type="date"
                  id="visitingDate"
                  name="visitingDate"
                  value={formData.visitingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none text-[#3E6527] hover:font-bold animate__zoomIn focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-black w-fit text-lg font-medium mb-2"
                >
                  Queries
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Message..."
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none text-[#3E6527] hover:font-bold animate__zoomIn"
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="agreeTerms">
                  I agree to the terms and conditions
                </label>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#3E6527] border-2 font-semibold font-merriweather px-4 py-2 rounded-md hover:bg-black text-white hover:font-bold focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>{" "}
              <Link
                to="/" // Replace "/ready-to-move" with your actual route
                className="bg-[#3E6527] border-2 w-fit font-semibold font-merriweather px-4 py-2.5 rounded-md hover:bg-black text-white hover:font-bold focus:outline-none focus:bg-blue-600"
              >
                Go Back
              </Link>
            </form>
          </div>
        </section>

        {/* New section for terms and conditions */}
        {agreeTerms && (
          <section className="bg-green-50 m-5 flex flex-col gap-10 p-8 md:p-14 w-fit md:w-1/3 ">
            <h2 className="text-sm font-merriweather pt-5 md:pt-10 ">
              Terms & Conditions for Complimentary Homestay on Site Visit at
              Indus Valley Mukteshwar:
            </h2>
            <div className="flex flex-col md:py-10">
              <ul className="flex flex-col gap-3 text-sm font-light w-full ">
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  Complimentary stay on site visit is applicable for one night
                  only.
                </li>
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  For extended stays at the property, regular homestay charges
                  will be applicable.
                </li>
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  Accommodation will be provided for a maximum of two person.
                </li>
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  Requests for complimentary site stay must be placed a minimum
                  of 15 days before the planned visit.
                </li>
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  This offer includes lodging only. Charges for food services
                  will be applicable separately.
                </li>
                <li className="flex gap-3">
                  <p>&#x2022;</p>
                  For site visit confirmation and detailed information, kindly
                  await our call.
                </li>
              </ul>
            </div>

            <p className="text-sm">
              By availing of this complimentary homestay offer, you agree to
              abide by these terms and conditions. Indus Valley Mukteshwar
              reserves the right to modify or terminate this offer at any time
              without prior notice.
            </p>
          </section>
        )}
      </div>
    </>
  );
}

export default Notice_Form;
