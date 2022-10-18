import React from 'react'
import Search from './Components/Homepage/Search'
import OnSale from './Components/Homepage/OnSale'
import SearchByCity from './Components/Homepage/SearchByCity'
import {Container} from 'react-bootstrap'

function Homepage() {
  return (
    <div>
        <Container>
        <Search/>
        <OnSale/>
        <SearchByCity/>
        </Container>
    </div>
  )
}

export default Homepage