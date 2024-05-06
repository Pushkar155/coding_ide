import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../Banner/Banner'
import Questiona from '../Questiona/Questiona'
import { useMyContext } from '../../contex'

const Sheetsfinal = () => {
  const {current}=useMyContext()
  return (
    <div style={{background:"#1A1A1A"}}>
        <Navbar/>
        <Banner color={current.color} name={current.name} image={current.image} quots={current.quots}/>
        <Questiona/>
    </div>
  )
}

export default Sheetsfinal