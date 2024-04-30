import React, { useState } from 'react';
import cs from '../Assets/cs.png';
import all1 from '../Images/all1.png'
import all2 from '../Images/all2.png'
import all3 from '../Images/all3.png'
import aluminum from '../Images/al1.png'


const Resource = () => {
    const [displayContent, setDisplayContent] = useState(false);

    const toggleContent = () => {
        setDisplayContent(!displayContent);
    };

    return (
        <div>
            <section>
                <div>
                    <img src={cs} alt="Case Studies" />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <div className='text-white text-5xl font-bold mt-4 sm:mt-24'>
                            Case Studies
                        </div>
                        <div className='text-sm text-white mt-5 ml-12' style={{ width: '88%' }}>
                            Xyma Analytics Case Studies are documented examples illustrating the application and effectiveness of Xyma Analytics' solutions in real-world scenarios
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <p>
                        <span style={{ cursor: 'pointer' }} onClick={toggleContent}>
                        Aluminum
                        </span>
                    </p>

                    {displayContent && (
                      <div className='border border-gray-200 rounded-2xl p-3 flex ' style={{width:'60%',marginLeft:'10%'}}>
                        <span className='text-xl'>Alumnium</span>
                        <div style={{ position: 'relative', display: 'inline-block',marginTop:'6%' }}> 
                          <img style={{ width: '95%' }} src={aluminum} alt="Alumnium Image" />
                          <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '40%', left: '68%',width:'22%',height:'7%' }}>Case Studies</button>
                          <p style={{width:'90%',fontSize:'20px',marginTop:'20px'}}>A 10°C temperature deviation reduces efficiency, promotes anode effect, and increases PFC emissions.</p>
                        </div>

                        <div style={{}}>  
                          <span className='text-xl'>All</span>
                          <div className='flex mt-4'>
                            <div >
                              <img style={{width:'65%',marginLeft:'25%',marginTop:'6px'}}src={all1}></img>
                            </div>
                              <p  style={{width:'65%',fontSize:'18px'}}>A 10°C shift lowers efficiency, boosts anode effect, and raises PFC emissions.</p>
                          </div>
                                                      
                         
                          <div className='flex mt-6'> 
                            <div>
                            <hr class="ml-9 mt-2 border border-gray-200" style={{width:'220%'}} />
                              <img style={{width:'65%',marginLeft:'25%',marginTop:'15px'}}src={all2}></img>
                            </div>
                              <p  style={{width:'68%',fontSize:'18px',marginTop:'20px'}}>Extending the ladle life for one cycle would result in steel production worth $5.1 million.</p>
                          </div>

                          <div className='flex mt-6'>
                            <div>
                            <hr class="ml-10 border border-gray-200" style={{width:'220%'}} />
                              <img style={{width:'65%',marginLeft:'25%',marginTop:'16px'}}src={all3}></img>
                            </div>
                              <p  style={{width:'65%',fontSize:'18px',marginTop:'20px'}}>20°C rise halves reformer tube lifespan; design temperature crucial.</p>
                          </div>

                        </div>
                      </div>
                      
                      
                    )}
                </div>
            </section>
        </div>
    );
}

export default Resource;
