import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner.png)] bg-left lg:bg-[15%] bg-cover '
     style={{backgroundSize: '20%',  backgroundPosition: '20% center'}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[110px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="zoom-in-up">I am</p>
                <p data-aos="zoom-in-up">Fatima</p>
                <p data-aos="zoom-in-up">Salman</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
