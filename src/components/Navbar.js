import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import xyma from '../Assets/xymalogo_white.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='bg-[#122e4b] h-16 w-full flex items-center pl-20 space-x-20'>
        <img className='mr-36 h-10' src={xyma} alt='Logo' />
        <div>
          <Header />
        </div>
        <div>
          <button 
            className="text-white py-3 px-4 rounded-full" 
            style={{ 
              background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)', 
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              marginLeft: '8rem'
            }}
            onClick={handleContactClick} 
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className='h-1.5 w-full'
        style={{ 
          background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)'}}
      ></div>
    </nav>
  );
};

export default Navbar;
