import React from "react";
import {useState, useEffect} from "react";
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

const Leaf = ({ style }) => (
  <div 
    className="absolute pointer-events-none w-8 h-8 bg-green-500 rounded-full" // Temporary visible circle instead of image
    style={style}
  >
    onError={(e) => {
      console.error('Leaf image failed to load');
      e.target.style.backgroundColor = 'red'; // Will show red if image fails to load
    }}
    onLoad={() => console.log('Leaf image loaded successfully')}
    </div>
);

const LeafBackground = () => {
  const [leaves, setLeaves] = useState([]);
  
  useEffect(() => {
    console.log('LeafBackground mounted'); // Debug log

    const createLeaf = () => {
      const startX = Math.random() * window.innerWidth;
      const duration = 20 + Math.random() * 15;
      const size = 20 + Math.random() * 15;
      
      return {
        id: Math.random(),
        startX,
        style: {
          left: `${startX}px`,
          top: '-50px',
          width: `${size}px`,
          height: `${size}px`,
          opacity: 0.8, // High opacity for debugging
          backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`, // Random colors for visibility
          animation: `
            fall ${duration}s linear infinite,
            sway ${6 + Math.random() * 4}s ease-in-out infinite alternate
          `,
          zIndex: 1 // Ensure leaves are above background
        }
      };
    };
    // Initialize leaves
    const initialLeaves = Array.from({ length: 10 }, createLeaf);
    setLeaves(initialLeaves);
    console.log('Initial leaves created:', initialLeaves.length); // Debug log

    // Add new leaves periodically
    const interval = setInterval(() => {
      setLeaves(prev => {
        const newLeaves = [...prev.slice(-9), createLeaf()];
        console.log('Leaves updated, count:', newLeaves.length); // Debug log
        return newLeaves;
      });
    }, 1000); // More frequent for testing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-blue-100 opacity-20" /> {/* Debug background */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-50px); }
            100% { transform: translateY(100vh); }
          }
          @keyframes sway {
            0% { transform: translateX(-40px); }
            100% { transform: translateX(40px); }
          }
        `}
      </style>
      {leaves.map(leaf => (
        <Leaf key={leaf.id} style={leaf.style} />
      ))}
    </div>
  );
};

const Card = ({ image, title, distance }) => (
  <div className="w-full md:w-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-auto bg-white transform hover:scale-105">
    <img className="w-full h-64 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{distance}</p>
    </div>
  </div>
);

function NearBy() {
  const cardData = [
    { image: img1, title: "Forest Trekking", distance: "0 KM" },
    { image: img2, title: "Bhalu Gaad Waterfall", distance: "12 KM" },
    { image: img3, title: "Mahadev Temple", distance: "15 KM" },
    { image: img4, title: "Satkhol Ashram", distance: "26 KM" },
    { image: img5, title: "Paragliding Adventure", distance: "35 KM" },
    { image: img6, title: "Bhimtal", distance: "31 KM" },
    { image: img7, title: "Mall Road Nainital", distance: "46 KM" },
    { image: img8, title: "Almora", distance: "59 KM" },
    { image: img9, title: "Jageshwar Dham", distance: "65 KM" },
    { image: img10, title: "RaniKhet", distance: "80 KM" },
    { image: img11, title: "Binsar", distance: "80 KM" },
    { image: img12, title: "Kausani", distance: "108 KM" },
  ];

  return (
    <div className="relative bg-white min-h-screen">
      <LeafBackground />
      <div className="relative z-10">
        <h2 className="w-fit text-gray-800 mx-auto text-2xl md:text-4xl pt-10 pb-5 md:pb-10 font-merriweather text-center p-3">
          POINT OF INTEREST <br />
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden gap-5 md:gap-16 p-5 md:p-16 md:pt-0">
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} distance={card.distance} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default NearBy;