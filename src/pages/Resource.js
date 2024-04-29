import React from 'react'
import cs from '../Assets/cs.png'







const Resource = () => {
  return (
    <div>
      <section>
        <div>
          <img src={cs}></img>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <div className='text-white text-5xl font-bold mt-4 sm:mt-24'>
              Case Studies</div>
            <div className='text-sm text-white mt-5 ml-12' style={{width:'88%'}}>Xyma Analytics Case Studies are documented examples illustrating the application and effectiveness of 
              Xyma Analytics' solutions in real-world scenarios
            </div>          
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Resource
