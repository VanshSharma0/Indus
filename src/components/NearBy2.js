import React from "react";
import img1 from "../Assets/nearby/img1.1.webp";
import img2 from "../Assets/nearby/img2.webp";
import img3 from "../Assets/nearby/img3.png";
import img4 from "../Assets/nearby/img4.webp";
import img5 from "../Assets/nearby/img5.webp";
import img6 from "../Assets/nearby/img6.webp";
import img7 from "../Assets/nearby/img7.webp";
import img8 from "../Assets/nearby/img8.webp";
import img9 from "../Assets/nearby/img9.webp";
import img10 from "../Assets/nearby/img10.webp";
import img11 from "../Assets/nearby/img11.webp";
import img12 from "../Assets/nearby/img12.webp";
import line from "../Assets/bg_img/underline.png";

function NearBy2() {
  return (
    <div>
      <h2 className="w-fit text-[#74613C] mx-auto text-2xl md:text-4xl md:py-10 font-merriweather text-center p-3">
        POINT OF INTEREST
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-3 md:gap-14 p-3 md:p-14 md:pt-0">
        {/* ....(1.1).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img1}
            alt="Card1"
          />

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Forest Trekking
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">0 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.2).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img2}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Bhalu Gaad Waterfall
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">12 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.3).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img3}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center text-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Mahadev Temple
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">15 KM</p>
            </div>
          </div>
        </div>
        {/* ....(1.4).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img4}
            alt="Card1"
          />

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Satkhol Ashram
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">26 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.5).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img6}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Bhimtal
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">31 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.6).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img5}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Paragliding Adventure
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">35 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.7).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img7}
            alt="Card1"
          />

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Mall Road Nainital
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">46 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.8).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img8}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Almora
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">59 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.9).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img9}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Jageshwar Dham
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">65 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.10).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img10}
            alt="Card1"
          />

          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                RaniKhet
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">80 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.11).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img11}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Binsar
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">80 KM</p>
            </div>
          </div>
        </div>

        {/* ....(1.12).... */}
        <div className="w-fit md:w-80  rounded-xl border-2 m-auto bg-[#FAF9F6] shadow-slate-200 md:hover:scale-110 duration-500">
          <img
            className="rounded-t-xl w-screen md:w-80 h-64"
            src={img12}
            alt="Card2"
          />
          <div>
            <div className="flex flex-col justify-center items-center">
              <h2 className=" text-2xl text-[#74613C] font-merriweather">
                Kausani
              </h2>
              <p className="text-lg md:text-2xl font-merriweather">108 KM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NearBy2;
