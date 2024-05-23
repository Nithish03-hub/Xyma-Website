import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import media from '../Assets/Framemedia.png';
import second from '../Assets/secondline.png';
import asian from '../Assets/Frameasian.png';
import shell from '../Assets/Frameshell.png';
import icon1 from '../Assets/Frameicon1.png';
import business from '../Assets/business.png';
import icon2 from '../Assets/icon2.png';
import iitm from '../Assets/iitm.png';
import icon3 from '../Assets/icon3.png';
import story from '../Assets/story.png';
import icon4 from '../Assets/icon4.png';
import cm from '../Assets/cm.png';
import smart from '../Assets/smart.png';
import pm from '../Assets/pm.png';
import icon5 from '../Assets/icon5.png';
import icon6 from '../Assets/66.png';
import image1 from '../Images/Image1.png';
import image2 from '../Images/Image2.png';
import image3 from '../Images/Image3.png';
import image4 from '../Images/Image4.png';
import image5 from '../Images/Image5.png';
import image6 from '../Images/Image6.png';
import image7 from '../Images/Image7.png';
import image8 from '../Images/Image8.png';
import image9 from '../Images/Image9.png';
import image10 from '../Images/Image10.png';
import image11 from '../Images/Image11.png';
import VerticalSlider from './VerticalSlider';
import vector from '../Assets/Vector.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import asain2 from '../Assets/asian2.png';







