import React from 'react'
import {Card, Button, Container,Row,Col} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OnSale() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Container fluid>
      <h1>Properties in the spotlight</h1>
      <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="1"
  containerClass="carousel-container"
  itemClass="carousel-item-padding-40-px"
>
<Card className="carousel-card m-3">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
    </Card>
    <Card className="carousel-card m-3">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
    </Card>
    <Card className="carousel-card m-3">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
    </Card>
    <Card className="carousel-card m-3">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
    </Card>
    <Card className="carousel-card m-3">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>House</Card.Title>
        <Card.Title>€189,000</Card.Title>
        <Card.Text>2 bdr. 520 m²</Card.Text>
        <Card.Text>Oudenaarde</Card.Text>
      </Card.Body>
    </Card>
</Carousel>
    </Container>
   
  )
}

export default OnSale