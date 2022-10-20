import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import './Style/shortpage.css'

function CreateAccount() {
  return (
    <Container fluid className="form-container d-flex flex-column align-items-center justify-content-center">
      <h4>Create an account</h4>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">First name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Last name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Password confirmation</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button className="mb-3" type="submit">
        Create my account
      </Button>
      </Form>
    </Container>
  )
}

export default CreateAccount