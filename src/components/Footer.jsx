import React from 'react'

const Footer = () => {
  return (
    <div className='pattern-rhombus px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-16 font-playfair'>
      <div className="w-full lg:pr-16 md:text-left bg-gradient-to-b from-blue-500 to-blue-400 drop-shadow-md p-8 md:p-10 rounded-3xl">
        <div className="w-full pb-10 text-4xl md:text-5xl ">
          <div className="flex">
            <p className='me-4'>Upcoming</p>
            <div className="border-b-2 w-full flex-1 relative bottom-3"></div>
          </div>
          <p className=''>Events.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="">
            s
          </div>
        </div>
      </div>
      
      <form class="flex flex-row mt-80">
            <input class="rounded-full flex-1 py-4 px-6 leading-tight ease-in duration-100 bg-blue-300 focus:bg-blue-600 outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </form>
    </div>
  )
}

export default Footer
