import React from 'react'
import {Container,Card, Nav, Form, Button} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'


function Search() {
  return (
    <Container fluid className="search">
        <Card className="border-0">
        <Nav variant="tabs" className="d-flex mx-1 my-2 justify-content-center" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Rent</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Sale</Nav.Link>
      </Nav.Item>
    </Nav>
    <div className="d-flex">
    <Form.Select className="m-1 shadow-none" aria-label="Default select example">
      <option disabled>What?</option>
      <option value="1">House</option>
      <option value="2">Appartment</option>
      <option value="3">House and Appartment</option>
      <option value="4">Garage</option>
    </Form.Select>
    <div className="d-flex align-items-center border rounded m-1 pe-2">
    <input className="form-control  border-0 outline-0 shadow-none" type="text" placeholder="Where?"/> <BsSearch/></div>
    <Button className=" m-1">+</Button>
    </div>
    <Button className="m-1 ">Search on the list</Button>
        </Card>

    </Container>
  )
}

export default Search