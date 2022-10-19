import React from 'react'
import {Container,Card, Nav, Form, Button, Row, Col} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'


function Search() {
  return (
    <Container fluid className="search-container">
        <Card className="border-0 d-flex p-5 bg-light justify-content-center align-items-center">
        <Nav variant="pills" className="m-3 pills d-flex justify-content-center border rounded align-items-center " defaultActiveKey="#">
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
      <option value="1">House</option>
      <option value="2">Appartment</option>
      <option value="3">House and Appartment</option>
      <option value="4">Garage</option>
    </Form.Select>
    </Col>
    <Col md={6}>
    <div className=" bg-white d-flex align-items-center border rounded m-1 pe-2">
    <input className="form-control border-0 outline-0 shadow-none" type="text"  list="location" placeholder="Where?"/> <BsSearch/></div>
    <datalist id="location">
  <option value="Brussels"></option>
  <option value="Antwerp"></option>
  <option value="Gent"></option>
  <option value="Charleroi"></option>
  <option value="Liège"></option>
  <option value="Bruges"></option>
  <option value="Namur"></option>
  <option value="Leuven"></option>
  <option value="Mons"></option>
  <option value="Mechelen"></option>
  <option value="Aalst"></option>
  <option value="Hasselt"></option>
</datalist>
    </Col>
    <Col md={1}><Link to='/advanced-search'><Button className=" my-1">+</Button></Link></Col>
    </div>
    </Row>
    <Button className="m-3 ">Search on the list</Button>
        </Card>
    </Container>
  )
}

export default Search