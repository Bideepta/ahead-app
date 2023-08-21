import React from "react";
import { Container } from "react-bootstrap";
import "./timeline.css";

function Timeline() {
  return (
    <Container>
      <div className="dashed-line"></div>
      <div className="timeline-images">
        <img className="badge1" src="/luck.png" alt="badge1" />
        <img className="one" src="/one (1).png" alt="one" />
        <img className="badge2" src="/luck.png" alt="badge2" />
        <img className="two" src="/two.png" alt="two" />
        <img className="badge3" src="/luck.png" alt="badge3" />
        <img className="three" src="/three.png" alt="three" />
      </div>
      <div>
        <p className="text1">Answer questions on your social skills</p>
        <p className="text2">
          Let others anonymously answer the same <br />
          questions about you
        </p>
        <p className="text3">
          Find out where you and others see things <br />
          the same way - and where not!
        </p>
      </div>
    </Container>
  );
}

export default Timeline;
