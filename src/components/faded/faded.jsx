import React, { useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "./faded.css";

function Faded() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
    
        // Calculate opacity and scale based on visibility
        const opacity = isVisible ? 1 : 0.5;
        const scale = isVisible ? 1 : 0.8;
    
        item.style.opacity = opacity;
        item.style.transform = `scale(${scale})`;
    
        // Highlight the current event
        if (isVisible) {
          item.classList.add("highlight");
        } else {
          item.classList.remove("highlight");
        }
      });
    };
       

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to set initial visibility
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MDBContainer className="py-5" style={{ width: 650, alignItems: "center" }}>
      <ul className="timeline">
        <li className="timeline-item mb-5 fade">
          <h5 className="fw-bold">It's not as easy as 1-2-3.</h5>
          <p className="text-muted">
            The journey of change may be long, but our sessions are quick. We
            get to the point and tell you what you want to know (and nothing
            else).
          </p>
        </li>
        <li className="timeline-item mb-5 fade">
          <h5 className="fw-bold">Old habits are hard to break.</h5>
          <p className="text-muted">
            And bad behaviors die hard. Fortunately, we give you great
            science-backed up techniques to use.
          </p>
        </li>
        <li className="timeline-item mb-5 fade">
          <h5 className="fw-bold">
            You and your motivation don't have a long-term relationship.
          </h5>
          <p className="text-muted">
            Luckily we can proactively prepare you for the marathon, not just
            the race. Effective memorable exercises will help you to stick to
            your goals
          </p>
        </li>
        <li className="timeline-item mb-5 fade">
          <h5 className="fw-bold">Book just don't offer practical solutions</h5>
          <p className="text-muted">
            Remember when you learned to ride a bike just by reading? yeah we
            don't either think its impossible
          </p>
        </li>
      </ul>
    </MDBContainer>
  );
}

export default Faded;
