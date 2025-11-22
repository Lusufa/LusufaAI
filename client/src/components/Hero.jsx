import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div
      className='px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center
      min-h-screen bg-[url("/gradientBackground.png")] bg-cover bg-center bg-no-repeat'
    > 
      <div className='max-w-2xl text-center mb-6 mx-auto'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold leading-[1.2] text-primary'>
          Create your imagination<br/> with{' '}
          <motion.span
            className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-300'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          >
            ContentEase 
          </motion.span>
        </h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl text-gray-600 text-sm sm:text-base mx-auto'>
          Transform your creation with our suite of premium AI tools.
          Write articles, generate images, and more with ease.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
        <button onClick={() => navigate('/ai')} className=' mt-8 px-6 py-3  bg-gradient-to-r from-purple-700 to-pink-300 text-white rounded-lg hover:scale-102 active-95 transition cursor-pointer'>
          Get Started
        </button>
      </div>
      <div className='flex flex-wrap justify-center items-center mt-4'>
        <img src={assets.user_group} alt='' className='h-8' /> trusted by over 1000+ users
      </div>
    </div>
  )
}

export default Hero
