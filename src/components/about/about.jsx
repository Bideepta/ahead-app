import React from "react";
import { Card } from "react-bootstrap";
import "./about.css";
import { motion } from "framer-motion";

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
    borderRadius: "55% 0% 50% 15%",
    bottom: 30,
    left: 20,
    transformOrigin: "top right",
    transform: "rotate(90deg)",
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
        <motion.div
          className="semi-circle"
          style={semicircleStyle}
          initial={{ rotate: 0, y: 10 }}
          animate={{ y: [10, 0, 10], rotate: [10, 0, 10] }}
          transition={{
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "reverse", // Reverse the animation after each repeat
            duration: 2, // Duration of each animation cycle
            ease: "linear", // Easing function
          }}
        ></motion.div>
        <motion.div
          className="semi-circle1"
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            backgroundColor: "#5D9C59",
            borderRadius: "0 65% 0 105%",
            top: 0,
            left: "25%",
            transformOrigin: "top right",
            transform: "rotate(0deg)",
            zIndex: 1,
          }}
          initial={{ rotate: 0, y: 10 }} // Initial position
          animate={{ y: [10, 0, 10], rotate: [5, 0, 5] }} // Animated rotation
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "linear",
          }}
        ></motion.div>
        <div className="circ"></div>
        <div className="circ-cir"></div>
        <img src="/monster10.png" style={monsterStyle} />
        <motion.img
          src="/flower.png"
          alt="flower"
          style={flowerStyle}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        ></motion.img>
        {/* <img src="/flower.png" alt="flower" style={flowerStyle} /> */}
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
            right: -15,
            bottom: 80,
            transform: "rotate(90deg)",
          }}
        />
        <div className="circlelar"></div>
        <motion.div
          className="circlelar1"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10, 10, -10] }} // Bounce pattern
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </Card>
    </div>
  );
}

export default About;
