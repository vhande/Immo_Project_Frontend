import React from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Search() {
  const {classifiedtype}  = useParams()
  const {type} = useParams()
  const {city} = useParams()
  const [result, setResult] = useState([])

  useEffect(()=> {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}`)
      .then(res=>res.json())
      .then(data=>
        { setResult(data)
          console.log(data)})
       }
    action()     
  },[classifiedtype, type, city ])

  return (
    <>
    {result.length === 0 ? "Loading" :
    result.map(item => 
      <Container className="d-flex align-items-center">
        <Row>
          <Col>
            <CardGroup>
            <Link to={`/classified/${item._id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:4000${item.file}`}
                  key={item.file}
                />
              </Card>
              <Card>
                <Card.Body className="align-items-center d-flex flex-column">
                  <Card.Title style={{ "fontSize": "1.9em" }}>
                  {item.type.charAt(0).toUpperCase()+ item.type.slice(1)}
                  </Card.Title>
                  <Card.Title className="my-1" style={{ "fontSize": "1.4em" }}>
                  €{item.price}
                  </Card.Title>
                  <Card.Title
                    className="mt-1 text-secondary"
                    style={{ "fontSize": "1em" }}
                  >
                     {item.bedrooms} bdr.
                  </Card.Title>
                  <Card.Title
                    className="m-0 text-secondary"
                    style={{ "fontSize": "1em" }}
                  >
                    {(item.city).charAt(0).toUpperCase()+ item.city.slice(1)}
                  </Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      )  }
    </>
  );
}

export default Search;
