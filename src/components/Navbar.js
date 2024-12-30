import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EEC</h1>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/courses">Courses</Link>
        </li> */}
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/contact">Benefits</Link>
        </li>
      </ul>
      <div className="navButtons">
        <button className="learnMoreBtn">Learn More</button>
        <button className="getStartedBtn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
