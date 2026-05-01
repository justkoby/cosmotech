import React, { useEffect } from 'react'

export default function TelecommunicationsPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="service-detail-page-container telecoms-theme">
      {/* 1. HERO SECTION */}
      <section className="service-hero" style={{ backgroundImage: `url('/2-01.webp')` }}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <span className="service-badge-accent">Global Connectivity</span>
            <h1 className="service-hero-title">Reliable Communication Infrastructure</h1>
            <p className="service-hero-subtext">
              COSMOTECH PROJECT LTD delivers high-performance telecommunications systems that ensure seamless communication, fast data transfer, and uninterrupted connectivity across all environments.
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
            <span className="overview-badge">Speed & Reliability</span>
            <h2 className="overview-title">Telecommunications Systems Solutions</h2>
            <p className="overview-desc">
              We design and implement robust communication infrastructure that supports voice, data, and network connectivity for businesses and institutions.
            </p>
            <p className="overview-desc">
              Our solutions are built to ensure speed, reliability, and scalability — enabling organizations to operate efficiently in today’s connected world.
            </p>
          </div>
          <div className="overview-image" style={{ backgroundImage: `url('/oxford.webp')` }}></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="service-offerings-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Telecommunications Services Include</h2>
          <p className="services-section-subtitle centered">High-availability networking built to modern global connectivity standards.</p>
        </div>
        <div className="service-offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">🪢</div>
            <h3 className="offering-title">Fiber Optic Installation & Splicing</h3>
            <p className="offering-desc">High-speed, top-capacity fiber backbones designed for fast, lossless data transmission across multi-building campuses.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📶</div>
            <h3 className="offering-title">Wireless Network Systems</h3>
            <p className="offering-desc">Secure, enterprise-level managed Wi-Fi solutions optimized for thousands of simultaneous user connections.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">☎️</div>
            <h3 className="offering-title">IP Telephony Solutions</h3>
            <p className="offering-desc">Reliable, modern voice communication platforms over data networks, built to support active growing organizations.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🌐</div>
            <h3 className="offering-title">Enterprise Connectivity Systems</h3>
            <p className="offering-desc">Robust digital networking bridging distributed departments, facilities, and regional locations.</p>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="advanced-capabilities-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Strong Telecommunications Matter</h2>
          <p className="services-section-subtitle centered">We connect business workflows to reliable data infrastructure.</p>
        </div>
        <div className="capabilities-2-col-grid">
          <div className="capability-feature-block">
            <h4 className="feature-title">⚡ High-speed data transfer and communication</h4>
            <p className="feature-desc">Immediate real-time collaboration with zero network latency.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">✔️ Reliable connectivity with minimal downtime</h4>
            <p className="feature-desc">Enterprise-grade redundant configurations designed to keep networks live 24/7/365.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">📈 Scalable systems that grow with your business</h4>
            <p className="feature-desc">Modularity allows easy future physical network and line expansions without tearing down setup.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">👥 Improved collaboration across teams</h4>
            <p className="feature-desc">Enables seamless voice, digital, and cloud-backed interaction anywhere across your properties.</p>
          </div>
          <div className="capability-feature-block">
            <h4 className="feature-title">🔒 Secure and stable network performance</h4>
            <p className="feature-desc">High privacy data protocols designed into the physical cabling and transmission setup.</p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="service-process-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Approach</h2>
          <p className="services-section-subtitle centered">Our end-to-end framework translating technical requirements into operational performance.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Assessment</h3>
            <p className="step-desc">We thoroughly review existing equipment, fiber runs, and speed needs.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">Design</h3>
            <p className="step-desc">Our telecommunications engineers construct a tailored, redundant physical layout.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Installation</h3>
            <p className="step-desc">Fiber pulling, wireless setup, and splicing by specialized technicians.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Integration</h3>
            <p className="step-desc">We link telephony and data links directly into existing operational network channels.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Support & Maintenance</h3>
            <p className="step-desc">Ongoing line health diagnostics, software checking, and preventative checks.</p>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY & STANDARDS */}
      <section className="service-partners-strip-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">High Performance Telecom Standards</h2>
          <p className="services-section-subtitle centered">Meeting all modern performance, speed, and safety standards.</p>
        </div>
        <div className="standards-content-box">
          <p className="standards-text">
            We utilize advanced communication technologies and infrastructure components from the world's most trusted manufacturers to deliver highly reliable, scalable, and future-ready connectivity systems.
          </p>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="service-applications-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Where Our Telecom Systems Are Applied</h2>
          <p className="services-section-subtitle centered">Powering seamless regional communication infrastructures.</p>
        </div>
        <div className="applications-grid">
          <div className="app-block">
            <div className="app-icon">🏢</div>
            <h4 className="app-title">Corporate Offices</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏨</div>
            <h4 className="app-title">Hotels & Hospitality</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏥</div>
            <h4 className="app-title">Healthcare Facilities</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏭</div>
            <h4 className="app-title">Industrial & Energy Sites</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏠</div>
            <h4 className="app-title">Large Residential Developments</h4>
          </div>
        </div>
      </section>

      {/* 8. WHY COSMOTECH */}
      <section className="service-why-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Choose COSMOTECH</h2>
          <p className="services-section-subtitle centered">Enterprise data transport engineered for speed and uptime.</p>
        </div>
        <div className="why-grid">
          <div className="why-block">
            <div className="why-block-icon">🚀</div>
            <h4 className="why-block-title">High-Performance Systems</h4>
            <p className="why-block-desc">We focus heavily on speed, continuous throughput, and zero dropouts.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">📈</div>
            <h4 className="why-block-title">Scalable Infrastructure</h4>
            <p className="why-block-desc">Easily scale bandwidth and line counts anytime without tearing down your systems.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔗</div>
            <h4 className="why-block-title">Integrated Solutions</h4>
            <p className="why-block-desc">Voice, telemetry, digital networks, and security all run smoothly together.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">💬</div>
            <h4 className="why-block-title">Reliable Support</h4>
            <p className="why-block-desc">Continuous network health testing and on-call regional expert support.</p>
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="service-projects-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Relevant Projects</h2>
          <p className="services-section-subtitle centered">Explore our high-fidelity real-world technology deployments in Ghana.</p>
        </div>
        <div className="service-projects-grid">
          <div className="project-tile" style={{ backgroundImage: `url('/goil-plc.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Industrial</span>
              <h4 className="p-tile-title">KOAN Energy</h4>
              <p className="p-tile-desc">Communication Infrastructure</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/goil-plc.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Industrial</span>
              <h4 className="p-tile-title">GOBITUMEN</h4>
              <p className="p-tile-desc">Network & Connectivity Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Hospitality</span>
              <h4 className="p-tile-title">Accra City Hotel</h4>
              <p className="p-tile-desc">Integrated Communication Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="service-footer-cta-section">
        <div className="service-cta-inner">
          <h2 className="cta-main-title">Build a Stronger Communication Network</h2>
          <p className="cta-main-desc">
            Partner with COSMOTECH to design and deploy reliable, highly scalable telecommunications systems for your environment.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
