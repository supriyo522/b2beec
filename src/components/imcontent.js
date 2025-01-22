import React from "react";
import eecbit from "./Image/eecbit.png";
import eecnet from "./Image/eecnet.jpeg";
import neweec from "./Image/neweec.jpeg";
import eecsocial from "./Image/eecsocial.jpg";
import eecpaper from "./Image/eecpaper.jpeg";
import eectable from "./Image/eectable.png";

import "./imcontent.css";

function imcontent() {
  return (
    <div className="content-container1">
      {/* Title Section */}
      <h1 style={{color:"#d2df3d"}}>All-In-One ERP Solution</h1>
      <p className="subtitle" style={{fontSize:"1.8rem",fontWeight:"bold"}}>
        A single bundle solution that includes all our modules for the best
        school automation.
      </p>

      {/* Main Section */}
      <div className="main-content1" style={{gap: "200px"}}>
        {/* Left: Text Content */}
        <div className="text-content1">
          <h2>All-In-One School ERP</h2>
          <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p>
          <ul>
            <li>Paper-free Management</li>
            <li>Maximizes Efficiency and Productivity</li>
            <li>Reduces Workload and Delays</li>
            <li>Centralized Admin Oversight</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
        <div className="image-content1">
          <img
            src={eecnet} /* Replace with the actual image URL */
            alt="School ERP Modules"
            style={{
    width: "900px", // Adjust width as needed
    height: "400px", // Maintain aspect ratio
    // maxWidth: "350px"
  }}
          />
        </div>
      </div>
      <hr />
      <div className="main-content1" style={{gap: "100px"}}>
        {/* Left: Text Content */}

        <div className="image-content1">
          <img
            src={eecbit} /* Replace with the actual image URL */
            alt="School ERP Modules"
          />
        </div>

        <div className="text-content1">
          <h2>Fee Collection Software</h2>
          {/* <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p> */}
          <ul>
            <li>Automates end-to-end fee collection</li>
            <li>Supports online fee payment with multiple payment options</li>
            <li>Includes detailed reports for dues, payments, and more</li>
            <li>Quick and accurate online fee payment reconciliation</li>
            <li>Clear management of income and expenditure accounts</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
      </div>
      <hr />
      <div className="main-content1"  style={{gap: "100px"}}>
        {/* Left: Text Content */}
        <div className="text-content1">
          <h2>Revolutionizing Learning with EEC</h2>
          {/* <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p> */}
          <ul>
            <li>
              Gamified tryouts and worksheets powered by ML for dynamic learning
            </li>
            <li>Smart content delivery and progress tracking</li>
            <li>Easy e-content sharing for teachers in multiple formats</li>
            <li>Effortless online assignment submission and evaluation</li>
            <li>Seamless objective and subjective online exams</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
        <div className="image-content1">
          <img
            src={eecpaper} /* Replac3e with the actual image URL */
            alt="School ERP Modules"
          />
        </div>
      </div>
      <hr />
      <div className="main-content1"  style={{gap: "100px"}}>
        {/* Left: Text Content */}

        <div className="image-content1">
          <img
            src={neweec} /* Replac4e with the actual image URL */
            alt="School ERP Modules"
          />
        </div>

        <div className="text-content1">
          <h2>Smart Exam Scheduling and Reporting, Simplified</h2>
          {/* <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p> */}
          <ul>
            <li>Create custom exam report cards</li>
            <li>Design personalized report card templates</li>
            <li>Effortless exam scheduling</li>
            <li>Quick and easy marks updation</li>
            <li>Certificate generation</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
      </div>
      <hr />
      <div className="main-content1"  style={{gap: "100px"}}>
        {/* Left: Text Content */}
        <div className="text-content1">
          <h2>Empowering Parents with Instant Communication and Updates</h2>
          {/* <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p> */}
          <ul>
            <li>Real-time alerts and notifications for parents</li>
            <li>Track student attendance and exam reports</li>
            <li>Receive daily circulars and updates</li>
            <li>Provide feedback on student progress</li>
            <li>Communication via email, SMS, and notifications</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
        <div className="image-content1">
          <img
            src={eectable} /* Replac5e with the actual image URL */
            alt="School ERP Modules"
          />
        </div>
      </div>
      <hr />
      <div className="main-content1"  style={{gap: "100px"}}>
        {/* Left: Text Content */}

        <div className="image-content1">
          <img
            src={eecsocial} /* Replac6e with the actual image URL */
            alt="School ERP Modules"
          />
        </div>

        <div className="text-content1">
          <h2>Streamlined HR Management, Simplified for Success</h2>
          {/* <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p> */}
          <ul>
            <li>Manage and organize staff attendance</li>
            <li>Centralized platform for employee details and leaves</li>
            <li>Generate statutory reports</li>
            <li>Reduces time and effort in HR processes</li>
          </ul>
          {/* <button className="demo-button">Request Demo</button> */}
        </div>

        {/* Right: Image with Modules */}
      </div>
    </div>
  );
}

export default imcontent;
