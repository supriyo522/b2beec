import React from "react";
// import Contact from "./ContactUs";
// import Testimonials from "./Testimonials";
import Content from "./Content";
import ImageCarousel from "./ImageCarousel";
import eec1 from "./Image/eec1.jpg"
import eec2 from "./Image/eec2.jpg"
import eec9 from "./Image/eec9.jpeg"
import eec6 from "./Image/eec6.png"
import eec10 from "./Image/eec10.jpeg"
import Animation from "./WelcomeAnimation";

import "./Home.css";

const Home = () => {
  return (
    <div>
  
  {/* <div style={{ backgroundColor: '#f4f4f4', padding: '20px', marginBottom: '20px'}}>
        <h1>Welcome to EEC</h1>
        
      </div> */}
     <Animation/>
    
      {/* Offerings Sections */}
      <Content/>
  
     
      
      {/* <section className="sectionWithImage">
        
        <div className="contentContainer">
          {/* <h1>Welcome to EEC </h1> */}
          {/* <h2>Innovation Meets Efficiency:</h2>
          <p>
          Innovation and efficiency converge, driving progress and productivity. In school management, this
fusion enables educators to focus on teaching, while automating administrative tasks. Our School
solution embodies this blend, simplifying management, enhancing engagement, and fostering
improvement. Join us in revolutionizing education.Transforming Education through Innovation At EEC Educare, we're dedicated to revolutionizing the educational landscape with our cutting-edge ERP and LMS solutions. Founded in 2020, our mission is to enhance education by providing effective management systems that support personalized learning for every student. Guided by our core values of innovation, integrity, collaboration, and excellence, we're committed to delivering solutions that meet the evolving needs of schools educators and parents . Our team of experienced professionals in educational technology is dedicated to creating a seamless experience for both administrators and learners. Our platform is designed to empower educators, students, and institutions alike. With innovative features, intuitive interfaces, and seamless integrations, this revolutionary platform is poised to transform the way you learn, teach, and succeed. Experience the future of education today.
          </p>  */} 
          {/* <div className="buttonContainer">
          <button className="ctaButton">Explore More</button>
          
          <button className="ctaButton">Get Started</button>*/}
        {/* </div>  */}
         {/* </div> */}


        {/* <div className="imageContainer">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp"
            alt="School Management"
            className="image"
          />
        </div>
      </section>  */}

      <section className="sectionWithImage">
        {/* <div className="contentContainer">
          <h2>EEC Vision:</h2>
        
        </div> */}
        {/* <div className="contentContainer">
          
          <p>
          Transforming Education through Innovation At EEC Educare, we&#39;re dedicated to revolutionizing the educational landscape with our cutting-edge ERP and LMS solutions. Founded in 2020, our mission is to enhance education by providing effective management systems that support personalized learning for every student. Guided by our core values of innovation, integrity, collaboration, and excellence, we&#39;re committed to delivering solutions that meet the evolving needs of schools educators and parents . Our team of experienced professionals in educational technology is dedicated to creating a seamless experience for both administrators and learners. Our platform is designed to empower educators, students, and institutions alike. With innovative features, intuitive interfaces, and seamless integrations, this revolutionary platform is poised to transform the way you learn, teach, and succeed. Experience the future of education today.
          </p>
        </div> */}
       
      </section>

      <section className="hero">
      <img
            src={eec10}
            alt="School Management"
            className="image"/>
      </section>


      <section className="sectionWithImage" >
      <div className="contentContainer" >
          <h2>Explore Our Comprehensive Features</h2>
          
        </div>
        <div className="contentContainer">
         
          <p>
          EEC Educare offers a robust suite of tools designed to streamline school management and enhance student learning. From attendance tracking to interactive lessons, our platform provides everything educators need to create a seamless educational experience. Discover how our features can transform your school’s operations.
          </p>
          
        </div>
      </section>

       {/* Our Offerings Section */}
       <section className="section">
        <div className="cardContainer">
        <div className="card">
  <div className="imageWrapper">
    <img
      src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_j5tmzR8F.webp"
      alt="School Management"
      className="image"
    />
  </div>
  <div className="contentWrapper">
    <h3>The Smart track attendance</h3>
    <p>School Management and Parents to stay connected, & informed. Our attendance tracking system
keeps both management and parents in the loop,everyone is always up-to-date on
students attendance:</p>
    {/* <button className="ctaButton">Explore More</button> */}
    <ul className="featuresList">
          <li>Real-time attendance updates.</li>
          <li>Automated notifications to parents.</li>
          <li>Easy access to attendance records.</li>
          <li>Improved student accountability.</li>
        </ul>
  </div>
</div>
          <div className="card">
          <div className="imageWrapper">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_pSnVWQF5.webp"
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3>Elevate Learning with Enhanced Educating</h3>
            <p>Transform the way you teach and learn with our innovative solutions. Enhanced educating enables a dynamic, engaging, and impactful learning experience</p>
            {/* <button className="ctaButton">Explore More</button> */}
            <ul className="featuresList">
          <li>Personalized educating experiences tailored to individual needs.</li>
          <li>Time Table management.</li>
          <li>Real-time assessment and holistic report card generation.</li>
          <li>Collaboration tools to foster communication and teamwork.</li>
        </ul>
          </div>
          </div>
          <div className="card">
          <div className="imageWrapper">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_0uQoY4cE.webp"
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3>Unlock Insights with Comprehensive Reports</h3>
            <p>Make informed decisions with our detailed and customizable reports.Our reporting system provides actionable  identify trends, and achieve your goals.</p>
            {/* <button className="ctaButton">Explore More</button> */}
            <ul className="featuresList">
          <li>Financial and administrative insights.</li>
          <li>In-depth analysis of fees collection and dues.</li>
          <li>Student performance and progress.</li>
          <li>Teacher and staff performance evaluations.</li>
        </ul>
          </div>
          </div>
          <div className="card">
  <div className="imageWrapper">
    <img
      src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_j5tmzR8F.webp"
      alt="School Management"
      className="image"
    />
  </div>
  <div className="contentWrapper">
    <h3>Streamline Management with Ease</h3>
    <p>Our Master Access feature provides a high-quality education experience while streamlining operations,management tasks, and reducing administrative burdens. Designed to empower educators</p>
    {/* <button className="ctaButton">Explore More</button> */}
    <ul className="featuresList">
          <li>Centralized report over all functionalities.</li>
          <li>Ability to manage user roles</li>
          <li>Control over data management.</li>
          <li>Customizable dashboards for personalized insights</li>
        </ul>
  </div>
</div>
        </div>
      </section>
     
      <section className="sectionWithImage" >
      <div className="contentContainer">
          <h2>Unlock the Full Potential of Your Institution with Our ERP</h2>
          
        </div>
        <div className="contentContainerhome">
         
          <p>
        Our ERP system offers a range of benefits, including:
          </p>
          <ul className="featuresList">
          <li>Customizable solutions to meet your needs.</li>
          <li>User-friendly interface for seamless navigation and minimal training.</li>
          <li>Dedicated customer support team for prompt assistance in hybrid mode.</li>
          <li>Robust data security measures.</li>
          <li>Real-time insights and analytics for informed decision-making.</li>
        </ul>
          
        </div>
      </section>

        {/* Our Offerings Section */}
        <section className="section">
        <div className="cardContainer">
          <div className="card">
          <div className="imageWrapper">
          <img
            src={eec6}
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3>Hyper-Personalized Learning:</h3>
            <p>AI-driven lessons are revolutionizing education by creating learning experience tailored to individual needs.</p>
            {/* <button className="ctaButton">Explore More</button> */}
            </div>
            </div>
          
          <div className="card">
          <div className="imageWrapper">
          <img
            src={eec1}
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3> Instant Progress Tracking: </h3>
            <p> Real-time insights enable  to identify challenges and address them immediately, maximizing student progress.</p>
            {/* <button className="ctaButton">Explore More</button> */}
          </div>
          </div>
          <div className="card">
          <div className="imageWrapper">
          <img
            src={eec2}
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3>Empowered Educators:</h3>
            <p>Cutting-edge tools and actionable data empower teachers to transform classroom outcomes while enable to monitoring performance effectively.</p>
            {/* <button className="ctaButton">Explore More</button> */}
            
          </div>
          </div>
          <div className="card">
          <div className="imageWrapper">
          <img
            src={eec9}
            alt="School Management"
            className="image"
          />
          </div>
          <div className="contentWrapper">
            <h3>Next-Generation Collaboration:</h3>
            <p>Seamless AI integration unites schools,teachers,and a new era of collaboration and student achievement.</p>
            {/* <button className="ctaButton">Explore More</button> */}
            
          </div>
          </div>
        </div>
      </section>
     
      {/* <ImageCarousel /> */}
    {/*  <section className="sectionWithImage">
      <div className="contentContainer">
          <h2>Understanding How EEC Educare Transforms Education</h2>
          
        </div>
        <div className="contentContainer">
         
          <p>
          EEC Educare simplifies school management by integrating attendance, fees, and report tracking into one platform. It enhances student learning with interactive lessons and progress monitoring, while offering parental controls for a comprehensive educational experience.
         </p>
          
        </div>
      </section>*/}

      {/* <section className="sectionWithImage">
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
      </section> */}


      {/* <section className="sectionWithImage">
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
      </section> */}

      {/* <section className="sectionWithImage">
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
      </section> */}

      {/* <section className="sectionWithImage">
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
      </section> */}

      {/* <section className="sectionWithImage">
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
      </section> */}

      {/* Our Offerings Section */}
      {/* <section className="section">
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
      </section> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}


      {/* Contact Section */}
      {/* <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions? We’re here to help!</p>
        <button className="ctaButton">Get in Touch</button>
      </section> */}
      <ImageCarousel/>
     
    </div>
  );
};

export default Home;
