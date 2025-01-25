import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import eecbit from "./Image/eecbit.png";
import eecnet from "./Image/eecnet.jpeg";
import neweec from "./Image/neweec.jpeg";
import eecsocial from "./Image/eecsocial.jpg";
import eecpaper from "./Image/eecpaper.jpeg";
import eectable from "./Image/eectable.png";
import "./imcontent.css";

function ImContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="content-container1">
      <h1 style={{ color: "#d2df3d" }}>All-In-One ERP Solution</h1>
      <p className="subtitle1" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        A single bundle solution that includes all our modules for the best
        school automation.
      </p>

      <div className="main-content1" style={{ gap: "200px" }}>
        <div className="text-content1" data-aos="zoom-out-right">
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
        </div>
        <div className="image-content1" data-aos="zoom-out-left">
          <img
            src={eecnet}
            alt="School ERP Modules"
            style={{ width: "900px", height: "400px" }}
          />
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="image-content1" data-aos="zoom-out-right">
          <img src={eecbit} alt="School ERP Modules" />
        </div>
        <div className="text-content1" data-aos="zoom-out-left">
          <h2>Comprehensive Fee Automation Software</h2>
          <ul>
            <li>Automates end-to-end fee collection</li>
            <li>Supports online fee payment with multiple options</li>
            <li>Includes detailed reports for dues, payments, and more</li>
            <li>Quick and accurate payment reconciliation</li>
            <li>Clear management of income and expenditure accounts</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="text-content1" data-aos="zoom-out-right">
          <h2>Revolutionizing Learning with EEC</h2>
          <ul>
            <li>
              Gamified tryouts and worksheets powered by ML for dynamic learning
            </li>
            <li>Smart content delivery and progress tracking</li>
            <li>Easy e-content sharing for teachers</li>
            <li>Effortless online assignment submission and evaluation</li>
            <li>Seamless objective and subjective online exams</li>
          </ul>
        </div>
        <div className="image-content1" data-aos="zoom-out-left">
          <img src={eecpaper} alt="School ERP Modules" />
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="image-content1" data-aos="zoom-out-right">
          <img src={neweec} alt="School ERP Modules" />
        </div>
        <div className="text-content1" data-aos="zoom-out-left">
          <h2>Smart Exam Scheduling and Reporting, Simplified</h2>
          <ul>
            <li>Create custom exam report cards</li>
            <li>Design personalized report card templates</li>
            <li>Effortless exam scheduling</li>
            <li>Quick and easy marks updation</li>
            <li>Certificate generation</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="text-content1" data-aos="zoom-out-right">
          <h2>Empowering Parents with Instant Communication and Updates</h2>
          <ul>
            <li>Real-time alerts and notifications for parents</li>
            <li>Track student attendance and exam reports</li>
            <li>Receive daily circulars and updates</li>
            <li>Provide feedback on student progress</li>
            <li>Communication via email, SMS, and notifications</li>
          </ul>
        </div>
        <div className="image-content1" data-aos="zoom-out-left">
          <img src={eectable} alt="School ERP Modules" />
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="image-content1" data-aos="zoom-out-right">
          <img src={eecsocial} alt="School ERP Modules" />
        </div>
        <div className="text-content1" data-aos="zoom-out-left">
          <h2>Streamlined HR Management, Simplified for Success</h2>
          <ul>
            <li>Manage and organize staff attendance</li>
            <li>Centralized platform for employee details and leaves</li>
            <li>Generate statutory reports</li>
            <li>Reduces time and effort in HR processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ImContent;
