import React from "react";
import { Card, Container, Pagination, Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect, useState, useContext } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import Features from "./Context/Features";


function Search() {
  const { classifiedtype } = useParams()
  const { type } = useParams()
  const { city } = useParams()
  const [result, setResult] = useState([])
  const context = useContext(Features)
  const [sort,setSort] = useState("")

  // to get queries from URL

  const query = new URLSearchParams(useLocation().search);
  const minBedroomCount = query.get('minBedroomCount')
  const minPrice = query.get('minPrice')
  const maxPrice = query.get('maxPrice')

  useEffect(() => {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}?minBedroomCount=${minBedroomCount}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then(res => res.json())
        .then(data => {
          setResult(data)
          console.log(data)
        })
    }
    action()
  }, [classifiedtype, type, city])


  const clickEvent = (e) => {
  return e.target.name.length > 0 ? setSort(e.target.name) : ""
  sort.contains("Newest") ? result.map(item => item.created_at)

  }
  return (
    <>
      <Container fluid className="search-page-container d-flex flex-row justify-content-around align-items-start">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center">
      <Container fluid className="d-flex justify-content-end align-items-start">
    <DropdownButton className="mt-5" onClick={clickEvent} title={sort} value={sort}>
            <Dropdown.Item name="Newest" eventKey="1" href="#" active>Newest</Dropdown.Item>
            <Dropdown.Item name="Cheapest"eventKey="2" href="#">Most expensive</Dropdown.Item>
            <Dropdown.Item name="Most expensive" eventKey="3" href="#">
              Most expensive
            </Dropdown.Item>
          </DropdownButton>
          </Container>  

          {result.length === 0 ? "Loading" :
            result.map(item =>
              <Link to={`/classified/${item._id}`} className="text-decoration-none">
                <Card
                  style={{ maxWidth: "400px", maxHeight: "500px" }}
                  className="m-5 d-flex justify-content-center align-items-center">
                  <Card.Img
                    variant="top"
                    style={{ maxWidth: "400px", maxHeight: "500px" }}
                    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
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
