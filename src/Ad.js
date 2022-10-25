import React from "react";
import { Container, Nav, Button, Form } from "react-bootstrap";
import {MdApartment} from 'react-icons/md' 
import {GiFamilyHouse} from 'react-icons/gi'
import {useState} from 'react'
import { useFormik } from 'formik'


function Ad() {
  const [count,setCount] = useState(0)
  const formik = useFormik({

    initialValues: {
    type:"",
    city:"",
    price:"",
    floor:"",
    bedrooms:"",
    description:"",
    filename:""
    },
    validate,
    onSubmit: (values) => {
      fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // must be string data type !JSON.stringify!
        body: JSON.stringify(values, null, 2)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
        
          }
          if (data.error) {
           
          }

          return data
        })
      }
    })
  
    const validate = values => {
      const errors = {}
  
      if (!values.type) {
        errors.type = 'This field is required'
      }
      if (!values.city) {
        errors.city = 'This field is required'
      }
  
      if (!values.price) {
        errors.price = 'This field is required'
      }
      if (!values.floor) {
        errors.floor = 'This field is required'
      } else if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters long'
      }
  
      if (!values.bedrooms) {
        errors.bedrooms = 'This field is required'
      }
      else if (values.confirmation !== values.password) {
        errors.confirmation = "The passwords do not match"
      }

      if (!values.description) {
        errors.description = 'This field is required'
      }
      return errors
  
    }

  return (
    <>
    {count == 0 ?
      <Container className="d-flex flex-column justify-content-center text-center first-div">
        <h2>Publication of your classified</h2>
        <p>
          We recommend you to provide as many details as possible to optimize
          the quality of your classified.
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <Nav
            variant="pills"
            defaultActiveKey="sell"
            className="m-1 pills d-flex justify-content-center border rounded align-items-center"
          >
            <Nav.Item>
              <Nav.Link value="sell" eventKey="sell">Sell</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link value="sell" eventKey="rent">Rent</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <p>Select your property type and start making your classified</p>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="bg-transparent border m-3"
            style={{
              
              paddingTop: "6%",
              paddingBottom: "6%",
              width: "30%",
              border: "solid 0.5px",
              
            }}
          >
            <GiFamilyHouse size={70}/>
            <p>House</p>
          </Button>
          <Button value="appartment" className="bg-transparent border m-3"
            style={{
              
              paddingTop: "6%",
              paddingBottom: "6%",
              width: "30%",
              border: "solid 0.5px",
              
            }}
          >
            <MdApartment size={70}/>
            <p>Appartment</p>
          </Button>  
        </div>
        <Button onClick={()=>setCount(count + 1)}className="mx-auto m-4">Start</Button>
      </Container> : 
      <Form>
      <Form.Group>
        <Form.Label>
          Type of classified
        </Form.Label>
      </Form.Group>

      <Form.Group
      className="mb-3">
      <Form.Label className="m-0">Adress</Form.Label>
      <Form.Select aria-label="Default select example">
              <option value="Brussel">Brussel</option>
              <option value="Antwerp">Antwerp</option>
              <option value="Gent">Gent</option>
              <option value="Charleroi">Charleroi</option>
              <option value="Liège">Liège</option>
              <option value="Bruges">Bruges</option>
              <option value="Namur">Namur</option>
              <option value="Leuven">Leuven</option>
              <option value="Mons">Mons</option>
              <option value="Mechelen">Mechelen</option>
              <option value="Aalst">Aalst</option>
              <option value="Hasselt">Hasselt</option>
            </Form.Select>
    </Form.Group>
    <Form.Group
    className="mb-3">
    <Form.Label className="m-0">Price</Form.Label>
    </Form.Group>
    </Form>
     }
    </>
  );
}

export default Ad;
