import React, { useEffect } from 'react'

export default function ITInfrastructurePage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="service-detail-page-container">
      {/* 1. HERO SECTION */}
      <section className="service-hero" style={{ backgroundImage: `url('/2-01.webp')` }}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <span className="service-badge-accent">Core Infrastructure</span>
            <h1 className="service-hero-title">Robust IT Infrastructure for Reliable Operations</h1>
            <p className="service-hero-subtext">
              COSMOTECH PROJECT LTD designs and deploys scalable IT infrastructure systems that power connectivity, performance, and business continuity across modern environments.
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
            <h2 className="overview-title">IT Infrastructure Solutions</h2>
            <p className="overview-desc">
              We build the backbone of your technology environment — from structured cabling and enterprise networks to server systems and data infrastructure.
            </p>
            <p className="overview-desc">
              Our solutions are designed to ensure reliability, scalability, and secure data flow across your organization. Whether you're setting up a new facility or upgrading an existing system, we deliver infrastructure that supports growth and long-term performance.
            </p>
          </div>
          <div className="overview-image" style={{ backgroundImage: `url('/1-01.webp')` }}></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="service-offerings-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our IT Infrastructure Services Include</h2>
          <p className="services-section-subtitle centered">Comprehensive networking, security, and computing architectures built for modern enterprises.</p>
        </div>
        <div className="service-offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">🔌</div>
            <h3 className="offering-title">Structured Cabling Systems</h3>
            <p className="offering-desc">Organized and efficient cabling systems that support seamless, high-speed connectivity across all operational environments.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📡</div>
            <h3 className="offering-title">Enterprise Network Setup</h3>
            <p className="offering-desc">Design and deployment of high-performance wired and wireless networks tailored to critical departmental workflows.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🖥️</div>
            <h3 className="offering-title">Server Installation & Configuration</h3>
            <p className="offering-desc">Highly reliable server infrastructure for secure data storage, processing, and application hosting.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🔒</div>
            <h3 className="offering-title">Network Security Systems</h3>
            <p className="offering-desc">Multi-layered digital perimeter defense against unauthorized access, hacking, and cybersecurity threats.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">📊</div>
            <h3 className="offering-title">Data Center Infrastructure</h3>
            <p className="offering-desc">Design and deployment of fully scalable data environments built for secure compute and high-availability operations.</p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="service-process-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Process</h2>
          <p className="services-section-subtitle centered">A rigorous, end-to-end framework translating technical requirements into operational performance.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Assessment & Planning</h3>
            <p className="step-desc">We evaluate your current infrastructure to establish clear technical needs and scope.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">System Design</h3>
            <p className="step-desc">Our experienced team builds a tailored network and physical data infrastructure layout.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Implementation</h3>
            <p className="step-desc">Professional setup by skilled field technicians with minimal downtime for ongoing operations.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Integration</h3>
            <p className="step-desc">Seamlessly connecting data servers, routers, firewalls, and edge endpoints into a single platform.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Support & Optimization</h3>
            <p className="step-desc">Proactive infrastructure health monitoring, updates, and optimization support.</p>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & STANDARDS */}
      <section className="service-partners-strip-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Standards & Technologies</h2>
          <p className="services-section-subtitle centered">Delivering high-end hardware and global standards for absolute infrastructure longevity.</p>
        </div>
        <div className="standards-content-box">
          <p className="standards-text">
            We utilize industry-standard technologies and components from globally recognized manufacturers such as <strong>Legrand</strong> and <strong>Schneider Electric</strong> to deliver reliable, scalable, and future-ready infrastructure systems.
          </p>
          <div className="standards-logos-strip">
            <span className="standards-logo">Legrand</span>
            <span className="standards-logo">Schneider Electric</span>
          </div>
        </div>
      </section>

      {/* 6. WHERE THIS IS USED */}
      <section className="service-applications-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Applications</h2>
          <p className="services-section-subtitle centered">Bringing reliable connectivity across critical regional sectors.</p>
        </div>
        <div className="applications-grid">
          <div className="app-block">
            <div className="app-icon">🏢</div>
            <h4 className="app-title">Corporate Offices & Business Facilities</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏨</div>
            <h4 className="app-title">Hotels & Hospitality Environments</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏥</div>
            <h4 className="app-title">Healthcare Institutions</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏠</div>
            <h4 className="app-title">Residential Developments</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏭</div>
            <h4 className="app-title">Industrial & Energy Facilities</h4>
          </div>
        </div>
      </section>

      {/* 7. WHY COSMOTECH */}
      <section className="service-why-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Choose COSMOTECH</h2>
          <p className="services-section-subtitle centered">We engineer the backbone of your operations with complete precision.</p>
        </div>
        <div className="why-grid">
          <div className="why-block">
            <div className="why-block-icon">⚙️</div>
            <h4 className="why-block-title">Engineering-Driven Design</h4>
            <p className="why-block-desc">Every digital environment is meticulously built with technical precision for top performance.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">📈</div>
            <h4 className="why-block-title">Scalable Solutions</h4>
            <p className="why-block-desc">We build infrastructure that scales organically to support ongoing corporate expansion.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔗</div>
            <h4 className="why-block-title">Integrated Systems</h4>
            <p className="why-block-desc">Seamless performance and connectivity across all software and edge networks.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">💬</div>
            <h4 className="why-block-title">Reliable Support</h4>
            <p className="why-block-desc">Dedicated field support, maintenance programs, and physical network health optimization.</p>
          </div>
        </div>
      </section>

      {/* 8. RELATED PROJECTS */}
      <section className="service-projects-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Relevant Projects</h2>
          <p className="services-section-subtitle centered">View our real-world enterprise infrastructure deployment portfolio in Ghana.</p>
        </div>
        <div className="service-projects-grid">
          <div className="project-tile" style={{ backgroundImage: `url('/goil-plc.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Corporate</span>
              <h4 className="p-tile-title">GOIL PLC Headquarters</h4>
              <p className="p-tile-desc">Network & Infrastructure Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/blue-valley.png')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Healthcare</span>
              <h4 className="p-tile-title">Blue Valley Specialist Hospital</h4>
              <p className="p-tile-desc">IT & Security Infrastructure</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Residential</span>
              <h4 className="p-tile-title">The Urban Apartments</h4>
              <p className="p-tile-desc">Residential Network Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="service-footer-cta-section">
        <div className="service-cta-inner">
          <h2 className="cta-main-title">Build a Stronger Technology Foundation</h2>
          <p className="cta-main-desc">
            Partner with COSMOTECH to design and deploy infrastructure that supports your operations today and into the future.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
