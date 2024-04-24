import React from 'react'
import { FaArrowRightLong, FaArrowUp } from 'react-icons/fa6'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='pattern-rhombus pt-16 font-playfair'>
      <div className="w-full lg:pr-16 md:text-left bg-gradient-to-b from-blue-500 to-blue-400 drop-shadow-md px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-8">

        <div className="mb-8">
          <img src={logo} alt="NewJeans" className='h-10 inline'/>
          <a class="font-bold text-2xl float-right" href='#top' type="button">
            <FaArrowUp className='inline'/>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3">

          <div className='col-span-3 lg:col-span-2'>
            <div className="grid grid-cols-2 md:grid-cols-3">
              <ul className='mb-4 xl:mb-0 col-span-2 md:col-span-1'>
                <p className='font-bold text-blue-300 tracking-wide'>OFFICIAL</p>
                <li><a href="https://shop.newjeans-official.us/">NewJeans Shop</a></li>
                <li><a href="https://newjeans.kr/">Bunnies Camp</a></li>
              </ul>
              <ul className='mb-4 xl:mb-0 col-span-2 md:col-span-1'>
                <p className='font-bold text-blue-300 tracking-wide'>STREAM ON</p>
                <li><a href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d">Spotify</a></li>
                <li><a href="https://soundcloud.com/newjeans-music">Soundcloud</a></li>
                <li><a href="https://music.apple.com/us/artist/newjeans/1635469693">Apple</a></li>
                <li><a href="https://www.deezer.com/en/artist/178008437">Deezer</a></li>
              </ul>
              <ul className='mb-4 xl:mb-0 col-span-2 md:col-span-1'>
                <p className='font-bold text-blue-300 tracking-wide'>SOCIAL MEDIA</p>
                <li><a href="https://twitter.com/NewJeans_ADOR/">Twitter</a></li>
                <li><a href="https://www.instagram.com/newjeans_official/">Instagram</a></li>
                <li><a href="https://www.facebook.com/official.newjeans/">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="w-full rounded-3xl col-span-3 lg:col-span-1">
            <div className="text-3xl leading-tight mb-4">
              <div className="flex">
                <p className='me-3'>Subscribe</p>
                <div className="border-b w-full flex-1 relative bottom-3"></div>
              </div>
            </div>
            <form class="flex flex-row bg-blue-400 border border-transparent ease-in duration-100 p-0.5 hover:border-blue-300  hover:bg-transparent rounded-xl leading-tight">
              <input class="flex-1 rounded-s-lg py-3 ps-4 lg:pe-4 bg-transparent outline-none focus:shadow-outline text-white placeholder:opacity-50 placeholder:text-white" id="username" type="email" placeholder="Email" autoComplete='off'/>
              <button class="rounded-lg bg-neutral-50 font-bold py-2 px-3 lg:px-6 outline-none focus:shadow-outline text-blue-600" type="button">
                <FaArrowRightLong />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
