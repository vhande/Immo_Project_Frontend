import React from "react";
import { Container, Button, Form, ButtonGroup, ToggleButton, Spinner } from "react-bootstrap";
import { MdApartment, MdPostAdd } from 'react-icons/md'
import { GiFamilyHouse } from 'react-icons/gi'
import { useState, useRef } from 'react'
import { useFormik } from 'formik'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

//hello
function Ad() {
  const [count, setCount] = useState(0)
  const [success, setSuccess] = useState("")
  const [radioValue, setRadioValue] = useState('1');
  const btnRef = useRef(null);
  const spinnerRef = useRef(null);

  const SUPPORTED_FORMATS = ["image/jpeg","image/jpg","image/png"]

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
    file: yup.mixed().required('File is required').test('fileSize', 'File is too large, max 1MB', (value) => value === undefined || (value && value.size <= 1000000)).test(
      'fileFormat',
      'Unsupported file type',
      (value) => value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    )
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
      fetch('https://immo-backend.onrender.com/ad', {
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
  
    const preventDoubleclick = () => {
      if(btnRef.current){
        btnRef.current.setAttribute("disabled", "disabled");
        spinnerRef.current.removeAttribute("hidden");
        formik.handleSubmit();
      }
    }

  return (
    <>
    
      {count > 0 ? success === "" ?
      <Container fluid style={{maxWidth:"700px"}} className="d-flex flex-column justify-content-center align-items-center mt-3">
        <Form onSubmit={formik.handleSubmit} encType="multipart/form-data" method="post" action='/ad'>
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
      onChange={formik.handleChange}>
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
              <option value="brussels">Brussels</option>
              <option value="antwerp">Antwerp</option>
              <option value="gent">Gent</option>
              <option value="charleroi">Charleroi</option>
              <option value="liege">Liège</option>
              <option value="bruges">Bruges</option>
              <option value="namur">Namur</option>
              <option value="leuven">Leuven</option>
              <option value="mons">Mons</option>
              <option value="mechelen">Mechelen</option>
              <option value="aalst">Aalst</option>
              <option value="hasselt">Hasselt</option>
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
          <Button ref={btnRef} className="d-block mx-auto mb-3" onClick={preventDoubleclick} type="submit" disabled={Object.keys(formik.errors).length > 0}>
          <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          variant="light"
          className="mx-1"
          ref={spinnerRef}
          hidden
        />
        Submit
        </Button>
        </Form>
        </Container>
        : 
        <Container  fluid className="center-div d-flex flex-column justify-content-center align-items-center">
        <p className="lead">{success}</p>
        <Link to={"/"}><Button className="m-3">Go to homepage</Button></Link>
        </Container>
        :
        <Container fluid className="center-div d-flex flex-column justify-content-center align-items-center">
              <MdPostAdd size={70} />
          <h2 className="my-3 text-center">Publication of your classified</h2>
          <p className="lead my-3 text-center">
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
