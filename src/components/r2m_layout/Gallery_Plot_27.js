import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "./r2m_sliders/Plot_27/OuterView/ov1.webp";
import img2 from "./r2m_sliders/Plot_27/OuterView/ov2.png";
import img3 from "./r2m_sliders/Plot_27/OuterView/ov3.webp";
import img4 from "./r2m_sliders/Plot_27/OuterView/ov4.png";
import img5 from "./r2m_sliders/Plot_27/OuterView/ov5.webp";
import img6 from "./r2m_sliders/Plot_27/OuterView/ov6.png";
import img7 from "./r2m_sliders/Plot_27/OuterView/ov7.png";
import img8 from "./r2m_sliders/Plot_27/OuterView/ov8.png";
import img9 from "./r2m_sliders/Plot_27/OuterView/ov9.png";
import img10 from "./r2m_sliders/Plot_27/OuterView/ov10.png";
import img11 from "./r2m_sliders/Plot_27/OuterView/ov11.png";
import img12 from "./r2m_sliders/Plot_27/OuterView/ov12.png";
import img13 from "./r2m_sliders/Plot_27/OuterView/ov13.png";
import img14 from "./r2m_sliders/Plot_27/OuterView/ov14.png";
import img15 from "./r2m_sliders/Plot_27/OuterView/ov15.png";
import img16 from "./r2m_sliders/Plot_27/OuterView/ov16.png";
import img17 from "./r2m_sliders/Plot_27/OuterView/ov17.png";
import img18 from "./r2m_sliders/Plot_27/OuterView/ov18.png";

import pic1 from "./r2m_sliders/Plot_27/InnerView/iv1.png";
import pic2 from "./r2m_sliders/Plot_27/InnerView/iv2.png";
import pic3 from "./r2m_sliders/Plot_27/InnerView/iv3.png";
import pic4 from "./r2m_sliders/Plot_27/InnerView/iv4.png";
import pic5 from "./r2m_sliders/Plot_27/InnerView/iv5.png";
import pic6 from "./r2m_sliders/Plot_27/InnerView/iv6.png";








function Gallery_Plot_27() {

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,img17, img18, pic1, pic2, pic3, pic3, pic4, pic5, pic6,
];

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true, // Enable keyboard navigation
  focusOnSelect: true  // Enable focusing on selected slide
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
    
export default Gallery_Plot_27
