import React, { useEffect } from "react";
import AOS from "aos";
import "./Contact.css"; // Ensure you use the updated CSS file
import "aos/dist/aos.css";

const ContactUS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  // Data for the divs
  const contentArray = [
    {
      header: "Integrated ERP & LMS",
      paragraph:
        "EEC seamlessly combines ERP and LMS functionalities, streamlining school management and delivering an engaging, personalized learning experience. From student attendance tracking to interactive lessons and real-time assessments, EEC covers it all.",
      animation: "flip-left",
    },
    {
      header: "AI & ML-Powered Personalization",
      paragraph:
        "EEC leverages AI and machine learning to provide personalized learning paths, adapting to each student's unique needs. Our AI-driven insights identify strengths and areas for improvement, while ML algorithms refine content delivery for optimal student engagement.",
      animation: "flip-right",
    },
    {
      header: "Real-Time Performance Analytics",
      paragraph:
        "Powered by AI, EEC offers advanced analytics to track student performance and behavior. Teachers and administrators receive real-time data to make informed decisions, creating targeted interventions for improved learning outcomes.",
      animation: "flip-left",
    },
    {
      header: "Streamlined Administrative Processes",
      paragraph:
        "EEC’s ERP system simplifies school administration, including fee management, scheduling, payroll, and more. It automates routine tasks, enhances financial transparency, and ensures efficient school operations, so educators can focus on student success.",
      animation: "flip-right",
    },
    {
      header: "Smart Exam Reporting",
      paragraph:
        "With automated exam scheduling, result generation, and detailed reporting, EEC’s system ensures assessments are managed efficiently. AI algorithms analyze results to provide deeper insights into student performance.",
      animation: "flip-left",
    },
    {
      header: "AI-Driven Communication & Collaboration",
      paragraph:
        "EEC fosters seamless communication among teachers, students, and parents with AI-powered chatbots and real-time updates, ensuring that everyone stays informed and connected.",
      animation: "flip-right",
    },
    {
      header: "Adaptive Learning Tools",
      paragraph:
        "Our LMS, enhanced by AI and ML, adapts content and assessments to each student’s progress. It provides engaging, interactive lessons and gamified content to keep students motivated and focused on their educational goals.",
      animation: "flip-left",
    },
    {
      header: "Centralized Data & Customizable Dashboards",
      paragraph:
        "EEC centralizes all school data into one platform, allowing administrators, teachers, and parents to view and customize dashboards that track performance, attendance, fees, and more.",
      animation: "flip-right",
    },
    {
      header: "Comprehensive Financial Management",
      paragraph:
        "The ERP system ensures smooth fee collection, billing, and financial reporting. With automated reminders and secure payment processing, EEC provides complete financial transparency and efficiency.",
      animation: "flip-left",
    },
    {
      header: "Cloud-Based Access & Security",
      paragraph:
        "EEC operates on a secure cloud platform, providing access anytime, anywhere. With end-to-end encryption and backup systems, it guarantees data security while offering easy accessibility for all users.",
      animation: "flip-right",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#ffffff", // Yellow-themed background
      }}
    >
      {contentArray.map((item, index) => (
        <div key={index} className="card-container" data-aos={item.animation}>
          <h1 className="animated-header">{item.header}</h1>
          <p className="animated-paragraph">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactUS;
