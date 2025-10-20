import React from 'react';
import './style.scss';
import Navbar from '../../components/Nav';
import ProductInterestSection from '../../components/ProductInterestSection';
import Marketplaces from '../../components/MakerPlaces';
import OrderFormModal from '../../components/OrderFormModal';
import Footer from '../../components/Footer';

const Sites = () => {
  const handleSubmit = (data) => {
    console.log("Form data:", data);
    // burada serverə göndərə bilərsiniz — e.g. send via fetch('/api/form', { method: 'POST', body: JSON.stringify(data) })
  };

  return (
    <div className="page sites">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero or Product Interest Section */}
      <ProductInterestSection />

      {/* Marketplace Cards */}
      <Marketplaces />

      {/* Order Modal (triggered by buttons within page) */}
      <OrderFormModal
        id="orderModal"
        logoColor="#111827"
        // logoImage="/assets/brand.png"  // optional image logo
        onSubmit={handleSubmit}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Sites;
