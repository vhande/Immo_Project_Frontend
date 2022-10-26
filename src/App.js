import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'
import AdvancedSearch from './AdvancedSearch'
import Classified from './Classified'
import Ad from './Ad'
import CreateAccount from './CreateAccount'
import Token from './Context/Token'
<<<<<<< HEAD

import {useState} from 'react'
=======
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'
import { useState } from 'react'
>>>>>>> f115e5d351bb227be4e091e2bada600d3589eb43


function App() {
  const [token, setToken] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  return (

    <Token.Provider value={{ token, setToken, firstname, setFirstname, lastname, setLastname, }}>
      <ProtectedRoute>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/ad" element={<Ad />} />
<<<<<<< HEAD
            <Route path="/classified/:id" element={<Classified/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
           
        </Routes>
    </Layout>
=======
            <Route path="/classified/:id" element={<Classified />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </ProtectedRoute>
>>>>>>> f115e5d351bb227be4e091e2bada600d3589eb43
    </Token.Provider>

  )
}

export default App