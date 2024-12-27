import React from "react";
import Contact from "./ContactUs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to E-educacare</h1>
        <p>Your trusted platform for school management and learning solutions.</p>
        <button className="ctaButton">Learn More</button>
      </section>

      {/* Offerings Sections */}
      <section className="sectionWithImage">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="School Management"
            className="image"
          />
        </div>
      </section>


      <section className="sectionWithImage">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="School Management"
            className="image"
          />
        </div>
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="contentContainer">
          <h2>Streamline Your School Operations</h2>
          <p>
            Discover powerful tools and solutions to simplify school management,
            enhance learning experiences, and empower administrators.
          </p>
          <button className="ctaButton">Explore More</button>
        </div>
        <div className="imageContainer">
          <img
            src="https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="School Management"
            className="image"
          />
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="section">
        <h2>Our Offerings</h2>
        <div className="cardContainer">
          <div className="card">
            <h3>School Management</h3>
            <p>Streamline school operations effectively.</p>
          </div>
          <div className="card">
            <h3>Learning Solutions</h3>
            <p>Interactive and engaging courses for students.</p>
          </div>
          <div className="card">
            <h3>Administration Tools</h3>
            <p>Powerful tools to assist school admins.</p>
          </div>
          <div className="card">
            <h3>Administration Tools</h3>
            <p>Powerful tools to assist school admins.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>"SchoolCanvas has revolutionized our learning experience!" - John Doe</p>
        <p>"The best platform for managing school operations!" - Jane Smith</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions? We’re here to help!</p>
        <button className="ctaButton">Get in Touch</button>
      </section>
     
    </div>
  );
};

export default Home;
