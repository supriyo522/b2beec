import React from "react";
import {
  FaChalkboardTeacher,
  FaCode,
  FaClipboardCheck,
  FaUserGraduate,
  FaUserCheck,
  FaBook,
} from "react-icons/fa";
import "./Cards.css";

const Cards = ({ category }) => {
  const content = {
    "Academics Management": [
      {
        title: "Personalized Learning Paths",
        description:
          "EEC offers tailored learning experiences, adapting to each student’s pace and abilities. This ensures that every student gets the right content to meet their individual educational needs effectively.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Progress Tracking",
        description:
          "Teachers and students can easily monitor progress through detailed reports. Real-time analytics help identify strengths, weaknesses, and areas for improvement, allowing for timely interventions and goal adjustments.",
        icon: <FaCode />,
      },
      {
        title: "Lesson & Resource Management",
        description:
          "Teachers can upload and organize lessons, worksheets, videos, and assessments. This feature ensures smooth resource management, enhancing classroom learning and providing students with easy access to materials and activities.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Interactive Assessments",
        description:
          "EEC provides quizzes and self-assessments to help students gauge their understanding. Students can unlock further content as they complete assessments, motivating them to progress and learn continuously with engaging activities.",
        icon: <FaBook />,
      },
      {
        title: "Class Scheduling &amp; Notifications",
        description:
          "EEC allows easy class scheduling and automated notifications for students and teachers. This feature ensures that all important updates, deadlines, and reminders are efficiently communicated, promoting a well-organized learning environment.",
        icon: <FaUserCheck />,
      },
    ],
    "Student Management": [
      {
        title: "Personalized Dashboard",
        description:
          "Students have access to their own personalized dashboard, where they can track learning progress, achievements, and upcoming lessons. It provides a clear overview of their academic and wellness status.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Progress Monitoring",
        description:
          "Real-time progress tracking allows students to see their strengths and areas for improvement. Detailed analytics guide students to stay on track, making learning goals more achievable and motivating.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Reward System",
        description:
          "Students earn points and rewards for completing lessons, quizzes, and tasks. These points unlock new stages, providing a fun and motivating learning experience that encourages continuous growth and engagement.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Learning Analytics",
        description:
          "EEC provides students with insightful learning analytics. This data helps identify performance patterns, offering actionable feedback and recommendations to improve learning outcomes and boost academic success.",
        icon: <FaBook />,
      },
      {
        title: "Wellness Support",
        description:
          "Incorporating mental health tools, EEC ensures students maintain a balance between academic focus and well-being, with features like mood tracking and mindfulness exercises to promote mental clarity and emotional health.",
        icon: <FaUserCheck />,
      },
    ],
    "AI and ML features of EEC": [
      {
        title: "Tailored Learning Journeys",
        description:
          "AI customizes learning paths based on student performance, interests, and pace, ensuring an optimized and personal educational experience.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Smart Progress Insights",
        description:
          "Machine Learning analyzes student data to generate insights and recommendations for targeted improvements in real-time.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Predictive Performance Alerts",
        description:
          "AI anticipates student outcomes and flags potential challenges, providing early intervention opportunities for enhanced academic success.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Instant Automated Feedback",
        description:
          "ML algorithms assess assignments and assessments, providing immediate, personalized feedback to support rapid student growth.",
        icon: <FaBook />,
      },
    ],
    "E-Library and Transportation": [
      {
        title: "Digital E-Library Access",
        description:
          "A comprehensive online library for students to access study materials, e-books, and resources anytime, enhancing learning flexibility and convenience.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Real-Time Fleet Tracking",
        description:
          "Track and manage school buses or other transport vehicles in real time, ensuring smooth operations and timely arrivals.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Enhanced Safety Features",
        description:
          "Monitor vehicle health and driver behavior, guaranteeing student safety during transit with constant safety checks and alerts.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "GPS-Based Student Tracking",
        description:
          "Secure tracking of students from pick-up to drop-off, providing parents and schools with peace of mind.",
        icon: <FaBook />,
      },
      {
        title: "Instant Notifications",
        description:
          "Receive automated updates about transportation schedules, delays, or incidents, keeping both schools and parents informed at all times.",
        icon: <FaUserCheck />,
      },
    ],
    "Exam Management": [
      {
        title: "Seamless Exam Scheduling",
        description:
          "EEC allows schools to schedule exams efficiently, with automated reminders for students and teachers to stay on track.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Secure Online Assessments",
        description:
          "Conduct online exams with secure, customizable question formats, ensuring academic integrity while providing flexibility in test-taking.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Instant Result Generation",
        description:
          "After exam completion, results are automatically generated and shared, providing students and teachers with immediate feedback.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Performance Analytics",
        description:
          "Detailed analytics of exam performance, highlighting strengths and areas for improvement, helping students track progress.",
        icon: <FaBook />,
      },
      {
        title: "Exam Review &amp; Feedback",
        description:
          "Students can review their answers and receive personalized feedback, helping them understand mistakes and improve for future exams.",
        icon: <FaUserCheck />,
      },
    ],
    "HR Management": [
      {
        title: "Attendance Monitoring",
        description:
          "Automated tracking of both staff and students&#39; attendance with notifications for absenteeism.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Leave Management",
        description:
          "Streamlined leave request and approval process, maintaining accurate leave records for staff.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "HR Insights",
        description:
          "Analytics to monitor key metrics like staff performance and attendance, aiding management decisions.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Employee Records",
        description:
          "Centralized management of staff data, including roles, qualifications, and performance history.",
        icon: <FaBook />,
      },
      {
        title: "Staff Scheduling",
        description:
          "Efficient scheduling system for staff, ensuring smooth operation and coverage of all school activities.",
        icon: <FaUserCheck />,
      },
    ],
    "Finance Management": [
      {
        title: "Fee Payment Management",
        description:
          "EEC offers a streamlined system for fee collection with multiple payment gateways, enabling smooth, hassle-free payments for parents and schools.",
        icon: <FaUserGraduate />,
      },
      {
        title: "Financial Due Reports",
        description:
          "Automatically generated reports on outstanding payments, providing schools with real-time visibility into pending dues and allowing for timely follow-ups.",
        icon: <FaClipboardCheck />,
      },
      {
        title: "Payment History Reports",
        description:
          "Detailed payment transaction reports, giving schools and parents easy access to historical payment data and receipts.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Payment RemindersPayment Reminders",
        description:
          "Automated reminders sent to parents regarding upcoming or overdue fees, ensuring timely payments and reducing manual follow-ups.",
        icon: <FaBook />,
      },
      {
        title: "Expense Management",
        description:
          "Track school expenses efficiently with categories and detailed reports, helping schools manage budgets and optimize their financial resources.",
        icon: <FaUserCheck />,
      },
    ],
  };

  return (
    <div className="cards-container">
      {content[category]?.map((item, index) => (
        <div key={index} className="card">
          <div className="card-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
