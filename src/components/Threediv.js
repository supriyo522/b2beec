import React from "react";
import "./Threedic.css";

const featur = [
  {
    title: "Speed Optimized for All Users",
    description:
      "At EEC, we understand that internet speeds can vary. To ensure a smooth experience, we’ve made our app lightweight and optimized for fast loading, so you can access content quickly, even with slower internet connections.",
    image: "https://schoolerpindia.com/images/feature/f2.webp",
  },
  {
    title: "Web-Based Convenience",
    description:
      "EEC is fully web-based, requiring no software installation. Access the platform easily from any device with an internet connection, offering flexibility and convenience for students, teachers, and parents, wherever you are.",
    image: "https://schoolerpindia.com/images/feature/f1.webp",
  },
  {
    title: "Intuitive Interface",
    description:
      "EEC offers an easy-to-use platform with a simple, intuitive interface. Whether you’re a student, teacher, or parent, the navigation is straightforward, ensuring everyone can access the features effortlessly. No prior technical knowledge is required, making it ideal for all age groups and user experience levels.",
    image: "https://schoolerpindia.com/images/feature/f3.webp",
  },
];

const Featur = () => {
  return (
    <div>
    <h1 style={{color:"#2525a3"}}>User-Centric Design & Seamless Access</h1>
    <div className="featur-container">
      {featur.map((feature, index) => (
        <div key={index} className="featur-card" style={{ height: "400px" }}>
          <img
            src={feature.image}
            alt={feature.title}
            className="featur-image"
          />
          <h3 style={{color:"#2525a3"}}>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Featur;
