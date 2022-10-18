import React from 'react'
import {Container,Card, Nav, Form, Button, Row, Col} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'


function Search() {
  return (
    <Container fluid className="home-container">
        <Card className="border-0 d-flex p-4 bg-light justify-content-center align-items-center">
        <Nav variant="pills" className="m-1 pills d-flex justify-content-center border rounded align-items-center " defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Rent</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Sale</Nav.Link>
      </Nav.Item>
    </Nav>
    <Row>
    <div className="d-flex">
      <Col md={6}>
    <Form.Select className="my-1 shadow-none" aria-label="Default select example">
      <option disabled>What?</option>
      <option value="1">House</option>
      <option value="2">Appartment</option>
      <option value="3">House and Appartment</option>
      <option value="4">Garage</option>
    </Form.Select>
    </Col>
    <Col md={6}>
    <div className=" bg-white d-flex align-items-center border rounded m-1 pe-2">
    <input className="form-control  border-0 outline-0 shadow-none" type="text" placeholder="Where?"/> <BsSearch/></div>
    </Col>
    <Col md={1}><Link to='/advanced-search'><Button className=" my-1">+</Button></Link></Col>
    </div>
    </Row>
    <Button className="m-1 ">Search on the list</Button>
        </Card>
    </Container>
  )
}

export default Search