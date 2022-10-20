import React from "react";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";

function Ad() {
  return (
    <>
      <Container className="justify-content-center text-center adContainer">
        <h2>Publication of your classified</h2>

        <p>
          We recommend you to provide as many details as possible to optimize
          the quality of your classified.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <Nav
            variant="pills"
            defaultActiveKey="#"
            className="m-1 pills center-pills justify-content-center border rounded "
          >
            <Nav.Item>
              <Nav.Link eventKey="link-1">Sell</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Rent</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </>
  );
}

export default Ad;
