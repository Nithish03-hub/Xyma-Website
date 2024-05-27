import React, { useState} from 'react';
import cs from '../Assets/cs.png';
import all1 from '../Images/all1.png';
import all2 from '../Images/all2.png';
import all3 from '../Images/all3.png';
import aluminum from '../Images/al1.png';
import steel1 from '../Images/steel1.png';
import steel2 from '../Images/steel2.png';
import tube1 from '../Images/tube1.png';
import tube2 from '../Images/tube2.png';
import oil1 from '../Images/oil1.png';
import oil2 from '../Images/oil2.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';
import { useNavigate } from 'react-router-dom';

const Resource = () => {
  const [selectedWord, setSelectedWord] = useState('All');

  const toggleContent = (word) => {
      setSelectedWord(word);
  };

  const navigate= useNavigate();
  const handleContactClick = () =>{
    navigate ('/contact');
  }
  const handleCaseStudyClick=()=>{
    navigate('/casestudy');
  }
  


    return (
        <div>
            <section>
            <div className="relative md:h-[95vh] h-[60vh] w-full mt-[70px] shadow-2xl">
          <img
           src={cs}
           alt="cover image"
           className="absolute inset-0 w-full md:h-full h-[60vh] object-cover"
         />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">      
           <h1 className="text-white text-5xl sm:text-5xl md:font-bold font-semibold mt-4 sm:mt-24 ">         
           Case Studies     
           </h1>  
           <p className="text-white mt-2 sm:mt-5 text-xs sm:text-sm">      
           Xyma Analytics Case Studies are documented examples illustrating the application and effectiveness of 
           Xyma Analytics' solutions in real-world scenarios     
           </p>   
            
         </div>
      </div>
      <div className="w-full text-center text-gray-300 font-semibold text-[50px] sm:text-[90px] 2xl:text-[120px] -mt-[23px] sm:-mt-[50px] 2xl:-mt-[65px]">
      CASE STUDIES
      </div>
            </section>

            <section>
              <div className='flex'>
                <div style={{width:'20%',marginLeft:'5%',marginTop:'12%'}}> 
                    <p className='font-semibold'> 
                        <span style={{ fontSize: '15px', cursor: 'pointer',color: selectedWord === 'All' ? '#013872':'gray' }} onClick={() => toggleContent('All')}>
                          
                            All
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Aluminum' ? '#013872':'gray' }} onClick={() => toggleContent('Aluminum')}>
                            Aluminum
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Steel' ? '#013872':'gray' }} onClick={() => toggleContent('Steel')} >
                            Steel
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Refineries' ? '#013872':'gray' }} onClick={() => toggleContent('Refineries')}>
                            Refineries
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Lubricants' ? '#013872':'gray' }} onClick={() => toggleContent('Lubricants')}>
                            Lubricants
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Oil Recovery' ? '#013872':'gray' }} onClick={() => toggleContent('Oil Recovery')}>
                            Oil Recovery
                        </span>
                    </p>
                    <p className='font-semibold'> 
                        <span style={{fontSize: '15px', cursor: 'pointer',color: selectedWord === 'Paints' ? '#013872':'gray' }} onClick={() => toggleContent('Paints')}>
                            Paints
                        </span>
                    </p>
                 </div>
                  <div > 
                  {(selectedWord === 'Aluminum' || selectedWord === 'All') && (
                         <div className="border border-gray-200 rounded-2xl p-3 flex flex-col lg:flex-row lg:w-4/5 mx-auto mt-10">
                         <span className="text-xl">Aluminum</span>
                         <div className="relative lg:w-1/2 my-6 lg:my-0 lg:mr-5">
                             <img className="w-full md:w-80 md:mt-10 md:mr-10" src={aluminum} alt="Aluminum Image" />
                             <button
                                 className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-14 md:ml-10 mb-8 ml-16"
                                 onClick={handleCaseStudyClick}
                             >
                                 Case Studies
                             </button>
                             <p className="text-lg mt-4 lg:w-11/12">
                                 A 10°C temperature deviation reduces efficiency, promotes anode effect, and increases PFC emissions.
                             </p>
                         </div>
                     
                         <div className="lg:w-1/2">
                             <span className="text-xl">All</span>
                             <div className="flex flex-col mt-4">
                                 <div className="flex items-start mb-4">
                                     <img className="w-2/5 lg:w-1/4 mr-4" src={all1} alt="All1 Image" />
                                     <p className="text-lg flex-1">A 10°C shift lowers efficiency, boosts anode effect, and raises PFC emissions.</p>
                                 </div>
                                 <hr className="border border-gray-200" />
                                 <div className="flex items-start mt-4 mb-4">
                                     <img className="w-2/5 lg:w-1/4 mr-4" src={all2} alt="All2 Image" />
                                     <p className="text-lg flex-1">Extending the ladle life for one cycle would result in steel production worth $5.1 million.</p>
                                 </div>
                                 <hr className="border border-gray-200" />
                                 <div className="flex items-start mt-4">
                                     <img className="w-2/5 lg:w-1/4 mr-4" src={all3} alt="All3 Image" />
                                     <p className="text-lg flex-1">20°C rise halves reformer tube lifespan; design temperature crucial.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                    )}

                  
                    {(selectedWord === 'Steel' || selectedWord === 'All') && (
                        <div className="border border-gray-200 rounded-2xl p-3 flex flex-col lg:flex-row lg:w-4/5 mx-auto mt-3">
                        <div className="text-xl mb-6 lg:mb-0 lg:mr-5">Steel</div>
                        <div className="relative w-full lg:w-1/2 my-6 lg:my-0 lg:mr-5">
                            <img className="w-full md:w-80 md:mt-14 md:ml-10" src={steel1} alt="Steel Image" />
                            <button
                                 className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-6 md:ml-18 mb-6 ml-16">
                                 Case Studies
                             </button>
                            <p className="text-lg mt-4 lg:w-11/12 md:ml-10">
                                Extending ladle life for one cycle yields <br/>steel worth $5.1M
                            </p>
                        </div>
                    
                        <div className="w-full lg:w-1/2">
                            <div>
                                <button className="text-white py-2 px-3 rounded-full text-xs mt-2 mb-4 lg:ml-auto lg:mr-0 mx-auto block" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>
                                    Read More
                                </button>
                            </div>
                            <div className="relative w-full lg:w-4/5 mx-auto">
                                <img className="w-full" src={steel2} alt="Steel Image" />
                                <button className="bg-white rounded-full text-xs absolute bottom-1/3 left-2/3 w-1/4 h-7">
                                    Case Studies
                                </button>
                                <p className="text-lg mt-4">
                                    Extending the lifespan of the ladle for one cycle results in producing steel valued at $5.1 million
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    )}
                  

                     {(selectedWord === 'Refineries' || selectedWord === 'All') && (
                         <div className="border border-gray-200 rounded-2xl p-3 flex flex-col lg:flex-row lg:w-4/5 mx-auto mt-3">
                         <div className="text-xl mb-6 lg:mb-0 lg:mr-5">Refineries</div>
                         <div className="relative w-full lg:w-1/2 my-6 lg:my-0 lg:mr-5">
                             <img className="w-full md:w-80 md:mt-12" src={tube1} alt="Tube Image" />
                             <button
                                 className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-1 md:ml-10 mb-5 ml-16">
                                 Case Studies
                             </button>
                             <p className="text-lg mt-4 lg:w-11/12">
                                 A 20°C temperature rise cuts reformer <br/>tube lifespan by half.
                             </p>
                         </div>
                     
                         <div className="w-full lg:w-1/2">
                             <div>
                                 <button className="text-white py-2 px-3 rounded-full text-xs mt-2 mb-4 lg:ml-auto lg:mr-0 mx-auto block" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>
                                     Read More
                                 </button>
                             </div>
                             <div className="relative w-full lg:w-4/5 mx-auto">
                                 <img className="w-full" src={tube2} alt="Tube Image" />
                                 <button
                                 className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-4 md:ml-14 mb-5 ml-16">
                                 Case Studies
                             </button>
                                 <p className="text-lg mt-4">
                                     A 20°C temperature increase halves the lifespan of reformer tubes.
                                 </p>
                             </div>
                         </div>
                     </div>
                     
                    )}
                    
                     {(selectedWord === 'Lubricants' || selectedWord === 'All') && (
                         <div className="border border-gray-200 rounded-2xl p-3 flex flex-col lg:flex-row lg:w-4/5 mx-auto mt-3">
                         <div className="text-xl mb-6 lg:mb-0 lg:mr-5">Lubricants</div>
                         <div className="relative w-full lg:w-1/2 my-6 lg:my-0 lg:mr-5">
                             <img className="w-full md:w-80 md:mt-11" src={oil1} alt="Oil Image" />
                             <button
                                 className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-6 md:ml-10 mb-14 ml-16">
                                 Case Studies
                             </button>
                             <p className="text-lg mt-4 lg:w-11/12">
                                 30% of maintenance budget influenced by lubricants, highlighting their significant role in operational expenses.
                             </p>
                         </div>
                     
                         <div className="w-full lg:w-1/2">
                             <div className="mb-4 lg:mb-0">
                             <button className="text-white py-2 px-3 rounded-full text-xs mt-2 mb-4 lg:ml-auto lg:mr-0 mx-auto block" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>
                                     Read More
                                 </button>
                             </div>
                             <div className="relative w-full lg:w-4/5 mx-auto">
                                 <img className="w-full" src={oil2} alt="Oil Image" />
                                 <button className="bg-white rounded-full text-xs absolute bottom-1/4 left-1/2 w-1/4 h-6 md:w-20 md:mb-10 md:ml-14 mb-8 ml-16" >
                                 Case Studies
                             </button>
                                 <p className="text-lg mt-4">
                                     Lubricants significantly affect operational costs, accounting for 30% of the maintenance budget.
                                 </p>
                             </div>
                         </div>
                     </div>
                     
                    )}
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
}

export default Resource;
