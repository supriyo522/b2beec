import React, { useState } from "react";
import { Link } from "react-router-dom";
import eeclogo from "./Image/eeclogo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [featureDrop,setFeatureDrop] = useState(false);

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
        <li
          className="dropdown"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
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
              <li className="full-width">
                <Link to="/about/mission" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Mission</button>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="dropdown"
          onMouseEnter={() => setFeatureDrop(true)}
          onMouseLeave={() => setFeatureDrop(false)}>
          <Link to="/features" onClick={() => setMenuOpen(false)}>
            <button className="learnMoreBtn">Features</button>
          </Link>
          {featureDrop && (
            <ul className="dropdownMenu">
              <li>
                <Link to="/features/Free collection Software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Free collection Software</button>
                </Link>
              </li>
              <li>
                <Link to="/features/Transport and gps Tracking" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Transport and gps Tracking</button>
                </Link>
              </li>

              <li>
                <Link to="/features/HR Management features" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">HR Management features</button>
                </Link>
              </li>
              <li>
                <Link to="/features/Website and Mobile app" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Website and Mobile app</button>
                </Link>
              </li>
              <li>
                <Link to="/features/Examination Software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Examination Software</button>
                </Link>
              </li>
              <li>
                <Link to="/features/Parent communiction" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Parent communiction</button>
                </Link>
              </li>
            
              
              <li className="full-width">
                <Link to="/about/Learning management software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">Learning management software</button>
                </Link>
              </li>
            </ul>
          )}
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
