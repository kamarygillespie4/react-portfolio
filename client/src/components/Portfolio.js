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
          src="./images/workday.jpg"
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
            >
              Deployed Website
            </Button>
            <Button
              size="lg"
              href="https://github.com/kamarygillespie4/work-day-scheduler"
              target="_blank"
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
