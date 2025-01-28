import React, { useState } from 'react';
import "./CareerPage.css";

// Sample job listings
const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Build and maintain web applications. Proficient in JavaScript, React, and Node.js required.',
  },
  {
    id: 2,
    title: 'Product Manager',
    description: 'Lead the development of new features, collaborate with engineering teams, and define product roadmaps.',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Design intuitive user interfaces for web and mobile applications. Experience with Figma and Adobe XD preferred.',
  },
];

const CareerPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', jobId: null });

  const handleApplyClick = (jobId) => {
    setFormVisible(true);
    setFormData({ ...formData, jobId });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! We will contact you soon.');
    setFormVisible(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="career-page">
      <h1>Join Our Team!</h1>
      <div className="job-listings">
        <h2>Current Openings</h2>
        {jobListings.map((job) => (
          <div key={job.id} className="job">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => handleApplyClick(job.id)}>Apply Now</button>
          </div>
        ))}
      </div>

      {isFormVisible && (
        <div className="application-form">
          <h2>Apply for {jobListings.find((job) => job.id === formData.jobId)?.title}</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
