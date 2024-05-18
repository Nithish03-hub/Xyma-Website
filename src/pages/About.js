import React from 'react';
import { useNavigate } from 'react-router-dom';
import iit from '../Assets/Frameiit.png';
import second from '../Assets/secondline.png';
import left from '../Assets/leftarrow.png';
import group1 from '../Assets/Framegroup.png';
import frame1 from '../Assets/Frame1.png';
import frame21 from '../Assets/Frame21.png';
import frame3 from '../Assets/Frame3.png';
import frame4 from '../Assets/Frame4.png';
import c1 from '../Assets/Framec1.png';
import c2 from '../Assets/Framec2.png';
import c3 from '../Assets/Framec3.png';
import c4 from '../Assets/Framec4.png';
import c5 from '../Assets/Framec5.png';
import c6 from '../Assets/Framec6.png';
import ceo2 from '../Assets/Frameceo2.png';
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import share from '../Assets/share.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';
import line from '../Assets/line.png';



 


const About = () => {
  
 const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };
  
  return (
   <div>
   <section >  
     <div style={{ position: 'relative', textAlign: 'center' }}>
       <img style={{ marginTop: '4%' }} src={iit} alt="Frame Image" />
       <div style={{ position: 'absolute', top: '35%', left: '40%', transform: 'translate(-50%, -50%)', textAlign: 'left' }}>
         <h1 className="text-white text-6xl font-bold mt-24">2019</h1>
         <p className='text-white mt-5 text-3xl font-semibold' style={{ width: '56%', textAlign: 'left' }}>
           Founded through the CNDE, IIT Madras, and incubated at IIT Madras Incubation Cell
         </p>
       </div>
       <div className='text-white text-5xl font-semibold' style={{ position: 'absolute', top: '15%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         20+
       </div>
       <div className='text-white text-sm font-semibold' style={{ position: 'absolute', top: '25%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         Years of R&D
       </div>
       <div className='text-white text-5xl font-semibold' style={{ position: 'absolute', top: '35%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         18+
       </div>
       <div className='text-white text-sm font-semibold' style={{ position: 'absolute', top: '45%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         Intellectual<br/> Properties
       </div>
       <div className='text-white text-5xl font-semibold' style={{ position: 'absolute', top: '55%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         35+
       </div>
       <div className='text-white text-sm font-semibold' style={{ position: 'absolute', top: '65%', left: '85%', transform: 'translate(-50%, -50%)', textAlign: 'left' }} >
         Publications
       </div>
     </div>
   </section> 
 
      {/*<div className="leading-5 text-grey text-7xl font-semibold text-center text-gray-300">ABOUT US</div>*/}

      <section>
  <center>
    <div className="text-4xl font-semibold mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      About XYMA
      <img className="w-12 md:w-16 lg:w-20 xl:w-24 ml-5" src={second} alt="XYMA Logo" />
    </div>
    <div className="text-[#60646C] w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mt-4 mx-auto">
      "XYMA Analytics is a deep-tech company started from IIT Madras, serving 15+ MNCs globally now to provide them with accurate multi-point temperature and multi-parameter measurements through patented ultrasonic waveguide technology."
    </div>
  </center>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="border border-gray-300 p-6 rounded-2xl w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto md:ml-14 mt-10 md:mt-20">
      <button className="bg-[#FEE1B7] rounded-full w-36 h-10 md:w-16 md:h-8">2020</button>
      <div>
        <p className="mt-4 font-semibold text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div>
        <p className="mt-4 text-[#60646C] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the make a type specimen book.</p>
      </div>
      <button className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9 bg-gradient-to-r from-[#FE6F17] to-[#FE9D1C]">View More</button>
    </div>

    <div className="mt-10 md:mt-0">
      <p className="text-[#1C2024] font-semibold w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:ml-14 mt-10 md:mt-20">
        Lorem Ipsum has been the industry's standard dummy text when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    <div className="mt-10 md:mt-0">
      <p className="text-[#1C2024] font-semibold w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:ml-14 mt-10 md:mt-20">
        Lorem Ipsum has been the industry's standard dummy text when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    <div className="border border-gray-300 p-6 rounded-2xl w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto md:ml-14 mt-10">
      <button className="bg-[#FEE1B7] rounded-full w-36 h-10 md:w-16 md:h-8">2020</button>
      <div>
        <p className="mt-4 font-semibold text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div>
        <p className="mt-4 text-[#60646C] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the make a type specimen book.</p>
      </div>
      <button className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9 bg-gradient-to-r from-[#FE6F17] to-[#FE9D1C]">View More</button>
    </div>

    <div className="border border-gray-300 p-6 rounded-2xl w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto md:ml-14 mt-10">
      <button className="bg-[#FEE1B7] rounded-full w-36 h-10 md:w-16 md:h-8">2020</button>
      <div>
        <p className="mt-4 font-semibold text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div>
        <p className="mt-4 text-[#60646C] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the make a type specimen book.</p>
      </div>
      <button className="mt-4 text-white text-sm rounded-full w-36 h-10 md:w-24 md:h-9 bg-gradient-to-r from-[#FE6F17] to-[#FE9D1C]">View More</button>
    </div>

    <div className="mt-10 md:mt-0">
      <p className="text-[#1C2024] font-semibold w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:ml-14 mt-10 md:mt-20">
        Lorem Ipsum has been the industry's standard dummy text when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
</section>




    <section>
      <center>
       <div  className="text-3xl font-semibold " style={{marginTop:'10%'}}>
         The Team <img className="w-36"src={second}></img>
       </div>
       <img style={{width:'85%',marginTop:'60px'}}src={group1}></img>
      </center>
    </section>


    <section>
      <center>
        <div className="text-3xl font-semibold" style={{ marginTop: '10%' }}>
          The Vision <img className="w-36" src={second} alt="Second Image" />
        </div>
        <p className="mt-6 w-11/12 md:w-2/3 mx-auto text-base md:text-lg">
      Our vision is to provide reliable measurements at the most unreliable times. Democratize sensor-based process efficiency in Industries by enabling them with rich data sets of process parameters. Provide plant-wide distributed and concurrent sensing solutions for disruptive data-driven decision making with enhanced sustainability.
    </p>        <div className='flex flex-wrap gap-5 mt-8' style={{ maxWidth: '100%', justifyContent: 'center' }}>
          <img style={{ width: '20%' }} src={frame1} alt="Frame 1" />
          <img style={{ width: '20%' }} src={frame21} alt="Frame 2" />
          <img style={{ width: '20%' }} src={frame3} alt="Frame 3" />
          <img style={{ width: '20%' }} src={frame4} alt="Frame 4" />
        </div>
      </center>
    </section>


    <section>
    <center>
  <div className="text-3xl font-semibold mt-10 md:mt-20">
    Key Values
    <img className="w-24 md:w-36 mt-4 md:mt-0" src={second} alt="Second Image" />
  </div>
  <div className="flex flex-wrap gap-8 md:gap-16 mt-12 justify-center w-full md:w-10/12 mx-auto">
    <div className="flex flex-col items-center">
      <img src={c1} alt="Key Value 1" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
    <div className="flex flex-col items-center">
      <img src={c2} alt="Key Value 2" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
    <div className="flex flex-col items-center">
      <img src={c3} alt="Key Value 3" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
    <div className="flex flex-col items-center">
      <img src={c4} alt="Key Value 4" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
    <div className="flex flex-col items-center">
      <img src={c5} alt="Key Value 5" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
    <div className="flex flex-col items-center">
      <img src={c6} alt="Key Value 6" className="w-20 md:w-28" />
      <div className="font-semibold mt-4 md:mt-10 text-center">Key Values</div>
    </div>
  </div>
</center>


<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:mt-28'>
  <div className='flex justify-center md:justify-end'>
    <img className='w-2/3 md:w-3/5 mt-10 md:mt-0 md:ml-10' src={ceo2} alt="CEO" />
  </div>
  <div className='text-center text-[#60646C] w-full md:w-3/5 mt-10 md:mt-10 md:ml-10'>
    <span className='font-semibold text-xl text-[#1C2024]'>The Mission </span><br />
    Our mission is to increase efficiency in operations through IIoT-enabled process parameter monitoring and AI-based predictive maintenance to enhance asset life and prevent unplanned downtime with Ultrasonic Waveguide Technology.
  </div>
</div>

    </section>




    <section className="text-center mt-20 md:mt-20">
  <div className="relative">
    <img className="w-1/12 md:w-1/20 mt-10 mx-auto md:ml-[45%]" src={framevector} alt="Frame Vector" />
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#60646C] font-semibold w-10/12 sm:w-8/12 md:w-2/3 text-lg md:text-xl mt-10 md:mt-4">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
  type and scrambled it to make a type specimen book. It has survived not only five centuries.
</p>

  </div>

  <div className="flex justify-center mt-40 md:mt-5">
    <img className="w-20" src={photo} alt="Photo" />
  </div>

  <div className="text-[#1C2024] font-semibold mt-2">Dr. Nishanth Raja</div>
  <div className="text-[#60646C] text-xs">C.E.O. and Co-founder</div>
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
}

export default About;
