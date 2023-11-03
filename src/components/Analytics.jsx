import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={laptop}  alt='/'/>
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4l sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            {/* <p>Data analytics is the science of analyzing raw data to make conclusions about information.
             Many of the techniques and processes of data analytics have been automated 
            into mechanical processes and algorithms that work over raw data for human consumption.</p> */}
            <p>Lorem sit est clita nonumy sit takimata, et kasd amet gubergren erat, 
            ipsum lorem erat amet lorem clita rebum accusam gubergren dolores.Et vero 
            stet sit sit. Ipsum rebum sea.</p>
            <button className='bg-black text-[#5ae6c8] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Analytics
