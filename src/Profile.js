import React, { useEffect, useState, useContext} from 'react'
import {Container} from 'react-bootstrap'
import Token from './Context/Token'

function Profile() {
    const [err,setErr] = useState("")
    const context = useContext(Token)
   
    useEffect(()=> {   
      const validate = ()  => {
        fetch('https://immo-backend.herokuapp.com/profile',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
    
        body:JSON.stringify({
          "token": localStorage.getItem("token")
        })
    })
    .then(res=>res.json())
        .then(data => {
          if (data.error) {
            setErr(data.error)
            localStorage.removeItem("token")
            context.setToken(null)
          }
        })
    }
        validate()
    },[context])
  return (
    <Container fluid className="center-div d-flex justify-content-center align-items-center">
    {err === "" ? <h1 className="m-5" >Welcome {context.firstname} </h1> : <h1>{err}</h1>} 
    </Container>
  )
}

export default Profile