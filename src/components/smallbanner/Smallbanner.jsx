import React from 'react';
import "./smallbanner.scss";

const Smallbanner = ({color,name}) => {
  return (
    <div  className="small_banner" >
        <div className="small_banner_card"style={{background:color}}>
            <h2>{name}</h2>
        </div>

    </div>
  )
}

export default Smallbanner