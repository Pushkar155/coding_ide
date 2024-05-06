import React from 'react'
import "./navbar.scss"
import logo from "./logo.gif";
import {NavLink} from "react-router-dom";
import { useMyContext } from '../../contex';

const Navbar = () => {
  const {setCurrent}=useMyContext();
  const changeroute =()=>{
    setCurrent("");
  }

  return (
    <div className='navbar'>
        <div className="navbar_controller">
          <NavLink to="/" onClick={changeroute}>
            <img src={logo} alt="" />
          </NavLink>
            <h5>Problems</h5>
        </div>
    </div>
  )
}

export default Navbar