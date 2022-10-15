import React from "react";

const styles = {
  div: {
    background: "#40bbbe",
    height: "100vh",

    padding: "10px",
  },
  sidecont: {
    padding: "2%",
  },
  font1: {
    color: "white",
  },
  container: {
    width: "95%",
    //border: "1px solid black",
  },
  brand: {
    padding: "20px",
    fontFamily: "Comfortaa",
    color: "#22367a",
    //right, down, blur, color
    textShadow: "3px 3px 4px #c7f9cc",
    letterSpacing: "2px",
  },
  quote: {
    padding: "20px",
    fontFamily: "Comfortaa",
    color: "#22367a",
    //right, down, blur, color
    textShadow: "2px 2px 5px #c7f9cc",
    letterSpacing: "2px",
  },
  author: {
    padding: "10px",
    fontFamily: "Comfortaa",
    color: "#22367a",
    //right, down, blur, color
    textShadow: "2px 2px 5px #c7f9cc",
    letterSpacing: "2px",
  },
  skillset: {
    padding: "10px",
    fontFamily: "caveat",
    color: "#22367a",
    //right, down, blur, color
    textShadow: "2px 2px 5px #c7f9cc",
    letterSpacing: "2px",
  },
};

function About() {
  return (
    <div style={styles.div}>
      <div className="container text-center" style={styles.container}>
        <div className="row">
          <div className="col-md-6">
            <h2 style={styles.brand}>
              Hi, I'm Kamary Gillespie. I am a fullstack web developer on a
              mission to enhance and diversify my skillset. If I'm not coding,
              you can find me cuddling with my dog, going out on the boat, or
              watching movies with my family.
            </h2>
            <h3 style={styles.quote}>
              "When obstacles arise, you change your direction to reach your
              goal, you do not change your decision to get there."
            </h3>
            <h4 style={styles.author}> - Zig Ziglar</h4>
          </div>
          <div className="col-md-6 ms-auto">
            <h2 style={styles.skillset}>My current skillset includes</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
