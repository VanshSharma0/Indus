import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "./r2m_sliders/Plot_01/OuterView/ov1.png";
import img2 from "./r2m_sliders/Plot_01/OuterView/ov2.png";
import img3 from "./r2m_sliders/Plot_01/OuterView/ov3.png";
import img4 from "./r2m_sliders/Plot_01/OuterView/ov4.png";
import img5 from "./r2m_sliders/Plot_01/OuterView/ov5.png";
import img6 from "./r2m_sliders/Plot_01/OuterView/ov6.png";
import img7 from "./r2m_sliders/Plot_01/OuterView/ov7.png";
import img8 from "./r2m_sliders/Plot_01/OuterView/ov8.jpg";
import img9 from "./r2m_sliders/Plot_01/OuterView/ov9.jpg";
import img10 from "./r2m_sliders/Plot_01/OuterView/ov10.jpg";
import pic1 from "./r2m_sliders/Plot_01/InnerView/iv1.webp";
import pic2 from "./r2m_sliders/Plot_01/InnerView/iv2.webp";
import pic3 from "./r2m_sliders/Plot_01/InnerView/iv3.webp";
import pic4 from "./r2m_sliders/Plot_01/InnerView/iv4.webp";
import pic5 from "./r2m_sliders/Plot_01/InnerView/iv5.webp";

function Gallery_Plot_01() {
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

export default Gallery_Plot_01;
