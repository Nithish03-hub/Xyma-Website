import React, { useState,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import frame from '../Assets/frame2.png'
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import uline from '../Assets/uline.png'
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import share from '../Assets/share.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';
import line from '../Assets/line.png';





const Badge2 = ({ text, selected, onClick }) => {
  const badgeStyle = {
    backgroundColor: selected ? '#01285C' : '#EEF6FF',
    color: selected ? '#ffffff' : '#013872',
    padding: '5px 14px',
    borderRadius: '15px',
    fontSize: '1em',
    border: `1px solid ${selected ? '#01285C' : '#B4CEEC'}`, 
    marginRight: '12px' 
  };

  return (
    <span style={badgeStyle} onClick={onClick}>
      {text}
    </span>
  );
};

const Career = () => {

  const [selectedBadge, setSelectedBadge] = useState(0);

  const handleBadgeClick = (index) => {
    setSelectedBadge(index);
  };

  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }



  return (
    <div>
      <section className="">
         <div className="">
            <img style={{marginTop:'4%'}} src={frame} alt="Frame Image"/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white text-5xl font-bold mt-4 sm:mt-24">"Together,<br/>we shine"</h1>
                <p className='text-white mt-2 sm:mt-5 text-sm'>We help you grow along with us</p>
                    <button className=" text-white text-xs py-2 px-5 mt-3 rounded-full" 
                      style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)'}}
                      onClick={handleButtonClick}>
                      Know More
                    </button>
               </div>
          </div>
      </section>

-      <section style={{ textAlign: 'center' }}>
          <div className='relative'>
              <img style={{ width: '5%', marginTop: '10%', marginLeft: '48%' }} src={framevector} alt="Frame Vector" />
                  <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#60646C] font-semibold' style={{ width: '66%', fontSize: '25px', textAlign: 'center', marginTop: '5.5%' }}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                     type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </p>
           </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img className='w-20' style={{ marginTop: '13%' }} src={photo} alt="Photo"/>
          </div>
  
         <div className='text-[#1C2024] font-semibold mt-2'>Dr. Nishanth Raja</div>
         <div className='text-[#60646C] text-xs'>C.E.O. and Co-founder</div>
      </section>

     
      <section ref={sectionRef}>
        <div style={{marginTop:'10%',textAlign: 'center'}}>
           <div className='text-[#1C2024] text-3xl font-semibold'>
              Opportunities<img style={{marginLeft:'44.5%',width:'11.5%'}}src={uline}/>
           </div>
          <div className='mt-8 font-semibold'>
            <Badge2 text="All" selected={selectedBadge === 0} onClick={() => handleBadgeClick(0)}/>
            <Badge2 text="Department Name" selected={selectedBadge === 1} onClick={() => handleBadgeClick(1)}/>
            <Badge2 text="Department Name" selected={selectedBadge === 2} onClick={() => handleBadgeClick(2)}/>
            <Badge2 text="Department Name" selected={selectedBadge === 3} onClick={() => handleBadgeClick(3)}/>
            <Badge2 text="Department Name" selected={selectedBadge === 4} onClick={() => handleBadgeClick(4)}/>
         </div>
       </div>

       <div className='flex justify-center items-center'>
          <div className='mt-12 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>

       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>

       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>


       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>


       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>


       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>


       <div className='flex justify-center items-center'>
          <div className='mt-6 border border-gray-200 p-4' style={{width:'88%', borderRadius: '10px'}}>
             <div className='text-[#60646C]'> Department Name</div>
             <div className='text-2xl font-semibold'>Sr. UI/UX Designer</div>
             <div className='text-[#60646C]'>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id lobortis et in lorem. Metus arcu hac placerat sagittis velit pellentesque velit sed diam. Nascetur duis nec ipsum viverra pharetra. Ultricies id gravida in ultricies donec scelerisque tincidunt vulputate viverra. Egestas integer ligula faucibus sem mauris. In pellentesque lectus integer sagittis mauris cursus. Quisque in imperdiet dolor quis fames mauris turpis. Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
            </div>
         </div>
       </div>
      </section>
        
      <center style={{marginTop:'15%'}}>
          <p className='text-[#60646C] font-semibold' style={{ width: '66%', fontSize: '25px', marginTop: '5.5%',textAlign:'center' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
      </center>
  

                  

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
                <button className='bg-[#01285C] text-white rounded-full w-36 h-10 md:w-36 md:h-10' onClick={handleContactClick}>Get in Touch</button>
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
  ) 
}

export default Career
