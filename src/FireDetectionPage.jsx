import React, { useEffect } from 'react'

export default function FireDetectionPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="service-detail-page-container fire-theme">
      {/* 1. HERO SECTION */}
      <section className="service-hero" style={{ backgroundImage: `url('/monarch-hotel.jpg')` }}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <span className="service-badge-accent">Life & Property Safety</span>
            <h1 className="service-hero-title">Advanced Fire Detection Systems for Safer Environments</h1>
            <p className="service-hero-subtext">
              COSMOTECH PROJECT LTD designs and installs reliable fire detection and alarm systems that protect lives, property, and operations across residential, commercial, and industrial environments.
            </p>
            <button className="service-hero-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="service-overview-block">
        <div className="service-overview-inner">
          <div className="overview-text">
            <span className="overview-badge">Our Solutions</span>
            <h2 className="overview-title">Fire Detection & Alarm Solutions</h2>
            <p className="overview-desc">
              We provide intelligent fire detection systems that identify risks early and trigger immediate alerts, enabling rapid response and minimizing damage.
            </p>
            <p className="overview-desc">
              Our systems are designed to meet modern safety requirements while integrating seamlessly with your building infrastructure.
            </p>
          </div>
          <div className="overview-image" style={{ backgroundImage: `url('/2-01.webp')` }}></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="service-offerings-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Fire Safety Solutions Include</h2>
          <p className="services-section-subtitle centered">All components are fully tested to absolute performance standards.</p>
        </div>
        <div className="service-offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">🔥</div>
            <h3 className="offering-title">Fire Detection Systems</h3>
            <p className="offering-desc">Early detection using high-accuracy smoke, thermal, and multi-sensor technologies.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🔔</div>
            <h3 className="offering-title">Fire Alarm Installations</h3>
            <p className="offering-desc">Reliable audible and visual alert systems to orchestrate organized and rapid facility evacuations.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📍</div>
            <h3 className="offering-title">Addressable Fire Systems</h3>
            <p className="offering-desc">Advanced smart systems that identify the exact zone and location of a physical fire event.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📡</div>
            <h3 className="offering-title">Fire Safety Monitoring</h3>
            <p className="offering-desc">Continuous localized and remote system monitoring built for instant alert generation.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🛠️</div>
            <h3 className="offering-title">Fire System Maintenance</h3>
            <p className="offering-desc">Routine scheduled sensor diagnostics and system checks to guarantee 100% reliability.</p>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="advanced-capabilities-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">System Capabilities</h2>
          <p className="services-section-subtitle centered">Building high reliability directly into building ecosystems.</p>
        </div>
        <div className="capabilities-2-col-grid">
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Early detection and rapid alert systems</h4>
            <p className="feature-desc">Detect smoke and abnormal thermal spikes well before a fire spreads.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Integration with building management</h4>
            <p className="feature-desc">Automatically shut down HVAC air loops and unlock automated access doors during events.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Scalable for small to large facilities</h4>
            <p className="feature-desc">Custom loop architectures that easily support ongoing property and zone expansions.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ High reliability with minimal false alarms</h4>
            <p className="feature-desc">Precision-engineered optical sensors prevent unneeded evacuations and downtime.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Compliance with modern safety standards</h4>
            <p className="feature-desc">Designed in full compliance with local and global regulatory safety rules.</p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="service-process-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Approach</h2>
          <p className="services-section-subtitle centered">Stringent end-to-end framework translating technical requirements into operational performance.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Risk Assessment</h3>
            <p className="step-desc">We thoroughly evaluate facility blueprints and map active fire vulnerabilities.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">System Design</h3>
            <p className="step-desc">We construction-engineer a compliant, fully functional fire detection system.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Installation</h3>
            <p className="step-desc">Professional physical setup of smart sensors, panels, and alarms by our certified staff.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Integration</h3>
            <p className="step-desc">Seamless connection of fire controls to security and general building management apps.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Testing & Maintenance</h3>
            <p className="step-desc">Scheduled physical diagnostic checks to ensure uninterrupted responsive safety.</p>
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE & STANDARDS */}
      <section className="service-partners-strip-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Standards & Compliance</h2>
          <p className="services-section-subtitle centered">Building ultimate corporate confidence through rigorous validation.</p>
        </div>
        <div className="standards-content-box">
          <p className="standards-text">
            Our fire detection systems are designed to align with recognized safety standards and best practices, ensuring reliable performance and regulatory compliance. We prioritize system accuracy, durability, and responsiveness in every installation.
          </p>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="service-applications-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Where Our Fire Systems Are Used</h2>
          <p className="services-section-subtitle centered">Delivering high protection across critical local sectors.</p>
        </div>
        <div className="applications-grid">
          <div className="app-block">
            <div className="app-icon">🏢</div>
            <h4 className="app-title">Residential Buildings & Apartments</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏨</div>
            <h4 className="app-title">Hotels & Hospitality Facilities</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏢</div>
            <h4 className="app-title">Corporate Offices</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏥</div>
            <h4 className="app-title">Healthcare Institutions</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏭</div>
            <h4 className="app-title">Industrial & Energy Facilities</h4>
          </div>
        </div>
      </section>

      {/* 8. WHY COSMOTECH */}
      <section className="service-why-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Choose COSMOTECH</h2>
          <p className="services-section-subtitle centered">High-fidelity life safety engineering without compromise.</p>
        </div>
        <div className="why-grid">
          <div className="why-block">
            <div className="why-block-icon">🛡️</div>
            <h4 className="why-block-title">Safety-First Approach</h4>
            <p className="why-block-desc">We build completely robust safety networks to protect operational assets and human lives.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔍</div>
            <h4 className="why-block-title">Reliable Detection Systems</h4>
            <p className="why-block-desc">Highly responsive technologies engineered to eliminate false alarms.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔌</div>
            <h4 className="why-block-title">Integrated Solutions</h4>
            <p className="why-block-desc">System alerts interlink natively with localized digital building networks.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🛠️</div>
            <h4 className="why-block-title">Ongoing Support</h4>
            <p className="why-block-desc">Dedicated preventative maintenance testing for total uptime confidence.</p>
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="service-projects-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Relevant Projects</h2>
          <p className="services-section-subtitle centered">Review our real-world technical deployment portfolio in Ghana.</p>
        </div>
        <div className="service-projects-grid">
          <div className="project-tile" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Hospitality</span>
              <h4 className="p-tile-title">Accra City Hotel</h4>
              <p className="p-tile-desc">Fire Detection & Safety Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/blue-valley.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Healthcare</span>
              <h4 className="p-tile-title">Blue Valley Specialist Hospital</h4>
              <p className="p-tile-desc">Integrated Safety Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/oxford.webp')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Corporate</span>
              <h4 className="p-tile-title">Commercial Facilities</h4>
              <p className="p-tile-desc">Fire Alarm Installations</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="service-footer-cta-section">
        <div className="service-cta-inner">
          <h2 className="cta-main-title">Protect Your Environment with Reliable Fire Safety Systems</h2>
          <p className="cta-main-desc">
            Talk to COSMOTECH engineers about designing a fire detection solution for your facility.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
