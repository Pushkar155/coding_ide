import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useMyContext } from '../../contex';
import { NavLink } from 'react-router-dom';
import "./topic.scss"

const Topics = () => {
  const {setCurrent}=useMyContext();

    const card = [
        { name: "Array", color: "#c0fdff",id:"topics" }, 
        { name: "Hashing", color: "#deaaff",id:"topics"  }, 
        { name: "String", color: '#fcf6bd',id:"topics"  }, 
        { name: "Two Pointers", color: "#b8f2e6",id:"topics"  }, 
        { name: "Sliding Windows", color: "#c7f9cc",id:"topics"  }, 
        { name: "1D DP", color: "#c0fdff",id:"topics"  },
        { name: "2D DP", color: "#edf2fb",id:"topics"  }, 
        { name: "Graph", color: "#e9ff70",id:"topics"  } 
    ];

    const handelClick=(item)=>{
      setCurrent(item)
      // console.log(current)
    }

    
  return (

    <div className='topics'>
      <div className="topics_heading">
        <h4>Topics</h4>
      </div>
      <div className="topic_card">
        {
            card.map((item, index)=>(
              <NavLink to="/topic" className="nav-link" key={index}>
                <div className="topic_card_actual" style={{background:item.color}} onClick={()=>handelClick(item)}>
                    <h2>{item.name}</h2>
                    <KeyboardDoubleArrowRightIcon className='icons'/>
                </div>
                </NavLink>
            ))
        }
      </div>
    </div>
  )
}

export default Topics