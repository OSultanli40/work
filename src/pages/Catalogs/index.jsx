import React from 'react';
import './style.scss';
import Navbar from '../../components/Nav';
import CatalogComp from '../../components/CatalogsComp';
import Footer from '../../components/Footer';

const Catalogs = () => {
  return (
    alert("Catalogs page is under construction!"),
    <div className="page catalogs">
      <Navbar />
      <CatalogComp />
      <Footer/>
    </div>
  );
};

export default Catalogs;
