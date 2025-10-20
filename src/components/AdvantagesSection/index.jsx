import React from "react";
import "./AdvantagesSection.scss";
import { useTranslation } from "react-i18next";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const advantages = t("advantages.list", { returnObjects: true });

  return (
    <section className="advantages-side-by-side">
      <h2 className="main-title">{t("advantages.main_title")}</h2>
      <div className="advantages-grid">
        {advantages.map((adv, idx) => (
          <div className="advantage-group" key={idx}>
            <div className="group-title">{adv.title}</div>
            <div className="group-text">{adv.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
