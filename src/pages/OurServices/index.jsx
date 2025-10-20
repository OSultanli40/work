import React from 'react';
import './style.scss';
import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';
import OurServices from '../../components/OurServicesConponent';

/**
 * OurServicesPage component.
 *
 * Contains the Navbar, OurServices and Footer components.
 */
const OurServicess = () => {
  return (
    <div className="page_ourservices">
      <Navbar />
      <div className='gap'></div>
      <OurServices className="services"/>
      <Footer/>
    </div>
  );
};

export default OurServicess;
