import React from 'react'
import { FaApple, FaDeezer, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa"
import { LuArrowUpRight } from 'react-icons/lu'

const Discography = () => {
  return (
    <div className='pattern-rhombus px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-16 font-playfair'>
      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>Listen to</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
        <p className=''><span className='text-xl inline-block align-middle relative bottom-1'>our</span> hyped songs.</p>
      </div>
      <div className="w-full lg:pr-16 md:text-left bg-gradient-to-b from-blue-500 to-blue-400 backdrop-blur-xl drop-shadow-md p-8 md:p-10 rounded-3xl">
        <div className="md:flex">  
          <div className="w-full md:w-5/12 md:pr-10 font-bold">
            <a href="https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw" className='rounded-full border-2 border-neutral-50 text-neutral-50 ease-in duration-200 bg-blue-500 hover:bg-blue-400 w-full flex p-1 mb-2'>
              <div className='my-auto flex-1 ms-5'>
                <FaYoutube className='inline text-xl md:text-2xl relative bottom-0.5 me-2'/> Youtube
              </div>
              <span className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-10 h-10 text-center'><LuArrowUpRight className='inline text-xl md:text-2xl relative top-1'/></span>
            </a>

            <div className="flex pb-8">
              <a href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d" className='rounded-full border-2 border-neutral-50 text-neutral-50 ease-in duration-200 hover:bg-blue-400 w-full p-1 me-2 hidden xl:flex '>
                <div className='my-auto flex-1 ms-5'>
                  <FaSpotify className='inline text-xl md:text-2xl relative bottom-0.5 me-2'/>Spotify
                </div>
                <span className='rounded-full border bg-neutral-50 text-blue-400 inline-block align-middle w-10 h-10 text-center'><LuArrowUpRight className='inline text-xl md:text-2xl relative top-1'/></span>
              </a>
              <div className="flex w-full justify-between pt-2 xl:pt-0 xl:ps-2">
                <a href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d" className='rounded-full border-2 border-neutral-50 inline-block align-middle w-12 h-12 md:w-12 md:h-12 text-center hover:bg-blue-400 ease-in duration-200 xl:hidden'><FaSpotify className='inline text-xl md:text-2xl relative top-2'/></a>
                <a href="https://soundcloud.com/newjeans-music" className='rounded-full border-2 border-neutral-50 inline-block align-middle w-12 h-12 md:w-12 md:h-12 text-center hover:bg-blue-400 ease-in duration-200'><FaSoundcloud className='inline text-xl md:text-2xl relative top-2'/></a>
                <a href="https://music.apple.com/us/artist/newjeans/1635469693" className='rounded-full border-2 border-neutral-50 inline-block align-middle w-12 h-12 md:w-12 md:h-12 text-center hover:bg-blue-400 ease-in duration-200'><FaApple className='inline text-xl md:text-2xl relative top-1.5'/></a>
                <a href="https://www.deezer.com/en/artist/178008437" className='rounded-full border-2 border-neutral-50 inline-block align-middle w-12 h-12 md:w-12 md:h-12 text-center hover:bg-blue-400 ease-in duration-200'><FaDeezer className='inline text-xl md:text-2xl relative top-2'/></a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
              <div className="flex flex-col text-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/New_Jeans_%28EP%29.jpg" alt="New Jeans" className='rounded-2xl shadow-lg'/>
                <p className='mt-2 font-extrabold text-lg'>New Jeans</p>
                <p className='text-sm'>Album • 2022</p>
              </div>
              <div className="flex flex-col text-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/1/10/NewJeans_OMG_cover.jpg" alt="OMG" className='rounded-2xl shadow-lg'/>
                <p className='mt-2 font-extrabold text-lg'>OMG</p>
                <p className='text-sm'>Album • 2023</p>
              </div>
              <div className="flex flex-col text-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/NewJeans_-_Get_Up.png/220px-NewJeans_-_Get_Up.png" alt="Get Up" className='rounded-2xl shadow-lg'/>
                <p className='mt-2 font-extrabold text-lg'>Get Up</p>
                <p className='text-sm'>Album • 2023</p>
              </div>
              <div className="flex flex-col text-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/NewJeans_-_NJWMX.png/220px-NewJeans_-_NJWMX.png" alt="NJWMX" className='rounded-2xl shadow-lg'/>
                <p className='mt-2 font-extrabold text-lg'>NJWMX</p>
                <p className='text-sm'>Album • 2023</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Discography
