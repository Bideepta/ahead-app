import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function Row_of_card() {
  const titleStyle = { fontSize: 40, fontWeight: "bold" };
  const cardStyle1 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: '#F7FFE5',
    padding: "10px",
    textAlign: "left",
  };
  const cardStyle2 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: '#EDE4FF',
    padding: "10px",
    textAlign: "left",
  };
  const cardStyle3 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: '#6528F7',
    color: 'white',
    padding: "10px",
    textAlign: "left",
  };
  const cardStyle4 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: "#FFEECC",
    padding: "10px",
    textAlign: "left",
  };
  const contain = {
    marginLeft: '0px',
    paddingBottom: 0,
  };

  return (
    <div className="container">
      <div style={contain}>
        <Card.Title style={titleStyle}>Does this sound familiar ...</Card.Title>
        <CardGroup>
          <Card style={cardStyle1}>
            <Card.Body>
              <Card.Title>You argue with a colleague</Card.Title>
              <Card.Text>
                You get angry and defensive, instead of staying open and working
                towards common ground.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={cardStyle2}>
            <Card.Body>
              <Card.Title>You argue with a colleague</Card.Title>
              <Card.Text>
                You get angry and defensive, instead of staying open and working
                towards common ground.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={cardStyle3}>
            <Card.Body>
              <Card.Title>You get a promotion at work</Card.Title>
              <Card.Text>
                You question yourself and wonder when they'll realize you're an
                unqualified imposter, instead of trusting yourself & your
                abilities
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={cardStyle4}>
            <Card.Body>
              <Card.Title>You get a promotion at work</Card.Title>
              <Card.Text>
                You question yourself and wonder when they'll realize you're an
                unqualified imposter, instead of trusting yourself & your
                abilities
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Row_of_card;
