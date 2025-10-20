import React, { useState, useEffect } from 'react';
import { catalogData } from './Data.js';
import './Catalogs.scss';

const CatalogComp = () => {
  const [selectedCategory, setSelectedCategory] = useState(catalogData.categories[0]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showAllCatalogs, setShowAllCatalogs] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Sidebar always starts closed on mobile, open on desktop
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
          setIsSidebarOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, isSidebarOpen]);

  // Download catalog function
  const downloadCatalog = (type = 'full', category = null) => {
    let content = '';
    
    if (type === 'full') {
      content = generateFullCatalog();
    } else if (type === 'category' && selectedCategory) {
      content = generateCategoryCatalog(selectedCategory);
    } else if (type === 'supplier' && selectedSupplier) {
      content = generateSupplierCatalog(selectedSupplier, selectedCategory);
    } else if (type === 'category' && category) {
      content = generateCategoryCatalog(category);
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `catalog-${type}-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`Catalog downloaded successfully!`);
  };

  // Generate full catalog content
  const generateFullCatalog = () => {
    let content = 'PRODUCTS CATALOG - ALL CATEGORIES\n';
    content += 'Generated on: ' + new Date().toLocaleDateString() + '\n';
    content += '='.repeat(50) + '\n\n';

    catalogData.categories.forEach(category => {
      content += `CATEGORY: ${category.name}\n`;
      content += '-'.repeat(40) + '\n';
      
      category.suppliers.forEach(supplier => {
        content += `  Supplier: ${supplier.name}\n`;
        supplier.products.forEach(product => {
          content += `    - ${product}\n`;
        });
        content += '\n';
      });
      content += '\n';
    });

    return content;
  };

  // Generate category-specific catalog
  const generateCategoryCatalog = (category) => {
    let content = `PRODUCTS CATALOG - ${category.name.toUpperCase()}\n`;
    content += 'Generated on: ' + new Date().toLocaleDateString() + '\n';
    content += '='.repeat(50) + '\n\n';

    content += `Category: ${category.name}\n`;
    content += `Number of Suppliers: ${category.suppliers.length}\n`;
    content += '-'.repeat(40) + '\n\n';

    category.suppliers.forEach(supplier => {
      content += `Supplier: ${supplier.name}\n`;
      content += `Products (${supplier.products.length}):\n`;
      supplier.products.forEach(product => {
        content += `  - ${product}\n`;
      });
      content += '\n';
    });

    return content;
  };

  // Generate supplier-specific catalog
  const generateSupplierCatalog = (supplier, category) => {
    let content = `PRODUCTS CATALOG - ${supplier.name.toUpperCase()}\n`;
    content += 'Generated on: ' + new Date().toLocaleDateString() + '\n';
    content += '='.repeat(50) + '\n\n';

    content += `Supplier: ${supplier.name}\n`;
    content += `Category: ${category.name}\n`;
    content += `Total Products: ${supplier.products.length}\n`;
    content += '-'.repeat(40) + '\n\n';

    content += 'PRODUCT LIST:\n';
    supplier.products.forEach((product, index) => {
      content += `${index + 1}. ${product}\n`;
    });

    return content;
  };

  // Order form functions
  const submitOrderForm = (formData) => {
    console.log('Order form submitted:', formData);
    alert('Order form submitted successfully! We will contact you shortly.');
    setShowOrderForm(false);
  };

  // Get download button text based on context
  const getDownloadButtonText = () => {
    if (selectedSupplier) {
      return `Download ${selectedSupplier.name} Catalog`;
    } else if (selectedCategory) {
      return `Download ${selectedCategory.name} Catalog`;
    }
    return 'Download Full Catalog';
  };

  // Get download function based on context
  const handleDownload = () => {
    if (selectedSupplier) {
      downloadCatalog('supplier');
    } else if (selectedCategory) {
      downloadCatalog('category');
    } else {
      downloadCatalog('full');
    }
  };

  // Handle category selection (closes sidebar on mobile)
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSupplier(null);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Handle supplier selection
  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="catalog">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="menu-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <h1>Products Catalog</h1>
          </div>
          <div className="header-actions">
            <button 
              className="download-btn"
              onClick={handleDownload}
            >
              {isMobile ? 'Download' : getDownloadButtonText()}
            </button>
            <button 
              className="order-btn"
              onClick={() => setShowOrderForm(true)}
            >
              {isMobile ? 'Order' : 'Order form'}
            </button>
            <button 
              className="all-catalogs-btn"
              onClick={() => setShowAllCatalogs(true)}
            >
              {isMobile ? 'Catalogs' : 'All catalogs'}
            </button>
          </div>
        </div>
      </header>

      <div className="catalog-layout">
        {/* Sidebar - Hidden by default on mobile, shown when hamburger is clicked */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>Categories</h3>
              {isMobile && (
                <button 
                  className="close-sidebar"
                  onClick={() => setIsSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              )}
            </div>
            <div className="categories-section">
              <div className="categories-list">
                {catalogData.categories.map((category) => (
                  <div
                    key={category.id}
                    className={`category-item ${
                      selectedCategory?.id === category.id ? 'active' : ''
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="supplier-count">({category.suppliers.length})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isMobile && isSidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="main-content">
          <div className="content-header">
            <div className="breadcrumb">
              {selectedSupplier && (
                <button 
                  className="back-btn"
                  onClick={() => setSelectedSupplier(null)}
                >
                  ← Back to {selectedCategory.name}
                </button>
              )}
            </div>
            <h2>
              {selectedSupplier 
                ? `${selectedSupplier.name}`
                : selectedCategory.name
              }
            </h2>
            <div className="content-actions">
              <button 
                className="action-btn download"
                onClick={handleDownload}
                title={getDownloadButtonText()}
              >
                📥
              </button>
              {selectedSupplier && (
                <button 
                  className="action-btn contact"
                  onClick={() => setShowOrderForm(true)}
                  title="Contact Supplier"
                >
                  ✉️
                </button>
              )}
            </div>
          </div>

          <div className="content-area">
            {!selectedSupplier ? (
              <div className="suppliers-view">
                <div className="view-header">
                  <p>Select a supplier to view their products</p>
                  <button 
                    className="download-mini-btn"
                    onClick={() => downloadCatalog('category')}
                  >
                    {isMobile ? 'Download Category' : 'Download Category Catalog'}
                  </button>
                </div>
                <div className="suppliers-grid">
                  {selectedCategory.suppliers.map((supplier) => (
                    <div
                      key={supplier.id}
                      className="supplier-card"
                      onClick={() => handleSupplierSelect(supplier)}
                    >
                      <div className="supplier-header">
                        <div className="supplier-icon">
                          {supplier.name.charAt(0)}
                        </div>
                        <div className="supplier-info">
                          <h3>{supplier.name}</h3>
                          <span className="product-count">{supplier.products.length} products</span>
                        </div>
                      </div>
                      <div className="products-preview">
                        {supplier.products.slice(0, isMobile ? 2 : 3).map((product, index) => (
                          <span key={index} className="product-tag">
                            {product}
                          </span>
                        ))}
                        {supplier.products.length > (isMobile ? 2 : 3) && (
                          <span className="product-more">
                            +{supplier.products.length - (isMobile ? 2 : 3)} more
                          </span>
                        )}
                      </div>
                      <div className="supplier-actions">
                        <button 
                          className="supplier-download-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSupplierSelect(supplier);
                            setTimeout(() => downloadCatalog('supplier'), 100);
                          }}
                        >
                          {isMobile ? 'Download' : 'Download Catalog'}
                        </button>
                        <button 
                          className="supplier-contact-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSupplierSelect(supplier);
                            setShowOrderForm(true);
                          }}
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="products-view">
                <div className="products-header">
                  <div className="supplier-title">
                    <h3>{selectedSupplier.name}</h3>
                    <span className="category-path">{selectedCategory.name}</span>
                  </div>
                </div>
                
                <div className="products-list">
                  {selectedSupplier.products.map((product, index) => (
                    <div key={index} className="product-item">
                      <div className="product-image">
                        <div className="image-placeholder">
                          {product.charAt(0)}
                        </div>
                      </div>
                      <div className="product-info">
                        <h4>{product}</h4>
                        <p>Manufacturer: {selectedSupplier.name}</p>
                        <p>Category: {selectedCategory.name}</p>
                        <div className="product-actions">
                          <button 
                            className="contact-btn"
                            onClick={() => setShowOrderForm(true)}
                          >
                            {isMobile ? 'Contact' : 'Contact Supplier'}
                          </button>
                          <button 
                            className="inquiry-btn"
                            onClick={() => setShowOrderForm(true)}
                          >
                            {isMobile ? 'Quote' : 'Request Quote'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderFormModal 
          supplier={selectedSupplier}
          category={selectedCategory}
          product={selectedSupplier ? selectedSupplier.products[0] : null}
          onSubmit={submitOrderForm}
          onClose={() => setShowOrderForm(false)}
          isMobile={isMobile}
        />
      )}

      {/* All Catalogs Modal */}
      {showAllCatalogs && (
        <AllCatalogsModal 
          categories={catalogData.categories}
          onDownload={downloadCatalog}
          onClose={() => setShowAllCatalogs(false)}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

// Order Form Modal Component
const OrderFormModal = ({ supplier, category, product, onSubmit, onClose, isMobile }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productInterest: product || '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isMobile ? 'mobile' : ''}`}>
        <div className="modal-header">
          <h3>Contact Supplier</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Person *</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>
          <div className={`form-row ${isMobile ? 'mobile' : ''}`}>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          {supplier && (
            <div className="form-group">
              <label>Supplier</label>
              <input type="text" value={supplier.name} readOnly />
            </div>
          )}
          <div className={`form-row ${isMobile ? 'mobile' : ''}`}>
            <div className="form-group">
              <label>Product Interest</label>
              <input
                type="text"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Estimated quantity"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={isMobile ? 3 : 4}
              placeholder="Additional information or specific requirements..."
            />
          </div>
          <div className={`form-actions ${isMobile ? 'mobile' : ''}`}>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// All Catalogs Modal Component
const AllCatalogsModal = ({ categories, onDownload, onClose, isMobile }) => {
  return (
    <div className="modal-overlay">
      <div className={`modal-content all-catalogs-modal ${isMobile ? 'mobile' : ''}`}>
        <div className="modal-header">
          <h3>All Catalogs</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="catalogs-list">
          <div className="catalog-option full-catalog">
            <div className="catalog-info">
              <h4>Full Product Catalog</h4>
              <p>Complete catalog with all categories and suppliers</p>
              <span className="catalog-stats">
                {categories.length} categories • {categories.reduce((acc, cat) => acc + cat.suppliers.length, 0)} suppliers
              </span>
            </div>
            <button 
              className="download-catalog-btn"
              onClick={() => onDownload('full')}
            >
              Download
            </button>
          </div>

          {categories.map(category => (
            <div key={category.id} className="catalog-option">
              <div className="catalog-info">
                <h4>{isMobile ? (category.name.length > 30 ? category.name.substring(0, 30) + '...' : category.name) : category.name}</h4>
                <p>Category-specific catalog</p>
                <span className="catalog-stats">
                  {category.suppliers.length} suppliers • {category.suppliers.reduce((acc, sup) => acc + sup.products.length, 0)} products
                </span>
              </div>
              <button 
                className="download-catalog-btn"
                onClick={() => {
                  onDownload('category', category);
                }}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogComp;