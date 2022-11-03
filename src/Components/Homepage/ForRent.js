import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import {FcNext} from 'react-icons/fc'

function ForRent() {
  return (
    <Container fluid>
    <h3 className="search-container p-3" style={{"color":"var(--blue)"}}>Most Popular Properties</h3>
    <Container className="mb-3 d-flex flex-column justify-content-between  flex-md-row flex-lg-row flex-xl-row">
    <Card className="m-2" style={{"width":"22rem"}}>
      <Card.Img style={{"max-height":"200px"}} variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="m-2" style={{"width":"22rem"}}>
      <Card.Img style={{"max-height":"200px"}} variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="m-2"style={{"width":"22rem"}}>

      <Card.Body className="d-flex  flex-column align-items-center  justify-content-center">
          <Card.Title>See All Popular Properties</Card.Title>
          <Button style={{width:'50%', height:"20%", marginTop:'10px'}}><FcNext style={{fontSize: '40px'}}/></Button>
      </Card.Body>
    </Card>
    </Container>
    </Container>
  )
}

export default ForRent