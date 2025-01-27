import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import eecbit from "./Image/eecbit.png";
import eecnet from "./Image/eecnet.jpeg";
import neweec from "./Image/neweec.jpeg";
// import eecsocial from "./Image/eecsocial.jpg";
import eecpaper from "./Image/eecpaper.jpeg";
import eectable from "./Image/eectable.png";
import eecfeed from "./Image/eecfeed.png";
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
          <h2>Comprehensive Fee Automation Software</h2>
          <p>
            Single bundle solution including all our modules for the best school
            automation.
          </p>
          <ul>
            <li>Automates end-to-end fee collection</li>
            <li>Supports online fee payment with multiple payment options</li>
            <li>Includes detailed reports for dues, payments, and more</li>
            <li>Quick and accurate online fee payment reconciliation</li>
            <li>Clear management of income and expenditure accounts</li>
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
          <h2>Transforming Education with EEC</h2>
          <ul>
            <li>Gamified tryouts and worksheets powered by ML for dynamic learning</li>
            <li>Smart content delivery and progress tracking</li>
            <li>Easy e-content sharing for teachers in multiple formats</li>
            <li>Effortless online assignment submission and evaluation</li>
            <li>Seamless objective and subjective online exams</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="text-content1" data-aos="zoom-out-right">
          <h2>Effortless Exam Scheduling and Reporting</h2>
          <ul>
            <li>
            Create custom exam report cards
            </li>
            <li>Design personalized report card templates</li>
            <li>Effortless exam scheduling</li>
            <li>Quick and easy marks updation</li>
            <li>Certificate generation</li>
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
          <h2>Enabling Parents with Real-Time Communication and Updates</h2>
          <ul>
            <li>Real-time alerts and notifications for parents</li>
            <li>Track student attendance and exam reports</li>
            <li>Receive daily circulars and updates</li>
            <li>Provide feedback on student progress</li>
            <li>Communication via email, SMS, and notifications</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="text-content1" data-aos="zoom-out-right">
          <h2>Effortless HR Management for Streamlined Success</h2>
          <ul>
            <li>Manage and organize staff attendance</li>
            <li>Centralized platform for employee details and leaves</li>
            <li>Generate statutory reports</li>
            <li>Reduces time and effort in HR processes</li>
          </ul>
        </div>
        <div className="image-content1" data-aos="zoom-out-left">
          <img src={eectable} alt="School ERP Modules" />
        </div>
      </div>

      <hr />
      <div className="main-content1" style={{ gap: "100px" }}>
        <div className="image-content1" data-aos="zoom-out-right">
          <img src={eecfeed} alt="School ERP Modules" />
        </div>
        <div className="text-content1" data-aos="zoom-out-left">
          <h2>Empowering Health, Ensuring Success</h2>
          <ul>
            <li>Comprehensive tracking of student health data</li>
            <li>Secure and confidential record storage</li>
            <li>Easy access for parents and school staff</li>
            <li>Proactive management of student health and well-being</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default ImContent;
