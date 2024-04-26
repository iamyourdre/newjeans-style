import React, { useState, useEffect } from 'react';
import { FaClover } from "react-icons/fa6";
import { mem1, mem2, mem3, mem4, mem5, nj2 } from '../assets';

const Hero = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRendered(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] font-playfair font-bold my-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-7/12 lg:pr-16 text-center md:text-left">
          <div className={`${isRendered ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
            <p className='text-6xl xl:text-8xl ease-in duration-100'>Welcome <span className='text-2xl md:text-4xl'>to</span></p>
            <div className="flex justify-center md:justify-normal">
              <img src={nj2} alt="nj2" className='h-[3rem] xl:h-[4.6rem] flex-none relative top-2 lg:top-2.5 xl:top-3.5'/>
              <p className='text-6xl xl:text-8xl flex-initial ms-3  md:ms-4'>Official</p>
            </div>
            <div className='hover:rotate-[1deg] hover:translate-y-1 ease-in duration-200'>
              <div className='bg-blue-900 text-blue-600 w-auto inline-block px-12 mt-4 rounded-full -rotate-[1deg] absolute translate-y-1'>
                <p className='text-6xl xl:text-8xl inline relative bottom-1'>Fansite.</p>
              </div>
              <div className='bg-neutral-200 text-blue-600 w-auto inline-block px-12 mt-4 rounded-full -rotate-[2deg] hover:-rotate-[1deg] hover:translate-y-1 ease-in duration-200'>
                <p className='text-6xl xl:text-8xl inline relative bottom-1'>Fansite.</p>
              </div>
            </div>
          </div>
          <p className={`transition-all duration-500 delay-700 ${isRendered ? 'opacity-100' : 'opacity-0'}  py-9 md:w-10/12 lg:w-full text-xs font-thin lg:text-sm xl:text-base`}>Stay in the middle.. Like you a little.. Don't want no riddle.. 말해줘 say it back, oh, say it ditto.. 아침은 너무 멀어 so say it ditto.. I don't want to walk in this 미로.. 다 아는 건 아니어도.. 바라던 대로 말해줘..</p>
        </div>
        <div className="w-full md:w-4/12 lg:w-5/12">
          <div className="grid grid-cols-3 gap-1 w-full">

            {/* Card 1 */}
            <div className={`h-[11rem] xl:h-[14rem] relative transition-opacity duration-500 delay-[500ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
              <img src={mem1} className="rounded-full rounded-br-none object-center object-cover w-full h-full flex" />
              <div className="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full bottom-0 left-0 flex absolute rounded-full rounded-br-none">
                <span className="mx-auto my-auto drop-shadow-lg">Dewi</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className={`h-[11rem] xl:h-[14rem] relative transition-opacity duration-500 delay-[800ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
              <img src={mem2} className="rounded-full object-center object-cover w-full h-full flex" />
              <div className="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full bottom-0 left-0 flex absolute rounded-full">
                <span className="mx-auto my-auto drop-shadow-lg">Yanti</span>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className={`h-[11rem] xl:h-[14rem] relative transition-opacity duration-500 delay-[1100ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
              <img src={mem3} className="rounded-t-full rounded-br-none object-top object-cover w-full h-full flex" />
              <div className="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full bottom-0 left-0 flex absolute rounded-t-full rounded-br-none">
                <span className="mx-auto my-auto drop-shadow-lg">Ratna</span>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-3 gap-1 mt-1">
            
            {/* Card 4 */}
            <div className={`h-[11rem] xl:h-[14rem] relative transition-opacity duration-500 delay-[1400ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
              <img src={mem4} className="rounded-full object-center object-cover w-full h-full flex" />
              <div className="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full bottom-0 left-0 flex absolute rounded-full">
                <span className="mx-auto my-auto drop-shadow-lg">Siti</span>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className={`h-[11rem] xl:h-[14rem] relative transition-opacity duration-500 delay-[1700ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
              <img src={mem5} className="rounded-full rounded-t-none object-top object-cover w-full h-full flex" />
              <div className="ease-in duration-100 opacity-0 hover:backdrop-blur-sm hover:opacity-100 w-full h-full bottom-0 left-0 flex absolute rounded-full rounded-t-none">
                <span className="mx-auto my-auto drop-shadow-lg">Sumiati</span>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className={`border-neutral-200 border-2 bg-cover h-[11rem] xl:h-[14rem] w-full rounded-full rounded-t-none flex transition-opacity duration-500 delay-[2000ms] ${isRendered ? 'opacity-100' : 'opacity-0'}`}>
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
