import React from 'react'
import { FaApple, FaDeezer, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa"

const Discography = () => {
  return (
    <div className='pattern-rhombus px-[2rem] md:px-[4rem] lg:px-[8rem] font-abril py-12'>
      <div className="w-full lg:pr-16 md:text-left bg-gradient-to-b from-blue-500 to-blue-400 backdrop-blur-xl drop-shadow-md p-8 md:p-10 rounded-3xl md:flex">
        <div className="w-full md:w-5/12 text-center md:pe-10 pt-4 pb-10 md:py-5">
          <p className='text-5xl font-abril mb-6'>Discography</p>
          <div>
            <a href="https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw" className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-12 h-12 text-center me-2'><FaYoutube className='inline text-2xl relative top-2'/></a>
            <a href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d" className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-12 h-12 text-center me-2'><FaSpotify className='inline text-2xl relative top-2'/></a>
            <a href="https://soundcloud.com/newjeans-music" className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-12 h-12 text-center me-2'><FaSoundcloud className='inline text-2xl relative top-2'/></a>
            <a href="https://music.apple.com/us/artist/newjeans/1635469693" className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-12 h-12 text-center me-2'><FaApple className='inline text-2xl relative top-2'/></a>
            <a href="https://www.deezer.com/en/artist/178008437" className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-12 h-12 text-center'><FaDeezer className='inline text-2xl relative top-2'/></a>
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
            <div className="flex flex-col text-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg" alt="New Jeans" className='rounded-2xl shadow-lg'/>
              <p className='font-playfair mt-2 font-extrabold text-lg'>New Jeans</p>
              <p className='font-playfair text-sm'>Album • 2022</p>
            </div>
            <div className="flex flex-col text-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/1/10/NewJeans_OMG_cover.jpg" alt="OMG" className='rounded-2xl shadow-lg'/>
              <p className='font-playfair mt-2 font-extrabold text-lg'>OMG</p>
              <p className='font-playfair text-sm'>Album • 2023</p>
            </div>
            <div className="flex flex-col text-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/NewJeans_-_Get_Up.png/220px-NewJeans_-_Get_Up.png" alt="Get Up" className='rounded-2xl shadow-lg'/>
              <p className='font-playfair mt-2 font-extrabold text-lg'>Get Up</p>
              <p className='font-playfair text-sm'>Album • 2023</p>
            </div>
            <div className="flex flex-col text-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/NewJeans_-_NJWMX.png/220px-NewJeans_-_NJWMX.png" alt="NJWMX" className='rounded-2xl shadow-lg'/>
              <p className='font-playfair mt-2 font-extrabold text-lg'>NJWMX</p>
              <p className='font-playfair text-sm'>Album • 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discography
