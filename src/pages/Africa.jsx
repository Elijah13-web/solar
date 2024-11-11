import React from 'react'
import Wrapper from '../component/Wrapper'

const Africa = () => {
  return (
    <div className='bg-green-950'>
      <Wrapper>
      <section id="About Us"> 
      <div className=''>
          <div className='py-14  justify-center items-center text-center'>
            <h1 className='text-white md:text-5xl text-4xl py-6 lg:w-[800px] md:w-[700px] w-[340px] mx-auto'>
              Instollar is <span className='text-yellow-300'>Africa's most trusted</span> solar energy workforce provider
            </h1>
            <h1 className='text-white md:w-[600px] w-[340px] mx-auto'>
              We enable seamless matching with a highly qualified, vetted solar workforce closest to 
              your project location, and help manage the entire project from start to finish.
            </h1>
          </div>
          
         <div className='grid lg:grid-cols-4 md:grid-cols-2 g gap-10 pb-12 '>
         <div className='rounded-2xl bg-green-800 p-5 md:w-[260px] w-[350px] mx-auto '>
            <div className='text-white pt-20'>
              <h1 className='text-xl w-[200px] py-5'> Support You Can Count On</h1>
              <h2> Rest assured with our transparent escalation matrix for prompt and effective issue resolution.</h2>
            </div>
          </div>
         <div className='rounded-2xl bg-green-800 p-5 md:w-[260px] w-[350px] mx-auto'>
            <div className='text-white pt-20'>
              <h1 className='text-xl w-[200px] py-5'> Efficient Project Management</h1>
              <h2> Benefit from our streamlined process, ensuring rapid turnaround times from request to completion.</h2>
            </div>
          </div>
         <div className='rounded-2xl bg-green-800 p-5 md:w-[260px] w-[350px] mx-auto'>
            <div className='text-white pt-20'>
              <h1 className='text-xl w-[150px] py-5'> Your Personal Solar Partner</h1>
              <h2>  Enjoy personalized service with a dedicated Key Account Manager for every project.</h2>
            </div>
          </div>
         <div className='rounded-2xl bg-green-800 p-5 md:w-[260px] w-[350px] mx-auto'>
            <div className='text-white pt-20'>
              <h1 className='text-xl w-[200px] py-5'>  Your Personal Solar Partner</h1>
              <h2>  Enjoy personalized service with a dedicated Key Account Manager for every project.</h2>
            </div>
          </div>
         </div>
        </div>
      </section>
    
      </Wrapper>
    </div>
  )
}

export default Africa
