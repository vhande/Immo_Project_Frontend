import React from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
  const {classifiedtype}  = useParams()
  const {type} = useParams()
  const {city} = useParams()

  useEffect(()=> {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}`)
      .then(res=>res.json())
      .then(data=>console.log(data))
       }
    action()     
  },[classifiedtype, type, city ])

  return (
    <>
      <Container className="d-flex align-items-center">
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
                />
              </Card>
              <Card>
                <Card.Body className="align-items-center d-flex flex-column">
                  <Card.Title style={{ "fontSize": "1.9em" }}>
                    House
                  </Card.Title>
                  <Card.Title className="my-1" style={{ "fontSize": "1.4em" }}>
                    €189,000
                  </Card.Title>
                  <Card.Title
                    className="mt-1 text-secondary"
                    style={{ "fontSize": "1em" }}
                  >
                    2 bdr. 520 m²
                  </Card.Title>
                  <Card.Title
                    className="m-0 text-secondary"
                    style={{ "fontSize": "1em" }}
                  >
                    Oudenaarde
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Search;
