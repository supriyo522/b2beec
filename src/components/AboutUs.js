import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-paragraph">
        Welcome to <strong>Electronic Educare (EEC)</strong>, where innovation meets education. EEC is a comprehensive
        platform that combines a state-of-the-art Learning Management System (LMS) with robust Enterprise Resource Planning (ERP) solutions tailored for schools.
        Our mission is to redefine education by blending technology with teaching, creating an environment where students are inspired to learn and grow.
      </p>

      <section className="about-section">
        <h2 className="about-subtitle">Learning Management System (LMS)</h2>
        <p className="about-paragraph">
          EEC’s LMS brings a new era of technology-driven education, making learning engaging, personalized, and interactive.
          With features like gamified content, adaptive learning paths, and AI-powered insights, we ensure that students are not just learning but are excited to
          explore and understand concepts at their own pace. Teachers are equipped with dynamic tools to create compelling lessons, track progress, and meet the
          unique needs of every learner effectively.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Enterprise Resource Planning (ERP)</h2>
        <p className="about-paragraph">
          EEC also provides a powerful ERP solution that streamlines school administration. From attendance tracking to fee management and performance reporting,
          our ERP simplifies every operational aspect for administrators. Real-time insights, automated workflows, and efficient communication channels ensure
          smooth coordination across all stakeholders.
        </p>
      </section>

      <section className="about-section">
        <p className="about-paragraph">
          By combining LMS and ERP on a single platform, EEC offers schools an all-in-one solution for modern education management. Whether it’s enhancing the
          learning experience or optimizing administrative processes, we are committed to empowering educators, students, and school leaders to achieve
          excellence.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          Join us in shaping the future of education with <strong>EEC</strong>—where technology drives learning and management into a smarter, more connected
          tomorrow.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
