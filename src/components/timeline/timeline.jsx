import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./timeline.css";

function Timeline() {
  return (
    <MDBContainer fluid className="py-5">
      <MDBRow>
        <MDBCol lg="12">
          <div className="horizontal-timeline">
            <MDBTypography listInLine className="items">
              <li className="item-list">
                  <p>Answer questions on your social skills</p>
              </li>
              <li className="item-list">
                  <p>Let others anonymously answer the same <br />questions about you</p>
              </li>
              <li className="item-list">
                  <p>Find out where you and others see things <br/>the same way - and where not!</p>
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Timeline;
