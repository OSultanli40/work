import React from 'react'
import './style.scss'
import { useTranslation } from "react-i18next";

const RedPart = () => {
  const { t } = useTranslation();
  return (
    <section className="red-part">
      <div className="red-inner">
        <h1 className="title">
          Bridge{'\n'}Line{'\n'}Trading
        </h1>

        <ul className="black-box">
          <li>{t("red_li1")}</li>
          <li>{t("red_li2")}</li>
          <li>{t("red_li3")}</li>
          <li>{t("red_li4")}</li>
          <li>{t("red_li5")}</li>
        </ul>
      </div>
    </section>
  );
};

export default RedPart;
