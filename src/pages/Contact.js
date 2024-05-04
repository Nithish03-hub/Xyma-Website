import React from 'react';
import video2 from '../Images/contact.mp4';
import black from '../Images/-66.png';
import second from '../Assets/secondline.png';





const ContactPage = () => {
  return (
    <div>
      <section>
        <div className="relative overflow-hidden mt-18">
         
          <video
            src={video2}
            autoPlay
            className="shadow-lg"
            style={{ width: '100%', height: 'auto', zIndex: 1 }}
          />

        
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{ zIndex: 2 }}
          />

     
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 3 }}
          >
            <img src={black} alt="Overlay Image" style={{ width: '55%', maxWidth: '300px', marginBottom: '60%',marginLeft:'50%' }} />
          </div>

         
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
            style={{ zIndex: 4 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold" style={{width:'120%'}}>Unlock Insights, Elevate Performance - Reach Out to XYMA Analytics Today</h1>
          </div>
        </div>
      </section>

      <section style={{marginTop:'5%'}}>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-semibold text-center">
          Get In Touch
          <center>
            <img className=" ml-4 sm:ml-6 md:ml-8 lg:ml-10 " style={{ width: '9%' }} src={second} alt="Second" />
          </center>
        </div>

        <div className='text-[#60646C] text-lg text-center mt-2'> 
          Our attention is fully focused on You. Do not hesitate to contact us at any time
        </div>

        <div className="flex justify-center items-center h-screen">
          <form style={{width:'52.5%',marginBottom:'10%'}}>
          <div className='flex flex-wrap'>
              <div className="mb-4">
                <label className="block text-base mb-2" htmlFor="username">
                  Your Name <span className='text-[#CE2C31]'>*</span>
                </label>
                <input
                   className="appearance-none border border-gray-400 rounded-xl w-96 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
                   id="username"
                   type="text"
                   placeholder="Enter your name"
                 />
              </div>
             <div className="mb-4 ml-4 ">
               <label className="block text-base mb-2" htmlFor="email">
                  Business Email  <span className='text-[#CE2C31]'>*</span>
               </label>
              <input
                 className="appearance-none border border-gray-400 rounded-xl w-96 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
                 id="email"
                 type="email"
                 placeholder="Enter your Email"
               />
             </div>
           </div>

           <div className='flex flex-wrap'>
              <div className="mb-4">
                <label className="block text-base mb-2" htmlFor="job">
                 Job Title  <span className='text-[#CE2C31]'>*</span>
                </label>
                <input
                   className="appearance-none border border-gray-400 rounded-xl w-96 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
                   id="job"
                   type="text"
                   placeholder="Enter your Job Title"
                 />
              </div>
             <div className="mb-4 ml-4">
               <label className="block text-base mb-2" htmlFor="company">
                 Company  <span className='text-[#CE2C31]'>*</span>
               </label>
              <input
                 className="appearance-none border border-gray-400 rounded-xl w-96 py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
                 id="company"
                 type="text"
                 placeholder="Enter your Company’s Name"
               />
             </div>
           </div>

           <div className="mb-4 ">
               <label className="block text-base mb-2" htmlFor="select">
                Select Solution Need   <span className='text-[#CE2C31]'>*</span>
               </label>
               <select
                   className="appearance-none border border-gray-400 rounded-xl w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-gray-600"
                   id="select" >
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

              <div className="flex items-center justify-between">
                <button style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}
                  className="text-white py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit" >
                  Submit
                </button>
             </div>


          </form>
        </div>
       
     </section>

     <section>
      <div className='text-3xl font-semibold text-center'>
        Around the world: XYMA Analytics
        <center>
            <img  style={{ width: '14%',marginLeft:'18%' }} src={second} alt="Second" />
          </center>
      </div>
      <div className='text-[#60646C] text-sm text-center mt-2'>Installations of Ultrasonic Waveguide Sensors in different countries</div>
     </section>

    </div>
  );
};

export default ContactPage;
