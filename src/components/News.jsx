import React from 'react';
import Carousel from './Carousel';
import { FaArrowRightLong } from 'react-icons/fa6';

const News = () => {

  return (
    <div className='bg-blue-600 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pt-16 font-playfair'>

      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>Latest News</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
      </div>


      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">

        <div className='lg:col-span-2 xl:col-span-1'>
          <Carousel/>
        </div>
        
        <div className="text-black h-full rounded-2xl">
          <iframe className='aspect-video h-full w-full rounded-2xl' src="https://www.youtube.com/embed/ft70sAYrFyY?si=GDzIkTMr-iCDbmE-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
        </div>

        <div className="w-full md:text-left bg-gradient-to-b from-blue-500 to-blue-400 drop-shadow-md p-6 rounded-3xl">
          <div className="text-3xl leading-tight mb-4">
            <div className="flex">
              <p className='me-3'>Subscribe</p>
              <div className="border-b w-full flex-1 relative bottom-3"></div>
            </div>
            <p className='mt-3 opacity-70 text-sm'>Get early newsletter about daily events and NewJeans update for free.</p>
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
  );
};

export default News;
