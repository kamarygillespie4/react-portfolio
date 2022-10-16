import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <About />
      <Footer />
    </div>
  );
}

export default App;
