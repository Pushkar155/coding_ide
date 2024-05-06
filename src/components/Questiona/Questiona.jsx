import React, { useState, useEffect } from 'react';
import "./questions.scss"
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { useMyContext } from '../../contex';
import { NavLink } from 'react-router-dom';
import oops from "./oops.gif";


const Questions = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const {current,maindata}=useMyContext();

    // console.log(maindata)

    useEffect(() => {
        const delay = setTimeout(() => {
            let filteredMockData = [];
            if (current.id === "sheets") {
                // Filter mock data based on current.name if current.id is "sheets"
                filteredMockData = maindata.filter(item => item.sheets && item.sheets.includes(current.name));
            } else if (current.id === "topics") {
              filteredMockData = maindata.filter(item => item.topics === current.name.toLowerCase());
            }
            else{
                filteredMockData=maindata
            }            
            setData(filteredMockData);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(delay);
    }, [current,maindata]);
    

    return (
        <div className='question'>
          <div className="question_heading">
            <h4>Questions</h4>
          </div>
          <div className="question_data">
            {loading ? (
              // Skeleton loading state
              <>
                {[...Array(14)].map((_, index) => (
                  <div className="question_card skeleton" key={index}></div>
                ))}
              </>
            ) : (
              // Render fetched data if data exists and is not empty
              data && data.length > 0 ? (
                data.map((item, index) => (
                  <div className="question_card" key={index}>
                    <h4 className='text'>{item.name}</h4>
                    <span className={`level ${item.difficulty}`}>{item.difficulty}</span>
                    <div className='question_links'>
                      <NavLink to="/ide" className="nav-link">
                        {/* <Tooltip title="click here"> */}
                          <TerminalRoundedIcon className='ide' />
                        {/* </Tooltip> */}
                        
                        
                      </NavLink>
                     <a href={item.link} rel="noreferrer" target='_blank'>
                      <NavigateNextRoundedIcon className='icons' />
                    </a> 
                  
                    </div>
                    
                  </div>
                ))
              ) : (
                // Render a message if data is empty
                <div className="error">
                  <img src={oops} alt="" />
                </div>
              )
            )}
          </div>
        </div>
      );
      
}

export default Questions;
