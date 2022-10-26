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
    minHeight: "82vh",
  },
  image: {
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
    fontSize: "20px",
    margin: "3px",
    width: "100%",
  },
  disabled: {
    background: "#d15055",
    color: "lightgray",
    boxShadow: "0px 0px 4px white",
    fontFamily: "caveat",
    borderColor: "#d14e40",
    fontSize: "20px",
    margin: "3px",
    width: "100%",
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
    minHeight: "19vh",
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
              src={techblog}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Tech Blog
            </h5>
            <p className="card-text" style={styles.text}>
              This is a tech blog. When the user opens the website. The can view
              their homepage in order to see other users post and comments. If
              the user logs in, they can then view all their posts on their
              dashboard. From here, they can also update, edit, create, and
              delete posts.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/mvc-tech-blog"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://afternoon-ravine-59350.herokuapp.com/"
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
              src={quiz}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Capitals Quiz
            </h5>
            <p className="card-text" style={styles.text}>
              This is a timed quiz to test users on how well they know the U.S
              cpitals. The user is given 10 questions and has a short amount of
              time to answer them all. When the quiz ends, the user's score is
              displayed.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/web-APIs-quiz"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/api-web-quiz/"
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
              src={teamprof}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Team Profile Generator
            </h5>
            <p className="card-text" style={styles.text}>
              This application can be used to generate a team profile html page.
              This is a command-line application that accepts user input. Once
              the user fills in all of their teams information. The application
              creates a team profile page.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/OOP-team-profile-generator"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.disabled}
              disabled
            >
              This application does not have a deployed website
            </Button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={styles.card}>
          <div style={styles.imagePad}>
            <img
              src={express}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Express Note Taker
            </h5>
            <p className="card-text" style={styles.text}>
              This application allows users to create and save notes. Each note
              has a title and body to be filled in by the user. In order to
              access a previously made note, simply click on its title in the
              column on the left.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/express-note-taker"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://polar-thicket-03124.herokuapp.com/"
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
              src={movies}
              className="card-img-top"
              alt="..."
              style={styles.image}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>
              Movie Picker
            </h5>
            <p className="card-text" style={styles.text}>
              The purpose of this site is to show the user 6 random movies,
              based on the genre they've selected. This application utilizes a
              movie database API in order to return 6 movies based on the
              category selected by the user.
            </p>
          </div>
          <div className="card-footer" style={styles.cFooter}>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/team-project-1"
              target="_blank"
              style={styles.button}
            >
              Github Repository
            </Button>
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/team-project-1/"
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
