import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Fun Facts About Me</h5>
            <ul className="list-unstyled">
              <li>I used to hold the world's highest score in Subway Surfers</li>
              <li>I can type 143 words per minute.</li>
              <li>In my free time, I like to travel, play guitar, and exercise</li>
            </ul>
          </Col>
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <h5>Let's Connect</h5>
            <p className="mb-0">jordanweinstein556@gmail.com</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <small>Created using React & Bootstrap (2025)</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
