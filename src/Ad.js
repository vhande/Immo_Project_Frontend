import React from "react";
import { Container, Nav, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { MdApartment } from 'react-icons/md'
import { GiFamilyHouse } from 'react-icons/gi'
import { useState } from 'react'
import { useFormik } from 'formik'
import { AiFillCloseCircle } from 'react-icons/ai'
import * as yup from 'yup'


function Ad() {
  const [count, setCount] = useState(0)
  const [bedroom, setBedroom] = useState(0)
  const [submit, setSubmit] = useState(false)


  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Sell', value: 'sell' },
    { name: 'Rent', value: 'rent' },
  ];


  const bedroomAdd = () => {
    setBedroom(bedroom + 1)
  }

  const bedroomRemove = () => {
    if (bedroom > 0) {
      setBedroom(bedroom - 1)
    }
  }


  // const submitEvent = () => {
  //   setSubmit(true)
  // }

  
  const propertySchema = 
  yup.object().shape({
    classifiedtype: yup.string().required('This field is required'),
    propertytype: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    price: yup.number().required('This field is required').min(100, 'Min value 100.')
    .max(1000000, 'Max value 1000000.'),
    bedrooms: yup.number().required('This field is required').min(0, 'Min value 0.')
    .max(10, 'Max value 10.'),
    description: yup.string().required('This field is required'),
    // file: yup.mixed().required('File is required')
  })

  const formik = useFormik({

    initialValues: {
    classifiedtype:"",
    propertytype:"",
    city:"",
    price:"",
    bedrooms:"",
    description:"",
    picture:"",
    file:""

    },
    validationSchema: propertySchema,
    onSubmit: (values) => {
      const formData = new FormData()
      formData.append('classifiedtype',values.classifiedtype)
      formData.append('propertype',values.propertytype)
      formData.append('file',values.file)
      fetch('http://localhost:4000/ad', {
        method: 'POST',
        headers: new Headers ({Accept: "application.json"}),
        body: formData
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

  return (
    <>

      {count > 0 ? submit === false ?
        <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data" method="post" action='/ad'>
            <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Type of classified</Form.Label>
            <div className="d-flex justify-content-center align-items-center">
              {console.log(formik.values, formik.values.city, formik.values.bedrooms, "Hello")}
      <ButtonGroup 
      className="mb-2 border"
      value={formik.values.classifiedtype}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="classifiedtype"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      {formik.touched.classifiedtype && formik.errors.classifiedtype ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.classifiedtype}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Property Type</Form.Label>
            <Form.Select
            name="propertytype"
            id="propertytype"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertytype}>
              <option value="Select one" selected>Select one</option>
              <option value="Brussel">House</option>
              <option value="Antwerp">Appartment</option>
            </Form.Select>
            {formik.touched.propertytype && formik.errors.propertytype ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.propertytype}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Adress</Form.Label>
            <Form.Select
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}>
              <option value="Select one">Select one</option>
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
            {formik.touched.city && formik.errors.city ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.city}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Requested property price</Form.Label>
            <Form.Control 
            type="text" 
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}/>
             {formik.touched.price && formik.errors.price ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.price}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Number of bedrooms</Form.Label>
            <div className="d-flex justify-content-around align-items-center">
              <Button onClick={bedroomRemove}>-</Button>
              <Form.Control 
              className="text-center form-control"
              type="text"
              id="bedrooms"
              name="bedrooms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bedrooms}/>
              <Button onClick={bedroomAdd}>+</Button>
            </div>
            {formik.touched.bedrooms && formik.errors.bedrooms ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.bedrooms}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Description of your classified</Form.Label>
            <Form.Control 
            as="textarea"
            name="description" 
            rows={3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}/>
            {formik.touched.description && formik.errors.description ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.description}</Form.Label> : null}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Pictures</Form.Label>
            <Form.Control 
            type="file"
            name="file"
            onChange={(e)=> formik.setFieldValue('file', e.target.files[0])}/>
           
            {/* {formik.touched.file && formik.errors.file ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.file}</Form.Label> : null} */}
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        : "Successful"
        :
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
            <Button value="house" className="btnad bg-transparent border m-3"
              style={{

                paddingTop: "6%",
                paddingBottom: "6%",
                width: "30%",
                border: "solid 0.5px",

              }}
            >
              <GiFamilyHouse size={70} />
              <p>House</p>
            </Button>
            <Button value="appartment" className="btnad bg-transparent border m-3"
              style={{

                paddingTop: "6%",
                paddingBottom: "6%",
                width: "30%",
                border: "solid 0.5px",

              }}
            >
              <MdApartment size={70} />
              <p>Appartment</p>
            </Button>
          </div>
          <Button onClick={() => setCount(count + 1)} className="mx-auto m-4">Start</Button>
        </Container>
      }
    </>
  );
}

export default Ad;
