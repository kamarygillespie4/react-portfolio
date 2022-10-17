import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  div: {
    background: "#dfbdaf",
  },
  brand: {
    fontSize: "xx-large",
    fontWeight: "bold",
    color: "#192759",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    fontFamily: "Monoton, cursive",
    letterSpacing: "2px",
  },
  link: {
    color: "#22577a",
    textDecoration: "none",
  },
};

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" style={styles.div}>
        <Container>
          <Navbar.Brand href="/" style={styles.brand}>
            KAMARY GILLESPIE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={styles.link}>
                <Link to="/about" style={styles.link}>
                  ABOUT ME
                </Link>
              </Nav.Link>
              {/* // // // */}
              <Link to="/portfolio" style={styles.link}>
                MY PORTFOLIO
              </Link>
              {/* // // // */}
              <Nav.Link style={styles.link}>
                <Link to="/resume" style={styles.link}>
                  RESUME
                </Link>
              </Nav.Link>
              <Nav.Link href="/react-portfolio/contact" style={styles.link}>
                <Link to="/contact" style={styles.link}>
                  CONTACT ME
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
