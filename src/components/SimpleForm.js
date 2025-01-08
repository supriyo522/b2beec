import React, { useState } from 'react';
import './SimpleForm.css'; // Import the CSS file

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    // pocName: '',
    phoneNumber: '',
    email: '',
    institutionName: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="form-container">
      <h2>Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="pocName">POC Name</label>
          <input
            type="text"
            id="pocName"
            name="pocName"
            value={formData.pocName}
            onChange={handleChange}
            placeholder="Enter POC name"
          />
        </div> */}

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="institutionName">Institution Name:</label>
          <input
            type="text"
            id="institutionName"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            placeholder="Enter institution name"
          />
        </div>

       

        <div className="form-group">
          <label htmlFor="address">Institution Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
