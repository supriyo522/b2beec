import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLeft">
          <h3>Get In Touch With Us</h3>
          <p>
            <i className="fas fa-phone"></i> +91 9830590929
          </p>
          <hr/>
          <p>
            <i className="fas fa-envelope"></i> {" "}
            <a href="mailto: eec@electroniceducare.com">
            eec@electroniceducare.com  
            </a>
          </p>
          <hr/>
          <ul className="footerLinks">
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>

            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
          
          <hr/>
          <h3>Follow Us</h3>
          <div className="socialLinks">
            {/* <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a> */}
            <a
              href="https://www.instagram.com/its_eec_?igsh=djllcXR4dW16NWty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/electroniceducare-eec-413ba6328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footerRight">
          <iframe
            className="mapIframe"
            title="EEC Learning App Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5107236991316!2d88.350999!3d22.559994000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027708e4bbaea9%3A0xcac9c767f56f9985!2s19B%2C%20Jawaharlal%20Nehru%20Rd%2C%20New%20Market%20Area%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1735879197476!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footerBottom">
        <p>© 2025 EEC Learning App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
