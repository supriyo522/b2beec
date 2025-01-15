import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import eec44 from "./Image/eec44.jpeg";
import eec33 from "./Image/eec33.jpeg";
import eec34 from "./Image/eec34.jpeg";
import eec35 from "./Image/eec35.jpeg";
import eec36 from "./Image/eec36.jpeg";
import eec37 from "./Image/eec37.jpeg";
import eec38 from "./Image/eec38.jpeg";
import eec39 from "./Image/eec39.jpeg";
import eec40 from "./Image/eec40.jpeg";
import eec41 from "./Image/eec41.jpeg";
import eec42 from "./Image/eec42.jpeg";
import eec43 from "./Image/eec43.jpeg";

const UpDownAnimation = () => {
  const images = [
    eec44,
    eec33,
    eec34,
    eec35,
    eec36,
    eec37,
    eec38,
    eec39,
    eec40,
    eec41,
    eec42,
    eec43,
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
