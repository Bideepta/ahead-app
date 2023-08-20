import React from "react";
import "./navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Nav_bar() {
  return (
    <Navbar bg="white" expand="lg" style={{paddingTop: 15}}>
      <div className="container">
        <Navbar.Brand href="#">
          <img
            src="https://www.ahead-app.com/ahead-logo.svg"
            alt="brand-logo" style={{marginLeft: 85, width: 120}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="nav-spacing">
            <Nav.Link href="#" style={{fontSize: 16, color: 'black'}}>Emotions</Nav.Link>
            <Nav.Link href="#" style={{fontSize: 16, color: 'black'}}>Manifesto</Nav.Link>
            <Nav.Link href="#" style={{fontSize: 16, color: 'black'}}>Self-awareness test</Nav.Link>
            <Nav.Link href="#" style={{fontSize: 16, color: 'black'}}>Work With Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Nav>
            <button className="nav_button">Download App</button>
          </Nav>
      </div>
    </Navbar>
  );
}

export default Nav_bar;