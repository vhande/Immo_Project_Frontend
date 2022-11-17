import React from "react";
import { Card, Container} from "react-bootstrap";
import { useEffect, useState, useContext} from 'react'
import { useParams, Link, useLocation} from 'react-router-dom'
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
      <Container fluid className="d-flex justify-content-evenly align-items-start">
        <div>
            {result.length === 0 ? "Loading" :
    result.map(item => 
      <Link to={`/classified/${item._id}`} className="text-decoration-none">
              <Card 
              style={{maxWidth:"400px",maxHeight:"500px"}}
              className="m-5 d-flex justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  style={{maxWidth:"400px",maxHeight:"500px"}}
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=450"
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
                  </div>
                  <div className="agency">
                  <Card border="primary" className="m-5" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Home Immo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" className="m-5" style={{ width: '18rem' }}>
        <Card.Header>Immo Agency</Card.Header>
        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet auctor orci. Pellentesque pretium risus erat, quis suscipit purus tristique pharetra. Integer tincidunt ante sit amet lobortis ullamcorper. Sed bibendum leo lacus, eget elementum massa semper eu. In aliquam ac nisl vel rhoncus. Sed eget sagittis sapien. Nulla facilisi.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" className="m-5" style={{ width: '18rem' }}>
        <Card.Header>Immo Agency</Card.Header>
        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet auctor orci.
          </Card.Text>
        </Card.Body>
      </Card>
                  </div>
      </Container>
  
    </>
  );
}

export default Search;
