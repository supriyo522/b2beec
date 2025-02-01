import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const slides = [
    "https://schoolerpindia.com/images/bg/erp_banner4.webp",
    "https://schoolerpindia.com/images/bg/erp_banner2.gif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt="Slide" className="carousel-image" />
      </div>
    </div>
  );
};

export default Carousel;
