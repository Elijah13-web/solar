import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Wrapper from '../component/Wrapper';

const Footer = () => {
  return (
    <div className='bg-green-950'>
      <Wrapper>
        <div className='py-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white text-center md:text-start'>
          <div>
            <a href='/' className='flex items-center  text-3xl text-white cursor-pointer'>
              <h1 className='font-bold mx-auto md:mx-0'>Instollar</h1>
            </a>
            <h2 className='text-2xl text-yellow-300 w-[200px] py-5 mx-auto md:mx-0'>
              Your Green Energy Workforce
            </h2>
            <div className='flex space-x-4 pb-8  justify-center md:justify-start'>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-yellow-300'>
                <FaLinkedin size={24} />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-yellow-300'>
                <FaTwitter size={24} />
              </a>
              <a href='https://www.github.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-yellow-300'>
                <FaGithub size={24} />
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-yellow-300'>
                <FaInstagram size={24} />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-yellow-300'>
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          <div className='grid grid-cols-2 text-xl pb-8'>
            <div>
              <h1 className='pb-5'>Home</h1>
              <h1 className='pb-5'>For Companies</h1>
              <h1>For Solar Technicians</h1>
            </div>
            <div>
              <h1 className='pb-5'>About Us</h1>
              <h1 className='pb-5'>Impact</h1>
              <h1>Contact Us</h1>
            </div>
          </div>

          <div>
            <h1 className='pb-5 text-2xl font-semibold'>Follow Along Our Journey</h1>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <div className='rounded-full bg-white w-[280px] flex items-center cursor-pointer px-4 py-3'>
                <FaEnvelope className='text-green-700 text-2xl mr-3' />
                <h1 className='text-green-700 text-2xl'>Enter Your Email</h1>
              </div>
              <div className='rounded-full bg-yellow-500 w-[140px] py-3 flex items-center justify-center cursor-pointer'>
                <h1 className='text-green-950 text-2xl'>Subscribe</h1>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
