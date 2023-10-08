import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className="w-full text-3xl font-bold text-[#5ae6c8]">
      SwiftHub.
    </h1>
    <ul className='flex hidden'>
      <li className='p-4'>Home</li>
      <li className='p-4'>company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>
    <div>
      <AiOutlineMenu size={20}/>
    </div>
    <div className='fixed left-0 top-0'>
      <ul>
      <li className='p-4'>Home</li>
      <li className='p-4'>company</li>
      <li className='p-4'>Resources</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
