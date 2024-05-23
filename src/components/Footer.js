import React from 'react'
import vector from '../Assets/Vector.png';
import logo from "../Assets/logo.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import share from "../Assets/share.png";
import line from "../Assets/line.png";
import arrow from "../Assets/arrow.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleContactClick = () => {
      navigate("/contact");
    };
  return (
    <div
      className="mt-24"
      style={{
        background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
      }}
    >
      <div className="flex justify-center items-center">
        <div
          className="mt-[-50px] rounded-3xl w-full sm:w-[90%]"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between"
            style={{ marginBottom: "20px" }}
          >
            <div className="md:ml-10 mt-3.5 text-white text-lg sm:text-xl md:text-3xl text-center sm:text-left w-full">
              Enhance Process Efficiency through
              <br />
              XYMA Analytics' Innovations
              <img
                className="mb-1 w-[250px] md:w-40 mx-auto md:ml-40"
                src={vector}
                alt="Vector Image"
              />
            </div>
            <div className="md:mr-10 md:mt-5 text-xs mt-5 md:text-right flex gap-2">
              <button
                className="bg-[#01285C] text-white rounded-full p-4 w-40"
                onClick={handleContactClick}
              >
                Get in Touch
              </button>
              <button className="bg-white text-[#01285C] rounded-full p-4 w-40">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-[90%] text-white flex flex-col sm:flex-row gap-2">
          <div className="w-full sm:w-[25%] flex flex-col items-center md:items-start">
            <img className="w-32 h-14" src={logo} alt="Logo"></img>
            <div className="text-white text-xs w-full sm:w-[80%] mt-2 text-center sm:text-left">
              Patented Ultrasonic Waveguide based sensors for preventing
              unplanned downtime and enhancing process efficiency.
            </div>
            <div className="flex gap-3 mt-4">
              <img className="w-6 h-6" src={twitter} alt="Twitter"></img>
              <img className="w-6 h-6" src={linkedin} alt="LinkedIn"></img>
              <img className="w-6 h-6" src={share} alt="Share"></img>
            </div>
          </div>

          <div className="w-full sm:w-[50%] flex">
            <div className="text-xs w-1/3">
              <div className="font-semibold mb-5 text-sm">
                Quick Links <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div className="mb-3">About Us</div>
              <div className="mb-3">Career</div>
              <div className="mb-3">Media</div>
              <div className="mb-3">Resources</div>
            </div>

            <div className="text-xs w-1/3">
              <div className="font-semibold mb-5 text-sm ">
                Products <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div className="mb-3">μTMapS</div>
              <div className="mb-3">PoRTS</div>
              <div className="mb-3">Ztar</div>
              <div className="mb-3">I-PAMS</div>
            </div>

            <div className="text-xs w-1/3">
              <div className="font-semibold mb-5 text-sm ">
                Support <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div className="mb-3">Contact Us</div>
              <div className="mb-3">Contact Sales</div>
            </div>
          </div>

          <div className="w-full sm:w-[25%] flex items-start justify-center">
            <div className="flex flex-col items-start p-2.5 gap-2.5 w-full h-full sm:h-[50%] bg-black/40 rounded-[10px]">
              <div>Subscribe Now</div>
              <form class="flex items-center justify-between w-full">
                <input
                  type="email"
                  className="text-xs w-[85%] h-7 rounded-md pl-3"
                  placeholder="Enter your email"
                  required
                />
                <img class="w-7 h-7" src={arrow} />
              </form>
            </div>
          </div>
        </div>
        <div className="h-0.5 mt-4 mb-4 w-[90%] bg-[#013872]" />
        {/* footer */}
        <div className="sm:flex justify-between text-white text-xs w-[90%] mb-4 font-light">
          <div className="sm:flex text-center gap-1 justify-center">
            <div className='flex justify-center'>
              <div className='mr-1'>© 2022 XYMA Analytics Inc.</div>
              <div className='text-gray-400'>IIT Madras Research Park, </div>
            </div>
            <div className="text-gray-400">Chennai, 600113</div>
          </div>
          <div className="flex gap-8 justify-center mt-4 sm:mt-0 mb-4 sm:mb-0">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
