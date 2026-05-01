import React, { useEffect } from 'react'

export default function PartnersPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="partners-page-container">
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
          <div className="partner-grid-box" title="Leading smart electrical solutions">Legrand</div>
          <div className="partner-grid-box" title="Enterprise security & surveillance systems">Hikvision</div>
          <div className="partner-grid-box" title="Luxury smart home and centralized automation">Vimar</div>
          <div className="partner-grid-box" title="Energy management and smart automation systems">Schneider Electric</div>
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
            <span>Legrand</span>
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
            <span>Hikvision</span>
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
            <span>Vimar</span>
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
            <span>Schneider</span>
          </div>
        </div>
      </section>

      {/* 4. WHY PARTNERSHIPS MATTER */}
      <section className="why-partners-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Our Technology Partners Matter</h2>
          <p className="services-section-subtitle centered">
            Our partnerships ensure that every single system we design is built using globally tested, industry-standard technologies.
          </p>
        </div>
        <div className="why-partners-flex">
          <div className="why-partner-pillar">
            <div className="why-pillar-icon">🔒</div>
            <h3 className="why-pillar-title">Reliable & Secure</h3>
            <p className="why-pillar-desc">Built for high uptime and complete enterprise data privacy protection.</p>
          </div>
          <div className="why-partner-pillar">
            <div className="why-pillar-icon">📈</div>
            <h3 className="why-pillar-title">Future-Ready</h3>
            <p className="why-pillar-desc">Fully modular architectures that allow for ongoing infrastructure expansion.</p>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION CAPABILITY */}
      <section className="integration-capability-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">What This Means for You</h2>
          <p className="services-section-subtitle centered">We don’t just install hardware—we engineer completely unified ecosystems.</p>
        </div>
        <div className="capability-icon-strip">
          <div className="capability-item">
            <div className="cap-icon-box">🔗</div>
            <h4 className="cap-title">System Integration</h4>
            <p className="cap-desc">Flawless, direct cross-compatibility across hardware systems.</p>
          </div>
          <div className="capability-item">
            <div className="cap-icon-box">⚙️</div>
            <h4 className="cap-title">Long-Term Support</h4>
            <p className="cap-desc">Sustained official firmware upgrades and physical hardware support.</p>
          </div>
          <div className="capability-item">
            <div className="cap-icon-box">🌐</div>
            <h4 className="cap-title">Global Innovations</h4>
            <p className="cap-desc">Direct access to modern global electrical and data technology advancements.</p>
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
  )
}
