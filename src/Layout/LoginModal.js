import React from 'react'
import {Modal, Button, Container, Row, Col, InputGroup, Form} from 'react-bootstrap'
import {BsCheckLg} from "react-icons/bs"

function LoginModal({closeModal, modalShow}) {
  return (
    <Modal size={700} show={modalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log in to enjoy all features</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col>

        <Modal.Body><h5>Create your account</h5></Modal.Body>
        <p><span><BsCheckLg/></span> Receive useful tips and tricks to better buy and sell</p>
        <p><span><BsCheckLg/></span> Receive useful tips and tricks to better buy and sell</p>
        <p><span><BsCheckLg/></span> Receive useful tips and tricks to better buy and sell</p>
        <p><span><BsCheckLg/></span> Receive useful tips and tricks to better buy and sell</p>
        
          <Button style={{marginBottom:"1rem"}} variant="secondary" onClick={closeModal}>
            Register
          </Button>
          
        
          </Col>
        <Col style={{borderLeft:"0.1px solid rgba(214, 178, 196, 0.8)"}}>
        <Modal.Body><h5>I already have an account</h5></Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        
          <Button variant="secondary" onClick={closeModal}>
            Login
          </Button>
          
        
        </Col>
        </Row>
        </Container>
      </Modal>
  )
}

export default LoginModal