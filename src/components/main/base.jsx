import React from "react";
import { Card } from "react-bootstrap";

function Base() {
  return(
    <div className="base">
      <Card.Body style={{display: 'flex', justifyContent: 'space-evenly',paddingTop: 80}}>
        <Card.Title style={{fontSize: 35,paddingLeft: 40}}>EQ beats IQ</Card.Title>
        <Card.Text style={{fontSize:22,paddingLeft: 50}}>People with high emotional <br />
          intelligence (EQ) live more fulfilled <br />
          lives. They tend to be happier and <br />
          have healthier realtionships.
        </Card.Text>
        <Card.Text style={{fontSize:22,paddingRight: 50}}>They are more successful in their <br />
          pursuits and make for inspiring <br />
          leaders. According to science, they <br />
          earn $29k a year.
        </Card.Text>
      </Card.Body>
    </div>
  );
}

export default Base;
