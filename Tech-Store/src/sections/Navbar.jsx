import React from 'react'
import { headerLogo } from '../assets/images'
import {hamburger} from '../assets/icons'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-center'>
        <a href='/'>
        <img src={headerLogo}></img>
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'>Home</li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'>About</li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'>Products</li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'>Contact Us</li>
        </ul>
        <div>
            <img className='hidden max-lg:block' src={hamburger} width={25} height={25}></img>
        </div>



        </nav>






    </header>
  )
}

export default Navbar
