import React from "react";
import { Card, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'



function Search() {
  const { classifiedtype } = useParams()
  const { type } = useParams()
  const { city } = useParams()
  const [result, setResult] = useState([])
  const [value,setValue] = useState("Newest")

  // to get queries from URL

  const query = new URLSearchParams(useLocation().search);
  const minBedroomCount = query.get('minBedroomCount')
  const minPrice = query.get('minPrice')
  const maxPrice = query.get('maxPrice')

  useEffect(() => {
    const action = () => {
      fetch(`https://immo-backend.herokuapp.com/search/${classifiedtype}/${type}/${city}?minBedroomCount=${minBedroomCount}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then(res => res.json())
        .then(data => {
          setResult(data.sort((a,b) => { return new Date(b.created_at) - new Date(a.created_at)}))
          console.log(data)
        })
    }
    action() 
  }, [classifiedtype, type, city, minBedroomCount, minPrice, maxPrice])




  const sortEvent = (e) => {
     console.log(e.target.name)
     e.target.name === "Cheapest" ?
     setResult(result.sort((a,b) => { return a.price - b.price}))
     : e.target.name === "Most expensive" ?
     setResult(result.sort((a,b) => { return b.price - a.price}))
     : e.target.name === "Newest" ? 
     setResult(result.sort((a,b) => { return new Date(b.created_at) - new Date(a.created_at)})) : setResult(result)
    
  }

  console.log(result, "new")

  return (
    <>
      <Container fluid className="search-page-container d-flex flex-row justify-content-around align-items-start">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center">
      <Container fluid className="d-flex flex-row justify-content-end align-items-center mt-5">
        <h5 className="mx-2 my-1">Sort:</h5>
    <DropdownButton title={value}>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e);}} href="#" name="Newest">Newest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e);}} href="#" name="Cheapest">Cheapest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e); {console.log(e.target.name)}}} href="#" name="Most expensive">Most expensive</Dropdown.Item>
    </DropdownButton>
          </Container>  
         

          {result.length === 0 ? <p className="lead mt-4">No properties to show, try a different combination.</p> :
            result.map(item =>
              <Link to={`/classified/${item._id}`} className="text-decoration-none">
                <Card
                  style={{ maxWidth: "400px", maxHeight: "500px" }}
                  className="m-5 d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    style={{ maxWidth: "400px", maxHeight: "500px" }}
                    src={`https://immo-backend.herokuapp.com${item.file}`}
                    key={item.file}
                  />
                  <Card.Body className="align-items-center d-flex flex-column">
                    <Card.Title style={{ "fontSize": "1.9em" }}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
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
                      {(item.city).charAt(0).toUpperCase() + item.city.slice(1)}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            )}
        </Container>
        <Container fluid className="agency d-flex flex-column justify-content-center">
         <Card className="immo-agency">
            <div>
              <Card.Img src="https://static.immoweb.be/logos/francois.gif?cache=2022481309777"></Card.Img>
            </div>
            <div>
              <Card.Title>Agency Example</Card.Title>
              <Card.Text>
                Brussels
              </Card.Text>
            </div>
          </Card>
          <Card className="immo-agency">
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
          <Card className="immo-agency">
            <div>
              <Card.Img src="https://static.immoweb.be/logos/38321.gif?cache=2021310808307"></Card.Img>
            </div>
            <div>
              <Card.Title>Agency Example</Card.Title>
              <Card.Text>
                Charleroi
              </Card.Text>
            </div>
          </Card>
        </Container>
      </Container>

    </>
  );
}

export default Search;
