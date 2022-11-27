import React from 'react'
import {useState, useContext} from 'react'
import Features from './Context/Features'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsSearch } from "react-icons/bs";
import {
    Modal,
    ButtonGroup,
    InputGroup,
    Form,
    Button
  } from "react-bootstrap";

import { useFormik } from 'formik'
import * as yup from 'yup'
import {useNavigate,  createSearchParams, } from 'react-router-dom'

function CriteriaModal({closeModal, modalShow}) {
    const [radioValue, setRadioValue] = useState('sale');
    const context = useContext(Features)
    const navigate = useNavigate();
    const propertySchema =
    yup.object().shape({
    minbedroom: yup.number().typeError("Please enter a number").min(1, 'Min 1').max(10, 'Max 10'),
    minbudget: yup.number().typeError("Please enter a number").min(0, 'Min 1').max(1000000, 'Max 10'),
    maxbudget: yup.number().typeError("Please enter a number").min(100, 'Min 100').max(1000000, 'Max 1000000')})
  
    const formik = useFormik({
  
      initialValues: {
      immocode: "",
      transaction:"sale",
      location:"allbelgium",
      type:"house",
      minbedroom:"",
      minbudget:"",
      maxbudget:"",
      },
      validationSchema: propertySchema,
      onSubmit: (values) => {
        }
      })
  
  
      context.setImmocode(formik.values.immocode)
      context.setClassifiedtype(formik.values.transaction)
      context.setPropertytype(formik.values.type)
      context.setCity(formik.values.location)
      context.setMinbedroom(formik.values.minbedroom)
      context.setMinbudget(formik.values.minbudget)
      context.setMaxbudget(formik.values.maxbudget)

    
    const params = { minBedroomCount: `${context.minbedroom}`, minPrice: `${context.minbudget}`, maxPrice: `${context.maxbudget}`, page:1, orderBy:"newest"}

    const clickAction = () => {
        navigate({
          pathname: `/search/${context.classifiedtype}/${context.propertytype}/${context.city}`,
          search: `?${createSearchParams(params)}`
        }); 
        closeModal()
      }

  return (
    <Modal
    size="lg"
    show={modalShow}
    onHide={closeModal}
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-sm">
        Criteria
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={formik.handleSubmit}>
            <InputGroup className="mb-3">
            <Form.Control 
              placeholder="Immo code"
              name="immocode" 
              id="immocode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.immocode}/>
              <InputGroup.Text>
              <BsSearch/>
              </InputGroup.Text>
            </InputGroup>
            <Form.Group
            className="mb-3">
              <Form.Label className="m-0">Transaction Type</Form.Label>
              <ButtonGroup 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.transaction} className="d-flex">
                  <Form.Check
                    inline
                    label="Buy"
                    name="transaction"
                    type="radio"
                    value="sale"
                    checked={radioValue === "sale"}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="Rent"
                    name="transaction"
                    type="radio"
                    value="rent"
                    checked={radioValue === "rent"}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  </ButtonGroup>
                  </Form.Group>
                  <Form.Group
            className="mb-3">
               <Form.Label className="m-0">Locations</Form.Label>
            <Form.Select
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}>
              <option value="allbelgium">All Belgium</option>
              <option value="brussels">Brussel</option>
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
            </Form.Group>
            <Form.Group>
            <Form.Label>Type of Property</Form.Label>
            <Form.Select
            name="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}>
              <option value="house">House</option>
              <option value="appartment">Appartment</option>
            </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Min number of bedrooms</Form.Label>
              <Form.Control 
              name="minbedroom" 
              id="minbedroom"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.minbedroom}/>
                {formik.touched.minbedroom && formik.errors.minbedroom ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.minbedroom}</Form.Label> : null}
            </Form.Group>
            <Form.Group>
            <Form.Label>Budget</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>Minimum</InputGroup.Text>
              <Form.Control 
              name="minbudget" 
              id="minbudget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.minbudget} />
              <InputGroup.Text>Maximum</InputGroup.Text>
              <Form.Control 
              name="maxbudget"
              id="maxbudget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maxbudget} />
            </InputGroup>
            {formik.touched.minbudget && formik.errors.minbudget ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.minbudget}</Form.Label> : null}
            {formik.touched.maxbudget && formik.errors.maxbudget ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.maxbudget}</Form.Label> : null}
            </Form.Group>
            </Form>
            {context.immocode !== "" ? <a href={`/classified/${context.immocode}`}><Button disabled={Object.keys(formik.errors).length > 0}>Search</Button></a> :
            <Button className="mt-3"disabled={Object.keys(formik.errors).length > 0} onClick= {clickAction}>Search</Button>}
    </Modal.Body>
  </Modal>
  )
}

export default CriteriaModal