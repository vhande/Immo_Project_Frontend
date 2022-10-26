import React from "react";
import { Container, Col, Row, InputGroup, Form, Button} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function AdvancedSearch() {
  return (
    <>
      <Container className="first-div">
        <Row className="d-flex justify-content-center">
          <Col >
            <h2>Advanced search</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="House ID"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1">
              <BsSearch/>
              </InputGroup.Text>
            </InputGroup>
            <h3>Transaction type</h3>
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Buy"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Rent"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
            <h3>Locations</h3>
            <Form.Select aria-label="Default select example">
              <option value="Brussel">Brussel</option>
              <option value="Antwerp">Antwerp</option>
              <option value="Gent">Gent</option>
              <option value="Charleroi">Charleroi</option>
              <option value="Liège">Liège</option>
              <option value="Bruges">Bruges</option>
              <option value="Namur">Namur</option>
              <option value="Leuven">Leuven</option>
              <option value="Mons">Mons</option>
              <option value="Mechelen">Mechelen</option>
              <option value="Aalst">Aalst</option>
              <option value="Hasselt">Hasselt</option>
            </Form.Select>
            <h3>Property Type</h3>
            <Form.Select aria-label="Default select example">
              <option value="1">House</option>
              <option value="2">Appartment</option>
              <option value="3">House and Appartment</option>
            </Form.Select>
            <h3>Budget</h3>
            <InputGroup className="mb-3">
              <InputGroup.Text>Minimum</InputGroup.Text>
              <Form.Control aria-label="Minumum price" />
              <InputGroup.Text>Maximum</InputGroup.Text>
              <Form.Control aria-label="Maximum price" />
            </InputGroup>
            <Button>Search</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdvancedSearch;
