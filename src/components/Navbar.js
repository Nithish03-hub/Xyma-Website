import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import xyma from '../Assets/xymalogo_white.png';
import { HeaderData } from "../data/HeaderData";
import CircleComponent from "../CircleComponent";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  //const navigate = useNavigate();
  //const [menuOpen, setMenuOpen] = useState(false);

  // const handleContactClick = () => {
  //   navigate('/contact');
  // };
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setSelectedIndex(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#122e4b] h-16 flex items-center px-4">
        <div className=" flex items-center text-white md:justify-around justify-between w-full 2xl:text-lg">
          <div>
            <img className="mr-4 h-10" src={xyma} alt="Logo" />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {HeaderData.map((item, index) => (
              <div key={index} className="">
                <NavLink
                  to={item.path}
                  className={`${
                    selectedIndex === index ? "text-orange-400" : ""
                  }`}
                  onClick={() => handleNavItemClick(index)}
                >
                  <span>{item.title}</span>
                </NavLink>

                {selectedIndex === index && <CircleComponent />}
              </div>
            ))}
          </div>
          <div
            className="hidden md:block text-white py-3 px-4 rounded-full cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
            onClick={handleContactClick}
          >
            Get in Touch
          </div>
          <div className="flex items-center justify-center md:hidden">
            <IoMenu size={30} />
          </div>
        </div>
        {/* <button
            className='text-white py-3 px-4 rounded-full'
            style={{
              background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
            }}
            onClick={handleContactClick}
          >
            Get in Touch
          </button> */}

        {/* <div className='md:hidden'>
          <button
            className='text-white py-3 px-4 rounded-full'
            style={{
              background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div> */}
      </div>
      {/* {menuOpen && (
        <div
          className='bg-[#122e4b] h-16 w-full flex flex-col items-center space-y-4 md:hidden'
          style={{
            background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',
          }}
        >
          <Header />
        </div>
      )} */}
      <div
        className="h-1.5 w-full"
        style={{
          background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
