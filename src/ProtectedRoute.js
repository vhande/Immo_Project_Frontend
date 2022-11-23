import { useEffect, useContext } from 'react'
import Token from './Context/Token'


function ProtectedRoute({children}) {
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
            localStorage.removeItem("token")
            context.setToken(null)
          }
        })
    }
        validate()
    },[context])
        return(
            children
        )
}

export default ProtectedRoute