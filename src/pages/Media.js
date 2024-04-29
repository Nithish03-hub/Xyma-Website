import React from 'react';
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







const Media = () => {
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
          <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}>
            <img src={asian} alt="Asian" style={{ width: '100%' }} />
            <div className='text-xl font-semibold mt-1'>Advancing Technology to Foster a Sustainable Energy Landscape</div>
            <div className='text-xs mt-1'>February 24, 2024</div>
            <center>
              <button className='text-white mt-1 text-sm rounded-full w-36 h-10 md:w-24 md:h-9' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>View More</button>
            </center>
         </div>

      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}>
        <div style={{ position: 'relative' }}>
          <img src={shell} alt="Shell" style={{ width: '100%' }} />
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

      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto' }}>
        <div style={{ position: 'relative' }}>
          <img src={business} alt="Business" style={{ width: '100%' }} />
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


      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}>
        <div style={{ position: 'relative' }}>
          <img src={iitm} alt="iitm" style={{ width: '100%' }} />
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


      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}>
        <div style={{ position: 'relative' }}>
          <img src={story} alt="Story" style={{ width: '100%' }} />
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


      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}>
        <div style={{ position: 'relative' }}>
          <img src={cm} alt="CM" style={{ width: '100%' }} />
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


      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}>
        <div style={{ position: 'relative' }}>
          <img src={smart} alt="Shell" style={{ width: '100%' }} />
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


      <div className=' border border-gray-300 p-1' style={{ borderRadius: '14px', width: '80%', margin: 'auto',marginTop:'5%' }}>
        <div style={{ position: 'relative' }}>
          <img src={pm} alt="PM" style={{ width: '100%' }} />
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
             <img style={{ width: '8%', marginLeft: '50%', marginBottom: '10.5%' }} src={icon6} alt="Background" />
               <p className='font-semibold text-4xl' style={{ 
                position: 'absolute', 
                top: '115%', 
                left: '55%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#013872',
                width: '70vw',  
                maxWidth: '400px',   }}>
                  "Strength lies in togetherness, creativity is embraced with inclusivity, and passion flourishes with freedom."
               </p>
            </div>

            <div>
              
            </div>
         </div>
      </section>



    </div>
  );
};

export default Media;
