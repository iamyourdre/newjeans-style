import React from 'react'

const Galleries = () => {
  return (
    
    <div className='pattern-rhombus py-16 font-playfair'>
      <div className="flex flex-wrap">
        <div className="bg-cover w-2/4 md:w-1/4">
          <img src="public/img/phtst-ditto.webp" alt="" />
        </div>
        <div className="bg-cover w-2/4 md:w-1/4">
          <img src="public/img/phtst-njwmx.webp" alt="" />
        </div>
        <div className="bg-[url('public/img/phtst-newjeans.webp')] bg-cover bg-bottom w-full md:w-2/4 h-64 md:h-auto">
        </div>
      </div>
    </div>
  )
}

export default Galleries
