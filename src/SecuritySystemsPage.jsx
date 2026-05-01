import React, { useEffect } from 'react'

export default function SecuritySystemsPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="service-detail-page-container security-theme">
      {/* 1. HERO SECTION */}
      <section className="service-hero" style={{ backgroundImage: `url('/oxford.webp')` }}>
        <div className="service-hero-overlay dark-glow">
          <div className="service-hero-content">
            <span className="service-badge-accent">Enterprise Security</span>
            <h1 className="service-hero-title">Intelligent Security Systems for Total Protection</h1>
            <p className="service-hero-subtext">
              COSMOTECH PROJECT LTD designs and deploys advanced security systems that provide real-time visibility, control, and protection for homes, businesses, and critical facilities.
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
            <span className="overview-badge">Our Approach</span>
            <h2 className="overview-title">Security Systems Solutions</h2>
            <p className="overview-desc">
              We deliver integrated security solutions that combine surveillance, access control, and monitoring technologies into one unified system.
            </p>
            <p className="overview-desc">
              Our approach ensures that every part of your environment is protected — from entry points and perimeters to internal operations — with intelligent systems that you can monitor and control in real time.
            </p>
          </div>
          <div className="overview-image" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="service-offerings-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Security Solutions Include</h2>
          <p className="services-section-subtitle centered">All components are fully connected to a centralized, reliable ecosystem.</p>
        </div>
        <div className="service-offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">📹</div>
            <h3 className="offering-title">CCTV Surveillance Systems</h3>
            <p className="offering-desc">High-definition cameras with real-time monitoring, AI analytics, secure recording, and remote access.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🛂</div>
            <h3 className="offering-title">Access Control Systems</h3>
            <p className="offering-desc">Biometric, card-based, and digital systems for multi-tier access management of physical entry points.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🚨</div>
            <h3 className="offering-title">Intruder Alarm Systems</h3>
            <p className="offering-desc">Advanced perimeter motion sensors and smart detection platforms that trigger alerts instantly upon unauthorized access.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📞</div>
            <h3 className="offering-title">Video Intercom Systems</h3>
            <p className="offering-desc">Clear communication and digital visitor verification directly at entry points to boost physical security.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🖥️</div>
            <h3 className="offering-title">Integrated Security Platforms</h3>
            <p className="offering-desc">A single centralized, secure control dashboard that connects and monitors all internal security technologies.</p>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES (Advanced section) */}
      <section className="advanced-capabilities-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Advanced Capabilities</h2>
          <p className="services-section-subtitle centered">Elevating your visibility beyond legacy physical security setups.</p>
        </div>
        <div className="capabilities-2-col-grid">
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Remote monitoring via mobile and web</h4>
            <p className="feature-desc">Observe direct live video feeds and trigger system commands anywhere in the world.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ AI-enabled video analytics</h4>
            <p className="feature-desc">Automated facial scanning, plate recognition, and crowd density insights.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Motion detection and automated alerts</h4>
            <p className="feature-desc">Receive real-time push notifications and secure snapshots to mobile devices instantly.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Scalable systems for growing environments</h4>
            <p className="feature-desc">We use modular designs that let you add cameras, doors, and endpoints at any time.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Secure data storage and playback</h4>
            <p className="feature-desc">Encrypted video logs on localized NVR devices or securely stored on high-availability private clouds.</p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="service-process-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Process</h2>
          <p className="services-section-subtitle centered">Systematic, professional execution from engineering assessment to ongoing maintenance.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Site Assessment</h3>
            <p className="step-desc">We thoroughly analyze physical environments, operational protocols, and vulnerabilities.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">System Design</h3>
            <p className="step-desc">We build a comprehensive security blueprint outlining camera points, wiring, and network limits.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Installation</h3>
            <p className="step-desc">Precise equipment placement and secure wiring by highly specialized, certified technicians.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Integration</h3>
            <p className="step-desc">We link devices, alarms, and biometrics directly into a unified dashboard platform.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Monitoring & Support</h3>
            <p className="step-desc">Preventative physical inspection, firmware updates, and continuous optimization support.</p>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY PARTNERS */}
      <section className="service-partners-strip-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Security Technology Standards</h2>
          <p className="services-section-subtitle centered">Collaborating with global surveillance pioneers for guaranteed security reliability.</p>
        </div>
        <div className="standards-content-box">
          <p className="standards-text">
            We deploy industry-leading technologies and components from global manufacturers such as <strong>Hikvision</strong> to deliver highly reliable, high-performance physical protection environments. These systems enable advanced analytics, continuous recording, and seamless device control.
          </p>
          <div className="standards-logos-strip">
            <span className="standards-logo">Hikvision</span>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="service-applications-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Where Our Systems Are Applied</h2>
          <p className="services-section-subtitle centered">Protecting assets, operations, and people across diverse domains.</p>
        </div>
        <div className="applications-grid">
          <div className="app-block">
            <div className="app-icon">🏠</div>
            <h4 className="app-title">Residential Properties & Gated Communities</h4>
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
          <p className="services-section-subtitle centered">We design intelligent, integrated security environments built to last.</p>
        </div>
        <div className="why-grid">
          <div className="why-block">
            <div className="why-block-icon">🛡️</div>
            <h4 className="why-block-title">Engineering Expertise</h4>
            <p className="why-block-desc">Every layer is custom built with exact technical precision by expert network engineers.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔌</div>
            <h4 className="why-block-title">Integrated Solutions</h4>
            <p className="why-block-desc">Every camera, intercom, and biometric device talks together flawlessly.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🎨</div>
            <h4 className="why-block-title">Customized Design</h4>
            <p className="why-block-desc">Completely tailored systems crafted to meet specific building and perimeter layouts.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">💬</div>
            <h4 className="why-block-title">Reliable Support</h4>
            <p className="why-block-desc">Preventative physical inspection, firmware testing, and hardware replacement support.</p>
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="service-projects-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Relevant Projects</h2>
          <p className="services-section-subtitle centered">View our real-world enterprise infrastructure deployment portfolio in Ghana.</p>
        </div>
        <div className="service-projects-grid">
          <div className="project-tile" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Hospitality</span>
              <h4 className="p-tile-title">Accra City Hotel</h4>
              <p className="p-tile-desc">Security & Surveillance Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/monarch-hotel.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Hospitality</span>
              <h4 className="p-tile-title">Hope Wells Hotel Plaza</h4>
              <p className="p-tile-desc">CCTV & Monitoring</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/blue-valley.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Healthcare</span>
              <h4 className="p-tile-title">Blue Valley Specialist Hospital</h4>
              <p className="p-tile-desc">Integrated Security Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="service-footer-cta-section">
        <div className="service-cta-inner">
          <h2 className="cta-main-title">Secure Your Environment with Confidence</h2>
          <p className="cta-main-desc">
            Talk to COSMOTECH engineers about designing an advanced security system tailored to your exact operational layout.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
