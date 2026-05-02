import React, { useEffect } from 'react'

export default function AccraCityHotelPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container hospitality-case-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/Accra-City-Hotel.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Hospitality</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Accra City Hotel</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              High-coverage security surveillance and advanced technical infrastructure integration.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Enquire &rarr;
            </button>
          </div>
        </section>

        {/* Screen 2: Summary / Overview */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Overview</h2>
          <p style={{ fontSize: '14.5px', color: '#475569', margin: 0, lineHeight: '1.6' }}>
            COSMOTECH delivered an end-to-end IT network and camera surveillance solution for a prominent high-traffic Accra property, raising security tracking and operations speed.
          </p>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Project Scope</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>CCTV Setup</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Complete HD perimeter and corridor visibility</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Access Control</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Secure localized zones with biometric card reading</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Enterprise Network</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>High-speed, redundant fiber network backbone</p>
            </div>
          </div>
        </section>

        {/* Screen 4: Results */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>100%</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Zone Coverage</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Enhanced</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Staff Efficiency</p>
            </div>
          </div>
        </section>

        {/* Screen 5: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start Your Solution</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Build high-performance redundant systems today. Contact our technical team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="case-hero" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}>
          <div className="case-hero-overlay">
            <div className="case-hero-content">
              <span className="case-badge">Hospitality</span>
              <h1 className="case-hero-title">Accra City Hotel</h1>
              <h4 className="case-hero-subtitle">Hospitality Infrastructure & Security Systems</h4>
              <p className="case-hero-desc">
                Integrated technology solutions designed to enhance security, connectivity, and operational efficiency in a high-traffic hospitality environment.
              </p>
            </div>
          </div>
        </section>

        {/* 2. PROJECT OVERVIEW */}
        <section className="case-overview-section">
          <div className="case-overview-inner">
            <div className="overview-main-text">
              <h2 className="case-section-title">Overview</h2>
              <p className="case-body-desc">
                COSMOTECH PROJECT LTD delivered a comprehensive infrastructure and security solution for Accra City Hotel, designed to enhance operational efficiency, improve guest safety, and support modern hospitality standards.
              </p>
            </div>
            <div className="overview-side-panel">
              <h4 className="side-panel-title">Project Details</h4>
              <ul className="side-panel-list">
                <li><strong>Location:</strong> Accra, Ghana</li>
                <li><strong>Industry:</strong> Hospitality</li>
                <li><strong>Services:</strong> Security Systems, IT Infrastructure</li>
                <li><strong>Project Type:</strong> Installation & Integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. THE CHALLENGE */}
        <section className="case-challenge-section">
          <div className="case-section-container">
            <h2 className="case-section-title">The Challenge</h2>
            <p className="case-body-desc">
              The hotel required a modern, highly reliable system capable of supporting ongoing guest safety, staff workflows, and high-coverage, real-time monitoring across multiple areas.
            </p>
            <div className="challenge-bullet-points">
              <div className="challenge-point">✔️ Monitoring high-traffic, expansive public spaces</div>
              <div className="challenge-point">✔️ Managing secure, multi-tier access control across private zones</div>
              <div className="challenge-point">✔️ Ensuring complete system reliability for 24/7/365 uptime</div>
              <div className="challenge-point">✔️ Integrating distinct physical technologies into one unified platform</div>
            </div>
          </div>
        </section>

        {/* 4. THE SOLUTION */}
        <section className="case-solution-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Our Solution</h2>
            <p className="case-body-desc">
              COSMOTECH designed and deployed a modern, end-to-end integrated ecosystem combining high-definition surveillance, access points, and IT networks.
            </p>
            <div className="solution-breakdown-grid">
              <div className="sol-card">
                <h4 className="sol-card-title">CCTV Surveillance System</h4>
                <p className="sol-card-desc">Strategically positioned high-resolution perimeter and internal cameras for exhaustive 24/7 coverage.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Access Control Systems</h4>
                <p className="sol-card-desc">Advanced biometric and card-based door locks protecting staff operations and sensitive zones.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Network Infrastructure</h4>
                <p className="sol-card-desc">Organized structured fiber and enterprise routing supporting flawless internal communications.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Centralized Monitoring Platform</h4>
                <p className="sol-card-desc">An easy-to-use control interface allowing rapid event tracking and localized security visibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES USED */}
        <section className="case-technologies-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Technologies Used</h2>
            <p className="case-body-desc">
              We deployed industry-standard technologies to ensure high performance, security, and scalability across the facility:
            </p>
            <div className="case-tech-logos">
              <span className="case-tech-logo">Hikvision</span>
              <span className="case-tech-logo">Legrand</span>
            </div>
          </div>
        </section>

        {/* 7. RESULTS / OUTCOME */}
        <section className="case-results-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Results & Impact</h2>
            <div className="results-metrics-grid">
              <div className="metric-box">
                <h3 className="metric-title">100%</h3>
                <p className="metric-label">Complete coverage across hotel zones</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Enhanced</h3>
                <p className="metric-label">Zone access control & risk detection</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Reliable</h3>
                <p className="metric-label">Digital performance and operational safety</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="case-cta-section">
          <div className="case-cta-inner">
            <h2 className="case-cta-title">Have a Similar Project in Mind?</h2>
            <p className="case-cta-desc">Work with COSMOTECH engineers to deploy an advanced, high-performing technical ecosystem today.</p>
            <button className="case-cta-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
