import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const styles = {
  main: {
    width: "100vw",
    height: "100vh",
  },
};

function App() {
  return (
    <div style={styles.main}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/react-portfolio" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

// /* <Route exact path="/" element={<About />} /> */
