import React from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import second from '../Assets/secondline.png';
import aluminum from '../Images/al1.png';
import aluminum2 from '../Images/aluminum2.png';
import alum from '../Images/alum3.png';
import copy from '../Images/copy.png';
import share from '../Assets/share.png';
import tube1 from '../Images/tube1.png';
import oil1 from '../Images/oil1.png';
import steel1 from '../Images/steel1.png';
import { useNavigate } from 'react-router-dom';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';





const CaseStudy = () => {

  const navigate = useNavigate();
  const handleBack =()=>{
    navigate ('/resources');
  } 
  const handleContactClick = () =>{
    navigate ('/contact');
  }

  return (
   <div>
     <section>
      <div className="flex items-center " style={{ marginTop: '15%', marginLeft: '8%' }}>
        <div className="ml-10 md:ml-0 md:mr-4 mt-2 text-xl" onClick={handleBack}>
          <HiChevronLeft />
        </div>
        <div className="text-2xl font-semibold mt-2">
          Aluminum Case Studies
          <img src={second} className="mt-4 md:mt-0 ml-auto md:w-32" alt="Second" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center" style={{ marginTop: '5%', marginLeft: '8%' }}>
  <div className="relative md:mr-4">
    <img className="max-w-full md:max-w-none md:w-[140%]" src={aluminum} alt="Aluminum Image" />
    <button className="bg-white rounded-full text-xs absolute bottom-4 md:bottom-3 left-80 transform -translate-x-1/2 w-1/4 h-6 md:w-20 md:left-80">Case Studies</button>
  </div>

  <div className="mt-4 md:mt-0 flex flex-col items-center md:items-start">
  <div className="bg-gray-200 text-xs text-gray-500 rounded-2xl px-2 py-1 mb-2 md:mb-0 md:ml-40">
    4 Min Read
  </div>
  <div className="text-lg md:ml-40 text-left w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
    A 10°C temperature deviation diminishes efficiency, intensifies anode effect, and raises PFC emissions, underscoring the significance of meticulous temperature control in industrial processes to optimize performance and reduce environmental impact.
  </div> 
</div>

</div>

  
      <center>
         <div className='bg-gray-300'style={{width:'85%',height:'0.5px',marginTop:'5%'}}/>
      </center>

      
      <div className='flex flex-col md:flex-row ml-20'>
        <div>
          <div className='mt-10'>
           <span className='text-xl font-semibold ml-12'> 1.Temperature Sensitivity:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                    <li>Industrial processes are highly sensitive to temperature changes.</li>
                    <li>Even a minor deviation, such as 10°C, can significantly impact process performance.</li>
                    <li>Precise temperature control is essential to maintain optimal efficiency and productivity.</li>
                </ul>
          </div>
          
          <img src={aluminum2} className="w-3/5 max-w-full h-auto ml-10 md:ml-10 mt-4" alt="Aluminum Image" />

          <div className='mt-6'>
             <span className='text-xl font-semibold ml-12' > 2.Efficiency Reduction:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                    <li>A 10°C temperature deviation leads to a reduction in process efficiency.</li>
                    <li style={{width:'80%'}}>This reduction implies decreased productivity, increased production costs, or longer processing times.</li>
                    <li >Maintaining stable temperatures is critical to ensure consistent and efficient operations. </li>
                </ul>
           </div>  

           <div className='mt-6'>
             <span className='text-xl font-semibold ml-12 '> 3.Promotion of Anode Effect:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                  <li>Temperature fluctuations can promote the occurrence of the anode effect within industrial processes.</li>
                  <li style={{width:'85%'}}>The anode effect is an undesirable phenomenon that can lead to increased energy consumption and equipment degradation.</li>
                  <li style={{width:'85%'}}>It is essential to control temperature variations to prevent or minimize the occurrence of the anode effect and its associated negative impacts.</li>
                </ul>
          </div>

          <div className='mt-6'>
             <span className='text-xl font-semibold ml-12'> 4.Promotion of Anode Effect:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                  <li>Temperature fluctuations can promote the occurrence of the anode effect within industrial processes.</li>
                  <li>Any rise in PFC emissions due to temperature fluctuations poses significant environmental concerns.</li>
                </ul>
          </div>

          <img src={alum} className="w-3/5 max-w-full h-auto ml-10 md:ml-10 mt-4" alt="Aluminum Image" />
     
          <div className='mt-6'>
             <span className='text-xl font-semibold ml-12' > 5.Environmental Implications:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                    <li style={{width:'85%'}}>The increase in PFC emissions highlights the environmental implications of temperature variations in industrial processes.</li>
                    <li>Industrial activities play a significant role in environmental pollution and climate change.</li>
                    <li style={{width:'75%'}}>Temperature regulation is crucial not only for process efficiency but also for reducing the environmental footprint of industrial operations.</li>
                </ul>
           </div>  


           <div className='mt-6'>
             <span className='text-xl font-semibold ml-12' > 6.Importance of Temperature Control:</span>
                <ul className=' text-[#60646C] mt-4' style={{ listStyleType: 'disc',marginLeft:'5%' }}>
                    <li>Precise temperature control is vital for maintaining optimal process performance and sustainability.</li>
                    <li>Precise temperature control is vital for maintaining optimal process performance and sustainability.</li>
                    <li style={{width:'80%'}}>Implementing effective temperature control measures is essential for the long-term success and sustainability of industrial operations.</li>
                </ul>
           </div>  

           <p className=' text-[#60646C] mt-4' style={{marginLeft:'5%',width:'80%' }}>In conclusion, the impact of temperature fluctuations on industrial processes is multifaceted, affecting efficiency, environmental sustainability, and overall performance.
            Addressing temperature sensitivity through precise control measures is essential for optimizing operations and mitigating environmental impact.
            Through innovation, collaboration, and proactive management, industries can navigate the challenges posed by temperature variability and strive towards more sustainable and efficient industrial practices.
            </p>
            <span className='flex mt-6'><img src={share} style={{width:'3%',marginLeft:'78%'}}></img><img className='ml-1'src={copy} style={{width:'3%'}}></img></span>
            
        </div>


        <div className='mr-40 mt-10'>
          <div>
             <div className='text-xl font-semibold'>
              Reformer Tube
                <div>
                   <img src={tube1} style={{maxWidth:'120%',marginTop:'5%'}}/>
                </div>
             </div>
             <p className='mt-4' style={{width:'120%'}}>A 20°C increase in temperature reduces the lifespan of reformer tubes by half</p>
          </div>

          <div>
             <div className='text-xl font-semibold mt-6'>
             Lubricant
                <div>
                   <img src={oil1} style={{maxWidth:'120%',marginTop:'5%'}}/>
                </div>
             </div>
             <p className='mt-4' style={{width:'125%'}}>30% of maintenance budget influenced by lubricants, highlighting their significant role in operational expenses</p>
          </div>

          <div>
             <div className='text-xl font-semibold mt-6'>
             Steel
                <div>
                   <img src={steel1} style={{maxWidth:'120%',marginTop:'5%'}}/>
                </div>
             </div>
             <p className='mt-4' style={{width:'110%'}}>Extending ladle life for one cycle yields steel worth $5.1M</p>
          </div>
        </div>
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


    </section>
  </div>
  );
};

export default CaseStudy;
