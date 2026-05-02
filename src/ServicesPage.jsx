import React, { useEffect, useState } from 'react'

export default function ServicesPage({ setCurrentPage }) {
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(index)
    }
  }

  const coreServices = [
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      desc: 'High-availability enterprise networks, Cat6 cabling, fiber optic splicing, and managed Wi-Fi points.',
      route: 'service-it'
    },
    {
      id: 'security-systems',
      title: 'Security Systems',
      desc: 'IP-based CCTV setups, biometric multi-tier access controls, and integrated commercial/residential alarms.',
      route: 'service-security'
    },
    {
      id: 'smart-automation',
      title: 'Smart Automation',
      desc: 'Luxury convenience with lighting, centralized climate, and entertainment systems integrated into a single interface.',
      route: 'service-automation'
    },
    {
      id: 'telecoms',
      title: 'Telecommunications',
      desc: 'High-speed redundant connectivity, structured fiber backbones, and enterprise PBX phone systems.',
      route: 'service-telecoms'
    },
    {
      id: 'fire-detection',
      title: 'Fire Detection',
      desc: 'Smart addressable fire alarms, smoke detection, hazard notification, and continuous coverage systems.',
      route: 'service-fire'
    }
  ]

  return (
    <div className="services-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section className="mob-page-hero" style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/1-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Our Expertise</span>
            <h1 style={{ fontSize: '30px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Engineering Smart Technology Systems</h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              We design, install, and integrate advanced infrastructure solutions for homes, businesses, and institutions.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Request Consultation
            </button>
          </div>
        </section>

        {/* Screen 2: Service Selector */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>What do you need?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {coreServices.map((svc) => (
              <button
                key={svc.id}
                onClick={() => { setCurrentPage(svc.route); window.scrollTo(0, 0); }}
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px 20px', borderRadius: '6px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: 600, color: '#1e293b', fontSize: '15px' }}
              >
                <span>{svc.title}</span>
                <span style={{ color: '#5c7853' }}>&rarr;</span>
              </button>
            ))}
          </div>
        </section>

        {/* Screen 3: Accordion Services */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Core Capabilities</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {coreServices.map((svc, idx) => (
              <div key={svc.id} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                <div 
                  style={{ backgroundColor: openAccordion === idx ? '#0c1b10' : '#f8fafc', color: openAccordion === idx ? '#ffffff' : '#1e293b', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, cursor: 'pointer' }}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span style={{ fontSize: '15px' }}>{svc.title}</span>
                  <span style={{ fontSize: '18px' }}>{openAccordion === idx ? '−' : '+'}</span>
                </div>
                {openAccordion === idx && (
                  <div style={{ padding: '16px 18px', backgroundColor: '#ffffff', color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
                    <p style={{ margin: '0 0 16px 0' }}>{svc.desc}</p>
                    <button
                      onClick={() => { setCurrentPage(svc.route); window.scrollTo(0, 0); }}
                      style={{ backgroundColor: '#5c7853', color: '#ffffff', padding: '10px 18px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }}
                    >
                      Explore Service &rarr;
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Screen 4: How It Works */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, backgroundColor: '#0c1b10', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>#1</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Consultation</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Listen to understand your technical & operational needs.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, backgroundColor: '#0c1b10', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>#2</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Design</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Custom-engineer optimal system architecture.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, backgroundColor: '#0c1b10', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>#3</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Installation & Quality Control</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Precise field deployment with strict quality control & assurance.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, backgroundColor: '#0c1b10', color: '#ffffff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>#4</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Support</h4>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Continuous preventive maintenance and optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 5: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start Your Project</h2>
          <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>
            Work with COSMOTECH engineers to transform your technology infrastructure today.
          </p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO */}
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

        {/* 2. SERVICES OVERVIEW */}
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
                  }
                }}
              >
                <div className="service-card-icon-wrapper">
                  ✏️
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <span className="service-card-link">Explore Service &rarr;</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. INDIVIDUAL SERVICE SECTIONS */}
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
              <div className="step-number">#1</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-desc">We listen intently to completely understand your technological and operational needs.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#2</div>
              <h3 className="step-title">Design</h3>
              <p className="step-desc">Our expert team custom-engineers the optimal technical system architecture.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#3</div>
              <h3 className="step-title">Installation & Quality Control</h3>
              <p className="step-desc">Professional and precise field deployment with stringent quality control & assurance.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#4</div>
              <h3 className="step-title">Support</h3>
              <p className="step-desc">Sustained preventative maintenance and full ongoing optimization support.</p>
            </div>
          </div>
        </section>

        {/* 7. CTA */}
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
    </div>
  )
}
