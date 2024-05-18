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
     <section className="relative">
  <div className="relative">
    <img className="w-full h-auto" style={{ marginTop: '4%' }} src={frame} alt="Frame Image" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <h1 className="text-white text-xl sm:text-5xl font-bold mt-4 sm:mt-24">
        "Together,<br />we shine"
      </h1>
      <p className="text-white mt-2 sm:mt-5 text-xs sm:text-sm">
        We help you grow along with us
      </p>
      <button
        className="text-white text-xs py-2 px-5 mt-3 rounded-full"
        style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}
        onClick={handleButtonClick}
      >
        Know More
      </button>
    </div>
  </div>
</section>


-      <section className="text-center">
  <div className="relative">
    <img className="w-1/12 mt-10 mx-auto" src={framevector} alt="Frame Vector" />
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#60646C] font-semibold mx-auto w-11/12 sm:w-8/12 lg:w-2/3 text-base sm:text-lg lg:text-xl mt-14 sm:mt-16 lg:mt-20">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book. It has survived not only five centuries.
    </p>
  </div>

  <div className="flex justify-center mt-28 md:mt-20">
    <img className="w-20 mt-10 sm:mt-12 lg:mt-16" src={photo} alt="Photo" />
  </div>

  <div className="text-[#1C2024] font-semibold mt-2">Dr. Nishanth Raja</div>
  <div className="text-[#60646C] text-xs">C.E.O. and Co-founder</div>
</section>


     
      <section ref={sectionRef}>
      <div className="mt-10 text-center">
  <div className="text-[#1C2024] text-3xl font-semibold relative inline-block">
    Opportunities
    <img className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-1/4 sm:w-1/5 lg:w-1/6" src={uline} alt="Underline" />
  </div>
  <div className="mt-8 font-semibold flex flex-wrap justify-center gap-1">
    <Badge2 text="All" selected={selectedBadge === 0} onClick={() => handleBadgeClick(0)} />
    <Badge2 text="Department Name" selected={selectedBadge === 1} onClick={() => handleBadgeClick(1)} />
    <Badge2 text="Department Name" selected={selectedBadge === 2} onClick={() => handleBadgeClick(2)} />
    <Badge2 text="Department Name" selected={selectedBadge === 3} onClick={() => handleBadgeClick(3)} />
    <Badge2 text="Department Name" selected={selectedBadge === 4} onClick={() => handleBadgeClick(4)} />
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
        
      <div className="mt-10 flex justify-center">
  <p className="text-[#60646C] font-semibold w-11/12 sm:w-8/12 lg:w-2/3 text-lg sm:text-xl lg:text-2xl text-center mt-6 sm:mt-8 lg:mt-10">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book. It has survived not only five centuries.
  </p>
</div>

  

                  

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
  ) 
}

export default Career
