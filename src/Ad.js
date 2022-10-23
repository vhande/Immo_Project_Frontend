import React from "react";
import { Container, Nav, ButtonGroup, Button, } from "react-bootstrap";
import {MdApartment} from 'react-icons/md' 
import {GiFamilyHouse} from 'react-icons/gi'


function Ad() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center text-center first-div">
        <h2>Publication of your classified</h2>

        <p>
          We recommend you to provide as many details as possible to optimize
          the quality of your classified.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <Nav
            variant="pills"
            defaultActiveKey="sell"
            className="m-1 pills d-flex justify-content-center border rounded align-items-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="sell">Sell</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="rent">Rent</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <p>Select your property type and start making your classified</p>
        <ButtonGroup className="d-flex justify-content-center align-items-center">
          <div
            style={{
              
              paddingTop: "6%",
              paddingBottom: "6%",
              width: "30%",
              border: "solid 0.5px",
              
            }}
          >
            <GiFamilyHouse size={70}/>
            <p>House</p>
          </div>
          <div
            style={{
              
              paddingTop: "6%",
              paddingBottom: "6%",
              width: "30%",
              border: "solid 0.5px",
              
            }}
          >
            <MdApartment size={70}/>
            <p>Appartment</p>
          </div>  
        </ButtonGroup>
        <Button className="mx-auto m-4">Start</Button>
      </Container>
    </>
  );
}

export default Ad;
