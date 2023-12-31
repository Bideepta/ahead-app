import React from "react";
import { Card } from "react-bootstrap";
import Timeline from "../timeline/timeline";
import ColorTimeline from "../color-timeline/color-timeline";

function Rate() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardStyle = {
    width: "1200px",
    minHeight: "600px",
    margin: "20px",
    backgroundColor: "#E3F4F4",
    borderRadius: "25px",
    padding: "30px",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <Card className="cardRate" style={cardStyle}>
        <Card.Body>
          <Card.Text
            style={{ fontSize: 18, fontWeight: 500, textAlign: "center" }}
          >
            Let your friends, family and coworkers (anonymously) rate your
            social skills.
          </Card.Text>
          <Card.Title
            style={{
              fontSize: 45,
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: 30,
            }}
          >
            Ever wondered what others think of you?
          </Card.Title>
          <Timeline />
          <Card style={{ border: "none", borderRadius: 20, width: 500, margin: 'auto', height:200 }}>
            <Card.Body>
              <ColorTimeline />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Rate;
