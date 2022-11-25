import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, InputGroup } from 'react-bootstrap'
import { AiFillCloseCircle, AiFillEye } from 'react-icons/ai'
import { useFormik } from 'formik'

function CreateAccount() {
  const [show, setShow] = useState("password")
  const [show2, setShow2] = useState("password")
  const [success, setSuccess] = useState("")
  const [err, setErr] = useState("")

  const validate = values => {
    const errors = {}

    if (!values.firstname) {
      errors.firstname = 'This field is required'
    }
    if (!values.lastname) {
      errors.lastname = 'This field is required'
    }

    if (!values.email) {
      errors.email = 'This field is required'
    }
    if (!values.password) {
      errors.password = 'This field is required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be at least 8 characters long'
    }

    if (!values.confirmation) {
      errors.confirmation = 'This field is required'
    }
    else if (values.confirmation !== values.password) {
      errors.confirmation = "The passwords do not match"
    }

    return errors
  }

  const formik = useFormik({

    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmation: ""

    },
    validate,
    onSubmit: (values) => {
      fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values, null, 2)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSuccess(data.success)
          }
          if (data.error) {
            setErr(data.error)
          }

          return data
        })

    }


  })

  const showPassword = () => {
    show === "password" ? setShow("text") : setShow("password")
  }

  const showPassword2 = () => {
    show2 === "password" ? setShow2("text") : setShow2("password")
  }

  return (
    <Container fluid className="center-div d-flex flex-column align-items-center justify-content-center">
      {success === "" ?
        <>
          <h4>Create an account</h4>
          <Form onSubmit={formik.handleSubmit} className="form">
            <Form.Group
              className="mb-3">
              <Form.Label className="m-0">First name</Form.Label>
              <Form.Control
                type="text"
                id="firstname"
                name="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname} />
              {formik.touched.firstname && formik.errors.firstname ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.firstname}</Form.Label> : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Last name</Form.Label>
              <Form.Control type="text"
                id="lastname"
                name="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname} />
              {formik.touched.lastname && formik.errors.lastname ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.lastname}</Form.Label> : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Email</Form.Label>
              <Form.Control type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.email}</Form.Label> : null}
              {err !== "" ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{err}</Form.Label> : ""}
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Password</Form.Label>
              <InputGroup>
                <Form.Control className="shadow-none"
                  style={{ "border-right": "0" }}
                  type={show}
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password} />
                <InputGroup.Text className="bg-white">
                  <AiFillEye fontSize="1.3em" onClick={showPassword} />
                </InputGroup.Text>
              </InputGroup>
              {formik.touched.password && formik.errors.password ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.password}</Form.Label> : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="m-0">Password confirmation</Form.Label>
              <InputGroup>
                <Form.Control className="shadow-none"
                  style={{ "border-right": "0" }}
                  type={show2}
                  id="confirmation"
                  name="confirmation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmation} />
                <InputGroup.Text className="bg-white">
                  <AiFillEye fontSize="1.3em" onClick={showPassword2} />
                </InputGroup.Text>
              </InputGroup>
              {formik.touched.confirmation && formik.errors.confirmation ? <Form.Label className="error form-text text-danger d-flex align-items-center"> <AiFillCloseCircle className="me-1" fontSize="1.3em" />{formik.errors.confirmation}</Form.Label> : null}
            </Form.Group>
            <Button type="submit" className="mb-3">
              Create my account
            </Button>
          </Form>
        </> :
        <>
          <p className="lead">{success}</p>
          <Link to={"/"}><Button className="m-3">Go to homepage</Button></Link>
        </>}
    </Container>
  )
}

export default CreateAccount