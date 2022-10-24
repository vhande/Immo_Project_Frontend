import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'
import AdvancedSearch from './AdvancedSearch'
import Classified from './Classified'
import Ad from './Ad'
import CreateAccount from './CreateAccount'
import Token from './Context/Token'
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'
import {useState} from 'react'


function App() {
  const [token,setToken] = useState("")
  const [firstname,setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  
  return (
    <ProtectedRoute>
    <Token.Provider value={{token, setToken, firstname, setFirstname, lastname, setLastname,}}>
    <Layout>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/advanced-search" element={<AdvancedSearch/>} />
            <Route path="/ad" element={<Ad />} />
            <Route path="/classified/:id" element={<Classified/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </Layout>
    </Token.Provider>
    </ProtectedRoute>
  )
}

export default App