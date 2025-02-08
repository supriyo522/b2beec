import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoneyBillWave, FaBus, FaUsersCog, FaMobile, FaFileAlt, FaComments, FaGraduationCap } from "react-icons/fa";
import eeclogo from "./Image/eeclogo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [featureDrop, setFeatureDrop] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <button className="learnMoreBtn">Home</button>
          </Link>
        </li>

        {/* About Us Dropdown */}
        <li className="dropdown" onMouseEnter={() => setAboutDropdown(true)} onMouseLeave={() => setAboutDropdown(false)}>
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
              <li className="full-width">
                <Link to="/about/mission" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Mission</button>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Modules Dropdown with Icons */}
        <li className="dropdown" onMouseEnter={() => setFeatureDrop(true)} onMouseLeave={() => setFeatureDrop(false)}>
          <Link to="/modules" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Modules</button>
          </Link>
          {featureDrop && (
            <ul className="dropdownMenu">
              <li>
                <Link to="/modules/fee-collection-software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaMoneyBillWave className="nav-icon" /> Fee Collection Software
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/transport-gps-tracking" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaBus className="nav-icon" /> Transport & GPS Tracking
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/hr-management-features" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaUsersCog className="nav-icon" /> HR Management Features
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/website-mobile-app" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaMobile className="nav-icon" /> Website & Mobile App
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/examination-software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaFileAlt className="nav-icon" /> Examination Software
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/parent-communication" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaComments className="nav-icon" /> Parent Communication
                  </button>
                </Link>
              </li>
              <li className="full-width">
                <Link to="/modules/learning-management-software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                    <FaGraduationCap className="nav-icon" /> Learning Management Software
                  </button>
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
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Gallery</button>
          </Link>
        </li>
        <li>
          <Link to="/career" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Career</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
