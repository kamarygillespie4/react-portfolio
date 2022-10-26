import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import movies from "../images/movies.jpg";
import teamprof from "../images/teamprof.jpg";
import techblog from "../images/techblog.jpg";
import workday from "../images/workday.jpg";
import express from "../images/express.jpg";
import quiz from "../images/quiz.jpg";

const styles = {
  div: {
    // background: "#edede9",
    // height: "120vh",
  },
  card: {
    margin: "2px",
    borderRadius: "35px",
    background: "#377884",
    boxShadow: "0px 0px 4px white",
  },
  image: {
    height: "auto",
    width: "100%",
    borderRadius: "25px",
    border: "5px double #4899a8",
    boxShadow: "0px 0px 4px black",
  },
  button: {
    background: "#d15043",
    color: "#eae2cc",
    boxShadow: "0px 0px 4px white",
    fontFamily: "caveat",
    borderColor: "#d14e40",
    fontSize: "10",
    margin: "3px",
  },
  text: {
    fontFamily: "Josefin Sans",
    color: "#eae2cc",
  },
  title: {
    fontFamily: "caveat",
    color: "#eae2cc",
  },
  cFooter: {
    background: "#a54238",
    borderRadius: "0px 0px 35px 35px",
  },
  imagePad: {
    padding: "8px",
  },
};

function Portfolio() {
  return (
    <div
      className="card-group row row-cols-1 row-cols-md-3 g-4"
      style={styles.div}
    >
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={workday}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button}
            >
              Deployed Website
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
