import React from "react";
import { Card, Container, Dropdown, DropdownButton, Pagination, Button } from "react-bootstrap";
import { useEffect, useState, useMemo } from 'react'
import { useNavigate, createSearchParams, useParams, Link, useLocation  } from 'react-router-dom'
import CriteriaModal from "./CriteriaModal";



function Search() {
  const { classifiedtype } = useParams()
  const { type } = useParams()
  const { city } = useParams()
  const [result, setResult] = useState([])
  const [title,setTitle] = useState("Newest")
  const [active,setActive] = useState(1)
  const [pagenum, setPagenum] = useState(1)
  const [order, setOrder] = useState("newest")
  const navigate = useNavigate(); 
  const [modalShow, setModalShow] = React.useState(false);
  const closeModal = () =>{
      setModalShow(false);
  }
  const showModal = () => {
      setModalShow(true);
  }
 
  // to get queries from URL
  const query = new URLSearchParams(useLocation().search);
  const minBedroomCount = query.get('minBedroomCount')
  const minPrice = query.get('minPrice')
  const maxPrice = query.get('maxPrice')
  const page = query.get('page')
  const orderby = query.get('orderBy')

  const params = {minBedroomCount:`${minBedroomCount}`, minPrice:`${minPrice}`,maxPrice:`${maxPrice}`, page:active, orderBy:order}


  useEffect(() => {
    const action = () => {
      fetch(`http://localhost:4000/search/${classifiedtype}/${type}/${city}?minBedroomCount=${minBedroomCount}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&orderBy=${orderby}`)
        .then(res => res.json())
        .then(data => {
          data.length === 2 ?
          setResult(data[0]) : setResult(data)
          setPagenum((Math.ceil(data[1]/5)))
          console.log(data)
        })
    }
    action() 

    navigate({
      pathname: `/search/${classifiedtype}/${type}/${city}`,
      search: `?${createSearchParams(params)}`
    }) 
  }, [classifiedtype, type, city, minBedroomCount, minPrice, maxPrice, page, orderby,active,order])

  // scroll up when you click on the pagination
  
  useMemo(() => {
    window.scrollTo({top: 0})
  }, [active])

  const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // pagination

  let items = [];
  for (let number = 1; number <= pagenum; number++) {
  items.push(
    <Pagination.Item 
    onClick={() => {setActive(number)}} active={active===number} key={number}>
      {number} 
    </Pagination.Item>
    
  );
}
  return (
    <>
    <CriteriaModal closeModal={closeModal} modalShow={modalShow}/>
      <Container fluid className="search-page-container d-flex flex-row justify-content-around align-items-start">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center">
       
            <Container fluid className="d-flex flex-row justify-content-start align-items-center mt-5">
            <h3>{toUpperCase(type)} for {classifiedtype}</h3>
            <Button onClick={showModal} className="mx-2">Criteria</Button>
            
            </Container>
      <Container fluid className="d-flex flex-row justify-content-between align-items-center mt-5">
      <Pagination>{items}</Pagination>
      <div className="d-flex flex-row align-items-center">
        <h5 className="mx-2 my-1">Sort:</h5>
    <DropdownButton title={title}>
      <Dropdown.Item onClick={(e)=> {setOrder(e.target.name); setTitle(e.target.title)}} name="newest" title="Newest">Newest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=> {setOrder(e.target.name); setTitle(e.target.title)}}   name="cheapest" title="Cheapest" >Cheapest</Dropdown.Item>
      <Dropdown.Item onClick={(e)=>{setOrder(e.target.name); setTitle(e.target.title)}} name="most_expensive" title="Most expensive">Most expensive</Dropdown.Item>
    </DropdownButton>
    </div>
          </Container>  
          {result.length === 0 ? <p className="lead mt-4">No properties to show, try a different combination.</p> :
            result.map(item =>
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
            )}
            <Pagination>{items}</Pagination>
        </Container>
        <Container fluid className="agency d-flex flex-column justify-content-center">
         <Card className="immo-agency">
            <div>
              <img src="https://static.immoweb.be/logos/francois.gif?cache=2022481309777" alt="agency"></img>
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
              <img src="https://static.immoweb.be/logos/3709747.gif?cache=2021411502473" alt="agency"></img>
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
              <img src="https://static.immoweb.be/logos/38321.gif?cache=2021310808307" alt="agency"></img>
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
