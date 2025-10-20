// Contact.jsx
import React, { useState } from 'react';
import './Contact.scss';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Icon images
import envelopeIMG from '../../assets/img/envelope.svg';
import phoneIMG    from '../../assets/img/phone.svg';
import mapIMG      from '../../assets/img/map.svg';
import clockIMG    from '../../assets/img/clock.svg';
import shieldIMG   from '../../assets/img/shield.svg';
import rocketIMG   from '../../assets/img/rocket.svg';
import { bottom } from '@popperjs/core';

// EmailJS config from env (Vite)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// simple email check
const isValidEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const Contact = () => {
  const { t } = useTranslation();

  const [sending, setSending] = useState(false);
  const [result, setResult]   = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'sourcing',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    setFormData((p) => ({ ...p, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: (formData.name || '').trim(),
      email: (formData.email || '').trim(),
      subject: (formData.subject || '').trim(),
      message: (formData.message || '').trim(),
    };

    // basic field checks
    if (!data.name || !data.email || !data.message) {
      setResult({ ok: false, message: t('contact.requiredError') || 'Please fill required fields.' });
      return;
    }
    if (!isValidEmail(data.email)) {
      setResult({ ok: false, message: t('contact.errorInvalidEmail') || 'Please enter a valid email address.' });
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setResult({ ok: false, message: 'Email service is not configured. Please set VITE_EMAILJS_* env vars.' });
      return;
    }

    try {
      setSending(true);
      setResult(null);

      const params = {
        from_name:  data.name,
        from_email: data.email,
        subject:    data.subject || 'Contact form',
        message:    data.message,
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });

      if (res?.status === 200) {
        setResult({ ok: true, message: t('contact.successMsg') || 'Message sent successfully.' });
        setFormData({ name: '', email: '', subject: 'sourcing', message: '' });
      } else {
        setResult({ ok: false, message: t('contact.failMsg') || 'Failed to send.' });
      }
    } catch (err) {
      console.error(err);
      setResult({ ok: false, message: t('contact.networkError') || 'Network or server error.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="contact-wrapper">
      <Nav />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>{t('contact.headerTitle')}</h2>
          <p>{t('contact.headerDesc')}</p>
        </div>

        <div className="contact-content">
          {/* Left: info + cards */}
          <div className="contact-left">
            <div className="contact-hero">
              <h3>{t('contact.heroTitle')}</h3>
              <p>{t('contact.heroText')}</p>
            </div>

            {/* Info grid with image icons */}
            <div className="contact-info-grid">
              {[
                { img: envelopeIMG, alt: 'Email',   label: t('contact.emailLabel'),    value: 'info@bridgelinetrade.com' },
                { img: phoneIMG,    alt: 'Phone',   label: t('contact.phoneLabel'),    value: '+86 17266996242' },
                { img: mapIMG,      alt: 'Map',     label: t('contact.locationLabel'), value: t('contact.locationValue') },
                { img: clockIMG,    alt: 'Hours',   label: t('contact.hoursLabel'),    value: `${t('contact.hoursValue1')} / ${t('contact.hoursValue2')}` },
              ].map((item, i) => (
                <div key={i} className="info-item">
                  <div className="info-icon">
                    <img src={item.img} alt={item.alt} className="icon-img" />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="sss"></div>

            {/* Cards with image icons */}
            <div className="contact-cards">
              {[
                { img: rocketIMG, alt: 'Fast',   title: t('contact.fastResponseTitle'), text: t('contact.fastResponseText') },
                { img: shieldIMG, alt: 'Secure', title: t('contact.secureTitle'),       text: t('contact.secureText') },
              ].map((card, index) => (
                <div className="contact-card" key={index}>
                  <div className="card-icon">
                    <img src={card.img} alt={card.alt} className="icon-img invert-on-dark" />
                  </div>
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-right">
            <div className="form-container">
              <div className="form-header">
                <h3>{t('contact.formTitle')}</h3>
                <p>{t('contact.formDesc')}</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.name')}</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.placeholderName')}
                      required
                    />
                    <div className="input-icon"><i className="fas fa-user" /></div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.placeholderEmail')}
                      aria-invalid={formData.email ? !isValidEmail(formData.email) : undefined}
                      required
                    />
                    <div className="input-icon"><i className="fas fa-envelope" /></div>
                    {formData.email && !isValidEmail(formData.email) && (
                      <small className="field-error">
                        {t('contact.errorInvalidEmail') || 'Please enter a valid email.'}
                      </small>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.subject')}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="sourcing">{t('contact.optSourcing')}</option>
                    <option value="shipping">{t('contact.optShipping')}</option>
                    <option value="other">{t('contact.optOther')}</option>
                  </select>
                  <div className="input-icon"><i className="fas fa-tag" /></div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.placeholderMessage')}
                    rows="6"
                    required
                  />
                  <div className="input-icon textarea-icon"><i className="fas fa-comment" /></div>
                </div>

                <div className="form-actions">
                  <button className="submit-btn" type="submit" disabled={sending}>
                    {sending ? (
                      <>
                        <span className="spinner" aria-hidden="true" /> {t('contact.sending') || 'Sending...'}
                      </>
                    ) : (
                      <>
                        {t('contact.sendBtn')} <i className="fas fa-paper-plane" />
                      </>
                    )}
                  </button>

                  {result && (
                    <div
                      className={`submit-result ${result.ok ? 'ok' : 'err'}`}
                      role="status"
                      style={{ marginTop: 10 }}
                    >
                      {result.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
