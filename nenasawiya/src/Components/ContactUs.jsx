import React, { useState } from "react";
import "../css/ContactUs.css";

import contactImage from "../assets/contact-image.png";

/* ── Icons ── */
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-8.5 6.5H8V17h2.5v-7zm-1.25-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM17 17v-4.2c0-2.1-1.1-3.3-2.8-3.3-1.2 0-1.9.7-2.2 1.3V9.5H9.5V17H12v-3.9c0-.5.4-1 1-1s1 .5 1 1V17h3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const NenaLogo = () => (
  <svg
    className="logo-icon"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    <path d="M16 52 Q16 28 40 28 Q64 28 64 52" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
    <path d="M16 52 Q28 30 40 30 L40 56 Q28 54 16 52Z" fill="#38bdf8" opacity="0.85" />
    <path d="M64 52 Q52 30 40 30 L40 56 Q52 54 64 52Z" fill="#60a5fa" opacity="0.85" />
    <line x1="40" y1="30" x2="40" y2="56" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
    <line x1="24" y1="40" x2="37" y2="39" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="25" y1="44" x2="37" y2="43" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="43" y1="39" x2="56" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="43" y1="43" x2="55" y2="44" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M40 18 L41.5 23 L46 23 L42.5 26 L44 31 L40 28 L36 31 L37.5 26 L34 23 L38.5 23 Z" fill="#f4c542" opacity="0.9" />
  </svg>
);

const initialForm = { name: "", email: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.includes("@")) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((e) => ({ ...e, [field]: false }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-page" id="contact-us">
      <div className="contact-header">
        <span className="label">Get In Touch</span>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-layout">

        {/* ── COL 1: Form ── */}
        <div className="contact-form-card-wrapper">
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-msg">
                <div className="success-icon">
                  <CheckIcon />
                </div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out.
                  <br />
                  We'll get back to you soon.
                </p>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="form-title">Get in Touch</div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={errors.name ? "error" : ""}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    className={errors.email ? "error" : ""}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={3}
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={handleChange("message")}
                    className={errors.message ? "error" : ""}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── COL 2: Contact Info ── */}
        <div className="contact-info-card-wrapper">
          <div className="contact-info-card">
            <div className="info-image-wrap">
              <img
                src={contactImage}
                alt="NenaSawiya Platform"
                className="info-image"
              />
              <div className="info-image-overlay">
                <div className="info-image-badge">NenaSawiya Platform</div>
              </div>
            </div>

            <div className="info-body">
              <div className="info-card-title">Contact Details</div>
              <div className="info-card-sub">
                Discover more tools and support at:
              </div>
              <div className="info-card-email">nenasawiya.support@gmail.com</div>

              <div className="detail-rows">
                <div className="detail-row">
                  <div className="detail-row-icon cyan">
                    <EmailIcon />
                  </div>
                  <div className="detail-row-text">
                    <div className="row-label">Email</div>
                    <div className="row-value">nenasawiya.support@gmail.com</div>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-row-icon gold">
                    <PhoneIcon />
                  </div>
                  <div className="detail-row-text">
                    <div className="row-label">Phone</div>
                    <div className="row-value">+94 77 123 4567</div>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-row-icon purple">
                    <LocationIcon />
                  </div>
                  <div className="detail-row-text">
                    <div className="row-label">University</div>
                    <div className="row-value">SLIIT, Sri Lanka</div>
                  </div>
                </div>
              </div>

              <div className="info-divider" />

              <div className="info-message">
                Thank you for choosing NenaSawiya. We trust our adaptive learning
                platform has contributed positively to your educational journey.
              </div>
              <div className="info-team">– Team NenaSawiya –</div>

              <div className="info-logo">
                <NenaLogo />
                <div className="logo-name">NenaSawiya</div>
              </div>

              <div className="social-row">
                <button className="social-btn" aria-label="LinkedIn">
                  <LinkedInIcon />
                </button>
                <button className="social-btn" aria-label="Facebook">
                  <FacebookIcon />
                </button>
                <button className="social-btn" aria-label="Instagram">
                  <InstagramIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}