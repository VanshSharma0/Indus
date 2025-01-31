import React, { useState } from "react";

function ContactForm() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        "https://getform.io/f/464eb917-f853-4f6c-9c0f-d9a6ad242bdd",
        {
          method: "POST",
          body: JSON.stringify(formData), // Convert formData to JSON string
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );

      if (response.ok) {
        alert("We received your message!");
        // Additional actions after successful submission
      } else {
        alert("Form submission failed");
        // Handle the failure, maybe show an error message to the user
      }
    } catch (error) {
      alert("Error during form submission:", error);
      // Handle the error, maybe show an error message to the user
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="w-full md:w-1/3 m-3 p-5 md:pt-14 bg-black bg-opacity-25  rounded-md shadow-xl">
      <h2 className="text-3xl md:text-4xl text-white w-fit font-semibold font-merriweather mb-6">
        Contact Form
      </h2>
      <form
        onSubmit={handleSubmit}
        method="post"
        name="Indus Valley Mukteshwar"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white w-fit font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none hover:font-bold animate__zoomIn focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white w-fit font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none hover:font-bold animate__zoomIn focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-white w-fit font-medium mb-2"
          >
            Phone No
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none hover:font-bold animate__zoomIn focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white w-fit font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message..."
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none hover:font-bold animate__zoomIn"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#EFEFEF]  font-semibold font-merriweather px-4 py-2 rounded-md hover:bg-black hover:text-white hover:font-bold focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
