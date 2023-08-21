import React from "react";
import { Card } from "react-bootstrap";
import Faded from "../faded/faded";

function Faded_timeline() {
  const monster5Style = {
    width: 140,
    height: 140,
    position: "relative",
    left: "4%",
    zIndex: 1,
    transform: "scaleX(-1)",
  };
  return (
    <div className="container">
      <Card style={{ border: "none" }}>
        <Card.Body>
          <div style={{ display: "flex" }}>
            <div style={{ display: "block" }}>
              <Card.Text style={{ fontSize: 18, marginLeft: 180 }}>
                Wrong with self-improvement and how we're fixing it.
              </Card.Text>
              <Card.Title
                style={{
                  fontSize: 40,
                  marginLeft: 180,
                  fontWeight: "bold",
                }}
              >
                Self-improvement. Ugh.
              </Card.Title>
            </div>
            <img src="/monster5.png" alt="monster" style={monster5Style} />
          </div>
          <Card style={{ border: "none" }}>
            <Faded />
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Faded_timeline;
