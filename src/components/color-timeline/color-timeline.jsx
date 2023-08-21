import React, { useRef, useEffect } from "react";
import "./color-timeline.css";
import { Container } from "react-bootstrap";


function ColorTimeline() {
  const timelineRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      timelineRef.current.classList.add("animate");
    } else {
      timelineRef.current.classList.remove("animate");
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <Container ref={timelineRef} className="timeline-container">
      <div className="line"></div>
      <div className="boxPurple">You</div>
      <div className="dotPurple"></div>
      <div className="dotBlue"></div>
      <div className="boxBlue">Anonymonos 1</div>
      <div className="boxYellow">Anonymonos 2</div>
      <div className="dotYellow"></div>
      <div className="dotGreen"></div>
      <div className="boxGreen">Anonymonos 3</div>
    </Container>
  );
}

export default ColorTimeline;
