import React from 'react'
import { nj1 } from '../assets'
import { SiRabbitmq } from "react-icons/si";

const Hero = () => {
  return (
    <div className='font-playfair container'>
    <p className='text-7xl'>WELCOME <span className='text-4xl'>TO</span></p>
    <div className="flex">
      <img src={nj1} alt="nj1" className='h-14 flex-none relative top-2.5'/>
      <p className='text-7xl font-bold flex-initial ms-3'>OFFICIAL</p>
    </div>
    <p className='text-7xl '>FANSITE <SiRabbitmq className='text-xl inline relative animate-jump top-1'/></p>
    </div>
  )
}

export default Hero
