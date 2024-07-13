import React from 'react'
import logo from '../assets/byte.png'
import {hamburger} from '../assets/icons'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-center'>
        <a href='/'>
        <img src={logo} className='w-32'></img>
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'><a href='#home'>Home</a></li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'><a href='#about-us'>About Us</a></li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'><a href='#products'>Products</a></li>
            <li className='font-montserrat leading-normal text-lg text-slate-gray'><a href='#contact-us'>Contact Us</a></li>
        </ul>
        <div>
            <img className='hidden max-lg:block' src={hamburger} width={25} height={25}></img>
        </div>



        </nav>






    </header>
  )
}

export default Navbar
