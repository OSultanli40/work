import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./style.scss";
import logoImagee from "../../assets/img/BridgeLineTrading_Logo.svg";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// very light email check
const isValidEmail = (v = "") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function OrderFormModal({
  id = "orderModal",
  logoColor = "#111827",
  logoImage = logoImagee,
  onSubmit,
}) {
  const formRef = useRef(null);
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [result, setResult]   = useState(null); // { ok: boolean, msg: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    form.classList.add("was-validated");

    const data = Object.fromEntries(new FormData(form).entries());
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const telephone = (data.telephone || "").trim();
    const description = (data.description || "").trim();

    // basic validation
    if (!name || !email || !telephone) return;
    if (!isValidEmail(email)) {
      setResult({ ok: false, msg: t("order_form.email_error") || "Please enter a valid email." });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setResult({
        ok: false,
        msg: "Email service is not configured. Please set VITE_EMAILJS_* env vars.",
      });
      return;
    }

    try {
      setSending(true);
      setResult(null);

      // template params must match your EmailJS template variable names
      const params = {
        to_email: "info@bridgelinetrade.com", // <- destination
        from_name: name,
        from_email: email,
        telephone,
        message: description || "(no message provided)",
        subject: "Order form request",
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });

      if (res?.status === 200) {
        // optional callback for parent
        onSubmit?.(data);

        setResult({ ok: true, msg: t("contact.successMsg") || "Message sent successfully." });
        form.reset();
        form.classList.remove("was-validated");
      } else {
        setResult({ ok: false, msg: t("contact.failMsg") || "Failed to send. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setResult({ ok: false, msg: t("contact.networkError") || "Network or server error." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modal fade order-modal" id={id} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header justify-content-center position-relative">
            <div className="brand-badge" style={{ ["--badge-bg"]: logoColor }}>
              {logoImage ? <img src={logoImage} alt="Brand" /> : null}
            </div>

            <h2 className="modal-title fw-bold text-center">{t("order_form.title")}</h2>

            <button
              type="button"
              className="btn btn-close-square"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={sending}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          {/* Body */}
          <div className="modal-body pt-0">
            <p className="lead text-center mb-4">{t("order_form.description")}</p>

            {/* Alerts */}
            {result && (
              <div
                className={`alert ${result.ok ? "alert-success" : "alert-danger"} py-2`}
                role="alert"
              >
                {result.msg}
              </div>
            )}

            <form ref={formRef} className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor={`${id}-name`} className="form-label">
                  {t("order_form.name")} <span className="text-danger">*</span>
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder={t("order_form.name_placeholder")}
                  required
                />
                <div className="invalid-feedback">{t("order_form.name_error")}</div>
              </div>

              <div className="mb-3">
                <label htmlFor={`${id}-email`} className="form-label">
                  {t("order_form.email")} <span className="text-danger">*</span>
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder={t("order_form.email_placeholder")}
                  required
                />
                <div className="invalid-feedback">{t("order_form.email_error")}</div>
              </div>

              <div className="mb-3">
                <label htmlFor={`${id}-tel`} className="form-label">
                  {t("order_form.telephone")} <span className="text-danger">*</span>
                </label>
                <input
                  id={`${id}-tel`}
                  name="telephone"
                  type="tel"
                  className="form-control"
                  placeholder={t("order_form.telephone_placeholder")}
                  required
                />
                <div className="invalid-feedback">{t("order_form.telephone_error")}</div>
              </div>

              <div className="mb-4">
                <label htmlFor={`${id}-desc`} className="form-label">
                  {t("order_form.request_description")}
                </label>
                <textarea
                  id={`${id}-desc`}
                  name="description"
                  rows="4"
                  className="form-control"
                  placeholder={t("order_form.text_placeholder")}
                />
              </div>

              <button type="submit" className="btn btn-order w-100" disabled={sending}>
                {sending ? t("contact.sending") || "Sending…" : t("order_form.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
