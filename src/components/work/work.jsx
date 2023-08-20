// Only scrolling component is left here

import { end } from "@popperjs/core";
import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";

function MyCardWork() {
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
    backgroundColor: "rgba(235, 211, 241, 0.748)",
    borderRadius: "25px",
    padding: "30px",
  };

  const subCardStyle = {
    display: "block",
  };
  const cardStyle2 = {
    maxWidth: "280px",
    padding: 16,
    borderRadius: 15,
  };
  const monsterStyle = {
    width: 70,
    height: 70,
  }
  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Row>
          <Col md={6}>
            <Card.Body style={{ marginTop: 10 }}>
              <Card.Title style={{fontSize: 40, paddingBottom: 20, fontWeight: 'bold'}}>Work with us</Card.Title>
              <CardGroup>
                <div style={subCardStyle}>
                  <Card style={{padding: 20, border: 'none', borderRadius: 20}}>
                    <Card.Body>
                      <img src="/monster4.png" style={monsterStyle} />
                      <Card.Title style={{fontSize: 18, paddingTop: 20, fontWeight: 'medium'}}>About</Card.Title>
                      <Card.Text style={{fontSize: 18}}>
                        At ahead our goal is to make self-improvement fun and
                        lasting. We know there's a way how to make it work. And
                        that's what aHead is all about!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div style={subCardStyle}>
                  <Card style={{padding: 20, backgroundColor: '#FFF6DC', border: 'none', borderRadius: 20}}>
                    <Card.Body>
                      <Card.Title style={{fontSize: 18, fontWeight: 'medium'}}>Product</Card.Title>
                      <Card.Text style={{fontSize: 18}}>
                        Sure, you could spend ages reading books or sitting in
                        seminars on how to become a better spouse, parent or
                        manager - like we did ...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </CardGroup>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Body style={{ marginLeft: 150, marginTop: 10}}>
              <img
                src="https://www.ahead-app.com/ahead-logo.svg"
                alt="brand-logo"
                style={{ marginBottom: 35, marginLeft: 150, height: 40 }}
              />
              <Card className="mb-4" style={cardStyle2}>
                <Card.Body>
                  <Card.Title style={{fontSize: 15}}>
                    Power through, even when the going gets tough
                  </Card.Title>
                  <Card.Text style={{fontSize: 12}}>
                    We help you spot and work around whatever stands in the way,
                    be it bad habits, fear etc.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4" style={cardStyle2}>
                <Card.Body>
                  <Card.Title style={{fontSize: 15}}>
                    Learn more about who you are and where you want to go
                  </Card.Title>
                  <Card.Text style={{fontSize: 12}}>
                    We ask the right question to help you better understand why
                    you do things the way you do.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-0" style={cardStyle2}>
                <Card.Body>
                  <Card.Title style={{fontSize: 15}}>
                    Play and grow together with others on the same journey
                  </Card.Title>
                  <Card.Text style={{fontSize: 12}}>
                    Ahead feels like a game, not like a chore. See yourself grow
                    everday towards acheiving your goals!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default MyCardWork;


