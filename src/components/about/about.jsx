import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./about.css";

function About() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const cardStyle = {
    minWidth: 1200,
    minHeight: "600px",
    margin: "20px",
    backgroundColor: "#F2EE9D",
    borderRadius: "25px",
    padding: "30px",
    border: "none",
  };
  const semicircleStyle = {
    position: "absolute",
    width: 250,
    height: 250,
    backgroundColor: "#B3C890",
    borderRadius: "0 55% 0 75%",
    bottom: 30,
    left: -250,
    transformOrigin: "top right",
    transform: "rotate(-90deg)",
  };
  const monsterStyle = {
    border: "none",
    borderRadius: "50%",
    width: 250,
    height: 250,
    zIndex: 1,
    position: "absolute",
    left: "110px",
    bottom: "90px",
  };
  const flowerStyle = {
    width: 40,
    height: 40,
    zIndex: 1,
    right: 60,
    top: -20,
    position: "absolute",
  };
  const badgeStyle = {
    width: 50,
    height: 50,
    zIndex: 1,
    left: 205,
    bottom: 315,
    position: "absolute",
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text style={{ fontSize: 18, fontWeight: 500, marginTop: 50 }}>
            Built out of frustation
          </Card.Text>
          <Card.Title style={{ fontSize: 45, fontWeight: "bold" }}>
            Meet the ahead app
          </Card.Title>

          <Card.Text style={{ fontSize: 22, paddingLeft: 500, marginTop: 90 }}>
            A personalized pocket coach that provides bite-
            <br />
            sized, science-driven tools to boost emotional <br />
            intelligence.
          </Card.Text>

          <Card.Text style={{ fontSize: 22, paddingLeft: 500 }}>
            Think of it as a pocket cheerleader towards a <br />
            better, more fulfilling.
          </Card.Text>
        </Card.Body>
        <div className="semi-circle" style={semicircleStyle}></div>
        <div
          className="semi-circle1"
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            backgroundColor: "#5D9C59",
            borderRadius: "0 65% 0 105%",
            top: 0,
            right: "65%",
            transformOrigin: "top right",
            transform: "rotate(0deg)",
            zIndex: 1,
          }}
        ></div>
        <div className="circ"></div>
        <div className="circ-cir"></div>
        <img src="/monster10.png" style={monsterStyle} />
        <img src="/flower.png" alt="flower" style={flowerStyle} />
        <img src="/luck.png" alt="luck" style={badgeStyle} />
        <img
          src="/monster7.png"
          alt="white-monster"
          style={{
            width: 300,
            height: 300,
            position: "absolute",
            zIndex: 1,
            left: "65%",
            top: 0,
          }}
        />
        <img
          src="/semicircle (2).png"
          style={{
            width: 40,
            height: 40,
            bottom: -10,
            zIndex: 1,
            position: "absolute",
            left: "40%",
          }}
        />
        <img
            src="/semicircle (1).png"
            style={{
              width: 60,
              height: 60,
              bottom: -15,
              zIndex: 1,
              position: "absolute",
              right:-15,
              bottom: 80,
              transform: 'rotate(90deg)',
            }}
          />
        <div className="circlelar"></div>
        <div className="circlelar1"></div>
      </Card>
    </div>
  );
}

export default About;
