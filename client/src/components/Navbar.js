import React from "react";

//this stylesheet will overwrite bootstrap
const styles = {
  //can I select the link tag to style or do things have to be styled with style={styles.card}
  navbar: {
    color: "green",
  },
};

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              ABOUT ME<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MY PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MY RESUME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
