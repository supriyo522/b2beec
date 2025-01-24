import React from "react";
import "./Fourdivs.css"; // Assuming you create a CSS file for styling

const Fourdivs = () => {
  const features = [
    {
      title: "AI-Powered Learning Insights",
      description:
        "EEC utilizes artificial intelligence to analyze student progress and learning patterns, offering personalized recommendations that enhance each student’s learning journey.",
      color: "#47B9D2", // Customize colors as needed
      icon: "🛠️",
    },
    {
      title: "Adaptive Learning Paths",
      description:
        "With machine learning algorithms, EEC tailors educational content to the individual needs of each student, ensuring they learn at their own pace and level of understanding.",
      color: "#FF9C39",
      icon: "🙋",
    },
    {
      title: "Advanced LMS Features",
      description:
        "EEC’s Learning Management System (LMS) is designed for the future of education, with tools for interactive lessons, gamified content, and real-time assessments that keep students engaged.",
      color: "#3CC8A9",
      icon: "📞",
    },
    {
      title: "Data-Driven Performance Monitoring",
      description:
        "Through AI and machine learning, EEC provides educators with real- time performance tracking, highlighting areas of improvement and helping create customized learning interventions for each student.",
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
