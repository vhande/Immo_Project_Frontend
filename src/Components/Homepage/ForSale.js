import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ForSale() {
  const [result, setResult] = useState([])

  useEffect(() => {
    const action = () => {
      fetch(`http://localhost:4000/getall`)
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

  console.log(result)

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
      items: 2,
      slidesToSlide: 1,

    }
  };
  return (
    <Container fluid className="mt-3">
      <h3 className="p-3" style={{ "color": "var(--blue)" }}>Properties in the spotlight</h3>
      <Carousel 
      responsive={responsive} 
      itemAriaLabel='forSale'
      swipeable={true}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="1"
      containerClass="container-with-dots"
      itemClass="px-3">
        {result.length !== 0 ? result.map(item =>
            <a href={`/classified/${item._id}`} className="text-decoration-none">
              <Card className="carousel-card" key={item._id}>
                <Card.Img className="card-img" variant="top" src={`http://localhost:4000${item.file}`} />
                <Card.Body>
                  <Card.Title style={{ "fontSize": "0.9em" }}>{toUpperCase(item.type)}</Card.Title>
                  <Card.Title className="my-1" style={{ "fontSize": "1.4em" }}>€{item.price}</Card.Title>
                  <Card.Title className="m-0 text-secondary" style={{ "fontSize": "0.9em" }}>{item.bedrooms} bdr.</Card.Title>
                  <Card.Title className="m-0 text-secondary" style={{ "fontSize": "0.9em" }}>{toUpperCase(item.city)}</Card.Title>
                </Card.Body>
              </Card>
            </a>
        ) : ""}
        <Card></Card>
      </Carousel>
    </Container>

  )
}

export default ForSale