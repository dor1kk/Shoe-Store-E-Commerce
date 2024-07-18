import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import BestSellers from '../sections/BestSellers';
import SuperQuality from '../sections/SuperQuality';
import Services from '../sections/Services';
import SpecialOffers from '../sections/SpecialOffers';
import CustomerReviews from '../sections/CustomerReviews';
import Subscribe from '../sections/Subscribe';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';
import ItemsSection from '../sections/ItemSection';
import IntroductionPopup from '../components/IntroductionPopUp'; 

const Home = () => {
  const location = useLocation();
  const [showIntroduction, setShowIntroduction] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('newUser') === 'true') {
      setShowIntroduction(true);
    }
  }, [location]);

  const handleCloseIntroduction = () => {
    setShowIntroduction(false);
  };

  return (
    <main className='relative'>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <ItemsSection />
      </section>
      <section>
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
      <section className='padding mt-10 bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='padding bg-black'>
        <Footer />
      </section>
      {showIntroduction && <IntroductionPopup onClose={handleCloseIntroduction} />}
    </main>
  );
};

export default Home;
