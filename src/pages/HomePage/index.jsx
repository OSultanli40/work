import React from 'react'
import Nav from '../../components/Nav';
import './style.scss';
import RedPart from '../../components/RedPart';
import OurServices from '../../components/OurServicesConponent';
import Categories from '../../components/CategoriesSection';
import AdvantagesSection from '../../components/AdvantagesSection';
import OrderFormModal from '../../components/OrderFormModal';
import Footer from '../../components/Footer';
import { useTranslation } from "react-i18next";






const HomePage = () => {
  const { t, i18n } = useTranslation();

  const handleSubmit = (data) => {
    console.log("Form data:", data);
    // burada serverə göndərə bilərsiniz
  };

  return (
    <>
      <Nav />

      {/* HERO / HEADER */}
      <header className="hero ">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade mt-nav"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
          data-bs-touch="true"
          data-bs-keyboard="true"
          
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="hero-slide bg1">
                <div className="hero-overlay" />
                <div className="container h-100 d-flex align-items-end align-items-md-center">
                  <div className="caption">
                    <h1>{t("hero_title1")}</h1>
                    <p>{t("hero_text1")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="hero-slide bg2">
                <div className="hero-overlay" />
                <div className="container h-100 d-flex align-items-end align-items-md-center">
                  <div className="caption">
                    <h1>{t("hero_title2")}</h1>
                    <p>{t("hero_text2")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="hero-slide bg3">
                <div className="hero-overlay" />
                <div className="container h-100 d-flex align-items-end align-items-md-center">
                  <div className="caption">
                    <h1>{t("hero_title3")}</h1>
                    <p>{t("hero_text3")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div className="hero-slide bg4">
                <div className="hero-overlay" />
                <div className="container h-100 d-flex align-items-end align-items-md-center">
                  <div className="caption">
                    <h1>{t("hero_title4")}</h1>
                    <p>{t("hero_text4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t("previous")}</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">{t("next")}</span>
          </button>
        </div>
          </header>
          <RedPart />
          
        <OurServices />

      <Categories />
      <AdvantagesSection />
      
            <section className="order-form-section">
        <div className="order-inner">
          <h1>{t("hero_order_h1")}</h1>
          <p className="order-desc">
            {t("hero_order_p")}
            {' '}
            <a href="mailto:info@bridgelinetrade.com" className="order-email">info@bridgelinetrade.com</a>
            {t("hero_p")}
          </p>

          <div className="order-cta">
            <button 
                  aria-label="Open order form"
                          data-bs-toggle="modal"
        data-bs-target="#orderModal" className="order-button">{t("hero_orderform")}</button>
          </div>

          <div className="order-quote">{t("hero_order_quote")}</div>
        </div>
        <div className="order-divider" />
      </section>

                <OrderFormModal 
                  id="orderModal"
                    logoColor="#111827"      // rəngi dəyişin; logoImage versəniz şəkil göstəriləcək
            // logoImage="/assets/brand.png"
                onSubmit={handleSubmit}
          />
          
<Footer/>




      {/* QUICK STYLES (keeps header below fixed nav + nice layout) */}
      <style>{`
        :root { --nav-height: 72px; }           /* adjust if your Nav height differs */
        .mt-nav { margin-top: var(--nav-height); }

        .hero { position: relative; overflow: hidden; }
        .hero .carousel,
        .hero .carousel-inner,
        .hero .carousel-item,
        .hero .hero-slide {
          height: calc(100vh - var(--nav-height));
          min-height: 520px;
        }

        .hero-slide {
          position: relative;
          background-size: cover;
          background-position: center center;
        }

        /* Placeholder color backgrounds (replace with images later) */
        .bg-1 { background: #0e1f2d; }  /* deep navy */
        .bg-2 { background: #2d0e1a; }  /* burgundy */
        .bg-3 { background: #0e2d16; }  /* dark green */
        .bg-4 { background: #2d240e; }  /* brown/amber */

        /* If you want images instead, swap like:
           .bg-1 { background-image: url('/your/image1.jpg'); } */

        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.28) 55%, rgba(0,0,0,.12) 100%);
        }

        .caption {
          position: relative;
          max-width: 840px;
          margin: 0 0 10vh;
          color: #fff;
          text-align: left;
          padding: 1rem 1.25rem;
          border-radius: 16px;
        }
        @media (min-width: 768px) {
          .caption { margin: 0; padding: 2rem 2.5rem; }
        }

        .caption h1 {
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: .2px;
          font-size: clamp(28px, 5vw, 60px);
          margin-bottom: .5rem;
        }
        .caption p {
          font-size: clamp(14px, 2.2vw, 20px);
          opacity: .95;
          margin: 0;
        }

        /* Smooth caption entrance on each slide */
        .carousel-item .caption { opacity: 0; transform: translateY(12px); transition: opacity .6s ease, transform .6s ease; }
        .carousel-item.active .caption { opacity: 1; transform: translateY(0); }

        /* Make indicators more visible on dark slides */
        .carousel-indicators [data-bs-target] { width: 10px; height: 10px; border-radius: 50%; }
      `}</style>
    </>
  )
}

export default HomePage