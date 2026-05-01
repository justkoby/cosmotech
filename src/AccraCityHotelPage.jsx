import React, { useEffect } from 'react'

export default function AccraCityHotelPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container hospitality-case-theme">
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

      {/* 6. IMPLEMENTATION PROCESS */}
      <section className="case-process-section">
        <div className="case-section-container">
          <h2 className="case-section-title">Implementation</h2>
          <p className="case-body-desc">The project was executed in structured, phased milestones to prevent interruption to hotel operations:</p>
          <div className="case-process-timeline">
            <div className="case-timeline-step">
              <span className="case-step-num">01</span>
              <h4 className="case-step-title">Site assessment and planning</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">02</span>
              <h4 className="case-step-title">System architecture design</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">03</span>
              <h4 className="case-step-title">Deployment and setup</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">04</span>
              <h4 className="case-step-title">Testing and system optimization</h4>
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

      {/* 8. RELATED PROJECTS */}
      <section className="case-related-projects-section">
        <div className="case-section-container">
          <h2 className="case-section-title">Explore More Projects</h2>
          <div className="case-related-grid">
            <div className="related-proj-card" style={{ backgroundImage: `url('/blue-valley.png')` }} onClick={() => { setCurrentPage('projects'); }}>
              <div className="related-proj-overlay">
                <span className="rel-p-tag">Healthcare</span>
                <h4 className="rel-p-title">Blue Valley Specialist Hospital</h4>
                <p className="rel-p-desc">Healthcare Infrastructure & Security</p>
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
          <h2 className="case-cta-title">Have a Similar Project in Mind?</h2>
          <p className="case-cta-desc">Work with COSMOTECH engineers to deploy an advanced, high-performing technical ecosystem today.</p>
          <button className="case-cta-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
