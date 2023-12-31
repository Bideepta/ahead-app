import React, { useState, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./card.css";
import { motion, AnimatePresence } from "framer-motion";

const CardComponent = () => {
  const imageSize = {
    width: "100px",
    height: "50px",
    marginRight: 40,
    marginLeft: 20,
    marginBottom: 150,
  };
  const cardStyle = {
    backgroundColor: "#EDE4FF",
    border: "none",
    maxWidth: "1200px",
    height: "600px",
    padding: "30px",
    borderRadius: "25px",
    margin: "auto",
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  };
  const contentStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const contain = {
    display: "block",
    paddingBottom: 143,
  };
  const titleStyle = {
    fontSize: 55,
    fontWeight: "bold",
  };
  const phoneStyle = {
    position: "absolute",
    zIndex: 1,
    width: 360,
    height: 360,
    marginLeft: 555,
  };
  const monster1Style = {
    position: "absolute",
    zIndex: 1,
    width: 220,
    height: 210,
    marginLeft: 510,
    marginBottom: 280,
    opacity: 0.8,
    transform: "rotate(4deg)",
  };
  
  const monster2Style = {
    position: "absolute",
    zIndex: 1,
    width: 190,
    height: 210,
    marginLeft: 880,
    marginTop: 400,
    opacity: 1,
    transform: "scaleX(-1) rotate(18deg)",
  };

  const fadeInAnimation1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };
  const fadeInAnimation2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } },
  };
  const fadeInAnimation3 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 6 } },
  };

  return (
    <div className="container">
      <CardGroup>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Text style={{ fontSize: 18, marginLeft: 5, marginTop: 130 }}>
              Ahead app
            </Card.Text>
            <AnimatePresence>
              <Card.Title>
                <motion.div
                  style={titleStyle}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation1}
                >
                  Master your life <br />
                </motion.div>
                <motion.div
                  style={titleStyle}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation2}
                >
                  by mastering <br />
                </motion.div>
                <motion.div
                  style={titleStyle}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation3}
                >
                  emotions
                </motion.div>
              </Card.Title>
            </AnimatePresence>
          </Card.Body>
          <div style={contentStyle}>
            <Card.Img
              src="https://www.ahead-app.com/images/app-store.svg"
              alt="appstore-logo"
              style={imageSize}
            />
            <div style={contain}>
              <div className="rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <Card.Text style={{ fontSize: 12 }}>
                100+ AppStore reviews
              </Card.Text>
            </div>
          </div>
          <motion.div
            className="circle_dotted"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: 5, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="circle_dotted2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: 5, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="circle_dotted3"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: 5, ease: "linear" }}
          ></motion.div>
          <div className="circle"></div>
          <img src="/phone_web.png" style={phoneStyle} />
          <img src="/monster1.png" style={monster1Style} />
          <img src="/monster2.png" style={monster2Style} />
          <img
            src="/aquarius.png"
            style={{
              width: 60,
              height: 50,
              zIndex: 1,
              position: "absolute",
              top: 100,
              left: "38%",
              transform: "translateX(-50%) rotate(8deg)",
            }}
          />
          <img
            src="/aquarius.png"
            style={{
              width: 60,
              height: 50,
              zIndex: 1,
              position: "absolute",
              right: 35,
              top: "40%",
              transform: "translateX(-50%) rotate(45deg)",
            }}
          />
          <img
            src="/semicircle.png"
            style={{
              width: 40,
              height: 40,
              transform: "rotate(90deg)",
              zIndex: 1,
              position: "absolute",
              left: -9,
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
              left: "30%",
              transform: "rotate(180deg)",
            }}
          />
          <img
            src="/semicircle (2).png"
            style={{
              width: 40,
              height: 40,
              top: -9,
              zIndex: 1,
              position: "absolute",
              left: "85%",
              transform: "rotate(180deg)",
            }}
          />
          <img
            src="/circle.png"
            style={{
              width: 50,
              height: 50,
              top: 350,
              zIndex: 1,
              position: "absolute",
              left: "40%",
              transform: "rotate(180deg)",
            }}
          />
          <img
            src="/new-moon.png"
            style={{
              width: 15,
              height: 15,
              top: 367,
              zIndex: 1,
              position: "absolute",
              left: "41.5%",
              transform: "rotate(180deg)",
            }}
          />
          <div
            className="semiCircle1"
            style={{
              position: "absolute",
              width: 50,
              height: 50,
              backgroundColor: "#5D9C59",
              borderRadius: "0 65% 0 105%",
              top: 0,
              right: "85%",
              transformOrigin: "top right",
              transform: "rotate(0deg) scaleX(-1)",
              zIndex: 1,
            }}
          ></div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardComponent;
