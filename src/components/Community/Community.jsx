import React,{useState} from 'react'
import { MultiSelect } from 'primereact/multiselect';
import "./community.scss"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

const Community = () => {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <div className='community'>
        <div className="community_nav">
            <div className="community_nav_menue">
                <h3>Miles Morales</h3>
                <MenuRoundedIcon className='icons'/>
            </div>
            <div className="community_location">
                <div className="community_location_tag">
                    <p>Communities in  
                        <span className='icons_tag'>
                            <select>
                                <option value="someOption">Pune</option>
                                <option value="otherOption">Hyderabad</option>
                            </select>
                        </span>
                    </p> 
                    <LocationOnRoundedIcon style={{color:'tomato'}}/>
                </div>
                <div className="community_location_button">
                    <button><AddRoundedIcon style={{fontSize:'18px'}}/>Create Community</button>
                </div>
            </div>

            <div className="community_new_page">

                <div className="community_new_page_text1">
                    <div className="community_texts">
                        <p>Community Analytics</p><OpenInNewRoundedIcon className='icons3'/>

                    </div>
                    <div className="community_texts">
                        <p>Manage Categories</p><OpenInNewRoundedIcon className='icons3'/>
                    </div>
                    <div className="community_texts">
                        <p>Manage Posts</p><OpenInNewRoundedIcon className='icons3'/>
                    </div>

                </div>
                <div className="community_new_page_text2">
                    <div className="community_texts">
                        <p>View Amity Dashboard</p><OpenInNewRoundedIcon className='icons3'/>
                    </div>
                    
                </div>

            </div>

            <div className="community_search">

                <div className="community_search_box">
                    <input type="text" placeholder='Search Communities' />
                    <MultiSelect value={selectedCities}  onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    filter placeholder="All Areas" maxSelectedLabels={3}  />
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    filter placeholder="All Categories" maxSelectedLabels={3} className="w-full md:w-20rem" />
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    filter placeholder="Sub Categories" maxSelectedLabels={3} className="w-full md:w-10rem" />
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    filter placeholder="Community Type" maxSelectedLabels={3} className="w-full md:w-10rem" />
                </div>
            
            </div>


        </div>

    </div>
  )
}

export default Community