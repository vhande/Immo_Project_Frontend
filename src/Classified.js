import React from "react";
import { Col, Container, Row, Navbar, Button, DropdownButton, Dropdown, Card} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {BsFillShareFill} from 'react-icons/bs'


function Classified() {
  const { id } = useParams();
  const [result, setResult] = useState([])

  useEffect(()=> {
    const action = () => {
      fetch(`https://immo-backend.herokuapp.com/classified/${id}`)
      .then(res=>res.json())
      .then(data=>
        { setResult(data)
          console.log(data)})
       }
    action()     
  },[id])

  const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <> 
      {result.length === 0 ? "Loading" 
      : <> 

      <Container fluid className="p-0" id="classified-navbar">
        <Navbar sticky="top"  className="bg-light m-0 p-4 d-flex justify-content-between align-items-start" style={{border:"none"}}>
          <div>
          <h2>{toUpperCase(result[0].type)} for {result[0].classifiedtype}</h2>
          <h4>{result[0].bedrooms} bdr.</h4>
          <h4>{toUpperCase(result[0].city)}</h4>
          </div>
          <div>
            <h1>€{result[0].price}</h1>
            <Button>Simulate my loan</Button>
          </div>
          <div>
            <h6>Immo Code: {result[0]._id}</h6>
            <DropdownButton
            title={<><BsFillShareFill fill="white" className="mx-1"/> Share</>}
          >
            <Dropdown.Item eventKey="1" href="#" active>Share by mail</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="#">Share on Twitter</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="#">
              Share on Facebook
            </Dropdown.Item>
          </DropdownButton>
          </div>
        </Navbar>
      </Container>
        <Container fluid className="search-page-container m-0 d-flex flex-row justify-content-between align-items-start">
          <div className="d-flex justify-content-center">
            <img
              className="classifiedPhotoBig"
              src={`https://immo-backend.herokuapp.com${result[0].file}`}
              alt="new"
            />
          </div>
          <div className="d-flex flex-column classifiedImages">
            <img
              className="classifiedPhoto"
              src={`https://immo-backend.herokuapp.com${result[0].file}`}
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src={`https://immo-backend.herokuapp.com${result[0].file}`}
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src={`https://immo-backend.herokuapp.com${result[0].file}`}
              alt="new"
            />
          </div> 
          <div className="agency">
          <Card className="immo-agency mt-4">
            <div>
              <Card.Img src="https://static.immoweb.be/logos/3709747.gif?cache=2021411502473"></Card.Img>
            </div>
            <div>
              <Card.Title>Agency Example</Card.Title>
              <Card.Text>
                Gent
              </Card.Text>
            </div>
          </Card>
          </div>
          </Container>
          <Container fluid>
        <div className="classified-mobile m-2">
          <h2>{toUpperCase(result[0].type)} for {result[0].classifiedtype}</h2>
          <h4>{result[0].bedrooms} bdr.</h4>
          <h4>{toUpperCase(result[0].city)}</h4>
            <h1>€{result[0].price}</h1>
            <h6>Immo Code: {result[0]._id}</h6>
        </div>
        <div >
          <p className="lead text-justify m-2 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">{result[0].description}</p>
          </div>
      </Container>
      {/* <Container
        fluid
        className="classifiedContainer d-flex align-items-between"
      >
        
        <Container>
      
          <Row>
            <Col md={6}>
              <h2>{toUpperCase(result[0].type)} for {result[0].classifiedtype}</h2>
              <p>{result[0].bedrooms} bedrooms</p>
              <p>{toUpperCase(result[0].city)}</p>
              
            </Col>
            <Col md={3} className="d-column pt-3 classifiedImages">
              <h2>€{result[0].price}</h2>
             
            </Col>
            <Col md={3}>
              <p>Immo Code: {result[0]._id}</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col md={6} sm={6} >
           
            <img
              className="classifiedPhotoBig"
              src={`https://immo-website.herokuapp.com${result[0].file}`}
              alt="new"
            />
          </Col>
          <Col md={3} sm={0} className="d-column classifiedImages">
            
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
              alt="new"
            />
            <img
              className="classifiedPhoto"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
              alt="new"
            />
          </Col> 
        </Row>
        <p>{result[0].description}</p>
      </Container> */}
      </> }
    </>
  );
}

export default Classified;
