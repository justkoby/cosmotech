import React, { useEffect } from 'react'

export default function BlueValleyPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container healthcare-case-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/blue-valley.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Healthcare</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Blue Valley Specialist Hospital</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Specialized infrastructure providing secure networks and precise access control.
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
            COSMOTECH delivered a highly reliable network and biometric security setup built to ensure data privacy and safe, uninterrupted hospital operation.
          </p>
        </section>

        {/* Screen 3: Details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>What We Did</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Healthcare Networks</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Failsafe structured networking supporting internal medical software</p>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>Biometric Access</h4>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>Restricting access to operating zones and medication storage rooms</p>
            </div>
          </div>
        </section>

        {/* Screen 4: Results */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>100%</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Data Uptime</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0c1b10', margin: '0 0 4px 0' }}>Safe</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Ward Access</p>
            </div>
          </div>
        </section>

        {/* Screen 5: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Request A Similar Design</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure maximum reliability and compliance today. Contact our technical team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="case-hero" style={{ backgroundImage: `url('/blue-valley.png')` }}>
          <div className="case-hero-overlay">
            <div className="case-hero-content">
              <span className="case-badge">Healthcare</span>
              <h1 className="case-hero-title">Blue Valley Specialist Hospital</h1>
              <h4 className="case-hero-subtitle">Healthcare Infrastructure & Integrated Systems</h4>
              <p className="case-hero-desc">
                Advanced infrastructure and security systems designed to support critical healthcare operations.
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
                COSMOTECH PROJECT LTD delivered a secure, high-availability technology infrastructure tailored to the continuous, demanding needs of a modern specialized healthcare facility.
              </p>
            </div>
            <div className="overview-side-panel">
              <h4 className="side-panel-title">Project Details</h4>
              <ul className="side-panel-list">
                <li><strong>Location:</strong> Accra, Ghana</li>
                <li><strong>Industry:</strong> Healthcare</li>
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
              Healthcare environments require incredibly reliable systems with minimal downtime to protect ongoing operations, medical facilities, and sensitive healthcare data.
            </p>
            <div className="challenge-bullet-points">
              <div className="challenge-point">✔️ Ensuring uninterrupted network and database performance</div>
              <div className="challenge-point">✔️ Securing highly sensitive clinical areas and pharmacy stocks</div>
              <div className="challenge-point">✔️ Supporting instantaneous communication across diverse wards</div>
              <div className="challenge-point">✔️ Integrating distinct physical systems without disrupting ongoing care</div>
            </div>
          </div>
        </section>

        {/* 4. THE SOLUTION */}
        <section className="case-solution-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Our Solution</h2>
            <p className="case-body-desc">
              COSMOTECH implemented a robust infrastructure and integrated security system designed for continuous 24/7 reliability and performance.
            </p>
            <div className="solution-breakdown-grid">
              <div className="sol-card">
                <h4 className="sol-card-title">Structured Network Infrastructure</h4>
                <p className="sol-card-desc">Redundant routing paths and heavy fiber cabling enabling high internal data flow.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">CCTV Surveillance Systems</h4>
                <p className="sol-card-desc">Comprehensive visual coverage of shared areas, entrances, and technical zones.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Access Control Systems</h4>
                <p className="sol-card-desc">Biometric security restricting access to sensitive operating and server environments.</p>
              </div>
              <div className="sol-card">
                <h4 className="sol-card-title">Integrated Systems Platform</h4>
                <p className="sol-card-desc">Single centralized control dashboard monitoring alarms and network states simultaneously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES USED */}
        <section className="case-technologies-section">
          <div className="case-section-container">
            <h2 className="case-section-title">Technologies Used</h2>
            <p className="case-body-desc">
              We deployed industry-standard technologies to ensure high performance and safety:
            </p>
            <div className="case-tech-logos">
              <span className="case-tech-logo">Hikvision</span>
              <span className="case-tech-logo">Schneider Electric</span>
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
                <p className="metric-label">Uptime of critical data networks</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Enhanced</h3>
                <p className="metric-label">Zone-level physical security</p>
              </div>
              <div className="metric-box">
                <h3 className="metric-title">Optimized</h3>
                <p className="metric-label">System response & internal support</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="case-cta-section">
          <div className="case-cta-inner">
            <h2 className="case-cta-title">Looking to Build Reliable Systems for Your Facility?</h2>
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
