import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {FcNext} from 'react-icons/fc'
import {useEffect, useState} from 'react'

function ForRent() {
  const [result, setResult] = useState([])

  useEffect(() => {
    const action = () => {
      fetch(`https://immo-backend.herokuapp.com/latest`)
        .then(res => res.json())
        .then(data => {
          setResult(data)
          console.log(data)
        })
    }
    action()
  }, [])
  const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <Container fluid>
    <h3 className="search-container p-3" style={{"color":"var(--blue)"}}>Most Recent Properties</h3>
    <Container className="mb-3 d-flex flex-column justify-content-between justify-content-sm-center align-items-center flex-md-row flex-lg-row flex-xl-row">
    {result.length !== 0 ? 
    result.slice(0,2).map(item=> 
    <Card className="m-2" style={{"width":"22rem"}}>
      <Card.Img style={{"maxHeight":"200px"}} variant="top" src={`https://immo-backend.herokuapp.com${item.file}`} />
      <Card.Body>
        <Card.Title style={{"fontSize":"0.9em"}}>{toUpperCase(item.type)}</Card.Title>
        <Card.Title className="my-1" style= {{"fontSize":"1.4em"}}>€{item.price}</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"fontSize":"0.9em"}}>{item.bedrooms} bdr.</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"fontSize":"0.9em"}}>{toUpperCase(item.city)}</Card.Title>
      </Card.Body>
    </Card> )
    : "" }
    <Card className="m-2"style={{"width":"22rem"}}>
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title>See All Recent Properties</Card.Title>
          <Button href="/search/sale/house" style={{width:'50%', height:"20%", marginTop:'10px'}}><FcNext style={{fontSize: '40px'}}/></Button>
      </Card.Body>
    </Card>
    </Container>
    </Container>
  )
}

export default ForRent