import React from 'react'
import "./details.scss"


const Questiondetails = () => {
  return (
    <div className='details'>
        <div className="details_decs">
            <h1>Two Sum</h1>
            <div className="question_dat"><p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                You may assume that each input would have exactly one solution, and you may not use the same element twice.
                You can return the answer in any order.
            </p></div>
        </div>
        <div className="details_example">
        <div className="details_decs1">
            <h1>Example 1:</h1>
            <div className="question_da">
                <p>Input: nums = [2,7,11,15], target = 9</p>
                <p>Output: [0,1]</p>
                <p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Questiondetails