import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  div: {
    width: "100vw",
  },
  brand: {
    fontSize: "3vh",
    fontWeight: "bold",
    color: "#d14e40",
    margin: "10px",
    //right, down, blur, color
    textShadow: "1px 1px 2px white",
    fontFamily: "Kalam",
    letterSpacing: "2px",
    textDecoration: "none",
    borderBottom: "5px double #347783",
  },
  link: {
    boxShadow: "0px 0px 4px #d14e40",

    color: "#d14e40",
    textDecoration: "none",
    marginLeft: "20px",
    marginRight: "20px",
    padding: "6px",
    border: "5px double #347783",
    borderRadius: "10px",
    fontFamily: "Josefin Sans",
    fontWeight: "x-bold",
  },
  toggle: {
    background: "#347783",
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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={styles.toggle}
          />
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
