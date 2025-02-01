import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      {/* Left side with scrolling */}
      <div className="left-scroll">
        <div className="scroll-content">
          <FontAwesomeIcon icon={faMobileAlt} />
          <span> +91 9830590929</span>
          <span className="divider">|</span>
          <FontAwesomeIcon icon={faEnvelope} />
          <span> eec@electroniceducare.com</span>
        </div>
      </div>

      {/* Right side fixed */}
      <div className="right">
      <a 
          href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>

        <a 
          href="https://www.instagram.com/its_eec_?igsh=djllcXR4dW16NWty" 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        {/* <span className="divider">|</span>
        <FontAwesomeIcon icon={faUser} />
        <span className="free-demo"> Free Demo</span> */}
      </div>
    </div>
  );
};

export default TopBar;
