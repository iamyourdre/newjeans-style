import { NavLink } from "react-router-dom";

import styles from "../style";
import {nj1} from '../assets';
import {navLinks} from '../constants';
import { FaRegUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-jkt-light z-50`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex justify-between items-center navbar p-0 h-[80px]">
          
          <NavLink to={'/'} className="h-full">
            <img src={nj1} className="h-full" />
          </NavLink>

          <ul className="list-none md:flex hidden justify-end items-center flex-1 h-full">
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className="h-full">

                <NavLink to={nav.id} className={
                  ({ isActive }) =>
                  isActive ? (`border-b-2 border-jkt-red transition duration-300 ease-in-out font-poppins font-normal cursor-pointer text-[16px] px-5 text-jkt-dark flex h-full ${index === navLinks.length - 1 ? 'mr-10':''}`)
                  :
                  (`transition duration-300 ease-in-out font-poppins font-normal cursor-pointer text-[16px] px-5 text-jkt-dark flex h-full
                  ${index === navLinks.length - 1 ? 'mr-10':''}`) }>
                  <span className="my-auto">
                    {nav.title}
                  </span>
                </NavLink>

              </li>
            ))}
            <li className="font-poppins font-normal cursor-pointer hs-tooltip inline-block">
              <button type="button" className="py-3 px-4 bg-jkt-red font-poppins font-normal text-[15px] text-jkt-light outline-none rounded-full ease-in duration-200 hover:bg-jkt-dark hs-tooltip-toggle">
                <FaRegUser className="inline"/>
                <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                  Login / Register
                </span>
              </button>
            </li>
          </ul>

          <div className="md:hidden flex justify-end items-center">
            <HiMiniBars3BottomRight alt="menu"
            className="w-[33px] h-[33px] object-contain text-jkt-dark"/>

            {/* Navbar Dropdrown */}
            <div className={`flex ${styles.paddingX} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}>
              
              <ul className="mr-4 relative">
                  <FaRegUser className="text-[16px] text-white mt-1 "/>
              </ul>
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                <li className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white">
                  <a href='#'>
                    Login
                  </a>
                </li>
                {navLinks.map((nav, index)=>(
                  <li 
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0':'mb-4'} text-white`}
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