const Media = () => {

  const navigate =useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);


  const images3 = [
    image1,
    image2,
    image3,
    image4,
    image2,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image2,
    image5,
    image6
  ];

  const images2=[
    image7,
    image8,
    image7,
    image9,
    image11,
    image2,
    image1,
    image7,
    image8,
    image7,
    image9,
    image11,
    image2,
    image1
  ]


  const images1=[
    image6,
    image11,
    image5,
    image10,
    image3,
    image7,
    image9,
    image6,
    image11,
    image5,
    image10,
    image3,
    image7,
    image9
  ]
  
  
  return (
    <div>
      <section>
      <div className="relative h-[95vh] w-full mt-[70px] shadow-2xl">
          <img
           src={media}
           alt="cover image"
           className="absolute inset-0 w-full h-full object-cover"
         />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">      
           <h1 className="text-white text-5xl sm:text-5xl font-bold mt-4 sm:mt-24">         
           News Room      
           </h1>  
           <p className="text-white mt-2 sm:mt-5 text-xs sm:text-sm">      
           Spotlight on XYMA Analytics     
           </p>   
            
         </div>
      </div>
        {/*<div className="leading-5 text-grey text-7xl font-semibold text-center text-gray-300">XYMA NEWS</div>*/}
      </section>


      <section>
        <center>
          <div  className="text-3xl font-semibold " style={{marginTop:'10%'}}>
           Highlights  <img className="w-44 mt-1"src={second}></img>
          </div>
        </center>


        
     <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-0'>


      <div className='border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}>
        <img src={asian} alt="Asian" style={{ width: '100%' }} />
        <div className='text-xl font-semibold mt-1'>Advancing Technology to Foster a Sustainable Energy Landscape</div>
        <div className='text-xs mt-1'>February 24, 2024</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
     </div>


     <div className='border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' 
         style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}
         onMouseEnter={() => setIsHovered1(true)}
         onMouseLeave={() => setIsHovered1(false)}>
      <div style={{ position: 'relative' }}>
        {isHovered1 ? (
          <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
        ) : (
          <img src={shell} alt="Shell" style={{ width: '100%' }} />
        )}
        <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
          <img src={icon1} alt="Icon 1" style={{ width: '20%' }} />
          <p className='text-white mt-1'>SAUR ENERGY</p>
        </div>
      </div>
      <div className='text-xl font-semibold mt-1'>Shell Launches ‘Digital Track’ for Indian Startups under its E4 Programme</div>
      <div className='text-xs mt-1'>Updated On Thu, Jul 8th, 2021</div>
      <center>
        <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
      </center> 
    </div>

      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered2 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={business} alt="Business" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon2} alt="Icon 2" style={{ width: '20%' }} />
            <p className='text-white mt-1'>Businessline</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>Start-up tech. Remote sensing with XYMA Analytics</div>
        <div className='text-xs mt-1'>Updated - January 09, 2022</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>


      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered3 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={iitm} alt="Iitm" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon3} alt="Icon 3" style={{ width: '20%' }} />
            <p className='text-white mt-1'>IIT MADRAS</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>Sensor for Temperature Measurement at Multiple Points</div>
        <div className='text-xs mt-1'>11th Oct 2021  </div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>


      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}
      onMouseEnter={() => setIsHovered4(true)}
      onMouseLeave={() => setIsHovered4(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered4 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={story} alt="Story" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon4} alt="Icon 4" style={{ width: '20%' }} />
            <p className='text-white mt-1'>YOUR STORY</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>Prioritize Building Valuable Businesses Over Funding, Advises Kalaari Capital's Vani Kola</div>
        <div className='text-xs mt-1'>Wednesday July 14, 2021</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>


      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}
      onMouseEnter={() => setIsHovered5(true)}
      onMouseLeave={() => setIsHovered5(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered5 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={cm} alt="Cm" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon2} alt="Icon 2" style={{ width: '20%' }} />
            <p className='text-white mt-1'>Businessline</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>TN Chief Minister awards cheques worth ₹95 lakh to 19 start-ups</div>
        <div className='text-xs mt-1'>Updated - December 23, 2021</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>


      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}
      onMouseEnter={() => setIsHovered6(true)}
      onMouseLeave={() => setIsHovered6(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered6 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={smart} alt="Smart" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '32%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon2} alt="Icon 2" style={{ width: '22%' }} />
            <p className='text-white mt-1'>Newswires</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>SmartHub.ai and XYMA Partnership Announcement</div>
        <div className='text-xs mt-1'>March 01, 2022</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>


      <div className=' border border-gray-300 p-1 hover:scale-90 transition-transform duration-300' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}
      onMouseEnter={() => setIsHovered7(true)}
      onMouseLeave={() => setIsHovered7(false)}>
   <div style={{ position: 'relative' }}>
     {isHovered7 ? (
       <img src={asain2} alt="Asian2" style={{ width: '100%' }} />
     ) : (
       <img src={pm} alt="Pm" style={{ width: '100%' }} />
     )}
          <div className="flex gap-4" style={{ position: 'absolute', top: '85%', left: '36%', transform: 'translate(-50%, -50%)' }}>
            <img src={icon5} alt="Icon 2" style={{ width: '18%' }} />
            <p className='text-white mt-1'>ANI Multimedia News</p>
          </div>
        </div>
        <div className='text-xl font-semibold mt-1'>PM Modi honors Shraddha and RJ Raunac at Bharat Mandapam</div>
        <div className='text-xs mt-1'>Updated: Mar 02, 2024</div>
        <center>
          <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
        </center>
      </div>
    </div>
      </section>


      <section className='bg-[#EEF6FF] h-screen mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
           <div className="relative md:mt-20 flex justify-center items-center">
  <img className="w-1/12 mt-20 md:mt-0 mx-auto" src={icon6} alt="Background" />
  <p className="font-semibold text-2xl md:text-4xl text-center text-[#013872] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 lg:w-1/2 max-w-lg">
    "Strength lies in togetherness, creativity is embraced with inclusivity, and passion flourishes with freedom."
  </p>
</div>


<div className="flex justify-center items-center mt-10 md:mt-0 gap-4">
  <div className="flex flex-col items-center">
    <VerticalSlider images={images1} />
  </div>
  <div className="flex flex-col items-center">
    <VerticalSlider images={images2} />
  </div>
  <div className="flex flex-col items-center">
    <VerticalSlider images={images3} />
  </div>
</div>

         </div>
      </section>

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
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
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
                <img
                  className="w-32 h-14"
                  src={logo}
                  alt="Logo"
                ></img>
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
                      className="text-xs w-[85%] h-[90%] rounded-md pl-3"
                      placeholder="Enter your email"
                      required
                    />
                    <img class="w-7 h-7" src={arrow} />
                  </form>
                </div>
              </div>
            </div>
            <div
              className="h-0.5 mt-4 mb-4 w-[90%] bg-[#013872]"/>
            {/* footer */}
            <div className="sm:flex justify-between text-white text-xs w-[90%] mb-4 font-light">
              <div className="flex gap-1 justify-center">
                <div className="">© 2022 XYMA Analytics Inc.</div>
                <div className=" text-gray-400">
                  IIT Madras Research Park, Chennai, 600113
                </div>
              </div>
              <div className="flex gap-8 justify-center">
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Media;
