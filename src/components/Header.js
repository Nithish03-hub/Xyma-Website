import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderData } from '../data/HeaderData';
import CircleComponent from '../CircleComponent';
import Home from '../pages/Home';

function Header() {
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleNavItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    
    <div className=' flex items-center text-white space-x-10'>
      {HeaderData.map((item, index) => (
       <div key={index} className="relative">
          <NavLink
            to={item.path}
            className={`text text-1xl relative ${selectedIndex === index ? 'text-orange-400' : ''}`}
            onClick={() => handleNavItemClick(index)}>
            <span>{item.title}</span>
          </NavLink>
          
          {selectedIndex === index && <CircleComponent />} 
        </div>
        
      ))}
      
    </div>

  );
}

export default Header;
