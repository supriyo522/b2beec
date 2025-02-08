import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
// import Features from "./components/Features";
import Book from "./components/Book.js";
import Module from "./components/Modules.js"
import Benefits from "./components/ContactUs";
import ContactUs from "./components/SimpleForm.js";
import Gallery from "./components/Gallery.js";
import Career from "./components/Careers.js";
// import Testimonial from "./components/Testimonials.js"
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
const App = () => (
  <Router>
    <TopBar/>
    <Navbar />
    <CustomCursor />
    {/* <div style={{ padding: "" }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/modules" element={<Module />} />
        <Route path="/features" element={<Book />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/Career" element={<Career />}/>
        {/* <Route path="/Testimonial" element={<Testimonial />}/> */}

      </Routes>
    {/* </div> */}
    <Footer /> 
  </Router>
  
);

export default App;
