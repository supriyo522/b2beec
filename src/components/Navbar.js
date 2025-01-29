import React, { useState } from "react";
import { Link } from "react-router-dom";
import eeclogo from "./Image/eeclogo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);  // Track dropdown visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  return (
    <nav className="navbar" aria-label="Breadcrumb">
      <Link to="/">
        <img src={eeclogo} alt="EEC Logo" className="logo" />
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn"> Home</button>
          </Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setAboutDropdown(true)}  // Show dropdown on hover
          onMouseLeave={() => setAboutDropdown(false)} // Hide dropdown when mouse leaves
        >
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">About Us</button>
          </Link>
          {aboutDropdown && (
            <ul className="dropdownMenu">
              <li>
                <Link to="/about/story" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Story</button>
                </Link>
              </li>
              <li>
                <Link to="/about/team" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Team</button>
                </Link>
              </li>
              <li>
                <Link to="/about/mission" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Mission</button>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/features" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn"> Features</button>
          </Link>
        </li>
        <li>
          <Link to="/benefits" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Benefits</button>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Enquiry</button>
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Gallery</button>
          </Link>
        </li>
        <li>
          <Link to="/Career" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Career</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
