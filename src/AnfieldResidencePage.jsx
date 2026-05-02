import React, { useEffect } from 'react'

export default function AnfieldResidencePage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container residential-case-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/Anfield Residence.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Residential</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Anfield Residence</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Unified luxury automation and smart climate controls.
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
            Design and deployment of premium residential automation systems for a luxury villa in a prime Accra neighborhood.
          </p>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Project Scope</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Smart Lighting</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Custom luxury lighting scenes throughout the villa</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Audiovisual</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Multi-room entertainment systems with seamless connectivity</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Climate & Curtains</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Centralized climate and motorized curtains control</p>
            </div>
          </div>
        </section>

        {/* Screen 4: Results */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Ultimate</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Luxury Living</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Smarter</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Energy Use</p>
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
        <section className="case-hero" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}>
          <div className="case-hero-overlay">
            <div className="case-hero-content">
              <span className="case-badge">Residential</span>
              <h1 className="case-hero-title">Anfield Residence</h1>
              <h4 className="case-hero-subtitle">Premium Home Automation & Advanced Convenience</h4>
              <p className="case-hero-desc">
                An ultra-premium smart home ecosystem providing unprecedented localized control, comfort, and entertainment flexibility.
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
                COSMOTECH designed and implemented a unified, comprehensive automation ecosystem for Anfield Residence, bridging lighting, climate, multi-room audio, and motorized screens seamlessly.
              </p>
            </div>
            <div className="overview-side-panel">
              <h4 className="side-panel-title">Project Details</h4>
              <ul className="side-panel-list">
                <li><strong>Location:</strong> Accra, Ghana</li>
                <li><strong>Industry:</strong> Residential</li>
                <li><strong>Services:</strong> Smart Automation</li>
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
              Providing highly reliable automation controls that balance premium aesthetics with complete, centralized operational ease.
            </p>
            <div className="challenge-bullet-points">
              <div className="challenge-point">✔️ Ensuring low-latency app and physical control response times</div>
              <div className="challenge-point">✔️ Controlling distinct luxury architectural subsystems simultaneously</div>
              <div className="challenge-point">✔️ Protecting system hardware seamlessly behind localized interior design</div>
            </div>
          </div>
        </section>

        {/* 4. THE SOLUTION */}
        <section className="case-solution-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Our Solution</h2>
            <p className="case-body-desc">
              We deployed centralized smart lighting, motorized shading networks, and centralized multi-zone entertainment systems.
            </p>
            <div className="solution-breakdown-grid">
              <div className="sol-card">
                <h4 className="sol-card-title">Lighting Control</h4>
                <p className="sol-card-desc">Advanced scene setting allowing intuitive adjustments for different times of day.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Smart Shading</h4>
                <p className="sol-card-desc">Motorized curtain tracks synchronized with temperature and light sensors.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Multi-room AV</h4>
                <p className="sol-card-desc">Centralized sound setups that adapt to any zone, controlled entirely via app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES USED */}
        <section className="case-technologies-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Technologies Used</h2>
            <p className="case-body-desc">
              We deployed premium technologies to guarantee ultimate smart living standards:
            </p>
            <div className="case-tech-logos">
              <span className="case-tech-logo">Vimar</span>
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
                <h3 className="metric-title">Comfort</h3>
                <p className="metric-label">Premium domestic living standards</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Smarter</h3>
                <p className="metric-label">Energy utilization & lighting controls</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Reliable</h3>
                <p className="metric-label">High-end digital performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="case-cta-section">
          <div className="case-cta-inner">
            <h2 className="case-cta-title">Upgrade Your Domestic Living Spaces</h2>
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
