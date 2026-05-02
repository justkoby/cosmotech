import React, { useEffect, useState } from 'react'

export default function ITInfrastructurePage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'Structured Cabling Systems', desc: 'Organized and high-efficiency network cabling for enterprise setups.' },
    { id: 2, title: 'Enterprise Network Setup', desc: 'High-performance wired and wireless systems tailored to business workflows.' },
    { id: 3, title: 'Server Installation', desc: 'Secure data environments for compute and application hosting.' },
    { id: 4, title: 'Network Security Systems', desc: 'Advanced firewalls and perimeters to defend against threats.' },
    { id: 5, title: 'Data Center Infrastructure', desc: 'Scalable data centers optimized for continuous high-availability operations.' }
  ]

  return (
    <div className="service-detail-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/IT Infrastructure.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Core Infrastructure</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Robust IT Infrastructure</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Scalable networks that drive business continuity and data operations across Ghana.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 20px', borderRadius: '4px', border: 'none', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', flex: 1 }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
                Request Consultation
              </button>
              <button style={{ backgroundColor: '#25d366', color: '#ffffff', padding: '14px 20px', borderRadius: '4px', border: 'none', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', flex: 1 }} onClick={() => window.open('https://wa.me/233545508808', '_blank')}>
                WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* Screen 2: Overview */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Overview</h2>
          <p style={{ fontSize: '14.5px', color: '#475569', margin: 0, lineHeight: '1.6' }}>
            We design, install, and support high-availability IT systems—from physical structured cabling and enterprise routers to secure multi-layered networks.
          </p>
        </section>

        {/* Screen 3: What We Offer */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>What We Offer</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {offerings.map((off) => (
              <div key={off.id} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                <div
                  style={{ backgroundColor: openOffer === off.id ? '#0c1b10' : '#f8fafc', color: openOffer === off.id ? '#ffffff' : '#1e293b', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                  onClick={() => setOpenOffer(openOffer === off.id ? null : off.id)}
                >
                  <span>{off.title}</span>
                  <span>{openOffer === off.id ? '−' : '+'}</span>
                </div>
                {openOffer === off.id && (
                  <div style={{ padding: '14px 16px', backgroundColor: '#ffffff', color: '#64748b', fontSize: '13.5px', lineHeight: '1.5' }}>
                    {off.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Screen 4: How It Works */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Our Process</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>01</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Assessment</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Technical scope planning</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>02</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>System Design</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Custom network architecture</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>03</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Skilled field technicians</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>04</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Support</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Monitoring & maintenance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 5: Applications */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Applications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Hotels</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Offices</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Healthcare</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Residential</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Industrial</span>
          </div>
        </section>

        {/* Screen 6: Related Projects */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Related Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/goil-plc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>GOIL PLC Headquarters</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>Corporate Network Systems</p>
            </div>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/blue-valley.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Blue Valley Hospital</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>Healthcare Infrastructure</p>
            </div>
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start a Similar Project</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ready to enhance your digital workspace? Contact our professional team of expert engineers.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/IT Infrastructure.jpg')` }}>
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
            <div className="overview-image" style={{ backgroundImage: `url('/IT Infrastructure.jpg')` }}></div>
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
    </div>
  )
}
