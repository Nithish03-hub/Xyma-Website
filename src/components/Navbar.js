import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import xyma from '../Assets/xymalogo_white.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='bg-[#122e4b] h-16 w-full flex items-center pl-4 md:pl-20 space-x-4 md:space-x-20'>
        <img className='mr-4 md:mr-36 h-10' src={xyma} alt='Logo' />
        <div className='hidden md:flex'>
          <Header />
        </div>
        <button
            className='text-white py-3 px-4 rounded-full'
            style={{
              background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
            }}
            onClick={handleContactClick}
          >
            Get in Touch
          </button>
      
        <div className='md:hidden'>
          <button
            className='text-white py-3 px-4 rounded-full'
            style={{
              background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className='bg-[#122e4b] h-16 w-full flex flex-col items-center space-y-4 md:hidden'
          style={{
            background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
          }}
        >
          <Header />
        </div>
      )}
      <div
        className='h-1.5 w-full'
        style={{
          background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
