import React, { useState } from 'react';
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
        <div style={{ marginTop: '4.5%' }} className="relative">
          <img src={media} alt="media" className="w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-5xl font-bold mt-4 sm:mt-24">News Room</h1>
            <p className='text-white mt-2 sm:mt-5 text-sm'>Spotlight on XYMA Analytics</p>
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
           <div className='relative md:mt-20'>
             <img style={{ width: '8%', marginLeft: '50%', marginTop: '25%' }} src={icon6} alt="Background" />
               <p className='font-semibold text-4xl' style={{ 
                position: 'absolute', 
                top: '49%', 
                left: '55%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#013872',
                width: '70vw',  
                maxWidth: '415px',   }}>
                  "Strength lies in togetherness, creativity is embraced with inclusivity, and passion flourishes with freedom."
               </p>
            </div>

            <div className='flex '>
            <div>
          <VerticalSlider images={images1} />
       </div>
       <div>
          <VerticalSlider images={images2} />
       </div>
       <div>
          <VerticalSlider images={images3} />
       </div>
            </div>
         </div>
      </section>

      <div className="h-[60vh] mt-24" style={{ background: 'linear-gradient(90deg, #00133D 0%, #01285C 100%)' }}>     

<div className='flex justify-center items-center '>
    <div className='mt-[-50px] h-28 md:mb-20 rounded-3xl w-full md:max-w-6xl' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>
        <div className='flex flex-col md:flex-row items-center justify-between' style={{ marginBottom: '20px' }}>
            <div className='md:ml-10 md:mt-3.5 text-white text-xl md:text-3xl text-center md:text-left'>
                Enhance Process Efficiency through<br />
                XYMA Analytics' Innovations
                <img className='mb-1 w-full md:w-40 mx-auto md:ml-40' src={vector} alt="Vector Image" />
            </div>
            <div className='md:mr-10 md:mt-5 text-xs mt-5 md:text-right'>
                <button className='bg-[#01285C] text-white rounded-full w-36 h-10 md:w-36 md:h-10'>Get in Touch</button>
                <button className='bg-white text-[#01285C] rounded-full w-36 h-10 md:w-36 md:h-10 ml-4 md:ml-8 md:mr-4 mb-2 md:mt-0'>Download Brochure</button>
            </div>
        </div>
        <div className='mt-16 text-white flex flex-col md:flex-row'>
            <div className="flex flex-col items-center md:items-start">
                <img className='w-32 h-14' src={logo} alt="Logo"></img>
                <div className='text-white text-xs w-56 mt-2'>
                    Patented Ultrasonic Waveguide based sensors for preventing unplanned downtime and enhancing process efficiency.
                </div>
                <div className='flex gap-3 mt-4'> 
                    <img className='w-6 h-6' src={twitter} alt="Twitter"></img>
                    <img className='w-6 h-6' src={linkedin} alt="LinkedIn"></img>
                    <img className='w-6 h-6' src={share} alt="Share"></img>
                </div>
            </div>

            <div className='text-xs mr-8 md:mr-24 ml-8 md:ml-28 mt-4 md:mt-0'>
                <div className='font-semibold mb-5 text-sm'>Quick Links <img className='mt-1 h-0.5 w-5' src={line}/></div>
                <div className='mb-3'>About Us</div>
                <div className='mb-3'>Career</div>
                <div className='mb-3'>Media</div>
                <div className='mb-3'>Resources</div>
            </div>
            <div className='text-xs mr-8 md:mr-24 mt-4 md:mt-0'>
                <div className='font-semibold mb-5 text-sm '>Products <img className='mt-1 h-0.5 w-5' src={line}/></div>
                <div className='mb-3'>μTMapS</div>
                <div className='mb-3'>PoRTS</div>
                <div className='mb-3'>Ztar</div>
                <div className='mb-3'>I-PAMS</div>
            </div>
            <div className='text-xs mr-8 mt-4 md:mt-0'>
                <div className='font-semibold mb-5 text-sm '>Support <img className='mt-1 h-0.5 w-5' src={line}/></div>
                <div className='mb-3'>Contact Us</div>
                <div className='mb-3'>Contact Sales</div>
            </div>
            <div style={{marginLeft:'140px',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', gap: '10px', width: '220px', height: '84px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px', flex: 'none', order: '4', flexGrow: '0'}}>
              <div>Subscribe Now</div>
              <form class="flex items-center"> 
                <input type="email" class="text-xs w-40 h-8 rounded-md pl-3" placeholder="Enter your email" required/>
                <img class="w-7 h-7 ml-2" src={arrow}/> 
              </form>
            </div>
        </div> 
        <div className="h-0.5 mt-10" style={{ background: '#013872' }}/> 
        <div className='text-white mt-6 text-xs'>© 2022 XYMA Analytics Inc. <span className='text-gray-400'>IIT Madras Research Park, Chennai, 600113</span> <span className='ml-96'>Terms & Conditions</span>
         <span className='ml-6'>Privacy Policy</span>
        </div>
        
          
        
    </div>
</div>  

</div>

    </div>
  );
};

export default Media;
