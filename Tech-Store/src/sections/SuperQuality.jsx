import React from 'react';

const SuperQuality = () => {
  return (
    <div className='relative flex flex-row xl:flex-row max-lg:flex-col justify-between items-center gap-10 p-4 xl:p-0 max-container mx-auto min-h-screen'>
      <div className='w-full xl:w-1/2'>
        <h1 className='font-montserrat text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight'>
          We Provide You <span className='text-coral-red'>Super <br /> Quality</span> Products
        </h1>
        <p className='font-montserrat text-gray-500 w-full sm:w-4/5 mt-6 xl:mt-12 text-lg'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptates ullam? Illum inventore exercitationem officia enim, alias veritatis reiciendis nihil architecto illo quibusdam quam cum provident, laudantium molestiae maxime odio?  
          <br /><br /> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ratione velit beatae maxime dicta laborum saepe.
        </p>

        <button className='bg-coral-red text-white font-montserrat rounded-3xl shadow-xl px-6 py-3 mt-6 xl:mt-8 hover:bg-red-500 transition-all duration-300'>
          View Details
        </button>
      </div>
      <div className='w-full xl:w-1/2 flex justify-center items-center mt-6 xl:mt-0'>
        <img 
          src="https://img.freepik.com/premium-vector/people-with-laptop-computer-icon-comic-style-pc-user-cartoon-vector-illustration-white-isolated-background-office-manager-splash-effect-business-concept_157943-17769.jpg" 
          className='rounded-xl object-cover max-w-full h-auto'
          alt="Super Quality Products"
        />
      </div>
    </div>
  );
}

export default SuperQuality;
