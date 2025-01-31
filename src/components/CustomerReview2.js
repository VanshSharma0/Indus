import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import gal_img1 from "../Assets/gallery_img/gal_img1.jpg";
import gal_img2 from "../Assets/gallery_img/gal_img2.jpg";



function CustomerReview2() {

    var settings = {
        autoplay: true,
      
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <>
     <Slider {...settings} className="md:w-2/3 mx-auto">
             <section className="text-center border-2 p-8 hover:bg-green-50 border-[#A5BEC6]">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-xl md:text-3xl font-medium">
          &quot;This is an excellent product, the documentation is excellent and
          helped me get things done more efficiently.&quot;
        </Typography>
        <Avatar
          className="w-52 flex mx-auto"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image"
          size="sm"
        />
        <Typography variant="h6" className="mt-4">
          Tania Andrew
        </Typography>
        <Typography color="gray" className="mb-4 font-normal">
          Lead Website Developer
        </Typography>
        <Rating value={5} readonly />
      </section>

      <section className="p-8 text-center border-2 hover:bg-green-50 border-[#A5BEC6]">
      <Typography variant="h2" color="blue-gray" className="mb-6 text-xl md:text-3xl font-medium">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar className='w-52 flex mx-auto'
        src={gal_img1}
        alt="image"
        size="sm"
      />
      <Typography variant="h6" className="mt-4">
      Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Lead Website Developer
      </Typography>
      <Rating value={5} readonly />
    </section>


    <section className="p-8 text-center border-2 hover:bg-green-50 border-[#A5BEC6]">
      <Typography variant="h2" color="blue-gray" className="mb-6 text-xl md:text-3xl font-medium">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar className='w-52 flex mx-auto'
        src={gal_img2}
        alt="image"
        size="sm"
      />
      <Typography variant="h6" className="mt-4">
      Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Lead Website Developer
      </Typography>
      <Rating value={5} readonly />
    </section>    

    </Slider>
    </>
  );
}

export default CustomerReview2;
