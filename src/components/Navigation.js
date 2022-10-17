import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
              <Nav.Link href="/about" style={styles.link}>
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
    </div>
  );
}

export default Navigation;
