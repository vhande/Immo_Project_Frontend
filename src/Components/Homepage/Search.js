import React from 'react'
import {Container,Card, Nav, Form, Button, Row, Col} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import Features from '../../Context/Features'
function Search() {

const context = useContext(Features)

console.log(context.propertytype, context.classifiedtype, context.city)

  useEffect(()=> {
      if (context.classifiedtype === "") {
        context.setClassifiedtype("rent") }
      else if (context.propertytype === "") {
        context.setPropertytype("house")
      }
    },[context.classifiedtype, context.propertytype])

      const clickEvent = (e) => {
      context.setClassifiedtype(e.target.id)
    }
     const changeEvent = (e) => {
      context.setPropertytype(e.target.value)
     }

     const typeEvent = (e) => {
      context.setCity(e.target.value.toLowerCase())
     }
    

  return (
    
    <Container fluid className="search-container">
        <Card className="border-0 d-flex p-5 bg-light justify-content-center align-items-center">
        <Nav variant="pills" className="m-3 pills d-flex justify-content-center border rounded align-items-center"  defaultActiveKey="rent" onClick={(e)=>{clickEvent(e)}}>
        <Nav.Item >
        <Nav.Link   id="rent" eventKey="rent" >Rent</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link   id="sale" eventKey="buy" >Buy</Nav.Link>
      </Nav.Item>
    </Nav>
    <Row>
    <div className="d-flex">
      <Col md={6}>
    <Form.Select className="my-1 shadow-none" aria-label="Default select example"  onChange={(e)=>{changeEvent(e)}} >
      <option value="house">House</option>
      <option value="appartment">Appartment</option>
    </Form.Select>
    </Col>
    <Col md={6}>
    <div className=" bg-white d-flex align-items-center border rounded m-1 pe-2">
    <input className="form-control border-0 outline-0 shadow-none" type="text"  list="location" placeholder="Where?" onChange={(e)=>{typeEvent(e)}}/> <BsSearch/></div>
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
    <Link to={'/search'}><Button className="m-3 ">Search on the list</Button></Link>
        </Card>
    </Container>
  )
}

export default Search