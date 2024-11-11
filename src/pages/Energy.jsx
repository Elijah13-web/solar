import React from 'react'
import Wrapper from '../component/Wrapper'

const Energy = () => {
  return (
    <div className='bg-green-800'>
        <Wrapper>
            <div className='py-24 grid lg:grid-cols-4 md:grid-cols-2 font-serif'>
                <div className='text-4xl md:w-[250px] text-center md:text-start text-white pb-5 md:pb-0'>
                    <h1>We are committed to <a className="text-yellow-300">clearn energy</a></h1>
                </div>
                <div className='text-white text-center md:text-start pb-5 md:pb-0'>
                    <h1 className='text-4xl'>900</h1>
                    <h1 text-4xl>+</h1>
                    <h1 className='text-xl'>Solar workforce across 36 states</h1>
                </div>
                <div className='text-white md:w-[300px] text-center md:text-start pb-5'>
                    <h1 className='text-4xl'>1,800+</h1>
                    <h1 className='text-xl pt-5'>Solar  projects successfully 
                    completed</h1>
                </div>
                <div className='text-white md:w-[300px] text-center md:text-start'>
                    <h1 className='text-4xl'>20-40%</h1>
                    <h1 className='text-xl pt-5'> Reduction in workforce costs  
                    experienced by our clients</h1>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Energy