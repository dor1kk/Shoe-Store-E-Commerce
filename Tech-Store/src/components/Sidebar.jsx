import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/byte.png'; 

const Sidebar = ({ auth, name, image, activeLink, handleNavClick, handleLogout, toggleDropdown, dropdownOpen }) => {
  return (
    <aside className="h-full w-64 bg-white shadow-lg p-4 fixed">
      <div className="p-4 flex flex-col items-center">
        <a href="/">
          <img src={logo} className="w-32 mb-8" alt="Logo" />
        </a>

        <ul className="flex flex-col text-xs items-start gap-6">
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link
              to="/"
              onClick={() => handleNavClick('#home')}
              className={`${activeLink === '/' ? 'font-semibold text-coral-red' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link
              to="/Products"
              onClick={() => handleNavClick('/Products')}
              className={`${activeLink === '/Products' ? 'font-semibold text-coral-red' : ''}`}
            >
              Products
            </Link>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link
              to="/MyOrders"
              onClick={() => handleNavClick('/MyOrders')}
              className={`${activeLink === '/MyOrders' ? 'font-semibold text-coral-red' : ''}`}
            >
              My Orders
            </Link>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <a
              href="#contact-us"
              onClick={() => handleNavClick('#contact-us')}
              className={`${activeLink === '#contact-us' ? 'font-semibold text-coral-red' : ''}`}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {auth ? (
          <div className="relative mt-8 w-full flex flex-col items-center">
            <span onClick={toggleDropdown} className="cursor-pointer flex flex-row justify-center items-center gap-4">
              <img src={image} className='w-8 h-8 rounded-full' alt="user" />
              {name}
            </span>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">View Profile</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className='mt-8 flex flex-col gap-4 items-center'>
            <Link to='/signin' className='font-montserrat bg-coral-red text-white px-8 py-2 rounded-xl'>Sign in</Link>
            <Link to='/signup' className='font-montserrat text-coral-red shadow-lg px-8 py-2 rounded-xl'>Sign up</Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
