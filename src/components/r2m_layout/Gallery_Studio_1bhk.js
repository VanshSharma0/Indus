import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-tailwind/react";
import img1 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov1.webp";
import img2 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov2.webp";
import img3 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov3.webp";
import img4 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov4.webp";
import img5 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov5.webp";
import img6 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov6.webp";
import img7 from "./r2m_sliders/Plot_69(Studio&1bhk)/OuterView/ov7.webp";
import pic1 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv1.webp";
import pic2 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv2.webp";
import pic3 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv3.webp";
import pic4 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv4.webp";
import pic5 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv5.webp";
import pic6 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv6.webp";
import pic7 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv7.webp";
import pic8 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv8.webp";
import pic9 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv9.webp";
import pic10 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv10.webp";
import pic11 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv11.webp";
import pic12 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv12.webp";
import pic13 from "./r2m_sliders/Plot_69(Studio&1bhk)/InnerView/iv13.webp";





function Gallery_Studio_1bhk() {

  const images = [
    img1, img2, img3, img4, img5, img6, img7, pic1, pic2, pic3, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13
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
    
export default Gallery_Studio_1bhk
