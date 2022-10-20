import React from 'react'
import Search from './Components/Homepage/Search'
import ForSale from './Components/Homepage/ForSale'
import SearchByCity from './Components/Homepage/SearchByCity'
import ForRent from './Components/Homepage/ForRent'
import {Container} from 'react-bootstrap'

function Homepage() {
  return (
        <Container>
        <Search/>
        <ForSale/>
        <SearchByCity/>
        <ForRent/>
        </Container>
  )
}

export default Homepage