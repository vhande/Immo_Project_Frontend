import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {GrNext} from 'react-icons/gr'

function ForRent() {
  return (
    <>
    <h1>Most Popular Properties</h1>
    <Container className="d-flex justify-content-center">
    <Card className="m-3" border="dark" style={{ width: '25rem' }}>
        <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
      </Card>
      <br />
      <Card className="m-3 " border="dark" style={{ width: '25rem' }}>
           <Card.Body className="d-flex  flex-column align-items-center justify-content-center">
          <Card.Title>See All Popular Properties</Card.Title>
          <Button><GrNext/></Button>
          </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default ForRent