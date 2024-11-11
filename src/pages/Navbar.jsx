import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../component/Wrapper";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-green-950'>
      <Wrapper>
        <div>
          <nav className='flex justify-between items-center py-4 '>
            <a href='/' className='flex items-center text-3xl text-white cursor-pointer'>
              <h1 className=' font-bold'>Instollar</h1>
            </a>
            <div
              onClick={onToggleMenu}
              className="cursor-pointer text-white md:hidden"
            >
              {menuOpen ? <IoMdClose className="mx-3" /> : <GiHamburgerMenu className="mx-3" />}
            </div>
            <div className='hidden md:flex space-x-2 lg:space-x-10 md:space-x-5 text-white'>
              <a href="#About Us" className='font-bold'> About Us</a>  
              <a href="#For Companies" className='font-bold'> For Companies</a>
              <a href="#For Solar Technicians" className='font-bold'>For Solar Technicians</a>
              <a href="#Impact" className='font-bold'> Impact</a>
              <div className='lg:w-72'>
              </div>
              <a href="#Get Started" className=' rounded-3xl p-2 px-5 bg-yellow-200 hover:bg-yellow-400'>
                <button className='text-black'>Get started</button>
              </a>
            </div>
          </nav>

          {menuOpen && (
            <div className='flex flex-col md:hidden space-y-2 p-4 bg-white border border-gray-300 rounded-md'>
              <h1 className='font-bold'><a href="#About Us">About Us</a></h1>
              <h1 className='font-bold'><a href="#For Companies">For Companies</a></h1>
              <h1 className='font-bold'><a href="#For Solar Technicians">For Solar Technicians</a></h1>
              <h1 className='font-bold'><a href="#Impact"> Impact</a></h1>
              <a href="#get started" className=' rounded-3xl p-2 w-36 text-center bg-yellow-200 hover:bg-yellow-400'>
                <button className='text-black'>Get started</button>
              </a>
            </div>
          )}
        </div>
      </Wrapper>
    </header>
  );
}

export default Navbar;
