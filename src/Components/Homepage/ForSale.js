import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'

function ForSale() {
  const [result, setResult] = useState([])

  useEffect(() => {
    const action = () => {
      fetch(`https://immo-backend.onrender.com/getall`)
        .then(res => res.json())
        .then(data => {
          setResult(data)
        })
    }
    action()
  }, [])

  const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
       swipeable={false}
       draggable={false}
       showDots={false}
       infinite={true}
       responsive={responsive}
       keyBoardControl={true}
       customTransition="all .5"
       containerClass="carousel-container"
      itemAriaLabel='forSale'>
        {result.length !== 0 ? result.map(item =>
            <Link key={item._id}
            to={`/classified/${item._id}`}>
              <Card 
              className="mx-3">
                <Card.Img 
                className="card-img" 
                variant="top" 
                src={`${item.file}`} />
                <Card.Body>
                  <Card.Title 
                  className="text-break" 
                  style={{ "fontSize": "0.9em" }}>{toUpperCase(item.type)}
                  </Card.Title>
                  <Card.Title 
                  className="my-1 text-break"      
                  style={{ "fontSize": "1.4em" }}>
                  €{formatNumber(item.price)}
                  </Card.Title>
                  <Card.Title 
                  className="m-0 text-secondary text-break"
                  style={{ "fontSize": "0.9em" }}>
                  {item.bedrooms} bdr.
                  </Card.Title>
                  <Card.Title 
                  className="m-0 text-secondary text-break"
                  style={{ "fontSize": "0.9em" }}>{toUpperCase(item.city)}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
        ) : ""}
      </Carousel>
    </Container>

  )
}

export default ForSale