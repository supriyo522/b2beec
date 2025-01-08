import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Benefits from "./components/ContactUs";
import ContactUs from "./components/SimpleForm.js";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Navbar />
    <div style={{ padding: "1rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
    <Footer /> 
  </Router>
);

export default App;
