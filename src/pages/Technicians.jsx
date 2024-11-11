import React from 'react'
import Wrapper from '../component/Wrapper'
import { FaCheck } from 'react-icons/fa'

const Technicians = () => {
  return (
    <div className='bg-green-950'>
      <Wrapper>
      <section id="For Solar Technicians"><div className='grid lg:grid-cols-2  text-white pb-24'>
          <div>
            we
          </div>
          <div className='pt-14'>
            <h1 className='text-4xl font-serif py-6'>For Solar Technicians</h1>
            <h1 className='text-xl md:w-[650px] w-[380px] pb-6'> Unlock your potential in the thriving solar industry. Join Instollar today 
            and watch your income grow multi-fold!</h1>
            <div className='flex pb-5 md:w-[680px] w-[380px]'>
            <div className='flex items-center justify-center md:w-16 md:h-7 w-24 h-6 rounded-full mr-4 border border-yellow-300 font-bold'>
              <FaCheck className='text-yellow-300 font-bold'/>
            </div>
              <h1 className='text-xl'>Invest in your future. Benefit from comprehensive learning and development opportunities, including training and certification programs, to become a highly skilled solar technician.</h1>
            </div>
            <div className='flex pb-10 md:w-[640px] w-[340px]'>
            <div className='flex items-center justify-center md:w-16 md:h-7 w-24 h-6 rounded-full mr-4 border border-yellow-300 font-bold'>
              <FaCheck className='text-yellow-300 font-bold'/>
            </div>
              <h1 className='text-xl'> Experience the flexibility and freedom of a rewarding career. Enjoy the satisfaction of contributing to a sustainable future while earning a competitive income</h1>
            </div>
          <div className='bg-yellow-300 text-center rounded-full border w-[150px] py-3 text-green-950 text-xl cursor-pointer mx-auto md:mx-0'>
            <h1>Get Started</h1>
          </div>
          </div>
         
        </div></section>
        
      </Wrapper>
    </div>
  )
}

export default Technicians