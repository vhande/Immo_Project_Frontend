import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

function SearchByCity() {
  return (
   <Container>
    <h1>Search by city for sale</h1>
    <Row>
            <Col md={2}>
        <Card>
            Brussel
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Antwerp
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Gent
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Charleroi
        </Card>
        </Col>
        <Col md={2}>
        <Card>
             Liège
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Bruges
        </Card>
        </Col>
    </Row>

    <Row>
            <Col md={2}>
        <Card>
           Namur
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Leuven
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Mons
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Charleroi
        </Card>
        </Col>
        <Col md={2}>
        <Card>
             Liège
        </Card>
        </Col>
        <Col md={2}>
        <Card>
            Bruges
        </Card>
        </Col>
    </Row>

   </Container>
  )
}

export default SearchByCity