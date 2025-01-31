import React from "react";
import SliderComponent from "./Slider/Slider";
const images = [
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv1.jpg",
    alt: "Inner View Image 1",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv2.jpg",
    alt: "Inner View Image 2",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv3.jpg",
    alt: "Inner View Image 3",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv5.jpg",
    alt: "Inner View Image 5",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv6.jpg",
    alt: "Inner View Image 6",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv7.jpg",
    alt: "Inner View Image 7",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv8.jpg",
    alt: "Inner View Image 8",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv9.jpg",
    alt: "Inner View Image 9",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv10.jpg",
    alt: "Inner View Image 10",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv11.jpg",
    alt: "Inner View Image 11",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv12.jpg",
    alt: "Inner View Image 12",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv13.jpg",
    alt: "Inner View Image 13",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv15.jpg",
    alt: "Inner View Image 15",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv16.jpg",
    alt: "Inner View Image 16",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv17.jpg",
    alt: "Inner View Image 17",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv18.jpg",
    alt: "Inner View Image 18",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv19.jpg",
    alt: "Inner View Image 19",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv20.jpg",
    alt: "Inner View Image 20",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv21.jpg",
    alt: "Inner View Image 21",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv22.jpg",
    alt: "Inner View Image 22",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv23.jpg",
    alt: "Inner View Image 23",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv24.jpg",
    alt: "Inner View Image 24",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv25.jpg",
    alt: "Inner View Image 25",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv26.jpg",
    alt: "Inner View Image 26",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv27.jpg",
    alt: "Inner View Image 27",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv28.jpg",
    alt: "Inner View Image 28",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv29.jpg",
    alt: "Inner View Image 29",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv30.jpg",
    alt: "Inner View Image 30",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv31.jpg",
    alt: "Inner View Image 31",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv32.jpg",
    alt: "Inner View Image 32",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv33.JPG",
    alt: "Inner View Image 33",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv34.JPG",
    alt: "Inner View Image 34",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv35.JPG",
    alt: "Inner View Image 35",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv36.JPG",
    alt: "Inner View Image 36",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv37.JPG",
    alt: "Inner View Image 37",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv38.JPG",
    alt: "Inner View Image 38",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv39.JPG",
    alt: "Inner View Image 39",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv40.JPG",
    alt: "Inner View Image 40",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv41.JPG",
    alt: "Inner View Image 41",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv42.JPG",
    alt: "Inner View Image 42",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv43.JPG",
    alt: "Inner View Image 43",
  },
  {
    src: "https://d57jfigkzby0a.cloudfront.net/iv44.jpeg",
    alt: "Inner View Image 44",
  },
];

function GalleryIv() {
  return (
    <section className="flex flex-col md:p-5 md:pt-0 lg:p-10  bg-[#d2d2b4] bg-cover bg-opacity-80 text-[#40392d] ">
      <SliderComponent
        imageUrls={images.map((image) => image.src)}
        settings={{
          dots: false,
        }}
      />
    </section>
  );
}

export default GalleryIv;
