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
    height: "120vh",
  },
  card: {
    margin: "2px",
    borderRadius: "15px",
    width: "35vw",
  },
  // cont: {
  //   width: "90vw",
  //   height: "auto",
  //   margin: "auto",
  //   textShadow: "1px 1px 2px #d14e40",
  //   border: "3px",
  //   padding: "10px",
  // },
  image: {
    height: "auto",
    width: "100%",
    borderRadius: "25px",
  },
  button: {
    background: "#d14e40",
    // opacity: "0.7",
    borderColor: "#d14e40",
    fontSize: "10",
    margin: "3px",
  },
  // button2: {
  //   background: "#d14e40",
  //   opacity: "0.7",
  //   borderColor: "#d14e40",
  // },
  // disabled: {
  //   background: "#d14e40",
  //   opacity: "0.5",
  //   borderColor: "#d14e40",
  // },
  text: {
    background: "#d14e40",
    opacity: "0.9",
    borderRadius: "05px",
  },
  title: {
    // background: "#d14e40",
    // opacity: ".9",
    // borderRadius: "05px",
  },
};

function Portfolio() {
  return (
    <div style={styles.div}>
      <div class="card-group">
        <div class="card" style={styles.card}>
          <img
            src={workday}
            class="card-img-top"
            alt="..."
            style={styles.image}
          />
          <div class="card-body">
            <h5 class="card-title" style={styles.title}>
              Work Day Scheduler
            </h5>
            <p class="card-text" style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">
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
            </small>
          </div>
        </div>
        <div class="card" style={styles.card}>
          <img
            src={workday}
            class="card-img-top"
            alt="..."
            style={styles.image}
          />
          <div class="card-body">
            <h5 class="card-title">Work Day Scheduler</h5>
            <p class="card-text">
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
