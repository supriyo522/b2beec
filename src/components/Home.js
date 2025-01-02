import React from "react";
// import Contact from "./ContactUs";
// import Testimonials from "./Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
    
      {/* Offerings Sections */}
      <section className="sectionWithImage">
        
        <div className="contentContainer">
          <h1>Welcome to EEC – where innovation meets efficiency.</h1>
          <p>
          At EEC, we empower schools with cutting-edge software based solutions tailored to
streamline all operational functions starting from student management information and
extending to and beyond finance, HR, report generation etc. We at EEC are committed
towards automating your schools operational needs.
          </p>
          {/* <div className="buttonContainer">
          <button className="ctaButton">Explore More</button>
          
          <button className="ctaButton">Get Started</button>
        </div> */}
        </div>


        <div className="imageContainer">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_PWxhQxNJ.webp"
            alt="School Management"
            className="image"
          />
        </div>
      </section>

      <section className="sectionWithImage">
        <div className="contentContainer">
          <h2>Discover EEC Educare's Vision</h2>
        
        </div>
        <div className="contentContainer">
          
          <p>
          At EEC Educare, we are dedicated to transforming the educational landscape through our innovative ERP and LMS solutions. Founded in 2020, our mission is to enhance education by providing effective management systems that support personalized learning for every student. We value innovation, integrity, collaboration, and excellence, ensuring that our platform meets the evolving needs of schools and educators. Our team, led by experienced professionals in educational technology, is committed to creating a seamless experience for both administrators and learners. Join us in our journey to revolutionize education and empower students to achieve their full potential.
          </p>
        </div>
       
      </section>

      <section className="hero">
      <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_yx1SWQrQ.webp"
            alt="School Management"
            className="image"/>
      </section>


      <section className="sectionWithImage">
      <div className="contentContainer">
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
    <h3>Efficient Attendance Tracking</h3>
    <p>Our platform simplifies attendance management with real-time tracking and easy-to-use calendar views, ensuring accurate records and efficient administration.</p>
    {/* <button className="ctaButton">Explore More</button> */}
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
            <h3>Interactive Lessons and Tools</h3>
            <p>Engage students with our interactive lesson tools that promote active learning and participation, making education more dynamic and effective  and advance.</p>
            {/* <button className="ctaButton">Explore More</button> */}
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
            <h3>Comprehensive Progress Monitoring</h3>
            <p>Track student progress with detailed analytics and personalized learning paths, helping educators tailor instruction to meet individual needs.</p>
            {/* <button className="ctaButton">Explore More</button> */}
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
    <h3>Efficient Attendance Tracking</h3>
    <p>Our platform simplifies attendance management with real-time tracking and easy-to-use calendar views, ensuring accurate records and efficient administration.</p>
    {/* <button className="ctaButton">Explore More</button> */}
  </div>
</div>
        </div>
      </section>
     
      <section className="sectionWithImage">
      <div className="contentContainer">
          <h2>Discover the Advantages of EEC Educare</h2>
          
        </div>
        <div className="contentContainer">
         
          <p>
          EEC Educare offers a comprehensive solution for schools, students, and parents. By integrating multiple functionalities into one platform, it streamlines administration and enhances learning. With personalized lessons, progress tracking, and parental controls, EEC Educare ensures a seamless educational experience for all stakeholders.
          </p>
          
        </div>
      </section>

        {/* Our Offerings Section */}
        <section className="section">
        <div className="cardContainer">
          <div className="card">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_pelqsfDR.webp"
            alt="School Management"
            className="image"
          />
        
            <h3>Streamlined School Administration</h3>
            <p>EEC Educare integrates attendance, fees, and report tracking into one platform, simplifying administrative tasks and saving time for educators..</p>
            {/* <button className="ctaButton">Explore More</button> */}
            </div>
          
          <div className="card">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_TFVfkNGM.webp"
            alt="School Management"
            className="image"
          />
            <h3>Enhanced Student Learning Tools</h3>
            <p>Through interactive lessons and progress monitoring, EEC Educare personalizes the learning experience, helping students achieve.</p>
            {/* <button className="ctaButton">Explore More</button> */}
          </div>
          <div className="card">
          <img
            src="https://10web-site.ai/230/wp-content/uploads/sites/242/2024/12/tenweb_media_N85x6lWJ.webp"
            alt="School Management"
            className="image"
          />
            <h3>Effective Parental Engagement</h3>
            <p>With built-in parental controls and communication tools, EEC Educare fosters collaboration between parents and educators,student success.</p>
            {/* <button className="ctaButton">Explore More</button> */}
          </div>
        </div>
      </section>
     

      <section className="sectionWithImage">
      <div className="contentContainer">
          <h2>Understanding How EEC Educare Transforms Education</h2>
          
        </div>
        <div className="contentContainer">
         
          <p>
          EEC Educare simplifies school management by integrating attendance, fees, and report tracking into one platform. It enhances student learning with interactive lessons and progress monitoring, while offering parental controls for a comprehensive educational experience.
         </p>
          
        </div>
      </section>

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
     
    </div>
  );
};

export default Home;
