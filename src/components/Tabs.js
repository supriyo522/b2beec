import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaBuilding,
  FaClipboardList,
  FaWallet,
} from "react-icons/fa";
import "./Tabs.css";

const Tabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("Academics Management");

  const tabs = [
    {
      name: "Academics Management",
      icon: <FaGraduationCap />,
      color: "#6AA84F",
    },
    { name: "Student Management", icon: <FaUserGraduate />, color: "#3D85C6" },
    {
      name: "AI and ML features of EEC",
      icon: <FaBuilding />,
      color: "#C000C0",
    },
    {
      name: "E-Library and Transportation",
      icon: <FaClipboardList />,
      color: "#FF9900",
    },
    {
      name: "Exam Management",
      icon: <FaClipboardList />,
      color: "#FF9900",
    },
    { name: "HR Management", icon: <FaWallet />, color: "#E06666" },

    {
      name: "Finance Management",
      icon: <FaClipboardList />,
      color: "#FF9900",
    },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.name ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab.name);
              onTabChange(tab.name);
            }}
          >
            <span style={{ color: tab.color, fontSize: "1.5rem" }}>
              {tab.icon}
            </span>
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <div
        className="tab-indicator"
        style={{
          backgroundColor: tabs.find((t) => t.name === activeTab)?.color,
        }}
      />
    </div>
  );
};

export default Tabs;
