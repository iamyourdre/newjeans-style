import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { news1, news2 } from '../assets/index';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const slides = [
    {
      title: 'First Title',
      image: news1,
      date: '2 days ago'
    },
    {
      title: 'Second Title',
      image: news2,
      date: 'A week ago'
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="transition-all h-52 md:h-96 xl:h-60 w-full" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="w-full h-full relative ">
            <img src={slide.image} className='object-top object-cover w-full h-full flex '/>
            <div className="absolute top-0 bg-gradient-to-t from-neutral-900 to-50% h-full w-full"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 xl:p-4">
              <p className='text-base md:text-xl lg:text-md font-semibold'>{slide.title}</p>
              <p className='text-xs md:text-md font-thin'>{slide.date}</p>
            </div>
          </a>
        ))}
      </div>
      <div className='text-black text-xs md:text-base absolute bottom-0 right-0 p-4 flex flex-col'>
        <button className="bg-white p-1 md:p-2 xl:p-1 rounded-t-full hover:opacity-65" onClick={prevSlide}>
          <FaAngleUp />
        </button>
        <button className="bg-white p-1 md:p-2 xl:p-1 rounded-b-full hover:opacity-65" onClick={nextSlide}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  )
}

export default Carousel
