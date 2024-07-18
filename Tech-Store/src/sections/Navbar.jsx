import React, { useEffect, useState } from 'react';
import logo from '../assets/byte.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [auth, setAuth] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    axios.get('http://localhost:5006/api/auth/username', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username);
          setAuth(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5006/api/auth/image', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setImage(res.data.image);
          setAuth(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setActiveLink(location.hash || location.pathname);
  }, [location]);

  const handleLogout = () => {
    axios.post('http://localhost:5006/api/auth/logout', {}, { withCredentials: true })
      .then(res => {
        setAuth(false);
        setName('');
        navigate('/signin');
      })
      .catch(err => console.log(err));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className=" padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-center">
        <a href="/">
          <img src={logo} className="w-32" alt="Logo" />
        </a>

        <ul className="flex-1 flex justify-center ml-16 text-xs items-center gap-16 max-lg:hidden">
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            <Link to={'/'}
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
              onClick={() => handleNavClick('/Products')}
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
          {auth ? (
            <div className="relative ml-24">
              <span onClick={toggleDropdown} className="cursor-pointer flex flex-row justify-center items-center gap-4"><img src={image} className='w-8 h-8 rounded-full' alt="user"></img>{name}</span>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">View Profile</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className='ml-36 flex flex-row gap-4'>
              <Link to='/signin' className='font-montserrat bg-coral-red text-white px-8 py-2 rounded-xl'>Sign in</Link>
              <Link to='/signup' className='font-montserrat text-coral-red shadow-lg px-8 py-2 rounded-xl'>Sign up</Link>
            </div>
          )}
        </ul>

       <div>
          <FaBars
            className="hidden text-coral-red max-lg:block cursor-pointer"
            size={25}
            onClick={toggleSidebar}
          />
        </div>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}>
          <Sidebar
            auth={auth}
            name={name}
            image={image}
            activeLink={activeLink}
            handleNavClick={handleNavClick}
            handleLogout={handleLogout}
            toggleDropdown={toggleDropdown}
            dropdownOpen={dropdownOpen}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
