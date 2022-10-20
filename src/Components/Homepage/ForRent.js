import React from 'react'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'
import {GrNext} from 'react-icons/gr'

function ForRent() {
  return (
    <>
    <h3 className="p-3" style={{"color":"var(--blue)"}}>Most Popular Properties</h3>
    <Container className="mb-3 d-flex justify-content-between">
    <Card className="mx-2" style={{"width":"22rem"}}>
      <Card.Img style={{"max-height":"200px"}} variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2" style={{"width":"22rem"}}>
      <Card.Img style={{"max-height":"200px"}} variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2"style={{"width":"22rem"}}>

      <Card.Body className="d-flex  flex-column align-items-center justify-content-center">
          <Card.Title>See All Popular Properties</Card.Title>
          <Button><GrNext fill="#FFFF" /></Button>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default ForRent