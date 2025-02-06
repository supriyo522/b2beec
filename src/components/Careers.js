import React from "react";
import "./CareerPage.css";

const JobCard = ({ title, description, requirements }) => {
  return (
    <div className="job-card">
      <h5>{title}</h5>
      <p>{description}</p>
      <ul>
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

const CareerPage = () => {
  const jobListings = [
    {
      title: "Frontend Developer",
      description:
        "Help us build beautiful and user-friendly interfaces for our EEC platform.",
      requirements: [
        "Experience with HTML, CSS, JavaScript",
        "Knowledge of React or Vue.js",
        "2+ years of experience",
      ],
    },
    {
      title: "Backend Developer",
      description:
        "Join our backend team to develop scalable and high-performing applications for our learning platform.",
      requirements: [
        "Experience with Node.js, Python, or PHP",
        "Familiarity with databases like MySQL or MongoDB",
        "3+ years of experience",
      ],
    },
    {
      title: "UX/UI Designer",
      description:
        "Design intuitive and user-centric experiences for the EEC platform.",
      requirements: [
        "Experience with Figma, Sketch, or Adobe XD",
        "Knowledge of user research methods",
        "2+ years of experience",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Join the EEC Team</h1>
          <p>Empower the future of learning with our innovative platform.</p>
          <a href="#job-openings" className="explore-btn">
            Explore Opportunities
          </a>
        </div>
      </section>

      {/* About Section */}
      <div className="info-career">
        <p>
          Welcome to EEC, where innovation meets education! At EEC, we are
          dedicated to shaping the future of learning by creating an engaging,
          student-centric platform.
        </p>
      </div>

      {/* Job Openings */}
      <section id="job-openings" className="job-section">
        <h2>Current Job Openings</h2>
        <div className="job-list">
          {jobListings.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join">
        <h2>Why Join EEC?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h5>Innovative Culture</h5>
            <p>
              We foster a creative and collaborative environment that empowers
              you to bring new ideas to life.
            </p>
          </div>
          <div className="why-card">
            <h5>Great Team</h5>
            <p>
              Work with a passionate team of professionals dedicated to
              revolutionizing the education industry.
            </p>
          </div>
          <div className="why-card">
            <h5>Growth Opportunities</h5>
            <p>
              Advance your career with ample opportunities for professional
              development and learning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
