import React from "react";
import { Card } from "react-bootstrap";

function Extrabase() {
  return(
    <div className="extrabase">
      <Card.Body style={{display: 'flex', justifyContent: 'space-evenly', paddingTop: 120, paddingBottom: 120}}>
        <Card.Title style={{fontSize: 35,paddingLeft: 40}}>Be the best you <br />with EQ</Card.Title>
        <Card.Text style={{fontSize:22,paddingLeft: 50}}>Not having your own emotions <br />
           under control might be holding <br />
           you back.
        </Card.Text>
        <Card.Text style={{fontSize:22,paddingRight: 50}}>Additionally, not understanding <br />
           those of others stops you from <br />
           being parent, friend you can be.
        </Card.Text>
      </Card.Body>
    </div>
  );
}

export default Extrabase;
