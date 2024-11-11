import React from 'react'
import Wrapper from '../component/Wrapper'

const Customers = () => {
  return (
    <div className='bg-yellow-100'>
      <Wrapper>
      <section id="Impact"> 
      <div className='grid md:grid-cols-2 py-24 gap-10 text-center md:text-start'>
          <div className='text-4xl md:w-[300px] '>
            <h1> What Our Customers Say</h1>
          </div>
          <div>
            <h1 className='text-2xl font-semibold md:w-[650px] pb-8'>  Instollar has a highly impressive turnaround time - we had an initial requirement to cover 6 energy audits across 5 different states in Nigeria, and Instollar was very quick in responding to the request and providing installers</h1>

            <h1 className='pb-4 text-2xl font-bold'>
            Mubarak
            </h1>
            <h1 className='text-2xl font-semibold'>CEO - Rana Energy</h1>
          </div>
        </div>
      </section>
       
      </Wrapper>
    </div>
  )
}

export default Customers