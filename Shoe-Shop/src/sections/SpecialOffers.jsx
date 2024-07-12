import React from 'react'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <div>
      <div>
        <h1 className='text-4xl font-montserrat font-bold'><span className='text-coral-red'>Special </span>Offers</h1>
        <p className='mt-4 text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, commodi, expedita cupiditate iure esse laborum suscipit nihil, perspiciatis possimus tempora dolorum. Quo sunt cumque corporis quis libero, quibusdam ipsa deleniti! <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, beatae maiores nihil consequuntur repudiandae tenetur incidunt dolor accusantium voluptate natus quaerat </p>
       <div className='flex flex-row gap-4'>
        <button className="flex mt-12 items-center justify-center gap-2 w-[180px] px-3 py-2 sm:px-5 sm:py-3 border font-montserrat text-base sm:text-lg leading-none bg-coral-red text-white border-coral-red rounded-full mt-6">
            Shop now
            <img
              src={arrowRight}
              alt="arrow right icon"
              className="ml-2 rounded-full bg-white w-4 h-4"
            />
          </button> 
          <button className="flex mt-12 items-center justify-center gap-2 w-[180px] px-4 py-2 sm:px-5 sm:py-3 border-1 font-montserrat text-base sm:text-lg leading-none bg-transparent text-gray-600 border border-black rounded-full mt-6">
            Learn More
          </button> 
          </div>    
          </div>

          <div>
            <div className='flex flex-row justify-center mt-24 gap-4 '>
                <img src='https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714071.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1712275200&semt=ais' className='rounded-3xl shadow-xl'  width={400} height={502}></img>
                <img src='https://img.freepik.com/premium-photo/red-headphones-laying-red-background_115919-36326.jpg' className='rounded-3xl shadow-xl' width={400} height={502}></img>
            </div>
            <div className='absolute bg-white border border-2 border-coral-red rounded-full justify-center b-white items-center text-center mt-[-100px] ml-[450px] w-48 h-48 text-coral-red'><img src='https://png.pngtree.com/png-clipart/20230415/original/pngtree-best-price-icon-design-png-image_9057741.png'></img></div>

          </div>
    </div>
  )
}

export default SpecialOffers
