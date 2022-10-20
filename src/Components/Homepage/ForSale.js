import React from 'react'
import {Card, Container} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ForSale() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
     
    }
  };
  return (
    <Container fluid className="mt-3">
      <h3 className="p-3" style={{"color":"var(--blue)"}}>Properties in the spotlight</h3>
      <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="1"
  containerClass="container-with-dots"
  itemClass="px-3"
>
<Card className="carousel-card">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="carousel-card">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="carousel-card">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="carousel-card">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
    <Card className="carousel-card">
      <Card.Img className="card-img" variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title style={{"font-size":"0.9em"}}>House</Card.Title>
        <Card.Title className="my-1" style= {{"font-size":"1.4em"}}>€189,000</Card.Title>
        <Card.Title className="m-0 text-secondary"style={{"font-size":"0.9em"}}>2 bdr. 520 m²</Card.Title>
        <Card.Title className="m-0 text-secondary" style={{"font-size":"0.9em"}}>Oudenaarde</Card.Title>
      </Card.Body>
    </Card>
</Carousel>
    </Container>
   
  )
}

export default ForSale