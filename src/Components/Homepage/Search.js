import React from 'react'
import {Container,Card, Nav, Button, Row, Col} from 'react-bootstrap'
import {useEffect, useContext} from 'react'
import Features from '../../Context/Features'
import { AutoComplete, Input, Select } from 'antd';
import {useNavigate,  createSearchParams, } from 'react-router-dom'

function Search() {

const context = useContext(Features)
const params = {page:"1"}
const navigate = useNavigate();

console.log(context.propertytype, context.classifiedtype, context.city)

  useEffect(()=> {
        context.setClassifiedtype("rent")
        context.setPropertytype("house")
      },[])

      const clickEvent = (e) => {
      context.setClassifiedtype(e.target.id)
    }

     const autocompleteEvent = (e) => {
      context.setCity(e.target.value.toLowerCase())
     }


    
    const options = [
      {value:"All Belgium"}, {value: "Brussels"}, {value:"Antwerp"}, {value:"Gent"}, {value:"Charleroi"}, {value:"Liege"}, {value:"Bruges"}, {value:"Namur"}, {value:"Leuven"}, {value:"Mons"}, {value:"Mechelen"}, {value:"Aalst"}, {value:"Hasselt"}, 
    ];

    const clickAction = () => {

      navigate({
        pathname: `/search/${context.classifiedtype}/${context.propertytype}/${context.city}`,
        search: `?${createSearchParams(params)}`
      }); 
    }
    

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
      className="mb-1"
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
    <Input.Search className="no-radius mb-1" onChange={(e)=>{autocompleteEvent(e)}} size="large" placeholder="Where?" onSelect={(e)=>{autocompleteEvent(e)}} />
  </AutoComplete>

 </div>
    </Row>
    
   <Button className="m-3" onClick={clickAction}>Search on the list</Button>
        </Card>
    </Container>
  )
}

export default Search