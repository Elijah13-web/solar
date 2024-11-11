import React from 'react'
import Wrapper from '../component/Wrapper'
import { FaCheck } from 'react-icons/fa' 

const Companies = () => {
  return (
    <div className='bg-green-950'>
      <Wrapper>
      <section id="For Companies"> 
      <div className='text-white py-20  grid lg:grid-cols-2 '>
            <div>
            <div>
              <h1 className='text-4xl pb-6'>For Companies</h1>
              <h2 className='text-xl md:w-[580px] w-[350px] text-center md:text-start'>
                Find qualified, vetted solar professionals for your projects through 
                Instollar. We match you with skilled installers who meet your specific 
                needs, ensuring that your projects are completed efficiently and to the 
                highest standards.
              </h2>
            </div>

            <div className='flex items-center py-5'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full mr-4 border border-yellow-300 font-bold'>
              <FaCheck className='text-yellow-300  font-bold'/>
            </div>
              <h1 className='text-xl'>Quality installations</h1>
            </div>
            <div className='flex items-center py-5'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full mr-4 border border-yellow-300 font-bold'>
              <FaCheck className='text-yellow-300  font-bold'/>
            </div>
              <h1 className='text-xl'>Project management for all your projects</h1>
            </div>
            <div className='flex items-center py-5'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full mr-4 border border-yellow-300 font-bold'>
              <FaCheck className='text-yellow-300  font-bold'/>
            </div>
              <h1 className='text-xl'>Energy Audits and more!</h1>
            </div>
            <div className='cursor-pointer rounded-full border bg-yellow-300 w-48 text-center text-2xl text-black py-3 my-3 mx-auto md:mx-0'>
              <button>Explore More</button>
            </div>

            </div>
            <div >
              <div className='grid md:grid-cols-2 gap-10 justify-center'>
              <div className='rounded-3xl bg-green-900 w-[300px] pt-32 text-2xl p-10'>
                <h1> 01.</h1>
                <h1 className='w-[250px]'>Residential, Commercial & Industrial, micro-grids & mini-grids</h1>
              </div>
              <div className='rounded-3xl bg-green-900 w-[300px] pt-32 text-2xl p-10'>
                <h1> 02.</h1>
                <h1 className='w-[250px]'> Energy audit, energy consultancy, installation, maintenance</h1>
              </div>
              </div>
            </div>
        </div>
      </section>
        
      </Wrapper>
    </div>
  )
}

export default Companies
