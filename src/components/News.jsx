import React from 'react';
import Carousel from './Carousel';

const News = () => {

  return (
    <div className='bg-blue-600 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pb-16 font-playfair'>

      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>Latest News</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
      </div>


      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        
        <div className="text-black h-full rounded-2xl">
          <iframe className='aspect-video h-full w-full rounded-2xl' src="https://www.youtube.com/embed/wU2siJ2c5TA?si=Ci923xnznTHLO05E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
        </div>

        <Carousel/>
      
      </div>
      

    </div>
  );
};

export default News;
