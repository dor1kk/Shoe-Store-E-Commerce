import React from 'react'
import Hero from './sections/Hero'
import BestSellers from './sections/BestSellers'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'

const App = () =>(
    <main className='relative'>

      <Navbar />
      <section className=''>
        <Hero />
      </section>
      <section className=''>
        <BestSellers />
       </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='padding bg-pale-blue'>
         <CustomerReviews />
        </section>
      <section className='padding'>
          <Subscribe />
        </section>
        <section className='padding'>
          <Footer />
        
      </section>      
    </main>
  )


export default App
