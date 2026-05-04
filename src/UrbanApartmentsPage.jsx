import React, { useEffect } from 'react'

export default function UrbanApartmentsPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container residential-case-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/luxury-interior.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Residential</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>The Urban Apartments</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Advanced smart infrastructure & security systems designed for elite residential living.
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
            COSMOTECH delivered an integrated smart infrastructure solution for The Urban Apartments, combining home automation, digital connectivity, and advanced security.
          </p>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>What We Did</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Smart Automation</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Luxury controls for curtains, lighting, and HVAC systems</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Security Networks</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Video intercom and vehicle access cameras</p>
            </div>
          </div>
        </section>

        {/* Screen 4: Results */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Ultimate</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Living Comfort</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Safe</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Common Areas</p>
            </div>
          </div>
        </section>

        {/* Screen 5: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Build a Smarter Environment</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure maximum lifestyle convenience and physical security. Let’s talk.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('consultation'); window.scrollTo(0, 0); }}>
            Request for Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="case-hero" style={{ backgroundImage: `url('/luxury-interior.webp')` }}>
          <div className="case-hero-overlay">
            <div className="case-hero-content">
              <span className="case-badge">Residential</span>
              <h1 className="case-hero-title">The Urban Apartments</h1>
              <h4 className="case-hero-subtitle">Residential Smart Infrastructure & Security Systems</h4>
              <p className="case-hero-desc">
                Modern smart infrastructure designed to enhance comfort, security, and connectivity in residential living.
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
                COSMOTECH PROJECT LTD delivered an integrated smart infrastructure solution for The Urban Apartments, combining home automation, digital connectivity, and advanced security systems.
              </p>
            </div>
            <div className="overview-side-panel">
              <h4 className="side-panel-title">Project Details</h4>
              <ul className="side-panel-list">
                <li><strong>Location:</strong> Accra, Ghana</li>
                <li><strong>Industry:</strong> Residential</li>
                <li><strong>Services:</strong> Smart Automation, Security Systems, IT Infrastructure</li>
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
              Modern high-end residential developments require highly robust, scalable systems that enhance both physical comfort and multi-tier security without adding technological complexity.
            </p>
            <div className="challenge-bullet-points">
              <div className="challenge-point">✔️ Providing highly reliable internet connectivity across all residences</div>
              <div className="challenge-point">✔️ Integrating smart lifestyle home automation features</div>
              <div className="challenge-point">✔️ Ensuring continuous surveillance and access across private shared zones</div>
              <div className="challenge-point">✔️ Delivering a seamless, extremely easy-to-use control interface</div>
            </div>
          </div>
        </section>

        {/* 4. THE SOLUTION */}
        <section className="case-solution-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Our Solution</h2>
            <p className="case-body-desc">
              COSMOTECH implemented a fully integrated technical solution combining smart home automation, centralized security monitoring, and enterprise data cabling.
            </p>
            <div className="solution-breakdown-grid">
              <div className="sol-card">
                <h4 className="sol-card-title">Smart Home Automation Systems</h4>
                <p className="sol-card-desc">Advanced luxury wall controls for motorized curtains, climate control, and dimmable lighting.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">CCTV Surveillance Systems</h4>
                <p className="sol-card-desc">Strategic external and internal physical monitoring arrays covering common and vehicle parking areas.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Network Infrastructure</h4>
                <p className="sol-card-desc">Optimized localized Wi-Fi routers and structured fiber networks supporting smooth streaming data flow.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Integrated Control Systems</h4>
                <p className="sol-card-desc">An easy-to-use smart app allowing residents direct, localized control of their domestic environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES USED */}
        <section className="case-technologies-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Technologies Used</h2>
            <p className="case-body-desc">
              We deployed industry-standard technologies to ensure long-term comfort, reliability, and security:
            </p>
            <div className="case-tech-logos">
              <span className="case-tech-logo">Vimar</span>
              <span className="case-tech-logo">Hikvision</span>
            </div>
          </div>
        </section>

        {/* 7. RESULTS / OUTCOME */}
        <section className="case-results-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Results & Impact</h2>
            <div className="results-metrics-grid">
              <div className="metric-box">
                <h3 className="metric-title">Comfort</h3>
                <p className="metric-label">Enhanced localized residential living</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Security</h3>
                <p className="metric-label">24/7 common-area asset protection</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">100%</h3>
                <p className="metric-label">Stable high-speed digital performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="case-cta-section">
          <div className="case-cta-inner">
            <h2 className="case-cta-title">Upgrade Your Development with Smart Infrastructure</h2>
            <p className="case-cta-desc">Work with COSMOTECH engineers to deploy an advanced, high-performing technical ecosystem today.</p>
            <button className="case-cta-btn" onClick={() => { setCurrentPage('consultation'); window.scrollTo(0, 0); }}>
              Request for Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
