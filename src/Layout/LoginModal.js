import React from 'react'
import {Modal, Button, Container, Row, Col, InputGroup, Form} from 'react-bootstrap'
import {BsCheckLg} from "react-icons/bs"
import {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import { AiFillCloseCircle, AiFillEye } from 'react-icons/ai'

function LoginModal({closeModal, modalShow}) {
  const email = useRef(null)
  const password = useRef(null)
  const [err, setErr] = useState("")
  const [show, setShow] = useState("password")

  const clickEvent = () => {
  fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },

    body:JSON.stringify({
      "email":email.current.value,
      "password":password.current.value
    })
})
.then(res=>res.json())
    .then(data => {
      if (data.error) {
        setErr(data.error)
      } else {
        alert(data.success)
      }
    })
    }

    const showPassword = () => {
      show === "password" ? setShow("text") : setShow("password")
    }
  
    
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
        
          <Link to={"create-account"}><Button style={{marginBottom:"1rem"}} onClick={closeModal}>
            Register
          </Button></Link>
          
        
          </Col>
        <Col style={{borderLeft:"0.1px solid rgba(214, 178, 196, 0.8)"}}>
        <Modal.Body><h5>I already have an account</h5></Modal.Body>
        
        <Form>
        <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" ref={email}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <InputGroup>
        <Form.Control type={show} ref={password} style={{ "border-right": "0" }} className="shadow-none"/>
        <InputGroup.Text className="bg-white">
                  <AiFillEye fontSize="1.3em" onClick={showPassword} />
                </InputGroup.Text>
              </InputGroup>
        </Form.Group>
        {err !== "" ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{err}</Form.Label> : ""}
        <Button onClick={clickEvent}>Login</Button>
        </Form>     

        </Col>
        </Row>
        </Container>
      </Modal>
  )
}

export default LoginModal