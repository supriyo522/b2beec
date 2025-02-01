import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faUser,
  faPhone,
  faLock,
  faRoute,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Fourdivs.css";

const Fourdivs = () => {
  const features = [
    {
      title: "AI-Powered Learning Insights",
      description:
        "EEC utilizes artificial intelligence to analyze student progress and learning patterns, offering personalized recommendations that enhance each student’s learning journey.",
      color: "#47B9D2",
      icon: faTools,
    },
    {
      title: "Adaptive Learning Paths",
      description:
        "With machine learning algorithms, EEC tailors educational content to the individual needs of each student, ensuring they learn at their own pace and level of understanding.",
      color: "#FF9C39",
      icon: faRoute,
    },
    {
      title: "Advanced LMS Features",
      description:
        "EEC’s Learning Management System (LMS) is designed for the future of education, with tools for interactive lessons, gamified content, and real-time assessments that keep students engaged.",
      color: "#3CC8A9",
      icon: faCog,
    },
    {
      title: "Data-Driven Performance Monitoring",
      description:
        "Through AI and machine learning, EEC provides educators with real-time performance tracking, highlighting areas of improvement and helping create customized learning interventions for each student.",
      color: "#E76E68",
      icon: faLock,
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
            <div className="feature-icon">
              <FontAwesomeIcon
                icon={feature.icon}
                size="2x"
                style={{ color: "yellow" }}
              />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourdivs;
