import { useState } from "react";
import { NavLink } from "react-router-dom";

import { logo } from '../assets';
import { FaSpotify } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "discography",
      title: "Discography",
    },
    {
      id: "galleries",
      title: "Galleries",
    },
    {
      id: "news",
      title: "News",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];

  return (
    <div className="px-[2rem] md:px-[8rem] flex justify-center items-center z-50">
      <div className="w-full">
        <nav className="w-full flex justify-between items-center navbar p-0 h-[80px] font-playfair">
          
          <NavLink to={'/'} className="h-full">
            <img src={logo} className="h-14 relative top-4" />
          </NavLink>

          <ul className="list-none md:flex hidden justify-end items-center w-full h-full">
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className="h-full">

                <NavLink to={nav.id} className={
                  ({ isActive }) =>
                  isActive ? (`border-b-2 transition duration-300 ease-in-out font-normal cursor-pointer text-[16px] px-6 flex h-full bg-gradient-to-b from-blue-600 from-50% via-blue-500 via-80%  to-blue-300 to-100% ${index === navLinks.length - 1 ? 'mr-10':''}`)
                  :
                  (`transition duration-300 ease-in-out font-normal cursor-pointer text-[16px] px-6 flex h-full
                  ${index === navLinks.length - 1 ? 'mr-10':''}`) }>
                  <span className="my-auto">
                    {nav.title}
                  </span>
                </NavLink>

              </li>
            ))}
            <li className="cursor-pointer float-right">
              <button type="button" className="py-2 px-3 pe-4 font-normal text-[15px] outline-none rounded-full ease-in duration-200 bg-neutral-200 text-blue-600 hover:text-neutral-200 hover:bg-blue-600 border-2">
                <FaSpotify className="inline relative bottom-0.5 text-xl me-1"/> Listen Now!
              </button>
            </li>
          </ul>

          <div className="md:hidden flex justify-end items-center cursor-pointer">

            {toggle ? (
              <HiX alt="close"
              className="w-[33px] h-[33px] object-contain"
              onClick={() => setToggle((prev) => !prev)}/>
            ) : (
              <HiMiniBars3BottomRight alt="menu"
              className="w-[33px] h-[33px] object-contain"
              onClick={() => setToggle((prev) => !prev)}/>
            )}

            {/* Navbar Dropdrown */}
            <div className={`${toggle ? 'flex' : 'hidden'} px-[2rem] md:px-[8rem] p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50 bg-neutral-50 text-blue-900 shadow-lg font-semibold`}>
              
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                <li className="cursor-pointer text-[16px] mb-4">
                  <a href='#'>
                    <FaSpotify className="inline relative bottom-0.5 text-xl me-1"/> Spotify
                  </a>
                </li>
                {navLinks.map((nav, index)=>(
                  <li 
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0':'mb-4'}`}
                  >
                    <a href="#">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar