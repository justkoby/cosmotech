import React, { useEffect } from 'react'

export default function UrbanApartmentsPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-study-page-container residential-case-theme">
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

      {/* 6. IMPLEMENTATION PROCESS */}
      <section className="case-process-section">
        <div className="case-section-container">
          <h2 className="case-section-title">Implementation</h2>
          <p className="case-body-desc">The project was executed in distinct milestones to ensure full residential usability and testing:</p>
          <div className="case-process-timeline">
            <div className="case-timeline-step">
              <span className="case-step-num">01</span>
              <h4 className="case-step-title">In-depth needs assessment and system design</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">02</span>
              <h4 className="case-step-title">In-wall wiring and device setup across apartments</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">03</span>
              <h4 className="case-step-title">Consolidated integration of smart features</h4>
            </div>
            <div className="case-timeline-step">
              <span className="case-step-num">04</span>
              <h4 className="case-step-title">Complete testing and client app initialization</h4>
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
            <div className="related-proj-card" style={{ backgroundImage: `url('/blue-valley.png')` }} onClick={() => { setCurrentPage('projects'); }}>
              <div className="related-proj-overlay">
                <span className="rel-p-tag">Healthcare</span>
                <h4 className="rel-p-title">Blue Valley Specialist Hospital</h4>
                <p className="rel-p-desc">Healthcare Infrastructure & Security</p>
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
          <h2 className="case-cta-title">Upgrade Your Development with Smart Infrastructure</h2>
          <p className="case-cta-desc">Work with COSMOTECH engineers to deploy an advanced, high-performing technical ecosystem today.</p>
          <button className="case-cta-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
