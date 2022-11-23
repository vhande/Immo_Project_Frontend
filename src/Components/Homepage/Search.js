import React from 'react'
import {Container,Card, Nav, Button, Row, Col} from 'react-bootstrap'
import {useEffect, useContext} from 'react'
import Features from '../../Context/Features'
import { AutoComplete, Input, Select } from 'antd';

function Search() {

const context = useContext(Features)

console.log(context.propertytype, context.classifiedtype, context.city)

  useEffect(()=> {
      if (context.classifiedtype === "") {
        context.setClassifiedtype("rent") }
      else if (context.propertytype === "") {
        context.setPropertytype("house")
      }
    },[context])

      const clickEvent = (e) => {
      context.setClassifiedtype(e.target.id)
    }

     const autocompleteEvent = (e) => {
      context.setCity(e.target.value.toLowerCase())
     }


    
    const options = [
      {value: "Brussels"}, {value:"Antwerp"}, {value:"Gent"}, {value:"Charleroi"}, {value:"Liege"}, {value:"Bruges"}, {value:"Namur"}, {value:"Leuven"}, {value:"Mons"}, {value:"Mechelen"}, {value:"Aalst"}, {value:"Hasselt"}, 
    ];
    

  return (
    
    <Container fluid className="search-container">
        <Card className="border-0 d-flex p-5 bg-light justify-content-center align-items-center">
        <Nav variant="pills" className="m-3 pills d-flex justify-content-center border rounded align-items-center"  defaultActiveKey="rent" onClick={(e)=>{clickEvent(e)}}>
        <Nav.Item >
        <Nav.Link   id="rent" eventKey="rent" >Rent</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link   id="sale" eventKey="buy" >Buy</Nav.Link>
      </Nav.Item>
    </Nav>
    <Row>
    <div className="d-flex flex-column justify-content-center align-items-center flex-md-row flex-lg-row flex-xl-row">
      <Select 
      size="large"
      defaultValue="house"
      style={{
        width: 200,
    
      }}
      onChange={(value)=>{context.setPropertytype(value)}} 
      options={[
        {
          value: 'house',
          label: 'House',
        },
        {
          value: 'appartment',
          label: 'Appartment',
        },]} />
 

  
    <AutoComplete
    popupClassName="certain-category-search-dropdown"
    filterOption={true}
   
    style={{
      width: 200,

    }}
    options={options}
  >
    <Input.Search onChange={(e)=>{autocompleteEvent(e)}} size="large" placeholder="Where?" onSelect={(e)=>{autocompleteEvent(e)}} />
  </AutoComplete>

 </div>
    </Row>
    
    <a href={`/search/${context.classifiedtype}/${context.propertytype}/${context.city}`}><Button className="m-3 ">Search on the list</Button></a>
        </Card>
    </Container>
  )
}

export default Search