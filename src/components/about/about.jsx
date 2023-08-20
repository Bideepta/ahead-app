import React from "react";
import { Card, CardGroup } from 'react-bootstrap';
import "./about.css";

function About() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100vh', 
  };
  const cardStyle = {
    minWidth: 1200,
    minHeight: '600px',
    margin: '20px',
    backgroundColor: '#FFF6DC',
    borderRadius: '25px',
    padding: '30px',
    border: 'none',
  };
  const semicircleStyle = {
    position: 'absolute',
    width: 250,
    height: 250,
    backgroundColor: '#FFE7CE',
    borderRadius: '0 55% 0 55%',
    bottom: 30,
    left: -250,
    transformOrigin: 'top right', 
    transform: 'rotate(-90deg)',
  };
  const monsterStyle = {
    border: 'none',
    borderRadius: '50%',
    width: 180,
    height: 180,
    zIndex: 1,
    position: 'absolute',
    left: '135px',
    bottom: '135px',
  }
  const flowerStyle = {
    width: 40,
    height: 40,
    zIndex: 1,
    right: 60,
    top: -20,
    position: 'absolute',
  }
  const badgeStyle = {
    width: 60,
    height: 60,
    zIndex: 1,
    left: 195,
    bottom: 315,
    position: 'absolute',
  }

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Text style={{fontSize: 18,fontWeight: 500, marginTop: 50}}>
                  Built out of frustation
          </Card.Text>
          <Card.Title style={{fontSize: 45,fontWeight: 'bold'}}>Meet the ahead app</Card.Title>

          <Card.Text style={{fontSize: 22, paddingLeft: 500, marginTop: 90}}>
            A personalized pocket coach that provides bite-<br />
            sized, science-driven tools to boost emotional <br />
            intelligence.
          </Card.Text>

          <Card.Text style={{fontSize: 22, paddingLeft: 500}}>
            Think of it as a pocket cheerleader towards a <br />
            better, more fulfilling.
          </Card.Text>
        </Card.Body>
        <div className="semi-circle" style={semicircleStyle}></div>
        <div className="circ"></div>
        <div className="circ-cir"></div>
        <img src="/monster3.png" style={monsterStyle}/>
        <img src="/flower.png" alt="flower" style={flowerStyle} />
        <img src="/luck.png" alt="luck" style={badgeStyle} />
      </Card>
    </div>
  );
}

export default About;
