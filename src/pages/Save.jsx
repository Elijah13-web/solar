import React from 'react'
import Wrapper from '../component/Wrapper'

const Save = () => {
  return (
    <div className='bg-green-900'>
      <Wrapper>
        <div className='text-center mx-auto justify-center text-white py-20'>
          <h1 className='text-5xl py-10'> Save costs, save time!</h1>
          <h1 className='text-xl  lg:w-[820px] pb-5 mx-auto'> Eliminate recruitment time, high payroll, logistics and accommodation costs by outsourcing your workforce</h1>
          <div className='bg-yellow-300  rounded-full border w-[150px] py-3 text-green-950 text-xl cursor-pointer mx-auto'>
            <h1>Get Started</h1>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Save