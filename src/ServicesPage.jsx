import React, { useEffect } from 'react'

export default function ServicesPage({ setCurrentPage }) {
  // Add direct scrolling support for sections on initial render
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const coreServices = [
    {
      id: 'it-infrastructure',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="18" x2="6" y2="18"/></svg>
      ),
      title: 'IT Infrastructure',
      desc: 'Reliable network systems for modern operations'
    },
    {
      id: 'telecoms',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-7.38 16.72l-.71 1.99a1 1 0 0 0 1.34 1.25l2.43-.88A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><circle cx="12" cy="12" r="3"/></svg>
      ),
      title: 'Telecommunications',
      desc: 'Seamless high-speed communication systems'
    },
    {
      id: 'security-systems',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      ),
      title: 'Security Systems',
      desc: 'Advanced surveillance & access control'
    },
    {
      id: 'smart-automation',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      ),
      title: 'Smart Automation',
      desc: 'Connected living & working environments'
    },
    {
      id: 'fire-detection',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 3.5 6.5 1 1.333 1 3 0 4.5-.5.75-1.5 1.5-2.5 1.5s-2-.75-2.5-1.5z"/><path d="M11 12c1.38 0 2.5 1.12 2.5 2.5a2.5 2.5 0 0 1-5 0c0-1.38 1.12-2.5 2.5-2.5z"/></svg>
      ),
      title: 'Fire Detection',
      desc: 'High-end systems that protect lives & assets'
    }
  ]

  return (
    <div className="services-page-container">
      {/* 1. HERO (Clear + Direct) */}
      <section className="services-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            <span className="services-badge-accent">Our Expertise</span>
            <h1 className="services-hero-title">Engineering Smart Technology Systems</h1>
            <p className="services-hero-subtext">
              We design, install, and integrate advanced infrastructure solutions for homes, businesses, and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (Quick scan section) */}
      <section className="services-overview-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Core Engineering Capabilities</h2>
          <p className="services-section-subtitle centered">Click on any core service to see detailed technical capabilities and integrations.</p>
        </div>
        <div className="services-overview-grid">
          {coreServices.map((service) => (
            <div 
              key={service.id} 
              className="service-overview-card"
              onClick={() => {
                if (service.id === 'it-infrastructure') {
                  setCurrentPage('service-it');
                  window.scrollTo(0, 0);
                } else if (service.id === 'telecoms') {
                  setCurrentPage('service-telecoms');
                  window.scrollTo(0, 0);
                } else if (service.id === 'security-systems') {
                  setCurrentPage('service-security');
                  window.scrollTo(0, 0);
                } else if (service.id === 'smart-automation') {
                  setCurrentPage('service-automation');
                  window.scrollTo(0, 0);
                } else if (service.id === 'fire-detection') {
                  setCurrentPage('service-fire');
                  window.scrollTo(0, 0);
                } else {
                  handleScrollTo(service.id);
                }
              }}
            >
              <div className="service-card-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <span className="service-card-link">Explore Service &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INDIVIDUAL SERVICE SECTIONS (Main content) */}
      <section className="individual-services-content">
        
        {/* Service 1: IT Infrastructure */}
        <div id="it-infrastructure" className="service-detail-block zig-zag">
          <div className="service-detail-content">
            <span className="service-badge-tech">Structured & Scalable</span>
            <h2 className="service-detail-title">IT Infrastructure Solutions</h2>
            <p className="service-detail-desc">
              We design and deploy robust, high-performance network systems that form the ultimate bedrock of smart business operations and seamless communications.
            </p>
            <ul className="service-detail-list">
              <li>Structured cabling systems</li>
              <li>Enterprise network setup</li>
              <li>Server installations</li>
              <li>Network security systems</li>
              <li>Data center infrastructure</li>
            </ul>
            <button className="service-detail-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request a consultation &rarr;
            </button>
          </div>
          <div className="service-detail-image" style={{ backgroundImage: `url('/2-01.webp')` }}></div>
        </div>

        {/* Service 2: Telecommunications */}
        <div id="telecoms" className="service-detail-block zig-zag alternate">
          <div className="service-detail-content">
            <span className="service-badge-tech">Fiber & Wireless</span>
            <h2 className="service-detail-title">Telecommunications Systems</h2>
            <p className="service-detail-desc">
              Next-generation high-speed communication systems. Our specialized technicians install structured, high-capacity, and redundant telecom networks.
            </p>
            <ul className="service-detail-list">
              <li>Fiber optic cabling and splicing</li>
              <li>Wireless network systems</li>
              <li>IP telephony solutions</li>
              <li>Enterprise connectivity</li>
            </ul>
            <button className="service-detail-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request a consultation &rarr;
            </button>
          </div>
          <div className="service-detail-image" style={{ backgroundImage: `url('/oxford.webp')` }}></div>
        </div>

        {/* Service 3: Security Systems */}
        <div id="security-systems" className="service-detail-block zig-zag">
          <div className="service-detail-content">
            <span className="service-badge-tech">24/7 Security</span>
            <h2 className="service-detail-title">Security Systems</h2>
            <p className="service-detail-desc">
              From secure residential setups to multi-tier enterprise protection, our security systems provide continuous monitoring and peace of mind.
            </p>
            <ul className="service-detail-list">
              <li>CCTV surveillance systems</li>
              <li>Access control & biometrics</li>
              <li>Intruder alarm systems</li>
              <li>Video intercom systems</li>
              <li>Integrated monitoring</li>
            </ul>
            <button className="service-detail-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request a consultation &rarr;
            </button>
          </div>
          <div className="service-detail-image" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}></div>
        </div>

        {/* Service 4: Smart Automation */}
        <div id="smart-automation" className="service-detail-block zig-zag alternate">
          <div className="service-detail-content">
            <span className="service-badge-tech">Connected Spaces</span>
            <h2 className="service-detail-title">Smart Home & Building Automation</h2>
            <p className="service-detail-desc">
              Experience the pinnacle of convenience with lifestyle automation solutions that connect lighting, climate control, and smart devices seamlessly.
            </p>
            <ul className="service-detail-list">
              <li>Smart lighting systems</li>
              <li>Climate control automation</li>
              <li>Automated curtains</li>
              <li>Centralized control apps</li>
              <li>Integrated security</li>
            </ul>
            <button className="service-detail-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request a consultation &rarr;
            </button>
          </div>
          <div className="service-detail-image" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}></div>
        </div>

        {/* Service 5: Fire Detection */}
        <div id="fire-detection" className="service-detail-block zig-zag">
          <div className="service-detail-content">
            <span className="service-badge-tech">Life Safety</span>
            <h2 className="service-detail-title">Fire Detection & Alarm Systems</h2>
            <p className="service-detail-desc">
              Advanced addressable fire and smoke detection systems designed by our engineers to safeguard your valuable assets and prioritize human safety.
            </p>
            <ul className="service-detail-list">
              <li>Fire detection systems</li>
              <li>Alarm installations</li>
              <li>Addressable fire systems</li>
              <li>Safety monitoring</li>
              <li>Continuous maintenance</li>
            </ul>
            <button className="service-detail-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request a consultation &rarr;
            </button>
          </div>
          <div className="service-detail-image" style={{ backgroundImage: `url('/monarch-hotel.jpg')` }}></div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="how-it-works-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">How It Works</h2>
          <p className="services-section-subtitle centered">Our end-to-end process from strategy to sustained optimization.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Consultation</h3>
            <p className="step-desc">We listen intently to completely understand your technological and operational needs.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">Design</h3>
            <p className="step-desc">Our expert team custom-engineers the optimal technical system architecture.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Installation</h3>
            <p className="step-desc">Professional and precise field deployment, testing, and system commissioning.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Support</h3>
            <p className="step-desc">Sustained preventative maintenance and full ongoing optimization support.</p>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="industries-served-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Industries Served</h2>
          <p className="services-section-subtitle centered">Empowering modern infrastructure systems across distinct sectors.</p>
        </div>
        <div className="industries-grid">
          <div className="industry-block">
            <div className="industry-icon">🏠</div>
            <h4 className="industry-title">Residential Developments</h4>
          </div>
          <div className="industry-block">
            <div className="industry-icon">🏨</div>
            <h4 className="industry-title">Hotels & Hospitality</h4>
          </div>
          <div className="industry-block">
            <div className="industry-icon">🏥</div>
            <h4 className="industry-title">Healthcare Facilities</h4>
          </div>
          <div className="industry-block">
            <div className="industry-icon">🏢</div>
            <h4 className="industry-title">Corporate Offices</h4>
          </div>
          <div className="industry-block">
            <div className="industry-icon">🏭</div>
            <h4 className="industry-title">Industrial & Energy</h4>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY PARTNERS */}
      <section className="tech-partners-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Technology Partners</h2>
          <p className="services-section-subtitle centered">We collaborate with the world’s most trusted hardware and software pioneers.</p>
        </div>
        <div className="partners-flex">
          <div className="partner-logo-box">Legrand</div>
          <div className="partner-logo-box">Hikvision</div>
          <div className="partner-logo-box">Vimar</div>
          <div className="partner-logo-box">Schneider</div>
        </div>
      </section>

      {/* 7. CTA (Close strong) */}
      <section className="services-footer-cta-section">
        <div className="services-cta-inner">
          <h2 className="cta-main-title">Start Your Next Project with COSMOTECH</h2>
          <p className="cta-main-desc">
            Let our experienced team of professional engineers design and implement your advanced technological infrastructure.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
