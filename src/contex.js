import React, { createContext, useState, useContext,useEffect} from 'react';
import axios from 'axios';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [current, setCurrent] = useState({});
  const [maindata, setMaindata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      // console.log("Hi")
      try {
        const response = await axios.get('https://dsa-backend-project-y5dg.vercel.app/API/question/getQuestions', {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_SECRETE_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });
                // console.log("hiiiiii")
                setMaindata(response.data);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ current, setCurrent,maindata ,setMaindata}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
