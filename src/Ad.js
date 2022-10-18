import React from "react";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";

function Ad() {
  return (
    <>
      <Container className="justify-content-center text-center">
        <Row>
          <Col md={12}>
            <h2>Publication of your classified</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We recommend you to provide as many details as possible to
              optimize the quality of your classified.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Nav
              variant="pills"
              defaultActiveKey="#"
              className="m-1 pills d-flex justify-content-center border rounded align-items-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="link-1">Sell</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Rent</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Ad;
