import React from "react";
import resume from "../images/resume2.jpg";

const styles = {
  resume: {
    //margin: "3%",
    //padding: "10px",
    background: "#377884",
    boxShadow: "0px 0px 12px #d14e40",
    width: "auto",
    maxWidth: "99vw",
    minWidth: "48vw",
    height: "100vh",
    borderRadius: "20px",
    border: "3px double #4899a8",
  },
  div: {
    width: "100vw",
  },
};

function Resume() {
  return (
    <div className="d-flex justify-content-center ">
      <img src={resume} alt="..." style={styles.resume} />
    </div>
  );
}

export default Resume;
