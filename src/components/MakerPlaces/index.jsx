// Marketplaces.jsx
import React from "react";
import "./Marketplaces.scss";
import bgImagee from "../../assets/img/bgg.jpg"
import { useTranslation } from "react-i18next";

const SITES = [
  { name: "Taobao",    logo: "../../assets/img/taobao.jpg",    url: "https://taobao.com" },
  { name: "1688",      logo: "../../assets/img/1688.jpg",      url: "https://1688.com" },
  { name: "TMALL",     logo: "../../assets/img/tmall.jpg",     url: "https://tmall.com" },
  { name: "POIZON",    logo: "../../assets/img/poizon.jpg",    url: "https://poizon.com" },
  { name: "Pinduoduo", logo: "../../assets/img/pinduoduo.jpg", url: "https://pinduoduo.com" },
  { name: "Alibaba",   logo: "../../assets/img/alibaba.jpg",   url: "https://alibaba.com" },
  { name: "Paipai",    logo: "../../assets/img/paipai.jpg",    url: "https://www.paipai.com/" },
];

export default function Marketplaces({
  sites = SITES,
  bgColor = "#0e0f16",
    bgImage = bgImagee,                // optional: "/images/background.jpg"
  bgImageOpacity = 0.35,
  heightDesktop = 500,    // px
}) {

    const { t } = useTranslation();
  return (
    <section
      className="mkt"
      style={{ ["--mkt-bg"]: bgColor, ["--mkt-h"]: `${heightDesktop}px` }}
      aria-label="Marketplaces"
    >
      {bgImage && (
        <div
          className="mkt__bg"
          style={{ backgroundImage: `url(${bgImage})`, opacity: bgImageOpacity }}
          aria-hidden="true"
        />
      )}

      <div className="mkt__inner">
        <h2 className="mkt__title">{t("mplaces_title")}</h2>

        <div
          className="mkt__grid"
          style={{ ["--mkt-cols"]: sites.length }}   // 1440px+ ekranlarda 1 sətir
        >
          {sites.map((s) => (
            <article className="mkt__card" key={s.name}>
              <div className="mkt__logoWrap">
                <img
                  className="mkt__logo"
                  src={s.logo}
                  alt={`${s.name} logo`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "../../assets/img/placeholder.jpg"; }}
                />
              </div>
              <div className="mkt__body">
                <a
                  className="mkt__btn"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} website`}
                >
                  Website
                </a>
              </div>
            </article>
          ))}
        </div>

        {true && <p className="mkt__note">{t("mplaces_note")}</p>}
      </div>
    </section>
  );
}
