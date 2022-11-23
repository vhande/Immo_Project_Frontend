import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {FcNext} from 'react-icons/fc'
import {useEffect, useState} from 'react'
import useMeasure from "react-use-measure";

function ForRent() {
  const [result, setResult] = useState([])
  const [ref, {height}] = useMeasure()

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
    <h3 className="p-3" style={{"color":"var(--blue)"}}>Most Recent Properties</h3>
    <Container fluid className="mb-3 d-flex flex-column flex-md-row flex-lg-row flex-xl-row  align-items-center">
    {result.length !== 0 ? 
    result.slice(0,2).map(item=> 
    <Card ref={ref} className="m-2" style={{width: "100%",height: "auto"}}>
      <Card.Img className="card-img" variant="top" src={`https://immo-backend.herokuapp.com${item.file}`} />
      <Card.Body>
        <Card.Title className="text-break" style={{"fontSize":"0.9em"}}>{toUpperCase(item.type)}</Card.Title>
        <Card.Title className="my-1 text-break" style= {{"fontSize":"1.4em"}}>€{item.price}</Card.Title>
        <Card.Title className="m-0 text-secondary text-break"style={{"fontSize":"0.9em"}}>{item.bedrooms} bdr.</Card.Title>
        <Card.Title className="m-0 text-secondary text-break" style={{"fontSize":"0.9em"}}>{toUpperCase(item.city)}</Card.Title>
      </Card.Body>
    </Card> )
    : "" }
    <Card className="m-2" style={{width: "100%",height: height}} >
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center pb-2">See All Recent Properties</Card.Title>
          <Button className="d-flex align-items-center justify-content-center" href="/search/sale/house" style={{width:'50%', height:"20%"}}><FcNext size="40px" color="white"/></Button>
      </Card.Body>
    </Card>
    </Container>
    </Container>
  )
}

export default ForRent