import React from 'react'
import { nj2 } from '../assets'
import { FaClover } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='px-[2rem] md:px-[4rem] lg:px-[8rem] font-playfair font-bold my-12 '>
      <div className="flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-7/12 lg:pr-16 text-center md:text-left">
          <p className='text-7xl md:text-8xl '>Welcome <span className='text-2xl md:text-4xl'>to</span></p>
          <div className="flex justify-center md:justify-normal">
            <img src={nj2} alt="nj2" className='h-[3rem] md:h-[4.6rem] flex-none relative top-2 md:top-3.5'/>
            <p className='text-7xl md:text-8xl flex-initial ms-3  md:ms-4'>Official</p>
          </div>
          <div className='hover:rotate-[1deg] ease-in duration-200'>
            <div className='bg-blue-900 text-blue-600 w-auto inline-block px-12 mt-4 rounded-full -rotate-[1deg] absolute translate-y-1'>
              <p className='text-7xl md:text-8xl inline relative bottom-1'>Fansite.</p>
            </div>
            <div className='bg-neutral-200 text-blue-600 w-auto inline-block px-12 mt-4 rounded-full -rotate-[2deg] hover:-rotate-[1deg] hover:translate-y-1 ease-in duration-200'>
              <p className='text-7xl md:text-8xl inline relative bottom-1'>Fansite.</p>
            </div>
          </div>
          <p className='py-9 md:w-10/12 lg:w-full font-thin'>Stay in the middle.. Like you a little.. Don't want no riddle.. 말해줘 say it back, oh, say it ditto.. 아침은 너무 멀어 so say it ditto.. I don't want to walk in this 미로.. 다 아는 건 아니어도.. 바라던 대로 말해줘..</p>
        </div>
        <div className="w-full md:w-4/12 lg:w-5/12">
          <div className="grid grid-cols-3 gap-1 w-full">
            <div class="bg-[url('public/img/thmb-minji.jpeg')] bg-cover h-[14rem] rounded-full rounded-br-none">
              <div class="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full rounded-full rounded-br-none flex">
                <span className="mx-auto my-auto drop-shadow-lg">Minji</span>
              </div>
            </div>
            <div class="bg-[url('public/img/thmb-hanni.jpeg')] bg-cover h-[14rem] rounded-full ">
              <div class="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full rounded-full rounded-br-none flex">
                <span className="mx-auto my-auto drop-shadow-lg">Hanni</span>
              </div>
            </div>
            <div class="bg-[url('public/img/thmb-danielle.jpeg')] bg-cover h-[14rem] rounded-t-full rounded-br-none">
              <div class="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full rounded-full rounded-br-none flex">
                <span className="mx-auto my-auto drop-shadow-lg">Danielle</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-1">
            <div class="bg-[url('public/img/thmb-haerin.jpeg')] bg-cover h-[14rem] w-full rounded-full">
              <div class="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full rounded-full rounded-br-none flex">
                <span className="mx-auto my-auto drop-shadow-lg">Haerin</span>
              </div>
            </div>
            <div class="bg-[url('public/img/thmb-hyein.jpeg')] bg-cover h-[14rem] w-full rounded-full rounded-t-none">
              <div class="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full rounded-full rounded-br-none flex">
                <span className="mx-auto my-auto drop-shadow-lg">Hyein</span>
              </div>
            </div>
            <div class="border-neutral-200 border-2 bg-cover h-[14rem] w-full rounded-full rounded-t-none flex">
              <span className="mx-auto my-auto relative bottom-2 animate-jump">
                <FaClover className='text-neutral-200 text-7xl rotate-45'/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
