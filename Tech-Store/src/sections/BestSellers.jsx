import React from 'react';
import { products } from '../constans';

const BestSellers = () => {
  return (
    <div id='products' className='flex flex-col mt-16 xl:flex-row justify-center min-h-screen max-container mx-auto gap-10 p-4 xl:p-16'>
      <div className='flex flex-col items-center xl:items-start'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center xl:text-left'>Our <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='w-full sm:w-3/5 xl:w-full text-gray-400 mt-4 text-center xl:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique quo? Blanditiis, esse? Suscipit recusandae quibusdam a architecto alias vel culpa quod excepturi.
        </p>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {products.map((product) => (
          <div key={product.name} className='p-4 w-72'>
            <img
              src={product.imgURL}
              alt={product.name}
              className='w-full h-52 object-cover rounded-t-lg'
            />
            <h2 className='text-2xl font-bold mt-2'>{product.name}</h2>
            <p className='text-gray-500 mt-1'>{product.description}</p>
            <p className='text-red-400 mt-2 font-bold'>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
