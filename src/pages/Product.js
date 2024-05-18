import React, { useState, useEffect } from 'react';
import './Sb.css'
import Icon from '../Icon';
import image1 from '../Assets/Image 1.png';
import image2 from '../Assets/Image 2.png';
import image3 from '../Assets/Image 3.png';
import utmap from '../Assets/utmaps.png';
import isteel from '../Assets/isteel.png';
import ports from '../Assets/ports.png';
import ztar from '../Assets/Ztar.png';
import paint from '../Assets/paint.png';
import metal from '../Assets/metal.png';
import aicon from '../Assets/aluminumicon.png';
import refrigerant from '../Assets/refrigerant.png';
import luboil from '../Assets/luboil.png';
import vector from '../Assets/Vector.png';
import curve from '../Assets/Vectorcurve.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import semi from '../Assets/semi.png';
import ref from '../Assets/refineries.png';
import eor from '../Assets/eor.png';
import { useNavigate } from 'react-router-dom';




function Badge({ text }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.25em 0.5em',
      borderRadius: '1.50em',
      fontSize: '14px',
      fontWeight: 500,
      color: '#FE9D1C',
      border: '1px solid #FE9D1C',  
      backgroundColor:'#FFF6EA'
    }}>{text}</span>
  );
}

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: image1, title: "Multi-point temperature measurements", text1:'Up to 1600° C', text:'“The Disruptive Ultrasonic Waveguide Technology”' },
    { src: image2, title: "Multi - Parameter Measurements", text1:'Viscosity, Density, Temperature', text:'“The Disruptive Ultrasonic Waveguide Technology”'},
    { src: image3, title: "Powered by AI",text1:'IIoT Enabled, Data Analytics, Anomaly Detection, Predictive Maintenance' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const imageStyle = {
    position: 'relative',
    width: '100%',
    //height: 'auto', 
    //objectFit: 'cover',
    //maxHeight: '90vh', 
    //boxShadow: '0 10px 10px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.8)',
    marginTop:'5%'
  };

  const textStyle = {
    position: 'absolute',
    bottom: '35%',
    left: '2%',
    color: '#fff',
    padding: '1% 2%',
    borderRadius: '5px',
    fontSize: '2.5vw', 
    fontWeight: 'bold',
  };

  const navigate=useNavigate();
  const handleContactClick=()=>{
    navigate ('/contact');
  } 

  return (
    <div style={{ position: 'relative' }}>
      <section style={{ position: 'relative' }}>
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? 'block' : 'none',
              width: '100%', 
            }}
          >
            <img src={item.src} alt={`Slide ${index + 1}`} style={{ ...imageStyle }} />
            <div style={textStyle} >
              <h2 style={{width:'40%'}}>{item.title}</h2>
              <p style={{background: 'linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  display: 'inline-block',
                  width:'55%'}}>{item.text1}</p>
              <p className='text-sm font-semibold'>{item.text}</p>    
            </div>
          </div>
        ))}
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          {images.map((_, index) => (
            <div 
              key={index}
              //onClick={() => handleDotClick(index)}
              style={{
                width: '30px',
                height: '2px',
                backgroundColor: index === currentIndex ? '#000' : '#ccc',
                borderRadius: '10px',
                margin: '0 5px',
                marginBottom:'44%',
              }}
            />
          ))}
        </div>
        {/*<div className="font-Satoshi text-grey text-7xl font-semibold leading-7 text-center text-gray-300"> XYMA PRODUCTS </div>
     */} </section>


    <div className='flex justify-center items-center h-screen'>
    <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg w-full md:w-[120vh] lg:w-[160vh] shadow-lg border border-gray-200'>
        <div>
          <div className='m-10 rounded-lg'style={{ background: 'radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)' }}>
           <img className='product-image' src={utmap} alt="UTMapS" style={{ width: '100%', height: 'auto' }} />
           <div style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className='ml-4'> 
                <h2 className="text-bold text-2xl" style={{
                  background: 'linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  display: 'inline-block'
                }}>μTMapS</h2>
                <p className='text-white' style={{width:'90%'}}>A single customizable waveguide can measure temperature at 10 points over 50 meters length.</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className='mt-8'>
        <div className='flex flex-col md:flex-row'>
        <div className='font-semibold text-xl md:text-2xl mt-2' style={{ width: '100%' }}>Multi-Point Temperature Mapping Sensor</div>
        <button className='flex items-center justify-center bg-[#01285C] rounded-full h-9 md:w-32 p-1 mt-2 md:mt-0 md:ml-auto'>
          <Icon /><div className='ml-1 text-xs text-white'>Play Video</div>
        </button>
      </div>
             <div className='mt-3'><Badge text="Temperature Range: 25° C to 1600° C "/></div> 
              <div className='mt-6'>
                <p className='text-[#60646C] text-sm'style={{width:'90%'}}>µTMapS & µSTMapS are IIoT-enabled temperature measurement and temperature profiling sensors that captures continuous measurements at multiple points with a single customizable waveguide with multiple configurations in contrast to contact based thermocouples/RTDs or contactless IR guns.</p>
              </div>
              <div  className='mt-6'style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex border border-gray-200 rounded-lg p-3'>
                  <img className='bg-white w-auto h-auto ' src={isteel} style={{ marginRight: '12px',width:"20%"  }}   />
                  <span className='text-sm font-semibold mt-1.5'>Steel Manufacturing</span>
                </div>
                <div className='flex border border-gray-200 rounded-lg p-3 ml-4'>
                  <img className='bg-white w-auto h-auto' src={aicon} style={{ marginRight: '12px',width:"45px" }}   />
                  <span className='text-sm font-semibold mt-2' >Aluminum Manufacturing</span>
              </div>
            </div>
            <div  className='mt-2'style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex border border-gray-200 rounded-lg p-3'>
                  <img className='bg-white w-auto h-auto ' src={semi} style={{ marginRight: '12px',width:"18%"  }}   />
                  <span className='text-sm font-semibold mt-0 w-32 ml-1'>Semiconductor Manufacturing</span>
                </div>
                <div className='flex border border-gray-200 rounded-lg p-3 ml-4' style={{width:'48%'}}>
                  <img className='bg-white w-auto h-auto  ' src={ref} style={{ marginRight: '12px',width:"40px" }}   />
                  <span className='text-sm font-semibold mt-1.5' >Refineries</span>
              </div>
            </div>
        </div>
      </div>
    </div>


    <div className='flex justify-center items-center h-screen'>
    <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg w-full md:w-[120vh] lg:w-[160vh] shadow-lg border border-gray-200'>
        <div>
          <div className='m-10 rounded-lg'style={{ background: 'radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)' }}>
           <img className='product-image' src={ports} alt="PoRTS" style={{ width: '100%', height: 'auto' }} />
           <div style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className='ml-4'> 
                <h2 className="text-bold text-2xl" style={{
                  background: 'linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  display: 'inline-block'
                }}>PoRTS</h2>
                <p className='text-white'>A single customizable wavelength can measure viscosity, density & Temperature continuously.</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex'>
          <div className='font-semibold text-2xl mt-2' style={{width:'50%'}}>Multi-Parameter Measurement Sensor</div>
          <button className='flex bg-[#01285C] rounded-full p-0.5 mt-3' style={{height:'0.5%',width:'20%',marginLeft:'25%'}}>
             <Icon/><div className='mt-1.5 text-xs text-white'>Play Video</div></button>
          </div>
        <div className='mt-3'>
          <Badge text="Viscosity: 50 cP - 15000 cP"/>
          <span style={{ marginRight: '8px'}} />
          <Badge text="Density: 700 kg/m³ to 1200 kg/m³ "/>
          <div className='mt-2'>
          <Badge text="Temperature: 20° C to 400° C"/>
      </div>  </div>
              <div className='mt-6'>
                <p className='text-[#60646C] text-sm' style={{width:'90%'}}>PoRTS is an invasive/non-invasive based IIoT-enabled rheology and temperature measurement sensor that continuously captures multiple parameters such as viscosity, density and temperature with a single waveguide unlike discrete measurements with thermocouple/RTDs or discrete measurements with sampling from viscometer and density meter.</p>
              </div>
              <div  className='mt-6'style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex border border-gray-200 rounded-lg p-3'>
                  <img className='bg-white w-auto h-auto ' src={paint} style={{ marginRight: '12px',width:"20%"  }}   />
                  <span className='text-sm font-semibold mt-1.5'>Paint Manufacturing</span>
                </div>
                <div className='flex border border-gray-200 rounded-lg p-3 ml-4'style={{width:'48%'}}>
                  <img className='bg-white w-auto h-auto  ' src={luboil} style={{ marginRight: '12px',width:"40px",marginLeft:'8%'  }}   />
                  <span className='text-sm font-semibold mt-1.5' >Lubrication Oil</span>
              </div>
            </div>
            <div  className='mt-2'style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex border border-gray-200 rounded-lg p-3'>
                  <img className='bg-white w-auto h-auto ' src={eor} style={{ marginRight: '12px',width:"18%"  }}   />
                  <span className='text-sm font-semibold mt-1.5 w-32 ml-1'>E.O.R.</span>
                </div>
            </div>
        </div>
      </div>
    </div>


    <div className='flex justify-center items-center h-screen'>
    <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg w-full md:w-[120vh] lg:w-[160vh] shadow-lg border border-gray-200'>
        <div>
          <div className='m-10 rounded-lg'style={{ background: 'radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)' }}>
           <img className='product-image' src={ztar} alt="Ztar" style={{ width: '100%', height: 'auto' }} />
           <div style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className='ml-4'> 
                <h2 className="text-bold text-2xl" style={{
                  background: 'linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  display: 'inline-block'
                }}>Ztar</h2>
                <p className='text-white'>A single wavelength can measure viscosity, density & Temperature continuously.</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex'>
           <div className='font-semibold text-2xl mt-2'> Ultrasonic contact &   <br/>non-contact based level <br/> measurement sensor</div>  
           <button className='flex bg-[#01285C] rounded-full p-0.5 mt-3' style={{height:'0.5%',width:'20%',marginLeft:'25%'}}>
             <Icon/><div className='mt-1.5 text-xs text-white'>Play Video</div></button> 
          </div>
             <div className='mt-3'> <Badge text="Level: 0.03 m to 10 m "/></div>
              <div className='mt-6'>
                <p className='text-[#60646C] text-sm' style={{width:'90%'}}>Ztar is a contact/contactless IIoT-enabled level measurement sensor that captures continuous level across any hazardous environment with accuracy in contrast to radar-based level measurement sensors.</p>
              </div>
              <div  className='mt-6'style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex border border-gray-200 rounded-lg p-3'>
                  <img className='bg-white w-auto h-auto ' src={metal} style={{ marginRight: '12px',width:"20%"  }}   />
                  <span className='text-sm font-semibold mt-1.5'>Metal Manufacturing</span>
                </div>
                <div className='flex border border-gray-200 rounded-lg p-3 ml-4'style={{width:'48%'}}>
                  <img className='bg-white w-auto h-auto  ' src={refrigerant} style={{ marginRight: '12px',width:"40px",marginLeft:'8%'  }}   />
                  <span className='text-sm font-semibold mt-1.5' >Refrigerants</span>
              </div>
            </div>
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




    </div>
  );
};

export default Product;
