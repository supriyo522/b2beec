import React from "react";
import { motion } from "framer-motion";
import "./WelcomeAnimation.css"; // Import the CSS file
import { color } from "framer-motion";

const WelcomeAnimation = () => {
  return (
    <div>
      <motion.h1
        className="welcome-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundColor: "#b1e7d9",
          padding: "20px",
          // marginBottom: "30px"
        }}
      >
        Welcome to EEC
      </motion.h1>
    </div>
  );
};

export default WelcomeAnimation;