import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const steps = [
    { id: 1, key: 'step1' },
    { id: 2, key: 'step2' },
    { id: 3, key: 'step3' },
    { id: 4, key: 'step4' },
    { id: 5, key: 'step5' },
    { id: 6, key: 'step6' },
    { id: 7, key: 'step7' },
    { id: 8, key: 'step8' },
    { id: 9, key: 'step9' },
  ];

  return (
    <div className="our-services-wrapper">
      <div className="container">
        <div className="section-header">
          <h2>{t('our_services.title')}</h2>
          <p>{t('our_services.subtitle')}</p>
        </div>

        <div className="our-services accordion" id="accordionExample">
          {steps.map(({ id, key }) => (
            <div className="accordion-item" key={key}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                >
                  <span className="step-number">{id}.</span>
                  <span className="step-title">{t(`our_services.${key}.title`)}</span>
                </button>
              </h2>
              <div
                id={`collapse${id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {Array.isArray(t(`our_services.${key}.list`, { returnObjects: true }))
                    ? (
                      <ul className="services-list">
                        {t(`our_services.${key}.list`, { returnObjects: true }).map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    )
                    : (
                      t(`our_services.${key}.text`, { returnObjects: true }).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))
                    )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
