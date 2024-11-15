import React from 'react'
import Wrapper from "../component/Wrapper";

const Connect = () => {
  return (
    <div className='bg-green-950'>
      <Wrapper>
      <section id="about">
<div className='grid grid-cols-2'>
<div className='pt-24 '>
    <div className='rounded-full border-lime-700 border w-[350px] px-3 '>
      <h1 className='text-lime-900'>Vetted solar technicians, instant connections</h1>
    </div>
    <div className='text-white text-5xl md:w-[500px] w-[360px] pt-6'>
    <h1>Connect with <span className='text-yellow-300'>skilled 
    local solar workforce</span>  in 
    record time!</h1>
    </div>
    <div className='text-white pt-5 text-xl md:w-[500px] w-[360px] '>
      <h1>Match your solar projects with vetted and trained 
      freelancers closest to your project location.</h1>
    </div>
    <div className='py-8 cursor-pointer '>
      <button className='rounded-full bg-yellow-300 py-1 w-[260px]'>See Solar Technician Footprint</button>
    </div>
  </div>

</div>
</section>
      </Wrapper>
    </div>
  )
}

export default Connect

