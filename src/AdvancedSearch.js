import React from 'react'
import {Container, Col, Row,InputGroup,Form} from'react-bootstrap'
import {FcSearch} from 'react-icons/fc'

function AdvancedSearch() {
  return (
    <>
    <Container>
      <Row>
        <Col>
              <InputGroup className="mb-3">
              
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text id="basic-addon1"><FcSearch></FcSearch></InputGroup.Text>
              </InputGroup>
        </Col>
      </Row>
    </Container>
    
    
    
    
    
    
    
    
    </>
  )
}

export default AdvancedSearch