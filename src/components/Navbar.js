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
      <button className="hamburger" onClick={toggleMenu} >
        ☰
      </button>
      {/* <ul className={`navLinks ${menuOpen ? "open" : ""}`}> */}
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
          {/* {aboutDropdown && (
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
          )} */}
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
                  <img src="https://www.academyfront.com/images/blog/AF_Feb_3125X1586_1.png" alt="EEC Logo" className="logo1" />   Fee Collection Software
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/transport-gps-tracking" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://img.freepik.com/free-vector/customer-using-online-app-taxi-order-car-rent_74855-5230.jpg?t=st=1739765351~exp=1739768951~hmac=0194e7708720b5a166cf3960921caef8d0262f87738a2000e49d52c07d696945&w=1380" alt="EEC Logo" className="logo1" /> Transport & GPS Tracking
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/hr-management-features" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://thumbs.dreamstime.com/z/human-resource-management-icon-set-black-white-glyph-flat-icons-relating-to-business-68376029.jpg?ct=jpeg" alt="EEC Logo" className="logo1" /> HR Management Features
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/website-mobile-app" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165980.jpg?ga=GA1.1.1782275132.1738929422&semt=ais_hybrid" alt="EEC Logo" className="logo1" />  Website & Mobile App
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/examination-software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://img.freepik.com/free-vector/software-tester-concept-illustration_114360-11976.jpg" alt="EEC Logo" className="logo1" /> Examination Software
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/modules/parent-communication" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://img.freepik.com/free-vector/teamwork-working-using-laptop-flat-design_1308-92754.jpg?ga=GA1.1.1782275132.1738929422&semt=ais_hybrid" alt="EEC Logo" className="logo1" />  Parent Communication
                  </button>
                </Link>
              </li>
              <li className="full-width">
                <Link to="/modules/learning-management-software" onClick={() => setMenuOpen(false)}>
                  <button className="learnMoreBtn">
                  <img src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?ga=GA1.1.1782275132.1738929422&semt=ais_hybrid" alt="EEC Logo" className="logo1" /> Learning Management Software
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
