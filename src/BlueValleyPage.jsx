import React, { useEffect } from 'react'

export default function BlueValleyPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container healthcare-case-theme">
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

      {/* 6. IMPLEMENTATION PROCESS */}
      <section className="case-process-section">
        <div className="case-section-container">
          <h2 className="case-section-title">Implementation</h2>
          <p className="case-body-desc">The project was executed in carefully scoped phases to completely isolate any operational disruption:</p>
          <div className="case-process-timeline">
            <div className="case-timeline-step">
              <span className="case-step-num">01</span>
              <h4 className="case-step-title">Detailed system layout planning</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">02</span>
              <h4 className="case-step-title">Safe, phased installation process</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">03</span>
              <h4 className="case-step-title">Device and platform integration</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">04</span>
              <h4 className="case-step-title">Full testing and system validation</h4>
            </div>
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

      {/* 8. RELATED PROJECTS */}
      <section className="case-related-projects-section">
        <div className="case-section-container">
          <h2 className="case-section-title">Explore More Projects</h2>
          <div className="case-related-grid">
            <div className="related-proj-card" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }} onClick={() => { setCurrentPage('projects'); }}>
              <div className="related-proj-overlay">
                <span className="rel-p-tag">Hospitality</span>
                <h4 className="rel-p-title">Accra City Hotel</h4>
                <p className="rel-p-desc">Hospitality Infrastructure & Security</p>
              </div>
            </div>
            <div className="related-proj-card" style={{ backgroundImage: `url('/luxury-interior.webp')` }} onClick={() => { setCurrentPage('projects'); }}>
              <div className="related-proj-overlay">
                <span className="rel-p-tag">Residential</span>
                <h4 className="rel-p-title">The Urban Apartments</h4>
                <p className="rel-p-desc">Smart Home Automation</p>
              </div>
            </div>
            <div className="related-proj-card" style={{ backgroundImage: `url('/goil-plc.jpg')` }} onClick={() => { setCurrentPage('projects'); }}>
              <div className="related-proj-overlay">
                <span className="rel-p-tag">Industrial</span>
                <h4 className="rel-p-title">GOIL PLC Headquarters</h4>
                <p className="rel-p-desc">Network Infrastructure Systems</p>
              </div>
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
  )
}
