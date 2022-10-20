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
    color: "#393c51",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    fontFamily: "Monoton, cursive",
    letterSpacing: "2px",
    textDecoration: "none",
  },
  link: {
    color: "#4a4e69",
    textDecoration: "none",
    margin: "10px",
  },
};

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" style={styles.div}>
        <Container>
          <Link Link to="/about" style={styles.brand}>
            KAMARY GILLESPIE
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" style={styles.link}>
                ABOUT ME
              </Link>
              <Link to="/portfolio" style={styles.link}>
                MY PORTFOLIO
              </Link>
              <Link to="/resume" style={styles.link}>
                MY RESUME
              </Link>
              <Link to="/contact" style={styles.link}>
                CONTACT ME
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
