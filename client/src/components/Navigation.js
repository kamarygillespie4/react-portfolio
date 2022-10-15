import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  div: {
    background: "#38a3af",
  },
  brand: {
    fontSize: "xx-large",
    fontWeight: "bold",
    color: "#192759",
    //right, down, blur, color
    textShadow: "2px 2px 5px #c7f9cc",
    fontFamily: "Monoton, cursive",
    letterSpacing: "2px",
  },
  link: {
    color: "#22577a",
  },
};

function Navigation() {
  return (
    <Navbar expand="lg" style={styles.div}>
      <Container>
        <Navbar.Brand href="/" style={styles.brand}>
          KAMARY GILLESPIE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={styles.link}>
              ABOUT ME
            </Nav.Link>
            <Nav.Link href="/portfolio" style={styles.link}>
              MY PORTFOLIO
            </Nav.Link>
            <Nav.Link href="/resume" style={styles.link}>
              MY RESUME
            </Nav.Link>
            <Nav.Link href="/contact" style={styles.link}>
              CONTACT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
