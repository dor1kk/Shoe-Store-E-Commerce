import React from 'react';
import { products } from '../constans';

const BestSellers = () => {
  return (
    <div className='flex flex-col mt-16 xl:flex-row justify-center min-h-screen max-container mx-auto gap-10 p-16 xl:p-0'>
      <div>
        <h1 className='text-4xl font-bold'>Our <span className='text-red-400'>Popular</span> Products</h1>
        <p className='w-3/5 text-gray-400 mt-4 max-lg:w-50%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique quo? Blanditiis, esse? Suscipit recusandae quibusdam a architecto alias vel culpa quod excepturi.</p>
      </div>
      <div className='flex flex-wrap gap-4'>
        {products.map((product) => (
          <div key={product.name} className='p-4 rounded-lg '>
            <img src={product.imgURL} style={{width:"220px"}} alt={product.name} className='w-full shadow-lg border h-48 object-cover rounded-t-lg' />
            <h2 className='text-2xl font-bold mt-2'>{product.name}</h2>
            <p className='text-gray-500 mt-1'>{product.description}</p>
            <p className='text-red-400 mt-2 font-bold'>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
