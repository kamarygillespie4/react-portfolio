import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const styles = {
  div: {
    background: "black",
    height: "100vh",
  },
  item: {
    height: "100vh",
    width: "100vw",
  },
  button1: {
    background: "green",
    "border-color": "green",
  },
  button2: {
    background: "pink",
    "border-color": "pink",
  },
};

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={styles.div}>
      <Carousel.Item>
        <img
          style={styles.item}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1665310127352-a7be56238f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Work Day Scheduler</h3>
          <p>description</p>
          <div className="d-grid gap-2">
            <Button
              size="lg"
              href="https://kamarygillespie4.github.io/work-day-scheduler/"
              target="_blank"
              style={styles.button1}
            >
              Deployed Website
            </Button>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
              style={styles.button2}
            >
              Github Repository
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
            their homepage in order to see other users post and comments. If the
            user logs in, they can then view all their posts on their dashboard.
            From here, they can also update, edit, create, and delete posts.
          </p>
          <div className="d-grid gap-2">
            <Button
              size="lg"
              href="https://afternoon-ravine-59350.herokuapp.com/"
              target="_blank"
              style={styles.button1}
            >
              Deployed Website
            </Button>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/mvc-tech-blog"
              target="_blank"
              style={styles.button2}
            >
              Github Repository
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
