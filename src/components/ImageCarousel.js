import React, { useState } from "react";
import "./ImageCarousel.css"; // Add custom styles

const ImageCarousel = () => {
  // Array of images to display
  const images = [
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_N85x6lWJ.webp",
    
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_N85x6lWJ.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_N85x6lWJ.webp",
    
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_TFVfkNGM.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_TFVfkNGM.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_TFVfkNGM.webp",
    
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_6HBSubnT.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_6HBSubnT.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_6HBSubnT.webp",
    
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_mkiRt4Va.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_mkiRt4Va.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_mkiRt4Va.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_mkiRt4Va.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_6HBSubnT.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_TFVfkNGM.webp",
    "https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_N85x6lWJ.webp",
  ];

  // State to track the current image group index (group of 3 images)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next group of 3 images
  const nextImages = () => {
    if (currentIndex + 4 >= images.length) {
      setCurrentIndex(0); // Loop back to the first set
    } else {
      setCurrentIndex(currentIndex + 4); // Move to the next set
    }
  };

  // Function to go to the previous group of 3 images
  const prevImages = () => {
    if (currentIndex - 4 < 0) {
      setCurrentIndex(images.length - 4); // Loop back to the last set
    } else {
      setCurrentIndex(currentIndex - 4); // Move to the previous set
    }
  };

  // Slice the images array into groups of 3
  const imageGroup = images.slice(currentIndex, currentIndex + 4);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="image-group">
          {imageGroup.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-image-${index}`}
              className="carousel-image"
            />
          ))}
        </div>
        <div className="carousel-controls">
          <button className="prev-btn" onClick={prevImages}>
            Prev
          </button>
          <button className="next-btn" onClick={nextImages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
