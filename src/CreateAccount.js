import {useRef} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import './Style/shortpage.css'

function CreateAccount() {
  const firstname = useRef(null)
  const lastname = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const clickEvent = () => {
    fetch('http://localhost:4000/register',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      // must be string data type !JSON.stringify!
      body:JSON.stringify({
        "firstname":firstname.current.value,
        "lastname":lastname.current.value,
        "email":email.current.value,
        "password":password.current.value
      })
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(`PUT request: ${data}`) 
    })
    }
  return (
    <Container fluid className="form-container d-flex flex-column align-items-center justify-content-center">
      <h4>Create an account</h4>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">First name</Form.Label>
        <Form.Control ref={firstname} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Last name</Form.Label>
        <Form.Control ref={lastname}type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Email</Form.Label>
        <Form.Control ref={email} type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Password</Form.Label>
        <Form.Control ref={password} type="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="m-0">Password confirmation</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button onClick={clickEvent} className="mb-3" type="submit">
        Create my account
      </Button>
      </Form>
    </Container>
  )
}

export default CreateAccount