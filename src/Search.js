import React from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { useEffect, useState, useContext} from 'react'
import { useParams, Link , useSearchParams, useLocation} from 'react-router-dom'
import Features from "./Context/Features";


function Search() {
  const {classifiedtype}  = useParams()
  const {type} = useParams()
  const {city} = useParams()
  const [result, setResult] = useState([])
  const context = useContext(Features)

  // to get queries from URL

  const query = new URLSearchParams(useLocation().search);
  const minBedroomCount = query.get('minBedroomCount')
  const minPrice = query.get('minPrice')
  const maxPrice = query.get('maxPrice')

  useEffect(()=> {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}?minBedroomCount=${minBedroomCount}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then(res=>res.json())
      .then(data=>
        { setResult(data)
          console.log(data)})
       }
    action()     
  },[classifiedtype, type, city ])

  return (
    <>
      <Container className="d-flex flex-column align-items-center">
            {result.length === 0 ? "Loading" :
    result.map(item => 
      <Link to={`/classified/${item._id}`} className="text-decoration-none">
              <Card className="m-3">
                <Card.Img
                  variant="top"
                  className="card-img"
                  src={`http://localhost:4000${item.file}`}
                  key={item.file}
                />
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
                  )}
      </Container>
  
    </>
  );
}

export default Search;
