import React, { useEffect } from 'react'

export default function PartnersPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="partners-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/1-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Global Collaborations</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Technology Leaders</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              We partner with internationally recognized brands to deliver secure, scalable, and high-performing systems.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Enquire &rarr;
            </button>
          </div>
        </section>

        {/* Screen 2: Logo Strip */}
        <section style={{ padding: '32px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', marginBottom: '16px', textAlign: 'center' }}>Global Partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <img src="/legrand.png" alt="Legrand" style={{ maxHeight: '35px', maxWidth: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <img src="/Hikvision-Logo.png" alt="Hikvision" style={{ maxHeight: '35px', maxWidth: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <img src="/vimar.jpg" alt="Vimar" style={{ maxHeight: '35px', maxWidth: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
              <img src="/Schneider Electric.png" alt="Schneider Electric" style={{ maxHeight: '35px', maxWidth: '80%', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '20px' }}>What They Provide</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderLeft: '3px solid #5c7853', paddingLeft: '12px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Legrand</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Structured IT cabling networks and electrical power management systems.</p>
            </div>
            <div style={{ borderLeft: '3px solid #5c7853', paddingLeft: '12px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Hikvision</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Intelligent HD video surveillance networks and biometric access controls.</p>
            </div>
            <div style={{ borderLeft: '3px solid #5c7853', paddingLeft: '12px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Vimar</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Luxury lifestyle automation, automated scenes, and unified app controls.</p>
            </div>
            <div style={{ borderLeft: '3px solid #5c7853', paddingLeft: '12px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Schneider Electric</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b', lineHeight: '1.4' }}>Advanced energy management, sustainability, and automated building networks.</p>
            </div>
          </div>
        </section>

        {/* Screen 4: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Partner With Us</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ready to deploy a high-performing system for your environment? Contact us today.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="partners-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
          <div className="partners-hero-overlay">
            <div className="partners-hero-content">
              <span className="partners-badge-accent">Global Collaborations</span>
              <h1 className="partners-hero-title">Powered by Global Technology Leaders</h1>
              <p className="partners-hero-subtext">
                We partner with internationally recognized manufacturers and technology providers to deliver reliable, scalable, and future-ready systems.
              </p>
            </div>
          </div>
        </section>

        {/* 2. PARTNER LOGO GRID */}
        <section className="partners-grid-preview-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Our Trusted Technology Providers</h2>
            <p className="services-section-subtitle centered">Leading hardware and software pioneers integrated into our core engineering stack.</p>
          </div>
          <div className="partner-logos-interactive-grid">
            <div className="partner-grid-box">
              <img src="/legrand.png" alt="Legrand" style={{ maxHeight: '55px', maxWidth: '85%', objectFit: 'contain' }} />
            </div>
            <div className="partner-grid-box">
              <img src="/Hikvision-Logo.png" alt="Hikvision" style={{ maxHeight: '55px', maxWidth: '85%', objectFit: 'contain' }} />
            </div>
            <div className="partner-grid-box">
              <img src="/vimar.jpg" alt="Vimar" style={{ maxHeight: '55px', maxWidth: '85%', objectFit: 'contain' }} />
            </div>
            <div className="partner-grid-box">
              <img src="/Schneider Electric.png" alt="Schneider Electric" style={{ maxHeight: '55px', maxWidth: '85%', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* 3. PARTNER DETAILS */}
        <section className="partners-detail-list-section">
          {/* Legrand */}
          <div className="partner-detail-item zig-zag">
            <div className="partner-detail-content">
              <span className="p-badge-tech">Structured Cabling & Power</span>
              <h2 className="p-detail-title">Legrand</h2>
              <h4 className="p-detail-subtitle">Smart Electrical & Infrastructure Systems</h4>
              <p className="p-detail-desc">
                Legrand enables COSMOTECH to deliver enterprise-grade structured cabling, robust power distribution systems, and intelligent building networks that form the enduring technological backbone of modern commercial and residential infrastructure.
              </p>
            </div>
            <div className="partner-detail-logo-box">
              <img src="/legrand.png" alt="Legrand" style={{ maxHeight: '70px', maxWidth: '90%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Hikvision */}
          <div className="partner-detail-item zig-zag alternate">
            <div className="partner-detail-content">
              <span className="p-badge-tech">Intelligent Security</span>
              <h2 className="p-detail-title">Hikvision</h2>
              <h4 className="p-detail-subtitle">Advanced Security & Surveillance</h4>
              <p className="p-detail-desc">
                Hikvision technologies power our precision 24/7 CCTV surveillance setups, multi-tier biometric access controls, and intelligent security monitoring solutions built to protect enterprise facilities and homes.
              </p>
            </div>
            <div className="partner-detail-logo-box">
              <img src="/Hikvision-Logo.png" alt="Hikvision" style={{ maxHeight: '70px', maxWidth: '90%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Vimar */}
          <div className="partner-detail-item zig-zag">
            <div className="partner-detail-content">
              <span className="p-badge-tech">Smart Spaces</span>
              <h2 className="p-detail-title">Vimar</h2>
              <h4 className="p-detail-subtitle">Smart Living & Automation</h4>
              <p className="p-detail-desc">
                Vimar solutions allow us to engineer unified luxury environments with effortless centralized control of lighting, climate management, motorized fixtures, and physical access from a single secure interface.
              </p>
            </div>
            <div className="partner-detail-logo-box">
              <img src="/vimar.jpg" alt="Vimar" style={{ maxHeight: '70px', maxWidth: '90%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Schneider Electric */}
          <div className="partner-detail-item zig-zag alternate">
            <div className="partner-detail-content">
              <span className="p-badge-tech">Energy & Scalability</span>
              <h2 className="p-detail-title">Schneider Electric</h2>
              <h4 className="p-detail-subtitle">Energy & Automation Systems</h4>
              <p className="p-detail-desc">
                Schneider Electric products support our high-uptime delivery of advanced, scalable energy management systems, industrial automation, and highly optimized building management platforms.
              </p>
            </div>
            <div className="partner-detail-logo-box">
              <img src="/Schneider Electric.png" alt="Schneider Electric" style={{ maxHeight: '70px', maxWidth: '90%', objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* 6. CTA (Close strong) */}
        <section className="partners-footer-cta-section">
          <div className="partners-cta-inner">
            <h2 className="cta-main-title">Build with the Right Technology</h2>
            <p className="cta-main-desc">
              Let’s design a high-performing system powered by trusted global solutions and professional engineering.
            </p>
            <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
