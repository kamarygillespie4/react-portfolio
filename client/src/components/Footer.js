import React from "react";

const styles = {
  footer: {
    position: "static",
    bottom: "0",
    left: "0",
    width: "100ww",
    height: "5vh",
    background: "#D0DAEE",
  },
};

function Footer() {
  return (
    <footer
      className="bg-light text-center text-lg-start"
      style={styles.footer}
    >
      <div className="text-center p-3">
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
