import React from "react";

const styles = {
  footer: {
    position: "relative",
    // bottom: "0",
    // left: "0",
    // width: "100vw",
    // height: "5vh",
  },
  // div: {
  //   background: "#dfbdaf",
  // },
  icons: {
    height: "8vh",
    width: "auto",
    marginLeft: "3vw",
    marginRight: "3vw",
    background: "#347783",
    boxShadow: " 2px 2px 6px #d14e40",
    borderRadius: "10px",
    padding: "6px",
  },
  link: {
    paddingLeft: "2vw",
    paddingRight: "2vw",
  },
};

function Footer() {
  return (
    <footer className=" text-center text-lg-start" style={styles.footer}>
      <div className="text-center p-3" style={styles.div}>
        <a
          className="text-dark"
          href="https://github.com/kamarygillespie4"
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
          href="https://stackoverflow.com/users/20186894/kamary-gillespie"
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
