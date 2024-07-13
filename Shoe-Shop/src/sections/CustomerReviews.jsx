import React from 'react'
import { reviews } from '../constans'
import { star } from '../assets/icons'

const CustomerReviews = () => {
    return (
      <div className='p-4'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-montserrat text-2xl sm:text-4xl font-bold text-center'>
            What Our <span className='text-coral-red'>Customers</span> Say?
          </h1>
          <p className='text-gray-500 w-full sm:w-4/5 mt-4 sm:mt-8 font-montserrat text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur totam enim vel dolorem, ullam, dolorum quibusdam quis, autem maxime minus commodi blanditiis neque odio aspernatur eum at! Provident, aliquid!
          </p>
          
          <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 mt-8'>
            {reviews.map((review) => {
              return (
                <div key={review.customerName} className='flex flex-col justify-center items-center p-4'>
                  <img src={review.imgURL} className='w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-xl' alt={`${review.customerName}'s review`} />
                  <p className='text-gray-500 font-montserrat w-full sm:w-3/5 mt-4 sm:mt-8 text-center'>{review.feedback}</p>
                  <span className='flex flex-row justify-center items-center mt-4 font-bold gap-2'>
                    <img src={star} className='w-4 h-4 sm:w-8 sm:h-8 text-coral-red' alt='star' /> 
                    ({review.rating})
                  </span>
                  <div className='flex flex-col justify-center items-center mt-4 sm:mt-10 font-medium text-lg sm:text-xl'>{review.customerName}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  export default CustomerReviews;
