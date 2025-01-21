import React from "react";
import "./Fourdivs.css"; // Assuming you create a CSS file for styling

const Fourdivs = () => {
  const features = [
    {
      title: "Paper-free Management",
      description:
        "Build on open API, to customise solutions based on school needs. Custom URL & tailored reports.",
      color: "#47B9D2", // Customize colors as needed
      icon: "🛠️",
    },
    {
      title: "Maximizes Efficiency & Productivity",
      description:
        "Engage Teachers, Students, Parents without technical expertise. Multiuser login operations with ease.",
      color: "#FF9C39",
      icon: "🙋",
    },
    {
      title: "Maximizes Efficiency & Productivity",
      description:
        "Our experienced support engineers are available round the clock for any resolution of query.",
      color: "#3CC8A9",
      icon: "📞",
    },
    {
      title: "Centralized Admin Oversight",
      description:
        "Implementation of 'Zero Trust' access layer for authentication & authorisation of canvas application.",
      color: "#E76E68",
      icon: "🔒",
    },
  ];

  return (
    <div className="features-container">
      <h2>Why EEC?</h2>
      <p>
        &quot;EEC is designed to save time and reduce administrative burden for
        schools while offering students dynamic learning tools and helping
        parents track progress. It’s a comprehensive solution for educational
        success.&quot;
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundColor: feature.color }}
          >
            {/* <div className="feature-icon">{feature.icon}</div> */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {/* <button onClick={() => alert(`${feature.title} clicked!`)}>
              Learn More
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourdivs;
