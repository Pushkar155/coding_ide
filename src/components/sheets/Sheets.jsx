import React from 'react';
import "./sheets.scss";
import img1 from "./1st.png";
import img2 from "./2nd.png";
import img3 from "./3rd.png";
// import img4 from "./rocket.png";

import { useMyContext } from '../../contex';
import {NavLink} from "react-router-dom";


const Sheets = () => {

  const {setCurrent}=useMyContext();
  const card = [
    {
      name: "Blind 75",
      color: 'linear-gradient(to right,#CDFFD8,#94B9FF )',
      image:img1,
      id:"sheets",
      quots:"The Blind 75 LeetCode Questions is a curated list of 75 algorithmic practice problems that are frequently asked in technical interviews at big tech companies like Google, Amazon, Facebook, and Microsoft. These questions cover a wide range of topics and difficulty levels, helping you prepare effectively for coding interviews"
    },
    {
      name: "Top 150",
      color: "linear-gradient(to right,#FFF7AD,#FFA9F9 )",
      image:img2,
      id:"sheets",
      quots:"The Top 150 LeetCode Questions: A curated set of 150 crucial algorithmic challenges for technical interviews at leading tech companies, helping you prepare effectively for coding interviews"
    },
    {
      name: "Top DP",
      color: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
      image:img3,
      id:"sheets",
      quots:"The Top DP LeetCode Questions: Essential dynamic programming challenges vital for coding interviews at top tech firms, helping you prepare effectively for coding interviews"
    }
  ];

  const handelclick = (item)=>{
    setCurrent(item)
    // console.log(current)
  }

  return (
    <>
    <div className='sheets'>
      {card.map((item, index) => (
        <div className="sheets_card" style={{background: item.color}} key={index}>
          <div className="sheets_card_left">
            <h2>{item.name}</h2>
            <NavLink to="/sheets" className="nav-link">
            <button onClick={() => handelclick(item)}>Start  <div className="rocket">&#128640;</div></button>
            </NavLink>
          </div>
          <div className="sheets_card_right">
            <img src={item.image} alt="" />
          </div>

        </div>
      ))}

    </div>
    </>
  );
}

export default Sheets;
