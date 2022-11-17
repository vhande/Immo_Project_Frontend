import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';

function Classified() {
  const { id } = useParams();
  const [result, setResult] = useState([])

  useEffect(()=> {
    const action = () => {
      fetch(`https://immo-website.herokuapp.com/api/classified/${id}`)
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
      <Container
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
      </Container>
      </> }
    </>
  );
}

export default Classified;
