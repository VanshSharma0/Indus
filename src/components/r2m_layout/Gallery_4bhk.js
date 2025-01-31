import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "./r2m_sliders/Plot_43/OuterView/ov1.png";
import img2 from "./r2m_sliders/Plot_43/OuterView/ov2.webp";
import img3 from "./r2m_sliders/Plot_43/OuterView/ov3.png";
import img4 from "./r2m_sliders/Plot_43/OuterView/ov4.webp";
import img5 from "./r2m_sliders/Plot_43/OuterView/ov5.webp";
import img6 from "./r2m_sliders/Plot_43/OuterView/ov6.png";
import img7 from "./r2m_sliders/Plot_43/OuterView/ov7.webp";
import img8 from "./r2m_sliders/Plot_43/OuterView/ov8.webp";
import img9 from "./r2m_sliders/Plot_43/OuterView/ov9.webp";
import img10 from "./r2m_sliders/Plot_43/OuterView/ov10.png";
import img11 from "./r2m_sliders/Plot_43/OuterView/ov11.webp";

import pic1 from "./r2m_sliders/Plot_43/InnerView/iv1.png";
import pic2 from "./r2m_sliders/Plot_43/InnerView/iv2.webp";
import pic3 from "./r2m_sliders/Plot_43/InnerView/iv3.webp";
import pic4 from "./r2m_sliders/Plot_43/InnerView/iv4.webp";
import pic5 from "./r2m_sliders/Plot_43/InnerView/iv5.webp";
import pic6 from "./r2m_sliders/Plot_43/InnerView/iv6.png";
import pic7 from "./r2m_sliders/Plot_43/InnerView/iv7.webp";
import pic8 from "./r2m_sliders/Plot_43/InnerView/iv8.webp";
import pic9 from "./r2m_sliders/Plot_43/InnerView/iv9.webp";
import pic10 from "./r2m_sliders/Plot_43/InnerView/iv10.webp";
import pic11 from "./r2m_sliders/Plot_43/InnerView/iv11.webp";
import pic12 from "./r2m_sliders/Plot_43/InnerView/iv12.webp";
import pic13 from "./r2m_sliders/Plot_43/InnerView/iv13.webp";
import pic14 from "./r2m_sliders/Plot_43/InnerView/iv14.webp";


function Gallery_4bhk() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    pic1,
    pic2,
    pic3,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14
  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true, // Enable keyboard navigation
    focusOnSelect: true, // Enable focusing on selected slide
  };

  return (
    <div className="w-full text-[#40392d]">
      <div className="md:pb-5 px-6">
        <Slider {...settings} className="md:w-11/12 xl:w-4/5 m-auto">
          {images.map((img, index) => (
            <Avatar
              key={index}
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="h-52 md:h-[550px] w-fit mx-auto  object-cover"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery_4bhk;
