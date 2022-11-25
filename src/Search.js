import React from "react";
import { Card, Container, Dropdown, DropdownButton, Pagination } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useNavigate, createSearchParams, useParams, Link, useLocation } from 'react-router-dom'



function Search() {
  const { classifiedtype } = useParams()
  const { type } = useParams()
  const { city } = useParams()
  const [result, setResult] = useState([])
  const [value,setValue] = useState("Newest")
  const [active,setActive] = useState(1)
  const navigate = useNavigate(); 


  // to get queries from URL

  const query = new URLSearchParams(useLocation().search);
  const minBedroomCount = query.get('minBedroomCount')
  const minPrice = query.get('minPrice')
  const maxPrice = query.get('maxPrice')
  const page = query.get('page')

  useEffect(() => {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}?minBedroomCount=${minBedroomCount}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}`)
        .then(res => res.json())
        .then(data => {
          setResult(data.sort((a,b) => { return new Date(b.created_at) - new Date(a.created_at)}))
          console.log(data)
        })
    }
    action() 

  }, [classifiedtype, type, city, minBedroomCount, minPrice, maxPrice, page])


  const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const sortEvent = (e) => {
     console.log(e.target.name)
     e.target.name === "Cheapest" ?
     setResult(result.sort((a,b) => { return a.price - b.price}))
     : e.target.name === "Most expensive" ?
     setResult(result.sort((a,b) => { return b.price - a.price}))
     : e.target.name === "Newest" ? 
     setResult(result.sort((a,b) => { return new Date(b.created_at) - new Date(a.created_at)})) : setResult(result)
    
  }
  const params = {page:`${active}`, minBedroomCount: `${minBedroomCount}`, }
  const clickAction = () => {
    navigate({
      pathname: `/search/${classifiedtype}/${type}/${city}`,
      search: `?${createSearchParams(params)}`
    }); 
  }


  let items = [];
  for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item 
    onClick={(e) => {setActive(number); clickAction();}} name={number} active={active===number}>
      {number}
    </Pagination.Item>,
    
  );
}

  console.log(result)

  return (
    <>
      <Container fluid className="search-page-container d-flex flex-row justify-content-around align-items-start">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center">
        <h4>{toUpperCase(type)} for {classifiedtype}</h4>
          <Container fluid className="d-flex flex-row justify-content-between align-items-center">
            <Container className="d-flex flex-row justify-content-start align-items-center mt-5">
            <Pagination>{items}</Pagination>
            </Container>
      <Container className="d-flex flex-row justify-content-end align-items-center mt-5">
        <h5 className="mx-2 my-1">Sort:</h5>
    <DropdownButton title={value}>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e);}} href="#" name="Newest">Newest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e);}} href="#" name="Cheapest">Cheapest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>{setValue(e.target.name); sortEvent(e); {console.log(e.target.name)}}} href="#" name="Most expensive">Most expensive</Dropdown.Item>
    </DropdownButton>
          </Container>  
          </Container>
         
          
          {result.length === 0 ? <p className="lead mt-4">No properties to show, try a different combination.</p> :
            result.map(item =>
              <>
              <Link to={`/classified/${item._id}`} className="text-decoration-none"
              key={item._id}>
                <Card
                  style={{ maxWidth: "400px", maxHeight: "500px" }}
                  className="m-5 d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    style={{ maxWidth: "400px", maxHeight: "500px" }}
                    src={item.file}
                  />
                  <Card.Body className="align-items-center d-flex flex-column">
                    <Card.Title style={{ "fontSize": "1.9em" }}>
                      {toUpperCase(item.type)}
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
                      {toUpperCase(item.city)}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
              </>
            )}
        </Container>
        <Container fluid className="agency d-flex flex-column justify-content-center">
         <Card className="immo-agency">
            <div>
              <img src="https://static.immoweb.be/logos/francois.gif?cache=2022481309777"></img>
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
              <img src="https://static.immoweb.be/logos/3709747.gif?cache=2021411502473"></img>
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
              <img src="https://static.immoweb.be/logos/38321.gif?cache=2021310808307"></img>
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
