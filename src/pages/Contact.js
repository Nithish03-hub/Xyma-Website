import React, { useRef } from 'react';
import video2 from '../Images/contact.mp4';
import black from '../Images/-66.png';
import second from '../Assets/secondline.png';
import map from '../Images/map.png';
import call from '../Images/call.png';
import mail from '../Images/mail.png';
import location from '../Images/location.png'; 
import vector from '../Assets/Vector.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import { useNavigate } from 'react-router-dom';




const ContactPage = () => {

  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();

  const handleContactClick = () => {
    
    navigate('/contact');
  };

  return (
    <div>
      <section>
      <div className="relative md:h-[95vh] h-[60vh] w-full mt-[70px] shadow-2xl">
          <video
           src={video2} autoPlay
           alt="cover image"
           className="absolute inset-0 w-full md:h-full h-[60vh] object-cover"
         />
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" style={{ zIndex: 2 }} /> 
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }} >           
           <img src={black} alt="Overlay Image" style={{ width: '55%', maxWidth: '300px', marginBottom: '60%',marginLeft:'50%' }} />
         </div> 
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center" style={{ zIndex: 4 }} > 
           <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold" style={{width:'120%'}}>Unlock Insights, Elevate Performance - Reach Out to XYMA Analytics Today</h1>
            </div> 
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center" style={{ zIndex: 5 }}>           
               <button className="text-white py-2 px-3 rounded-full text-xs"  style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)', marginLeft: '5rem',marginTop:'80%'}}onClick={handleButtonClick}>Get in Touch</button>
             </div>
      </div>
      <div className="w-full text-center text-gray-300 font-semibold text-[50px] sm:text-[90px] 2xl:text-[120px] -mt-[23px] sm:-mt-[50px] 2xl:-mt-[65px]">
      CONTACT US
      </div>
      </section>

      <section ref={sectionRef} style={{marginTop:'5%'}}>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-semibold text-center">
          Get In Touch
          <center>
            <img className=" ml-4 sm:ml-6 md:ml-8 lg:ml-10 md:w-40 w-40"  src={second} alt="Second" />
          </center>
        </div>

        <div className='text-[#60646C] text-lg text-center mt-2'> 
          Our attention is fully focused on You. Do not hesitate to contact us at any time
        </div>

        <div className="flex justify-center items-center h-screen">
  <form style={{ width: '58%', marginBottom: '10%' }} className="md:w-2/3 lg:w-1/2 xl:w-2/5">
    <div className='flex flex-wrap'>
      <div className="mb-4 w-full md:w-1/2 md:pr-2">
        <label className="block text-base mb-2" htmlFor="username">
          Your Name <span className='text-[#CE2C31]'>*</span>
        </label>
        <input
          className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4 w-full md:w-1/2 md:pl-2">
        <label className="block text-base mb-2" htmlFor="email">
          Business Email  <span className='text-[#CE2C31]'>*</span>
        </label>
        <input
          className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
          id="email"
          type="email"
          placeholder="Enter your Email"
        />
      </div>
    </div>

    <div className='flex flex-wrap'>
      <div className="mb-4 w-full md:w-1/2 md:pr-2">
        <label className="block text-base mb-2" htmlFor="job">
          Job Title  <span className='text-[#CE2C31]'>*</span>
        </label>
        <input
          className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
          id="job"
          type="text"
          placeholder="Enter your Job Title"
        />
      </div>
      <div className="mb-4 w-full md:w-1/2 md:pl-2">
        <label className="block text-base mb-2" htmlFor="company">
          Company  <span className='text-[#CE2C31]'>*</span>
        </label>
        <input
          className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
          id="company"
          type="text"
          placeholder="Enter your Company’s Name"
        />
      </div>
    </div>

    <div className="mb-4 w-full">
      <label className="block text-base mb-2" htmlFor="select">
        Select Solution Need   <span className='text-[#CE2C31]'>*</span>
      </label>
      <select
        className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
        id="select">
        <option value="">Select Department</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="finance">Finance</option>
        <option value="hr">Human Resources</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-base mb-2" htmlFor="detail">
        Details On Your Requirements <span className='text-[#CE2C31]'>*</span>
      </label>
      <input
        className="appearance-none border border-gray-400 rounded-xl w-full h-28 px-3 pb-16 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
        id="detail"
        type="text"
        placeholder="Enter your requirements"
      />
    </div>

    <div className="flex items-center justify-center">
  <button style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}
    className="text-white py-2 px-4 rounded-full w-auto md:w-full focus:outline-none focus:shadow-outline"
    type="submit">
    Submit
  </button>
</div>

  </form>
</div>

       
     </section>


     <section>
      <div className='text-3xl font-semibold text-center '>
        Around the world: XYMA Analytics
        <center>
            <img  className='md:w-40 w-40 md:ml-80' src={second} alt="Second" />
          </center>
      </div>
      <div className='text-[#60646C] text-sm text-center mt-2'>Installations of Ultrasonic Waveguide Sensors in different countries</div>
      <div className="mt-4">
  <img
    className="w-full md:w-80 mx-auto"
    style={{ width: '80%', marginLeft: '10%', marginTop: '3%' }}
    src={map}
    alt="Map"
  />
</div>

     </section>

     <section style={{marginTop:'15%'}}>
        <div className='text-3xl font-semibold text-center '>
           Locations
          <center>
            <img  style={{ width: '10%'}} src={second} alt="Second" />
          </center>
        </div>


       
        <div className='flex justify-center' style={{ width: '100%',marginTop:'5%' }}>
    <div className='flex flex-wrap' style={{ width: '90%', maxWidth: '1200px' }}>
        <div className='w-full lg:w-1/2'>
            <iframe
                className="rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6996041325237!2d80.24036047361022!3d12.991055214454398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526789b9607537%3A0x961343cab532a48d!2sXYMA%20Analytics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714978751471!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div className='w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4' style={{marginTop:'2%'}}>
            <div className='flex flex-col'>
                <div className='flex border border-gray-300 rounded-xl p-2'>
                    <img className='w-7 h-7 mt-0.5' src={call} alt="Call Icon" />
                    <div className='ml-4 text-[#60646C] font-semibold'>Contact Details:<div className='text-black'>(+91) 9442949347</div></div>
                </div>

                <div className='flex mt-3 border border-gray-300 rounded-xl p-2'>
                    <img className='w-7 h-7 mt-0.5' src={location} alt="Location Icon" />
                    <div className='ml-4 text-[#60646C] font-semibold'>Current Location:
                        <div className='text-black'>XYMA ANALYTICS PRIVATE LIMITED</div>
                        <div className='text-black'>B4-01, 4th Floor, Phase II, B-Block, IITM Research Park, Kanagam Road, Taramani, Chennai, TamilNadu, India - 600113</div>
                    </div>
                </div>

                <div className='mt-3 flex border border-gray-300 rounded-xl p-2'>
                    <img className='w-7 h-7 mt-0.5' src={mail} alt="Mail Icon" />
                    <div className='ml-4 text-[#60646C] font-semibold'>Email Address:<div className='text-black'>info@xyma.in<br />nishanthraja@xyma.in</div></div>
                </div>
            </div>
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

export default ContactPage;
