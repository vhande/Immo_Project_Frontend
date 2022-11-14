import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

function SearchByCity() {
  return (
   <Container fluid  className="mt-3">
    <h3 className="p-3" style={{"color":"var(--blue)"}}>Search by city for sale</h3>
    <Container fluid className="m-3 searchbycity">
    <Row>
            <Col lg={2} md={4} sm={4} xs={6} className="p-2">
            <a href="/search/sale/house/brussels">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/brussels.jpg")'}} className="city" >
            Brussel
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/antwerp">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/antwerp.jpg")'}} className="city">
            Antwerp
        </Card>
       </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/gent">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/gent.jpg")'}} className="city">
            Gent
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/charleroi">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/charleroi.jpg")'}} className="city">
            Charleroi
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/liege">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/liege.jpg")'}} className="city">
             Liège
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/bruges">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/brugge.jpg")'}} className="city">
            Bruges
        </Card>
        </a>
        </Col>
    </Row>
    <Row className="justify-content-xs-center align-items-xs-center">
            <Col lg={2} md={4} sm={4} xs={6} className="p-2">
            <a href="/search/sale/house/namur">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/namur.jpg")'}} className="city">
           Namur
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/leuven">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/leuven.jpg")'}} className="city">
            Leuven
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/mons">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/mons.jpg")'}} className="city">
            Mons
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/mechelen">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/mechelen.jpg")'}} className="city">
            Mechelen
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/aalst">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/aalst.jpg")'}} className="city">
             Aalst
        </Card>
        </a>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <a href="/search/sale/house/hasselt">
        <Card style={{"backgroundImage": 'url("https://assets.immoweb.be/95/images/artworks/cities/hasselt.jpg")'}} className="city">
            Hasselt
        </Card>
        </a>
        </Col>
    </Row>
   </Container>
   </Container>
  )
}

export default SearchByCity