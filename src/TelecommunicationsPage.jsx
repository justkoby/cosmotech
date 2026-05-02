import React, { useEffect, useState } from 'react'

export default function TelecommunicationsPage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'Fiber Optic Splicing & Installation', desc: 'High-speed, top-capacity fiber backbones designed for fast data transmission.' },
    { id: 2, title: 'Wireless Network Systems', desc: 'Secure, enterprise-level managed Wi-Fi solutions optimized for high concurrency.' },
    { id: 3, title: 'IP Telephony Solutions', desc: 'Modern voice communication platforms over data networks.' },
    { id: 4, title: 'Enterprise Connectivity', desc: 'Robust digital networks bridging distributed departments and locations.' }
  ]

  return (
    <div className="service-detail-page-container telecoms-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/Telecom Systems.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Global Connectivity</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Reliable Communication Infrastructure</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              High-performance telecommunications systems that ensure fast data transfer and uninterrupted connectivity.
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
            We design and implement robust communication systems that support voice, data, and continuous network connectivity for growing businesses and modern institutions.
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
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Technical review of existing setups</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>02</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Design</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Redundant physical layout planning</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>03</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Precision fiber splicing & deployment</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>04</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Support</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Monitoring & line optimization</p>
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
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start a Similar Project</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Build high-performance redundant systems today. Contact our technical team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/Telecom Systems.jpeg')` }}>
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
            {offerings.map((off) => (
              <div key={off.id} className="offering-card">
                <div className="offering-icon">🪢</div>
                <h3 className="offering-title">{off.title}</h3>
                <p className="offering-desc">{off.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="service-process-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Our Approach</h2>
            <p className="services-section-subtitle centered">Our end-to-end process translating technical requirements into operational performance.</p>
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
