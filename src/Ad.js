import React from "react";
import { Container, Button, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { MdApartment, MdPostAdd } from 'react-icons/md'
import { GiFamilyHouse } from 'react-icons/gi'
import { useState } from 'react'
import { useFormik } from 'formik'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import * as yup from 'yup'


function Ad() {
  const [count, setCount] = useState(0)
  const [success, setSuccess] = useState("")
  const [radioValue, setRadioValue] = useState('1');

  const propertySchema =
  yup.object().shape({
    classifiedtype: yup.string().required('This field is required').test('classifiedtype', 'This field is required', value => value !== "Select one"),
    type: yup.string().required('This field is required'),
    city: yup.string().required('This field is required').test('city', 'This field is required', value => value !== "Select one"),
    price: yup.number().required('This field is required').min(100, 'Min value 100.')
    .max(1000000, 'Max value 1000000.'),
    bedrooms: yup.number().required('This field is required').min(0, 'Min value 0.')
    .max(10, 'Max value 10.'),
    description: yup.string().required('This field is required'),
    file: yup.mixed().required('File is required').test('fileSize', "File is too large", value => value.size <= 4000000).test("type", "Only the following formats are accepted: .jpeg, .jpg and .png", (value) => {
      return value && (
          value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png"
      );
  }),
  })

  const formik = useFormik({

    initialValues: {
    classifiedtype:"",
    type:"",
    city:"",
    price:"",
    bedrooms:"",
    description:"",
    file:""

    },
    validationSchema: propertySchema,
    onSubmit: (values) => {
      const formData = new FormData()
      formData.append('classifiedtype',values.classifiedtype)
      formData.append('type',values.type)
      formData.append('city',values.city.toLowerCase())
      formData.append('price',values.price)
      formData.append('bedrooms',values.bedrooms)
      formData.append('description',values.description)
      formData.append('file',values.file)
      fetch('https://immo-website.herokuapp.com/api/ad', {
        method: 'POST',
        headers: new Headers ({Accept: "application.json"}),
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSuccess(data.success)
          }
          if (data.error) {

          }

          return data
        })
      }
    })

    console.log(formik.values, formik.values.city, formik.values.bedrooms, "Hello")

  return (
    <>

      {count > 0 ? success === "" ?
        <Form onSubmit={formik.handleSubmit} enctype="multipart/form-data" method="post" action='/ad'>
            <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Type of classified</Form.Label>
            <Form.Select
            id="classifiedtype"
            name="classifiedtype"
            value={formik.values.classifiedtype}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
            <option value="Select one">Select one</option>
            <option value="rent">Rent</option>
            <option value="sale">Sell</option>
            </Form.Select>
      {formik.touched.classifiedtype && formik.errors.classifiedtype ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.classifiedtype}</Form.Label> : null}
          </Form.Group>
          <Form.Group
            className="mb-3">
            <Form.Label className="m-0">Type of property</Form.Label>
            <div className="d-flex justify-content-center align-items-center mt-2">
            <ButtonGroup
      value={formik.values.type}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
        <ToggleButton
            id="house"
            type="radio"
            variant="secondary"
            name="type"
            value="house"
            checked={radioValue === "house"}
            onChange={(e) => setRadioValue(e.target.value)}
            className="bg-transparent border mx-3 d-flex flex-column align-items-center"
            style={{

                paddingTop: "6%",
                paddingBottom: "6%",
                width: "30%",
                border: "solid 0.5px",

              }}
          >
              <GiFamilyHouse size={70} />
              <p>House</p>
          </ToggleButton>
          <ToggleButton
            id="appartment"
            type="radio"
            variant="secondary"
            name="type"
            value="appartment"
            checked={radioValue === "appartment"}
            onChange={(e) => setRadioValue(e.target.value)}
            className="bg-transparent border mx-3"
            style={{

                paddingTop: "6%",
                paddingBottom: "6%",
                width: "30%",
                border: "solid 0.5px",

              }}
          >
              <MdApartment size={70} />
              <p>Appartment</p>
          </ToggleButton>

          </ButtonGroup>
          </div>
          {formik.touched.type && formik.errors.type ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.type}</Form.Label> : null}
          </Form.Group>
          <Form.Group>
            <Form.Label >Adress</Form.Label>
            <Form.Select
            id="city"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}>
              <option value="Select one">Select one</option>
              <option value="Brussels">Brussels</option>
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
              <Form.Control
              className="text-center form-control"
              type="text"
              id="bedrooms"
              name="bedrooms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bedrooms}/>
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
            onBlur={formik.handleBlur}
            onChange={(e)=> {formik.setFieldValue('file', e.target.files[0])}}/>
            {formik.touched.file && formik.errors.file ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.file}</Form.Label> : null}
          </Form.Group>
          <Button className="d-block mx-auto mb-3" type="submit">Submit</Button>
        </Form>
        : 
        <Container  fluid className="d-flex flex-column justify-content-center align-items-center">
        <p className="lead">{success}</p>
        <Link to={"/"}><Button className="m-3">Go to homepage</Button></Link>
        </Container>
        :
        <Container className="d-flex flex-column justify-content-center text-center align-items-center">
      
              <MdPostAdd size={70} />
    
          


          <h2 className="my-3">Publication of your classified</h2>
          <p className="lead my-3">
            We recommend you to provide as many details as possible to optimize
            the quality of your classified.
          </p>
          <Button onClick={() => setCount(count + 1)} className="mx-auto m-4 btn-lg">Start</Button>
        </Container>
      }
    </>
  );
}

export default Ad;
