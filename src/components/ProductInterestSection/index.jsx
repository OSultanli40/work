import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";

export default function ProductInterestSection({ onOrderClick }) {
  const { t } = useTranslation();

  return (
    <section className="pis">
      <div className="pis__container">
        <h1 className="pis__title">
          {t("pis.title")}
          <br className="pis__br" />
          {t("pis.subtitle")}
        </h1>

        <button
          type="button"
          className="pis__cta"
          onClick={onOrderClick}
          aria-label={t("pis.openForm")}
          data-bs-toggle="modal"
          data-bs-target="#orderModal"
        >
          <span>{t("pis.orderBtn")}</span>
        </button>

        <p className="pis__note">{t("pis.note")}</p>
      </div>
    </section>
  );
}
