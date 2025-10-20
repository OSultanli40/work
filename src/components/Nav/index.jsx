import React from "react";
import { useTranslation } from "react-i18next"; // import i18n hook
import logoUrl from "../../assets/img/BridgeLineTrading_Logo.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const linkStyle = { fontSize: "1.13rem", color: "rgb(198,195,197)" };
  const brandStyle = { fontSize: "1.31rem" };

  // Change language handler
  const handleChangeLang = (lang) => i18n.changeLanguage(lang);

  // Optional flag SVGs
  const flags = {
    en: (
      <svg width="20" height="14" viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="42" fill="#012169" />
        <path d="M0,0 60,42 M60,0 0,42" stroke="#fff" strokeWidth="10" />
        <path d="M0,0 60,42 M60,0 0,42" stroke="#C8102E" strokeWidth="6" />
        <path d="M30,0 v42 M0,21 h60" stroke="#fff" strokeWidth="12" />
        <path d="M30,0 v42 M0,21 h60" stroke="#C8102E" strokeWidth="8" />
      </svg>
    ),
    ru: (
      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="14" fill="#fff" />
        <rect width="20" height="9.3" y="4.7" fill="#0039A6" />
        <rect width="20" height="4.7" y="9.3" fill="#D52B1E" />
      </svg>
    ),
    az: (
      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="14" fill="#00B9E4" />
        <rect width="20" height="9.3" y="4.7" fill="#ED2939" />
        <rect width="20" height="4.7" y="9.3" fill="#3F9C35" />
        <circle cx="8.5" cy="7" r="2.2" fill="#fff" />
        <circle cx="9" cy="7" r="1.5" fill="#ED2939" />
        <polygon points="11,7 12.5,7.4 11.2,8.3 11.5,6.8 10.5,5.9" fill="#fff" />
      </svg>
    ),
  };

  return (
    <>
      <style>{`
        .navbar { margin-bottom: 0 !important; }
        .lang-bar--mobile { margin-top: -1px; }
        .nav-link, .lang-toggle, .dropdown-item {
          position: relative;
          transition: color .2s ease;
        }
        .nav-link::after, .lang-toggle::after, .dropdown-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: .2rem;
          width: 100%;
          height: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform .25s ease;
        }
        .nav-link:hover::after, .dropdown-item:hover::after {
          transform: scaleX(1);
        }
        .nav-link:hover, .dropdown-item:hover { color: #fff !important; }
      `}</style>

      <nav
        className="navbar navbar-expand-xxl navbar-dark py-2 mb-0 fixed-top"
        style={{ backgroundColor: "#000", "--bs-navbar-padding-x": 0 }}
      >
        <div className="container-fluid px-3 px-lg-3 gap-4 dd">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="/" style={brandStyle}>
            <img
              width={50}
              height={50}
              src={logoUrl}
              alt="Bridge Line Trading logo"
            />
            <span style={{ letterSpacing: "0.5px" }}>Bridge Line Trading</span>
          </a>

          {/* Right side: language + toggler */}
          <div className="d-flex align-items-center ms-auto">
            {/* Language dropdown (desktop) */}
            <div className="d-none d-xl-block me-2">
              <div className="dropdown">
                <a
                  href="#"
                  className="lang-toggle text-white text-decoration-none dropdown-toggle d-inline-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  style={{ fontSize: "1.02rem" }}
                >
                  {flags[i18n.language] || flags.en}
                  {i18n.language === "az"
                    ? "Azərbaycan"
                    : i18n.language === "ru"
                    ? "Русский"
                    : "English"}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><button className="dropdown-item" onClick={() => handleChangeLang("en")}>English</button></li>
                  <li><button className="dropdown-item" onClick={() => handleChangeLang("ru")}>Русский</button></li>
                  <li><button className="dropdown-item" onClick={() => handleChangeLang("az")}>Azərbaycan</button></li>
                </ul>
              </div>
            </div>

            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto align-items-xxl-center">
              {[
                [t("nav_services"), "/ourservices"],
                [t("nav_catalogs"), "/catalogs"],
                [t("nav_sites"), "/sites"],
                [t("nav_photo"), "/photo"],
                [t("nav_contacts"), "/contacts"],
              ].map(([label, href]) => (
                <li className="nav-item" key={label}>
                  <a className="nav-link px-xxl-3 py-2" href={href} style={linkStyle}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="d-none d-xxl-flex flex-column align-items-end text-white gap-2 small">
              <a href="mailto:info@bridgelinetrade.com" className="text-white text-decoration-none">
                info@bridgelinetrade.com
              </a>
              <span>
                Tel:{" "}
                <a href="tel:+8617266996242" className="text-white text-decoration-none">
                  +86172!!!!!!
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE LANGUAGE BAR */}
      <div className="d-xl-none bg-black lang-bar--mobile">
        <div className="container-fluid px-3 px-lg-4 d-flex align-items-center justify-content-between" style={{ minHeight: 36 }}>
          <div className="dropdown">
            <a
              href="#"
              className="lang-toggle text-white text-decoration-none dropdown-toggle d-inline-flex align-items-center gap-2"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              style={{ fontSize: "1.02rem" }}
            >
              {flags[i18n.language] || flags.en}
              {i18n.language === "az"
                ? "Azərbaycan"
                : i18n.language === "ru"
                ? "Русский"
                : "English"}
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><button className="dropdown-item" onClick={() => handleChangeLang("en")}>English</button></li>
              <li><button className="dropdown-item" onClick={() => handleChangeLang("ru")}>Русский</button></li>
              <li><button className="dropdown-item" onClick={() => handleChangeLang("az")}>Azərbaycan</button></li>
            </ul>
          </div>

          <a href="mailto:info@bridgelinetrade.com" className="text-white text-decoration-none small">
            info@bridgelinetrade.com
          </a>
        </div>
      </div>
    </>
  );
}
