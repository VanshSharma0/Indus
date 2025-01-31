import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
const IMAGES = [
  { src: "https://d57jfigkzby0a.cloudfront.net/ov1.JPG", alt: "gallery-1" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov2.JPG", alt: "gallery-2" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov3.JPG", alt: "gallery-3" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov6.jpg", alt: "gallery-6" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov7.jpg", alt: "gallery-7" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov10.jpg", alt: "gallery-10" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov12.jpg", alt: "gallery-12" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov13.jpg", alt: "gallery-13" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov14.jpg", alt: "gallery-14" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov15.jpg", alt: "gallery-15" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov16.jpg", alt: "gallery-16" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov17.jpg", alt: "gallery-17" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov18.jpg", alt: "gallery-18" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov19.jpg", alt: "gallery-19" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov21.jpg", alt: "gallery-21" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov22.jpg", alt: "gallery-22" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov23.jpg", alt: "gallery-23" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov24.jpg", alt: "gallery-24" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov25.jpg", alt: "gallery-25" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov26.jpg", alt: "gallery-26" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov27.jpg", alt: "gallery-27" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov28.jpg", alt: "gallery-28" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov29.jpg", alt: "gallery-29" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov30.jpg", alt: "gallery-30" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov31.jpg", alt: "gallery-31" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov32.jpg", alt: "gallery-32" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov33.jpg", alt: "gallery-33" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov34.jpg", alt: "gallery-34" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov35.jpg", alt: "gallery-35" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov36.jpg", alt: "gallery-36" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov37.jpg", alt: "gallery-37" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov38.jpg", alt: "gallery-38" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov39.jpg", alt: "gallery-39" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov40.jpg", alt: "gallery-40" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov41.jpg", alt: "gallery-41" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov42.jpg", alt: "gallery-42" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov43.jpg", alt: "gallery-43" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov44.jpg", alt: "gallery-44" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov45.jpg", alt: "gallery-45" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov46.jpg", alt: "gallery-46" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov48.jpg", alt: "gallery-48" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov49.jpg", alt: "gallery-49" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov50.jpg", alt: "gallery-50" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov51.jpg", alt: "gallery-51" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov52.jpg", alt: "gallery-52" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov53.jpg", alt: "gallery-53" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov54.jpg", alt: "gallery-54" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov55.jpg", alt: "gallery-55" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov56.jpg", alt: "gallery-56" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov57.jpg", alt: "gallery-57" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov58.jpg", alt: "gallery-58" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov59.jpg", alt: "gallery-59" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov60.jpg", alt: "gallery-60" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov61.jpg", alt: "gallery-61" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov63.jpg", alt: "gallery-63" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov64.jpg", alt: "gallery-64" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov65.jpg", alt: "gallery-65" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov66.jpg", alt: "gallery-66" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov67.jpg", alt: "gallery-67" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov68.jpg", alt: "gallery-68" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov69.jpg", alt: "gallery-69" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov70.jpg", alt: "gallery-70" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov71.jpg", alt: "gallery-71" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov72.jpg", alt: "gallery-72" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov73.jpg", alt: "gallery-73" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov75.jpg", alt: "gallery-75" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov76.jpg", alt: "gallery-76" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov77.jpg", alt: "gallery-77" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov78.jpg", alt: "gallery-78" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov79.jpg", alt: "gallery-79" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov80.jpg", alt: "gallery-80" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov81.jpg", alt: "gallery-81" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov82.jpg", alt: "gallery-82" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov83.jpg", alt: "gallery-83" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov84.jpg", alt: "gallery-84" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov85.jpg", alt: "gallery-85" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov86.jpg", alt: "gallery-86" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov88.jpg", alt: "gallery-88" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov90.jpg", alt: "gallery-90" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov91.jpg", alt: "gallery-91" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov93.jpg", alt: "gallery-93" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov94.jpg", alt: "gallery-94" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov95.jpg", alt: "gallery-95" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov96.jpg", alt: "gallery-96" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov97.jpg", alt: "gallery-97" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov98.jpg", alt: "gallery-98" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov99.jpg", alt: "gallery-99" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov100.jpg", alt: "gallery-100" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov101.jpg", alt: "gallery-101" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov102.jpg", alt: "gallery-102" },
  { src: "https://d57jfigkzby0a.cloudfront.net/ov103.jpg", alt: "gallery-103" },
];

const AUTOPLAY_DELAY = 3000;
const VISIBLE_SLIDES = 4;

const GalleryCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getVisibleImages = useCallback(() => {
    const visibleImages = [];
    for (let i = 0; i < VISIBLE_SLIDES; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({ ...images[index], index });
    }
    return visibleImages;
  }, [currentIndex, images]);

  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, AUTOPLAY_DELAY);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col justify-center items-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
              GALLERY
            </span>
          </h1>
          <p className="text-white/80 text-xl md:text-2xl text-center px-4">
            Explore our stunning collection
          </p>
        </motion.div>
      </div>
  
      {/* Carousel Section */}
      <div className="relative px-4 py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="flex space-x-4 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {getVisibleImages().map((image, idx) => (
                  <motion.div
                    key={`${image.index}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex-1"
                    onHoverStart={() => setHoveredIndex(idx)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={hoveredIndex === idx ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            className="text-white text-lg font-medium"
                          >
                            {image.alt}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Autoplay Control */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            >
              {isAutoplay ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white" />
              )}
              <span className="text-white text-sm">
                {isAutoplay ? 'Pause' : 'Play'} Slideshow
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="text-white text-lg font-medium"
                      >
                        {image.alt}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  return <GalleryCarousel images={IMAGES} />;
}