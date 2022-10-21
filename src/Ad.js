import React from "react";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import {MdApartment} from 'react-icons/md' 
import {GiFamilyHouse} from 'react-icons/gi'
import {HiBuildingStorefront} from 'react-icons/hi2'


function Ad() {
  return (
    <>
      <Container className="justify-content-center text-center first-div">
        <h2>Publication of your classified</h2>

        <p>
          We recommend you to provide as many details as possible to optimize
          the quality of your classified.
        </p>
        <div className="d-flex justify-content-center align-items-center">
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
        </div>
        <p>Select your property type and start making your classified</p>
        <div className="d-flex justify-content-space-between align-items-center">
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
          <div
            style={{
              
              paddingTop: "6%",
              paddingBottom: "6%",
              width: "30%",
              border: "solid 0.5px",
              
            }}
          >
            <HiBuildingStorefront size={70}/>
            
            <p>Other</p>
          </div>
          
        </div>
        <Button style={{marginTop:'2rem', marginRight:"2rem"}}>Start</Button>
      </Container>
    </>
  );
}

export default Ad;
