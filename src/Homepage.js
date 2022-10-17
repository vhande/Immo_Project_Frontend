import React from 'react'
import Search from './Components/Homepage/Search'
import OnSale from './Components/Homepage/OnSale'
import {Container} from 'react-bootstrap'

function Homepage() {
  return (
    <div>
        <Container>
        <Search/>
        <OnSale/>
        </Container>
    </div>
  )
}

export default Homepage