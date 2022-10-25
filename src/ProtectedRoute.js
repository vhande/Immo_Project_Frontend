import { useEffect, useContext } from 'react'
import Token from './Context/Token'


function ProtectedRoute({children}) {
    const context = useContext(Token)
    const validate = ()  => {
        fetch('http://localhost:4000/profile',{
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
            localStorage.removeItem("token")
            context.setToken(null)
          }
        })
    }
    useEffect(()=> {   
        validate()
    },[])
        return(
            children
        )
}

export default ProtectedRoute