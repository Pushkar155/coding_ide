import React, {useEffect} from 'react'
import "./home.scss"
import Navbar from '../navbar/Navbar'
import Sheets from '../sheets/Sheets'
import Topics from '../Topics/Topics'
import Questiona from '../Questiona/Questiona'
// import { useEffect } from "react"
// import axios from 'axios'
import { useMyContext } from '../../contex'

// import Banner from '../Banner/Banner'
const Home = () => {
  const {setCurrent}=useMyContext();
  useEffect(()=>{
    setCurrent("")
  },[])


  return (
    <div className='home'>
        <Navbar/>
        <Sheets/>
        <Topics/>
        <Questiona/>
        
    </div>
  )
}

export default Home