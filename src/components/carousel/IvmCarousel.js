import Marquee from "react-fast-marquee";
import { Typography } from "@mui/material";
import "./ivmCarousel-styles.css";

const IvmCarousel = () => {
  const CAROUSEL_SPEED = 100;
  const CAROUSEL_DATA = [
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0324.JPG",
      title: "Slide 1",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0322.JPG",
      title: "Slide 2",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0296.JPG",

      title: "Slide 3",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0314.JPG",
      title: "Slide 4",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0327.JPG",
      title: "Slide 5",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/DJI_0298.JPG",
      title: "Slide 6",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/balcony.JPG",
      title: "Slide 7",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/dinin.jpg",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/dinin-2.JPG",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/ice-3.jpg",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/ice.jpg",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/room-2.JPG",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/room-3.JPG",
      title: "Slide 8",
    },
    {
      imageSrc: "https://d57jfigkzby0a.cloudfront.net/view.JPG",
      title: "Slide 8",
    },
  ];

  const renderCarouselSlides = () => (
    <div className="ivmCarousel__subContainer">
      {CAROUSEL_DATA.map((res, index) => {
        const { imageSrc, title } = res;
        return (
          <div className="ivmCarousel__slide" key={index}>
            <img className="ivmCarousel__image" src={imageSrc} alt={title} />
          </div>
        );
      })}
    </div>
  );

  return (
    <Marquee className="ivmCarousel__container" speed={CAROUSEL_SPEED}>
      {renderCarouselSlides()}
    </Marquee>
  );
};

export default IvmCarousel;
