import React from 'react'
import Ide from "../coding_ide/Ide";
import Navbar from '../navbar/Navbar';
import Questiondetails from '../coding_ide/QuestionDetail/Questiondetails';

const IdePage = () => {
  return (
    <div>
        <Navbar/>
        <Questiondetails/>
        <Ide/>
    </div>
  )
}

export default IdePage