import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

const Galleries = () => {
  return (
    
    <div className='pattern-rhombus px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-16 font-playfair'>
      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>Galleries</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
        <p className=''><span className='text-xl inline-block align-middle relative bottom-1'>of</span> NewJeans.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <a href='https://en.wikipedia.org/wiki/NewJeans' className="w-full md:w-1/2 relative">
          <img src="public/img/phtst-nwjns.webp" className="rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full h-full opacity-100 bg-gradient-to-t from-blue-400 text-white shadow-xl to-50% rounded-2xl transition duration-1000 hover:text-transparent">
            <div className="absolute bottom-0 left-0 p-4 md:p-6 xl:p-8">
              <p className='text-xl md:text-2xl font-medium'>This is NewJeans</p>
              <p className='text-xs md:text-sm font-thin'>It's where the story begins...</p>
            </div>
            <div className="absolute bottom-0 right-0 p-4 md:p-6 xl:p-8">
              <span className='rounded-full border border-neutral-50 text-neutral-50 inline-block align-middle w-10 h-10 text-center'><LuArrowUpRight className='inline text-xl md:text-2xl relative top-1'/></span>
            </div>
          </div>
        </a>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-1 bg-cover relative">
            <img src="public/img/phtst-ditto.webp" className="rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full opacity-100 bg-gradient-to-t from-blue-400 text-white shadow-xl to-50% rounded-2xl transition duration-1000 hover:text-transparent">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                <p className='lg:text-xl font-medium'>DITTO</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6">
                <LuArrowUpRight className='inline text-xl text-neutral-50'/>
              </div>
            </div>
          </a>
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-1 bg-cover relative">
            <img src="public/img/phtst-njwmx.webp" className="rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full opacity-100 bg-gradient-to-t from-blue-400 text-white shadow-xl to-50% rounded-2xl transition duration-1000 hover:text-transparent">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                <p className='lg:text-xl font-medium'>NJWMX</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6">
                <LuArrowUpRight className='inline text-xl text-neutral-50'/>
              </div>
            </div>
          </a>
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-2 bg-cover relative">
            <img src="public/img/phtst-newjeans.jpg" className="rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full opacity-100 bg-gradient-to-t from-blue-400 text-white shadow-xl to-50% rounded-2xl transition duration-1000 hover:text-transparent">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                <p className='lg:text-xl font-medium'>NewJeans</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6">
                <LuArrowUpRight className='inline text-xl text-neutral-50'/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Galleries
