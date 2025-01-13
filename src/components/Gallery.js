import React from "react";
import { motion } from "framer-motion";


const UpDownAnimation = () => {
  const images = [
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
    "https://10web-site.ai/210/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp",
  ];

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
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
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
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <img
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
