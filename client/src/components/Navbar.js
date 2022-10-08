import React from "react";
import { Nav, Navbar } from "react-bootstrap";
//import { ReactComponent as Logo } from "./logo.svg";
const styles = {
  name: {
    color: "white",
  },
  ham: {
    background: "white",
    margin: "1%",
  },
  navbarstyle: {
    background: "#2f1f2b",
    position: "absolute",
    top: "0",
    width: "100%",
    height: "10%",
  },
  links: {
    paddingRight: "15%",
    "white-space": "nowrap",
    color: "white",
  },
};

export default function Navigation() {
  return (
    <div className="container-fluid">
      <Navbar collapseOnSelect expand="lg" style={styles.navbarstyle}>
        <Navbar.Brand href="#home" style={styles.name}>
          Kamary Gillespie
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={styles.ham}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto">
            <Nav.Link href="#About" style={styles.links}>
              ABOUT ME
            </Nav.Link>
            <Nav.Link href="#projects" style={styles.links}>
              MY PROJECTS
            </Nav.Link>
            <Nav.Link href="#resume" style={styles.links}>
              MY RESUME
            </Nav.Link>
            <Nav.Link href="#memes" style={styles.links}>
              CONTACT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
