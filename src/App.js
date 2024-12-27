import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";

const App = () => (
  <Router>
    <Navbar />
    <div style={{ padding: "1rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  </Router>
);

export default App;
