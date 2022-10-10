import React from "react";

const styles = {
  footer: {
    position: "relative",
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "5vh",
  },
  div: {
    background: "#38a3af",
  },
  icons: {
    height: "4vh",
    width: "auto",
    "margin-left": "2.5%",
    "margin-right": "2.5%",
  },
  link: {
    "padding-left": "2%",
    "padding-right": "2%",
  },
};

function Footer() {
  return (
    <footer
      className="bg-light text-center text-lg-start"
      style={styles.footer}
    >
      <div className="text-center p-3" style={styles.div}>
        <a
          className="text-dark"
          href="https://mdbootstrap.com/"
          target="_blank"
          style={styles.link}
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github icon"
            style={styles.icons}
          />
        </a>
        <a
          className="text-dark"
          href="https://www.linkedin.com/in/kamary-gillespie/"
          target="_blank"
          style={styles.link}
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="github icon"
            style={styles.icons}
          />
        </a>
        <a
          className="text-dark"
          href="https://mdbootstrap.com/"
          target="_blank"
          style={styles.link}
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111640.png"
            alt="github icon"
            style={styles.icons}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
