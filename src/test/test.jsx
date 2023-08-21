import React from "react";
import { Card, Button } from 'react-bootstrap';
import './test.css';

function Test_Page() {
  const titleStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  const textStyle1 = {
    fontSize: '18px',
    margin: '15px',
    fontWeight: 'medium',
  };
  const textStyle2 = {
    fontSize: '24px',
    margin: '15px',
    whiteSpace: 'pre-line',
  };
  const textStyle3 = {
    fontSize: '14px',
    margin: '15px',
    marginTop: '10px',
    paddingTop: '8px'
  };
  const textStyle4 = {
    fontSize: '18px',
    margin: '15px',
    paddingTop: '8px',
    fontWeight: 'medium',
  };
  const textStyle5 = {
    fontFamily: 'CustomFont, cursive',
    fontSize: '21px',
    fontWeight: 'medium',
    marginTop: '15px',
    marginBottom: '15px',
  }
  const buttonStyle = {
    backgroundColor: 'black', 
    borderColor: '#343a40', 
    fontSize: '16px',
    fontWeight: 'medium',
    borderRadius: '26px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '8%',
    marginTop: '15px',
  };

  return (
    <div className="text-center">
    <Card  style={{paddingTop:100, paddingBottom:100, border:'none'}}>
      <Card.Body>
        <Card.Text style={textStyle1}>We take privacy seriously</Card.Text>
        <Card.Title style={titleStyle}>Before you get started</Card.Title>
        <Card.Text style={textStyle2}>
              "We won't share your answer with anyone (and won't ever tell
              <br/> 
              you which friends said what about you)"
        </Card.Text>
        <Card.Body>
            <Card.Text style={{ ...textStyle4, display: 'inline' }}>with love,</Card.Text>
            <Card.Text style={{ ...textStyle5, display: 'inline' }}>Team ahead</Card.Text>
        </Card.Body>
        <Button variant="dark" style={buttonStyle}>Start a test</Button>
        <Card.Text style={textStyle3}>Take only 5 minutes</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Test_Page;