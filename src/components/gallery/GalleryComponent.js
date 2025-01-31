import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const GalleryWithLightbox = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      {/* Gallery will automatically show thumbnails */}
      <Gallery
        images={images.map((image) => ({
          src: image.original, // main image when clicked
          thumbnail: image.thumbnail, // thumbnail to display in the gallery
          caption: image.caption, // optional caption
          original: image.original, // for lightbox navigation
        }))}
        onClick={(index) => handleClick(index)}
        enableImageSelection={false}
      />

      {currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          nextSrc={nextImage.original}
          prevSrc={prevImage.original}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};
