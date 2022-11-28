import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SearchByCity() {
  return (
   <Container fluid  className="mt-3">
    <h3 className="p-3" style={{"color":"var(--blue)"}}>Search by city for sale</h3>
    <Container fluid className="m-3 searchbycity">
    <Row>
            <Col lg={2} md={4} sm={4} xs={6} className="p-2">
            <Link to="/search/sale/house/brussels">
        <Card style={{"backgroundImage": 'url("https://images.pexels.com/photos/1595085/pexels-photo-1595085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}} className="city" >
            Brussel
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/antwerp">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2017/06/21/22/03/antwerp-2428766_960_720.jpg")'}} className="city">
            Antwerp
        </Card>
       </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/gent">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2022/11/13/20/32/gent-7590139_960_720.jpg")'}} className="city">
            Gent
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/charleroi">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2018/11/21/17/59/belgium-3830167_960_720.jpg")'}} className="city">
            Charleroi
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/liege">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2020/12/06/12/58/liege-5808707_960_720.jpg")'}} className="city">
             Liège
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/bruges">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2017/08/08/14/44/tower-2611573_960_720.jpg")'}} className="city">
            Bruges
        </Card>
        </Link>
        </Col>
    </Row>
    <Row className="justify-content-xs-center align-items-xs-center">
            <Col lg={2} md={4} sm={4} xs={6} className="p-2">
            <Link to="/search/sale/house/namur">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2015/08/24/16/34/namur-905210_960_720.jpg")'}} className="city">
           Namur
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/leuven">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2015/02/23/14/18/leuven-646032_960_720.jpg")'}} className="city">
            Leuven
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/mons">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2016/08/08/16/05/belgium-1578636_960_720.jpg")'}} className="city">
            Mons
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/mechelen">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2022/03/04/20/53/city-7048002_960_720.jpg")'}} className="city">
            Mechelen
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/aalst">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2021/01/11/14/25/carnival-5908548_960_720.jpg")'}} className="city">
             Aalst
        </Card>
        </Link>
        </Col>
        <Col lg={2} md={4} sm={4} xs={6} className="p-2">
        <Link to="/search/sale/house/hasselt">
        <Card style={{"backgroundImage": 'url("https://cdn.pixabay.com/photo/2022/04/04/20/37/japanese-garden-7112380_960_720.jpg")'}} className="city">
            Hasselt
        </Card>
        </Link>
        </Col>
    </Row>
   </Container>
   </Container>
  )
}

export default SearchByCity