import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Homepage/>} />
        </Routes>
    </Layout>
  )
}

export default App