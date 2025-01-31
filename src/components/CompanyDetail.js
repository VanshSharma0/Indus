import React from "react";

function CompanyDetail() {
  return (
    <div className="flex flex-col gap-2 bg-amber-50 m-3 p-5 justify-center items-center">
      <h2 className="text-4xl md:text-5xl text-green-800 font-merriweather px-14 mx-auto text-justify">
        You are invited to join our Shubham Family...
      </h2>
      <p className="mx-16 text-2xl font-semibold text-justify m-3 p-5">
        We welcome clients, investors, unique business idea holders,
        contractors, and vendors. Our aim is to showcase the true beauty of the
        hidden gems of India's hill stations. We are determined to create a
        transformative experience for all involved.
      </p>

      <h2 className="text-4xl md:text-6xl text-center animate__zoomIn text-yellow-300 font-merriweather p-3 m-3">
        Come and Join Us!
      </h2>
    </div>
  );
}

export default CompanyDetail;
