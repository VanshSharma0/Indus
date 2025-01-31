import React from "react";

import about_1 from "../Assets/AboutUs_img/about_1.webp";
import about_2 from "../Assets/AboutUs_img/about_2.jpg";
import about_3 from "../Assets/AboutUs_img/about_3.jpg";
import about_4 from "../Assets/AboutUs_img/about_4.png";

function AboutDetail() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-center font-merriweather md:hover:text-4xl mb-2 mt-5">
          YOUR HOME IN LAP OF NATURE...
        </h2>
        <h2 className="text-black text-5xl text-center font-merriweather font-semiboldbold">
          The Shubham Group
        </h2>
        <p className="text-lg md:text-xl p-1 py-2">
          Shubham Build up Pvt Ltd. started its journey in 2009 with the aim of
          providing the second home in the bosom of nature with the fragrance of
          spiritual ambience. We are determined to provide a priceless life
          style away from the busy city life as a gift for the people who prefer
          to live the second phase of life adoring nature. The Shubham Group has
          successfully launched and delivered its three residential projects
          named Indus valley Mukteshwar Nainital, Ambika Divinity Haridwar and
          Indus valley Shimla with the growth of 200% in a decade . In a less
          span of time, the company has drastically entered other fields such as
          Collaboration, Construction and Resorts. To manage this expansion
          Shubham Buildup Pvt Ltd. converted into THE SHUBHAM GROUP OF COMPANIES
          (The Shubhamgoc Delhi). After the remarkbale success in shaping the
          dream house on breath taking mountains. The Shubham Group of Companies
          (The Shubhamgoc) has now entered into other fields.
        </p>
        <div className=" flex flex-col md:flex-row justify-center gap-5 my-5">
          <img
            className="shadow-lg shadow-red-200 w-fit md:w-1/5 rounded-xl md:hover:scale-75 md:duration-700"
            src={about_1}
            alt="img1"
          />
          <img
            className="shadow-lg shadow-red-200 w-fit md:w-1/5 rounded-xl md:hover:scale-75 md:duration-700"
            src={about_2}
            alt="img1"
          />
          <img
            className="shadow-lg shadow-red-200 w-fit md:w-1/5 rounded-xl md:hover:scale-75 md:duration-700"
            src={about_3}
            alt="img1"
          />
          <img
            className="shadow-lg shadow-red-200 w-fit md:w-1/5 rounded-xl md:hover:scale-75 md:duration-700"
            src={about_4}
            alt="img1"
          />
        </div>
        <p className="text-lg md:text-xl text-center">
          The Shubhamgoc Delhi holds the following companies under itself.
        </p>

        <div className="flex flex-col md:flex-row justify-center text-center md:gap-16">
          <ol type="1">
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Shubham Build Up LTD
            </li>
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Shubham Buildtech LLP
            </li>
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Shubham Builston LLP
            </li>
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Shape My House
            </li>
          </ol>
          <ol type="2">
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Chail Heights Villa LLP
            </li>
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Chail Heights Resort LLP
            </li>
            <li className="text-lg font-merriweather hover:underline text-teal-700 font-semibold">
              Nirmanam Relators LLP
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
