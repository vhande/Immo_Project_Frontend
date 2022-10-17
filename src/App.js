import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'
import AdvancedSearch from './AdvancedSearch'

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/advanced-search" element={<AdvancedSearch/>} />
        </Routes>
    </Layout>
  )
}

export default App