import React from 'react'
import Navbar from './Navbar'
import Navpage from './Navpage'
import Header from './Header'

const Mainpage = () => {
  return (

    <React.Fragment>
        <section >
            <div >
              <Navbar/>
              </div><div>
              <Navpage/>
            </div>           
        </section>

    </React.Fragment>
  )
}

export default Mainpage
