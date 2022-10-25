import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import movies from "../images/movies.jpg";
import teamprof from "../images/teamprof.jpg";
import techblog from "../images/techblog.jpg";
import workday from "../images/workday.jpg";
import express from "../images/express.jpg";
import quiz from "../images/quiz.jpg";

const styles = {
  div: {
    // background: "#edede9",
    height: "110vh",
  },
  cont: {
    width: "90vw",
    height: "auto",
    margin: "auto",
    textShadow: "1px 1px 2px #d14e40",
    border: "3px",
    padding: "10px",
  },
  item: {
    height: "auto",
    width: "100vw",
    borderRadius: "25px",
  },
  button1: {
    background: "#d14e40",
    opacity: "0.7",
    borderColor: "#d14e40",
    fontSize: "10",
  },
  button2: {
    background: "#d14e40",
    opacity: "0.7",
    borderColor: "#d14e40",
  },
  disabled: {
    background: "#d14e40",
    opacity: "0.5",
    borderColor: "#d14e40",
  },
  text: {
    background: "#d14e40",
    opacity: "0.9",
    borderRadius: "05px",
  },
  title: {
    background: "#d14e40",
    opacity: ".9",
    borderRadius: "05px",
  },
};

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={styles.div}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={styles.cont}
        className="justify-content-center align-middle"
      >
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={workday}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Work Day Scheduler</h3>
            <p style={styles.text}>
              The purpose of this application is to help the user schedule their
              work day. The page displays the current date and time. The page
              has several blocks of time in which the user can input their
              events for the day. The event blocks are color coordinated based
              on whether or not that time of day has passed.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/work-day-scheduler"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                href="https://kamarygillespie4.github.io/work-day-scheduler/"
                target="_blank"
                style={styles.button1}
              >
                Deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={techblog}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Tech Blog</h3>
            <p style={styles.text}>
              This is a tech blog. When the user opens the website. The can view
              their homepage in order to see other users post and comments. If
              the user logs in, they can then view all their posts on their
              dashboard. From here, they can also update, edit, create, and
              delete posts.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/mvc-tech-blog"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                href="https://afternoon-ravine-59350.herokuapp.com/"
                target="_blank"
                style={styles.button1}
              >
                Deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={quiz}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Capitals Quiz</h3>
            <p style={styles.text}>
              This is a timed quiz to test users on how well they know the U.S
              cpitals. The user is given 10 questions and has a short amount of
              time to answer them all. When the quiz ends, the user's score is
              displayed.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/web-APIs-quiz"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                href="https://kamarygillespie4.github.io/web-APIs-quiz/"
                target="_blank"
                style={styles.button1}
              >
                Deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={teamprof}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Team Profile Generator</h3>
            <p style={styles.text}>
              This application can be used to generate a team profile html page.
              This is a command-line application that accepts user input. Once
              the user fills in all of their teams information. The application
              creates a team profile page.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/OOP-team-profile-generator"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                target="_blank"
                href="https://github.com/kamarygillespie4/OOP-team-profile-generator"
                style={styles.disabled}
                disabled
              >
                This application does not have a deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={express}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Express Note Taker</h3>
            <p style={styles.text}>
              This application allows users to create and save notes. Each note
              has a title and body to be filled in by the user. In order to
              access a previously made note, simply click on its title in the
              column on the left.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/express-note-taker"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                href="https://polar-thicket-03124.herokuapp.com/"
                target="_blank"
                style={styles.button1}
              >
                Deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styles.item}
            className="d-block w-100"
            src={movies}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={styles.title}>Movie Picker</h3>
            <p style={styles.text}>
              The purpose of this site is to show the user 6 random movies,
              based on the genre they've selected. This application utilizes a
              movie database API in order to return 6 movies based on the
              category selected by the user.
            </p>
            <div className="d-grid gap-2">
              <Button
                size="lg"
                href="https://github.com/kamarygillespie4/team-project-1"
                target="_blank"
                style={styles.button2}
              >
                Github Repository
              </Button>
              <Button
                size="lg"
                href="https://kamarygillespie4.github.io/team-project-1/"
                target="_blank"
                style={styles.button1}
              >
                Deployed Website
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portfolio;