import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/react-portfolio" element={<About />} />
          <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/react-portfolio/resume" element={<Resume />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

// /* <Route exact path="/" element={<About />} /> */
