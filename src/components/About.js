import React from "react";
import { TypeAnimation } from "react-type-animation";

const styles = {
  div: {
    // background: "#edede9",
    height: "100%",

    padding: "10px",
    marginTop: "15px",
  },
  sidecont: {
    padding: "2px",
  },
  font1: {
    color: "white",
  },
  container: {
    width: "95vw",
    //border: "1px solid black",
  },
  brand: {
    padding: "20px",
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    letterSpacing: "2px",
  },
  quote: {
    padding: "20px",
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    letterSpacing: "2px",
  },
  author: {
    padding: "10px",
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    letterSpacing: "2px",
  },
  skillset: {
    padding: "10px",
    fontFamily: "caveat",
    color: "#eae2cc",
    //right, down, blur, color
    textShadow: "1px 1px 2px gray",
    letterSpacing: "2px",
  },
  icon: {
    height: "auto",
    width: "8vw",
    margin: "10px",
    padding: "6px",
    boxShadow: " 2px 2px 6px #d14e40",
    borderRadius: "10px",
    background: "#347783",
  },
};

function About() {
  return (
    <div style={styles.div}>
      <div className="container text-center" style={styles.container}>
        <div className="row">
          <div className="col-md-6">
            <TypeAnimation
              sequence={[
                "Hi, I'm Kamary Gillespie. I am a fullstack web developer on a mission to enhance and diversify my skillset. If I'm not coding, you can find me cuddling with my dog, going out on the boat, or watching movies with my family.",
                1000,
              ]}
              speed={40} // Must be in range between 1 and 99!
              wrapper="h2"
              style={styles.brand}
            />
            <h3 style={styles.quote}>
              "When obstacles arise, you change your direction to reach your
              goal, you do not change your decision to get there."
            </h3>

            <h4 style={styles.author}> - Zig Ziglar</h4>
          </div>
          <div className="col-md-6 ms-auto">
            <h2 style={styles.skillset}>My current skill set includes</h2>
            <div>
              <img
                style={styles.icon}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png"
                alt="javascript icon"
              />
              <img
                style={styles.icon}
                src="https://freeiconshop.com/wp-content/uploads/edd/css-outline.png"
                alt="css icon"
              />
              <img
                style={styles.icon}
                src="https://freeiconshop.com/wp-content/uploads/edd/html-outline.png"
                alt="html icon"
              />
              <img
                style={styles.icon}
                src="https://cdn-icons-png.flaticon.com/512/274/274439.png"
                alt="mysql icon"
              />
              <img
                style={styles.icon}
                src="https://icons.veryicon.com/png/o/miscellaneous/gwidc_1/mongodb.png"
                alt="mongodb icon"
              />
              <img
                style={styles.icon}
                src="https://img.icons8.com/ios-glyphs/480/react.png"
                alt="react icon"
              />
              <img
                style={styles.icon}
                src="https://www.shareicon.net/data/2016/07/13/606472_black_2048x2048.png"
                alt="bootstrap icon"
              />
              <img
                style={styles.icon}
                src="https://www.shareicon.net/download/2016/06/19/603784_nodejs_512x512.png"
                alt="node.js icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
