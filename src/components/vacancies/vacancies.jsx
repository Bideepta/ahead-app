import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { motion } from "framer-motion";

const MyPage = () => {
  const containerStyle = {
    marginTop: 40,
    marginBottom: 50,
    minHeight: "500px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    paddingBottom: "15px",
    marginLeft: "1px",
  };

  const cardStyle = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#FFEECC",
    padding: "10px",
    textAlign: "left",
  };
  const container1Style = {
    borderTop: "1px ridge lightgray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    padding: 3,
  };
  const contain = {
    marginLeft: "140px",
    paddingBottom: 100,
  };

  const titleAnimationVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  const cardAnimationVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const cardAnimationVariants1 = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const cardAnimationVariants2 = {
    hidden: { opacity: 0, scale: 1.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container" style={containerStyle}>
      <div style={contain}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleAnimationVariants}
        >
          <Card.Title>
            <motion.h2 style={titleStyle} variants={titleAnimationVariants}>
              Open vacancies
            </motion.h2>
          </Card.Title>
        </motion.div>
        <CardGroup>
          <motion.div
            variants={cardAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Senior Full-Stack Engineer</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$65-85k, 0.5-1.50% equity share options</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          <motion.div
            variants={cardAnimationVariants1}
            initial="hidden"
            animate="visible"
          >
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Senior Designer</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$40-55k, 0.25-.50% equity share options</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          <motion.div
            variants={cardAnimationVariants2}
            initial="hidden"
            animate="visible"
          >
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>Superstar Intern</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$20-24k, 0.5-1.50% equity share options</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </CardGroup>
      </div>
      <div className="container1" style={container1Style}>
        <img src="/logo_design.png" alt="logo_head" style={{ height: 80 }} />
        <img
          src="https://www.ahead-app.com/ahead-logo.svg"
          alt="brand-logo"
          style={{ marginBottom: 15, marginTop: 10 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", padding: 15 }}>
            <img src="/location.png" alt="location" style={{ height: 25 }} />
            <Card.Text style={{ color: "black" }}>20117, Berlin</Card.Text>
          </div>
          <div style={{ display: "flex", padding: 15 }}>
            <img src="/email.png" alt="email" style={{ height: 25 }} />
            <Card.Text style={{ color: "black" }}>hi@ahead-app.com</Card.Text>
          </div>
        </div>
        <img
          src="https://www.ahead-app.com/images/app-store.svg"
          alt="appstore-logo"
          style={{ marginBottom: 15 }}
        />
        <Card.Text style={{ color: "gray" }}>
          © 2023 Ahead app. All right reserved
        </Card.Text>
      </div>
    </div>
  );
};

export default MyPage;
