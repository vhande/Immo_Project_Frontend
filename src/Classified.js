import React from 'react'
import {useParams} from 'react-router-dom'

function Classified() {
    const {id} = useParams()
  return (
    <div>Classified</div>
  )
}

export default Classified