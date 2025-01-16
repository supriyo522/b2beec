import React from "react";
import "./Automate.css";

const Automate = () => {
  return (
    <div className="automate-section">
      <div className="content-container">
        <h1>
          EEC, <span>Anything & Everything</span>
        </h1>
        <div className="rotating-text">
          <span>50+ Intuitive Modules</span>
          <span>Streamlined Automation</span>
          <span>Seamless Integration</span>
          <span>Effortless Management</span>
        </div>
        <p>
        Innovation and efficiency converge, driving progress and productivity. In school management, this fusion enables educators to focus on teaching, while automating administrative tasks. Our School solution embodies this blend, simplifying management, enhancing engagement, and fostering improvement. Innovation At EEC Educare, we're dedicated to revolutionizing the educational landscape with our cutting-edge ERP along with LMS solutions.
        </p>
        {/* <button className="cta-button">Start free Trial</button> */}
      </div>
      {/* <div className="graphic-container">
        <img
          src="your-image-path-left.png"
          alt="Graphic Left"
          className="left-graphic"
        />
        <img
          src="your-image-path-right.png"
          alt="Graphic Right"
          className="right-graphic"
        />
      </div> */}
    </div>
  );
};

export default Automate;
