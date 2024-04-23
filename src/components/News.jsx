import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const slides = [
    {
      title: 'First Title',
      image: 'public/img/news-thmbnl-1.jpg',
      date: '2 days ago'
    },
    {
      title: 'Second Title',
      image: 'public/img/news-thmbnl-2.jpg',
      date: 'A week ago'
    }
  ];

  return (
    <div className='bg-blue-600 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pb-16 font-playfair'>

      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>News</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
        <p className=''><span className='text-xl inline-block align-middle relative bottom-1'>of</span> NewJeans.</p>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        
        <div className="text-black h-full rounded-2xl">
          <iframe className='aspect-video h-full w-full rounded-2xl' src="https://www.youtube.com/embed/wU2siJ2c5TA?si=Ci923xnznTHLO05E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
        </div>
        

        <div className="relative overflow-hidden rounded-2xl">
          <div className="transition-all h-52 md:h-80 lg:h-96 xl:h-full w-full" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <a href='https://en.wikipedia.org/wiki/NewJeans' key={index} className={`h-full flex bg-[url('${slide.image}')] bg-cover bg-top`}>
                <div className="bg-gradient-to-t from-neutral-900 to-30% w-full h-full relative">
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className='text-md font-semibold'>{slide.title}</p>
                    <p className='text-xs font-thin'>{slide.date}</p>
                  </div>
                </div>
                {/* <img src={slide.image} alt={`Slide ${index}`} className="h-full" /> */}
              </a>
            ))}
          </div>
          <div className='text-black absolute bottom-0 right-0 p-4 flex flex-col'>
            <button className="bg-white p-2 rounded-t-full hover:opacity-65" onClick={prevSlide}>
              <FaAngleUp />
            </button>
            <button className="bg-white p-2 rounded-b-full hover:opacity-65" onClick={nextSlide}>
              <FaAngleDown />
            </button>
          </div>
        </div>
      
      </div>
      

    </div>
  );
};

export default News;
