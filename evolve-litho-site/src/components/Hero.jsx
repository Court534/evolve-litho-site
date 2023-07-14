import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      
      {/* Container */}
      <div name='hero' className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-screen pt-20 text-white'>
        <h1 className='flex justify-center items-center text-5xl sm:text-7xl font-bold'>Evolve Litho</h1>
        <br />
        <h2 className='flex justify-center items-center text-4xl sm:text-6xl font-bold text-center'>Digital & Litho Printing Specialists</h2>
      </div>

    </div>
  )
}

export default Hero