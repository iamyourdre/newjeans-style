import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

const Galleries = () => {
  return (
    
    <div className='bg-blue-600 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] pt-16 pb-8 font-playfair'>
      <div className="w-full pb-10 text-4xl md:text-5xl ">
        <div className="flex">
          <p className='me-4'>Gallery</p>
          <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
        </div>
        <p className=''><span className='text-xl inline-block align-middle relative bottom-1'>of</span> NewJeans.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <a href='https://en.wikipedia.org/wiki/NewJeans' className="w-full md:w-1/2 bg-blue-200 rounded-2xl hover:p-1 relative ease-in duration-100">
          <img src="public/img/phtst-nwjns.webp" className="rounded-2xl object-top object-cover w-full h-full flex" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-neutral-800 to-30% rounded-2xl transition duration-1000">
            <div className="absolute bottom-0 left-0 p-4 md:p-6 xl:p-8 drop-shadow-md">
              <p className='text-xl md:text-2xl font-medium'>This is NewJeans</p>
              <p className='text-xs md:text-sm font-thin'>It's where the story begins...</p>
            </div>
            <div className="absolute bottom-0 right-0 p-4 md:p-6 xl:p-8 drop-shadow-md">
              <div className="absolute bottom-0 right-0 p-4 lg:p-6">
                <LuArrowUpRight className='inline text-xl relative md:text-2xl bottom-2'/>
              </div>
            </div>
          </div>
        </a>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-1 bg-blue-200 rounded-2xl hover:p-1 relative ease-in duration-100">
            <img src="public/img/phtst-ditto.webp" className="rounded-2xl " />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-neutral-800 to-30% rounded-2xl transition duration-1000">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6 drop-shadow-md">
                <p className='lg:text-xl font-medium'>DITTO</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6 drop-shadow-md">
                <LuArrowUpRight className='inline text-xl'/>
              </div>
            </div>
          </a>
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-1 bg-blue-200 rounded-2xl hover:p-1 relative ease-in duration-100">
            <img src="public/img/phtst-njwmx.webp" className="rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-neutral-800 to-30% rounded-2xl transition duration-1000 drop-shadow-md">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6 drop-shadow-md">
                <p className='lg:text-xl font-medium'>NJWMX</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6 drop-shadow-md">
                <LuArrowUpRight className='inline text-xl'/>
              </div>
            </div>
          </a>
          <a href='https://en.wikipedia.org/wiki/NewJeans' className="col-span-2 bg-blue-200 rounded-2xl hover:p-1 relative ease-in duration-100">
            <img src="public/img/phtst-newjeans.jpg" className="rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-neutral-800 to-30% rounded-2xl transition duration-1000 drop-shadow-md">
              <div className="absolute bottom-0 left-0 p-4 lg:p-6 drop-shadow-md">
                <p className='lg:text-xl font-medium'>NewJeans</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 lg:p-6 drop-shadow-md">
                <LuArrowUpRight className='inline text-xl'/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Galleries
