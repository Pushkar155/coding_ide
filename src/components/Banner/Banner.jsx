import React from 'react'
import "./banner.scss"
// import imag1 from "../sheets/1st.png";


const Banner = ({color,image,name,quots}) => {
  return (
    <div className='banner'>
        <div className="banner_data"  style={{background: color}}>
            <h2>{name}</h2>
            <p className='about'>{quots}</p>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Banner