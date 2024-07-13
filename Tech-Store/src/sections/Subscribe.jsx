import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-4xl p-8 font-palanquin font-bold'>Sign Up for <span className='text-coral-red '>Updates</span><br /> & Newsletter</h1>
            <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <button className='bg-coral-red text-white rounded-3xl px-4 py-2'>Sign Up</button>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Subscribe
