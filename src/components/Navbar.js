import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">EEC</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
           <button className="learnMoreBtn"> Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
          <button className="learnMoreBtn">About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/features" onClick={() => setMenuOpen(false)}>
          <button className="learnMoreBtn"> Features</button>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button className="learnMoreBtn">Benefits</button>
          </Link>
        </li>
      </ul>
      {/* <div className="navButtons">
        <button className="learnMoreBtn">Learn More</button>
        <button className="getStartedBtn">Get Started</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
