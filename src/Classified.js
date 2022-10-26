import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ClassifiedAlbum from "./ClassifiedAlbum";

function Classified() {
  const { id } = useParams();
  return (
    <>
      <Container
        fluid
        className="classifiedContainer d-flex align-items-between"
      >
        <Container>
          <Row>
            <Col md={6}>
              <h2>House for sale</h2>
              <p>4 bedrooms | 275m2</p>
              <p>Adress</p>
            </Col>
            <Col md={3}>
              <h2>565$</h2>
            </Col>
            <Col md={3}>
              <p>House code</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            <ClassifiedAlbum />
          </Col>
          <Col md={4} className="d-column pt-3">
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
            />
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Classified;
