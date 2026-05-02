import React, { useEffect } from 'react'

export default function GoilPlcHqPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container corporate-case-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/goil-plc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Corporate</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>GOIL PLC Headquarters</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Enterprise networks, server setups, and access systems.
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
            Modern technology integration at GOIL PLC headquarters to support multi-departmental communications and secure facility oversight.
          </p>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Project Scope</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Core Network</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Robust routing and switching for data continuity</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Access Control</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Biometric systems protecting physical assets</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Fire Safety</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Advanced smart fire detection integration</p>
            </div>
          </div>
        </section>

        {/* Screen 4: Results */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>100%</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Uptime Achieved</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Enhanced</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Safety Controls</p>
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
        <section className="case-hero" style={{ backgroundImage: `url('/goil-plc.jpg')` }}>
          <div className="case-hero-overlay">
            <div className="case-hero-content">
              <span className="case-badge">Corporate</span>
              <h1 className="case-hero-title">GOIL PLC Headquarters</h1>
              <h4 className="case-hero-subtitle">Corporate Networks & Infrastructure Integration</h4>
              <p className="case-hero-desc">
                Enterprise-grade technical installations designed to provide complete continuity, asset security, and reliable communications.
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
                COSMOTECH PROJECT LTD delivered an end-to-end network, physical access, and smart fire safety installation for GOIL PLC Headquarters, guaranteeing secure and stable daily operation.
              </p>
            </div>
            <div className="overview-side-panel">
              <h4 className="side-panel-title">Project Details</h4>
              <ul className="side-panel-list">
                <li><strong>Location:</strong> Accra, Ghana</li>
                <li><strong>Industry:</strong> Corporate</li>
                <li><strong>Services:</strong> IT Infrastructure, Security Systems</li>
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
              Supporting thousands of dynamic network transactions daily, while ensuring complete multi-zone perimeter physical safety and fire detection.
            </p>
            <div className="challenge-bullet-points">
              <div className="challenge-point">✔️ Ensuring massive high-uptime bandwidth</div>
              <div className="challenge-point">✔️ Maintaining highly reliable door access security</div>
              <div className="challenge-point">✔️ Integrating unified data backbones across all buildings</div>
            </div>
          </div>
        </section>

        {/* 4. THE SOLUTION */}
        <section className="case-solution-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Our Solution</h2>
            <p className="case-body-desc">
              COSMOTECH designed and deployed a comprehensive network layout, biometric safety access, and fully addressable fire detection systems.
            </p>
            <div className="solution-breakdown-grid">
              <div className="sol-card">
                <h4 className="sol-card-title">Advanced Network Routing</h4>
                <p className="sol-card-desc">Redundant routing topology ensuring minimal downtime and secure departmental data separation.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Biometric Access Controls</h4>
                <p className="sol-card-desc">Biometric scanners covering all building portals with complete real-time tracking.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Integrated Smart Fire Systems</h4>
                <p className="sol-card-desc">Centralized alarms providing pinpoint tracking of potential hazards across the facility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES USED */}
        <section className="case-technologies-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Technologies Used</h2>
            <p className="case-body-desc">
              We utilized top industrial technologies to ensure scalability, security, and enterprise reliability:
            </p>
            <div className="case-tech-logos">
              <span className="case-tech-logo">Schneider Electric</span>
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
                <p className="metric-label">Stable network continuity</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Enhanced</h3>
                <p className="metric-label">Secure facility visibility</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Optimized</h3>
                <p className="metric-label">Daily staff operations efficiency</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="case-cta-section">
          <div className="case-cta-inner">
            <h2 className="case-cta-title">Build a Higher Standard for Your Infrastructure</h2>
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
