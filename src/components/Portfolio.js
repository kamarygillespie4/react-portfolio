import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const styles = {
  div: {
    background: "#edede9",
    height: "100%",
  },
  cont: {
    width: "90%",
    margin: "auto",
    textShadow: "1px 1px 2px gray",
    border: "3px",
    padding: "10px",
  },
  item: {
    height: "100vh",
    width: "100vw",
    borderRadius: "25px",
  },
  button1: {
    background: "#57cc99",
    "border-color": "#57cc99",
  },
  button2: {
    background: "#80ed99",
    "border-color": "#80ed99",
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Work Day Scheduler</h3>
            <p>
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tech Blog</h3>
            <p>
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Capitals Quiz</h3>
            <p>
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Team Profile Generator</h3>
            <p>
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
                style={styles.button1}
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Express Note Taker</h3>
            <p>
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
            src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Movie Picker</h3>
            <p>
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
