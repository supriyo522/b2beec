import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Benefits from "./components/ContactUs";
import ContactUs from "./components/SimpleForm.js";
import Gallery from "./components/Gallery.js"
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
const App = () => (
  <Router>
    <Navbar />
    <CustomCursor />
    {/* <div style={{ padding: "" }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Gallery" element={<Gallery />}/>
      </Routes>
    {/* </div> */}
    <Footer /> 
  </Router>
  
);

export default App;
