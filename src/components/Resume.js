import React from "react";
import page1 from "../images/respg1.jpg";
import page2 from "../images/respg2.jpg";

const styles = {
  resume: {
    margin: "3%",
    // padding: "10px",
    background: "#377884",
    boxShadow: "0px 0px 12px #d14e40",
    //width: "auto",
    // maxWidth: "99vw",
    // minWidth: "48vw",
    // height: "100vh",
    borderRadius: "20px",
    border: "3px double #4899a8",
  },
  div: {
    width: "100vw",
  },
  para: {
    color: "#347783",
    textShadow: "0px 0px 10px lightGray",
  },
  link: {
    color: "#d14e40",
    textDecoration: "none",
  },
};

function Resume() {
  return (
    <div className="d-flex justify-content-center row  row-cols-md-3 g-1">
      <img src={page1} alt="Page 1 of resume" style={styles.resume} />

      <img src={page2} alt="Page 2 of resume" style={styles.resume} />
      <div>
        <p className="text-center" style={styles.para}>
          If you would like to view my resume in google docs,{" "}
          <a
            href="https://docs.google.com/document/d/1VpyFaRL36fi-2LhMupuO6XL9gXrgjsY52se0e1PuQ94/edit?usp=sharing"
            style={styles.link}
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Resume;
