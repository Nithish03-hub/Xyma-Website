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






const CaseStudy = () => {

  const navigate = useNavigate();
  const handleBack =()=>{
    navigate ('/resources');
  } 

  return (
   <div>
     <section>
      <div className="flex flex-col md:flex-row items-center" style={{ marginTop: '10%', marginLeft: '8%' }}>
        <div className="ml-10 md:ml-0 md:mr-4 mt-2 text-xl" onClick={handleBack}>
          <HiChevronLeft />
        </div>
        <div className="text-2xl font-semibold mt-2">
          Aluminum Case Studies
          <img src={second} className="mt-4 md:mt-0 ml-auto md:w-32" alt="Second" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center" style={{ marginTop: '5%', marginLeft: '8%' }}>
        <div className="md:mr-4">
          <img style={{ maxWidth: '140%' }} src={aluminum} alt="Aluminum Image" />
          <button className="bg-white rounded-full text-xs absolute bottom-96 md:bottom-40 left-96 w-20 h-6 md:left-96">Case Studies</button>
        </div>

        <div className="mt-4 md:mt-0 ">
          <div className="bg-gray-200 w-20 text-xs text-gray-500 rounded-2xl px-2 py-1 mb-2 md:mb-0 md:mr-8 md:ml-32">4 Min Read</div>
          <div className="text-lg md:ml-32 lg:w-full" style={{width:'55%'}}>
            A 10°C temperature deviation diminishes efficiency, intensifies anode effect, and raises PFC emissions, underscoring the significance of meticulous temperature control in industrial processes to optimize performance and reduce environmental impact
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
          
          <img src={aluminum2} style={{ width: '60%', maxWidth: '100%', height: 'auto', marginLeft: '5%',marginTop:'2%' }} />

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

          <img src={alum} style={{ width: '60%', maxWidth: '100%', height: 'auto', marginLeft: '5%',marginTop:'2%' }} />
     
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

    </section>
  </div>
  );
};

export default CaseStudy;
