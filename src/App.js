import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'
import AdvancedSearch from './AdvancedSearch'
import Classified from './Classified'
import Ad from './Ad'
import CreateAccount from './CreateAccount'


function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/advanced-search" element={<AdvancedSearch/>} />
            <Route path="/ad" element={<Ad />} />
            <Route path="/classified/:id" element={<Classified/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
        </Routes>
    </Layout>
  )
}

export default App