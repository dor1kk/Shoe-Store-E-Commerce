import React from 'react';
import logo from '../assets/bytelogofooter.png';
import { footerLinks } from '../constans';

const Footer = () => {
  return (
    <div id='contact-us' className='bg-black'>
      <footer className="footer">
        <div className='flex flex-col sm:flex-row justify-between p-4'>
          <div className='flex flex-col w-full sm:w-72'>
            <img src={logo} className='w-32' alt='Company Logo' />
            <p className='text-gray-400 mt-4 sm:mt-8 font-montserrat'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ad ducimus delectus autem.
            </p>
            <div className='flex flex-row gap-4 mt-4 sm:mt-8'>
              <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png' className='w-8 h-8 sm:w-10 sm:h-10' alt='Facebook' />
              <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' className='w-8 h-8 sm:w-10 sm:h-10' alt='Instagram' />
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncNdsURrHCorSeR9usPvHN_6XPQp3toe3tA&s' className='w-8 h-8 sm:w-10 sm:h-10' alt='Another social media' />
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className='flex flex-col mt-4 sm:mt-0 sm:ml-16 w-full sm:w-1/4'>
              <h1 className='text-gray-300 text-lg font-bold'>{section.title}</h1>
              <ul className='mt-2 sm:mt-4'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='text-gray-400 mt-1'>
                    <a href={link.link} className='hover:text-gray-300'>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-center text-gray-300 text-sm mt-4 p-2'>
          © 2024 Byte. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
