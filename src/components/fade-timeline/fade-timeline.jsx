import React from "react";
import { Card } from "react-bootstrap";
import Faded from "../faded/faded";

function Faded_timeline() {
  const monster5Style = {
    width: 140,
    height: 140,
    position: "absolute",
    right: 480,
    top: '125rem',
    transform: "scaleX(-1)",
  };
  return (
    <div className="container">
      <Card.Body>
        <Card.Text
          style={{ justifyContent: "center", fontSize: 18, marginLeft: 300 }}
        >
          Wrong with self-improvement and how we're fixing it.
        </Card.Text>
        <Card.Title
          style={{
            justifyContent: "center",
            fontSize: 40,
            marginLeft: 300,
            fontWeight: "bold",
          }}
        >
          Self-improvement. Ugh.
        </Card.Title>
        <Card style={{ border: "none", marginTop: 20 }}>
          <Faded />
        </Card>
        <img src="/monster5.png" alt="monster" style={monster5Style} />
      </Card.Body>
    </div>
  );
}

export default Faded_timeline;
