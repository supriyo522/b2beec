import React from "react";
import "./imcontent.css";

function imcontent() {
  return (
    <div className="content-container">
      {/* Title Section */}
      <h1>Wide array of modules for all your stakeholders</h1>
      <p className="subtitle">
        School Canvas ERP software solution is equipped with high-end modules
        that help education institutions manage the entire workflows from a
        single platform.
      </p>

      {/* Main Section */}
      <div className="main-content">
        {/* Left: Text Content */}
        <div className="text-content">
          <h2>All-In-One School ERP</h2>
          <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p>
          <ul>
            <li>Complete Paperless Solutions</li>
            <li>Increases Overall Productivity</li>
            <li>Reduces Workload & Backlogs</li>
            <li>Centralized Admin Control</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
        <div className="image-content">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_MdYEULL0.webp" /* Replace with the actual image URL */
            alt="School ERP Modules"
          />
        </div>
      </div>
    </div>
  );
}

export default imcontent;
