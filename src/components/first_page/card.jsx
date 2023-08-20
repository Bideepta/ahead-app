import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./card.css";

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
    position: 'absolute',
    zIndex: 1,
    width: 355,
    height: 355,
    marginLeft: 560,
  };
  const monster1Style = {
    position: 'absolute',
    zIndex: 1,
    width: 250,
    height: 250,
    marginLeft: 500,
    marginBottom: 300
  };
  const monster2Style = {
    position: 'absolute',
    zIndex: 1,
    width: 230,
    height: 250,
    marginLeft: 850,
    marginTop: 400,
    transform: 'scaleX(-1)',
  }

  return (
    <div className="container">
      <CardGroup>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Text style={{ fontSize: 18, marginLeft: 5, marginTop: 130 }}>
              Ahead app
            </Card.Text>
            <Card.Title style={titleStyle}>
              Master your life <br />
              by mastering <br />
              emotions
            </Card.Title>
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
          <div className="circle_dotted"></div>
          <div className="circle_dotted2"></div>
          <div className="circle"></div>
          <img src="/phone_web.png" style={phoneStyle}/>
          <img src="/monster1.png" style={monster1Style}/>
          <img src="/monster2.png" style={monster2Style}/>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardComponent;
