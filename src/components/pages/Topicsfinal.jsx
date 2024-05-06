import React from 'react'
import Navbar from '../navbar/Navbar'
import Smallbanner from '../smallbanner/Smallbanner'
import Questiona from '../Questiona/Questiona'
import { useMyContext } from '../../contex'

const Topicsfinal = () => {
    const {current}=useMyContext();
  return (
    <div style={{background:"#1A1A1A"}}>
        <Navbar/>
        <Smallbanner color={current.color} name={current.name}/>
        <Questiona/>
    </div>
  )
}

export default Topicsfinal