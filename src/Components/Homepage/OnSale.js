import React from 'react'
import {Carousel, Card, Button, Container} from 'react-bootstrap'

function OnSale() {
  return (
    <Container fluid classname="home-container">
    <Carousel className="d-flex justify-content-center m-4" indicators= {false} slide={false}>
        <Carousel.Item className="d-flex">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Carousel.Item>
        

    </Carousel>
    </Container>
  )
}

export default OnSale