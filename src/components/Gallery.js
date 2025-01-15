import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import eec11 from "./Image/eec11.JPG";
import eec12 from "./Image/eec12.JPG";
import eec18 from "./Image/eec18.JPG";
import eec15 from "./Image/eec15.JPG";
import eec16 from "./Image/eec16.JPG";
import eec17 from "./Image/eec17.JPG";
import eec25 from "./Image/eec25.JPG";
import eec26 from "./Image/eec26.JPG";
import eec30 from "./Image/eec30.JPG";
import eec31 from "./Image/eec31.JPG";
import eec20 from "./Image/eec20.JPG";
import eec24 from "./Image/eec24.JPG";

const UpDownAnimation = () => {
  const images = [
    eec11,
    eec12,
    eec18,
    eec15,
    eec16,
    eec17,
    eec25,
    eec26,
    eec30,
    eec31,
    eec20,
    eec24,
  ];

  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            if (!visibleIndices.includes(index)) {
              setVisibleIndices((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animated-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleIndices]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        height: "100vh",
        padding: "20px",
        overflow: "auto",
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="animated-item"
          data-index={index}
          style={{
            width: "180px",
            height: "180px",
            overflow: "hidden",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          initial={{ y: index % 2 === 0 ? -200 : 200, opacity: 0 }}
          animate={
            visibleIndices.includes(index)
              ? { y: 0, opacity: 1 }
              : { y: index % 2 === 0 ? -200 : 200, opacity: 0 }
          }
          transition={{ duration: 1, delay: index * 0.00001 }}
        >
          <LazyLoadImage
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default UpDownAnimation;
