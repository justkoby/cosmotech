import React, { useEffect, useState } from 'react'

export default function FireDetectionPage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'Fire Detection Systems', desc: 'Highly sensitive heat, smoke, and multi-sensor units for early alerts.' },
    { id: 2, title: 'Fire Alarm Installations', desc: 'Reliable audible and visual alerts for organized facility evacuations.' },
    { id: 3, title: 'Addressable Fire Systems', desc: 'Precise location tracking identifying the exact zone of a hazard.' },
    { id: 4, title: 'Continuous Fire Monitoring', desc: '24/7 localized and remote alerts connected directly to operations.' },
    { id: 5, title: 'Fire System Maintenance', desc: 'Periodic physical sensor testing and software validation checks.' }
  ]

  return (
    <div className="service-detail-page-container fire-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/fire safety.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Life & Property Safety</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Advanced Fire Detection Systems</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              We design and install high-accuracy fire detection and alarm systems that protect lives and properties across Ghana.
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
            Early hazard detection saves lives. We build intelligent, addressable systems that pinpoint safety issues instantly and alert operations without unneeded downtime.
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
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Our Approach</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#1</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Assessment</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Blueprint review & hazard mapping</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#2</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Design</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Compliant systems engineering</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#3</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation & Quality Control</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Precision hardware setups with strict quality control and assurance.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#4</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Support</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Scheduled preventative checks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 5: Applications */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Applications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Industrial</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Offices</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Healthcare</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Hotels</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>High end Residential Properties</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Tertiary Institutions</span>
          </div>
        </section>

        {/* Screen 6: Related Projects */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Related Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/monarch-hotel.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Monarch Hotel</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>Addressable Fire Systems</p>
            </div>
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Secure Your Environment</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure absolute fire safety for your property. Contact our team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/fire safety.png')` }}>
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
            {offerings.map((off) => (
              <div key={off.id} className="offering-card">
                <div className="offering-icon">🔥</div>
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
            <p className="services-section-subtitle centered">Stringent end-to-end framework translating technical requirements into operational performance.</p>
          </div>
          <div className="process-timeline-grid">
            <div className="timeline-step">
              <div className="step-number">#1</div>
              <h3 className="step-title">Risk Assessment</h3>
              <p className="step-desc">We thoroughly evaluate facility blueprints and map active fire vulnerabilities.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#2</div>
              <h3 className="step-title">System Design</h3>
              <p className="step-desc">We construction-engineer a compliant, fully functional fire detection system.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#3</div>
              <h3 className="step-title">Installation & Quality Control</h3>
              <p className="step-desc">Professional physical setup of smart sensors, panels, and alarms with stringent quality control and assurance.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#4</div>
              <h3 className="step-title">Integration</h3>
              <p className="step-desc">Seamless connection of fire controls to security and general building management apps.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#5</div>
              <h3 className="step-title">Testing & Maintenance</h3>
              <p className="step-desc">Scheduled physical diagnostic checks to ensure uninterrupted responsive safety.</p>
            </div>
          </div>
        </section>

        {/* 6. WHERE THIS IS USED */}
        <section className="service-applications-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Applications</h2>
            <p className="services-section-subtitle centered">Bringing reliable security across critical regional sectors.</p>
          </div>
          <div className="applications-grid">
            <div className="app-block">
              <div className="app-icon">🏭</div>
              <h4 className="app-title">Industrial & Energy Facilities</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏢</div>
              <h4 className="app-title">Corporate Offices & Business Facilities</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏥</div>
              <h4 className="app-title">Healthcare Institutions</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏨</div>
              <h4 className="app-title">Hotels & Hospitality Environments</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏠</div>
              <h4 className="app-title">High end Residential Properties</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🎓</div>
              <h4 className="app-title">Tertiary Institutions</h4>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="service-footer-cta-section">
          <div className="service-cta-inner">
            <h2 className="cta-main-title">Request Professional Fire Safety Setup</h2>
            <p className="cta-main-desc">Let us help you design and deploy systems that protect your team, customers, and operations.</p>
            <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
