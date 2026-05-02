import React, { useState, useEffect } from 'react'

export default function ConsultationPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Company/Organization: ${formData.company || 'N/A'}\n` +
      `Interest Area: ${formData.service || 'N/A'}\n\n` +
      `Project Details/Requirements:\n${formData.message}`
    )

    // Open mail client
    window.location.href = `mailto:info@cosmotechprojects.com?subject=${subject}&body=${body}`

    setIsSubmitted(true)
  }

  return (
    <div className="consultation-page-container">
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <span className="about-badge" style={{ color: '#f59e0b' }}>Get In Touch</span>
            <h1 className="about-hero-title">Request a Professional Consultation</h1>
            <p className="about-hero-subtext">
              Let us know your project goals, and our certified engineers will help you design, install, and support exactly the right technologies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="consultation-main-section">
        
        {/* Form Column */}
        <div className="consultation-form-wrapper">
          {isSubmitted ? (
            <div className="form-success-state" style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#eefcf4', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px' }}>
                ✓
              </div>
              <h2 style={{ fontSize: '24px', color: '#1e293b', fontWeight: 700, marginBottom: '12px' }}>Thank You!</h2>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
                Your request has been prepared for submission. If your mail client did not open automatically, please send the details directly to <strong>info@cosmotechprojects.com</strong>.
              </p>
              <button 
                className="consult-cta-btn" 
                style={{ backgroundColor: '#0c1b10', color: '#ffffff', padding: '14px 28px', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}
                onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="consult-form-grid">
                <div className="form-field">
                  <label htmlFor="name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', outline: 'none' }}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', outline: 'none' }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="consult-form-grid">
                <div className="form-field">
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', outline: 'none' }}
                    placeholder="+233..."
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="company" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Company / Institution</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', outline: 'none' }}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>System / Interest Area *</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  required 
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', backgroundColor: '#ffffff', outline: 'none' }}
                >
                  <option value="">Select an Area</option>
                  <option value="IT Infrastructure & Networking">IT Infrastructure & Networking</option>
                  <option value="Security & Surveillance Systems">Security & Surveillance Systems</option>
                  <option value="Smart Home & Building Automation">Smart Home & Building Automation</option>
                  <option value="Telecommunications & Fiber Networks">Telecommunications & Fiber Networks</option>
                  <option value="Fire Alarm & Detection Systems">Fire Alarm & Detection Systems</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>How can we help? *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="4"
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14.5px', color: '#1e293b', outline: 'none', resize: 'vertical' }}
                  placeholder="Outline your project scope or needs here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="consult-cta-btn" 
                style={{ backgroundColor: '#0c1b10', color: '#ffffff', padding: '16px 32px', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '10px' }}
              >
                Submit Consultation Request &rarr;
              </button>
            </form>
          )}
        </div>

        {/* Info / Contact Side Panel */}
        <div className="info-panel" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="info-card">
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0c1b10', marginBottom: '12px' }}>Direct Communication</h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              Want to skip the form? You can connect directly with our technical team via email, call, or message.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="mailto:info@cosmotechprojects.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#0c1b10', fontWeight: 600, fontSize: '14.5px' }}>
                <span style={{ fontSize: '18px' }}>✉️</span> info@cosmotechprojects.com
              </a>
              <a href="tel:+233531018219" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#0c1b10', fontWeight: 600, fontSize: '14.5px' }}>
                <span style={{ fontSize: '18px' }}>📞</span> +233 53 101 8219
              </a>
              <a href="https://wa.me/233531018219" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#25d366', fontWeight: 600, fontSize: '14.5px' }}>
                <span style={{ fontSize: '18px' }}>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="info-card" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0c1b10', marginBottom: '8px' }}>What happens next?</h3>
            <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>An expert engineer reviews your system needs.</li>
              <li>We prepare initial technical recommendations.</li>
              <li>We reach out within 24 hours to coordinate details.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
