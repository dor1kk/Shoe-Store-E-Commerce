import React from 'react'
import { services } from '../constans'

const Services = () => {
  return (
    <div id='about-us' className='flex flex-row justify-between gap-12 items-center max-lg:flex-col'>
        {services.map((service)=>{
            return(
                
                <div className="service shadow-3xl rounded-xl p-8" key={service.id}>
                    <div className="service__img">
                        <img src={service.imgURL} className='w-12 rounded-full h-12 bg-coral-red p-2' alt={service.title} />
                    </div>
                    <div>
                        <h1 className='font-montserrat font-medium text-3xl'>{service.label}</h1>
                        <p>{service.subtext}</p>
                    </div>
                
                
                
                
                
                </div>
            );
        })}
        
      
    </div>
  )
}

export default Services
