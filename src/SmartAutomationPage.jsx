import React, { useEffect, useState } from 'react'

export default function SmartAutomationPage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'Smart Lighting', desc: 'Custom ambient scenes, brightness, and scheduled routines with a tap.' },
    { id: 2, title: 'Climate Control', desc: 'Automate localized temperatures for ultimate personal comfort.' },
    { id: 3, title: 'Automated Curtains', desc: 'Scheduled motorized sunlight exposure and room privacy.' },
    { id: 4, title: 'Home Security Integration', desc: 'Consolidate alarm alerts and cameras into a single dashboard.' },
    { id: 5, title: 'Entertainment Control', desc: 'Whole-house audio distributions and customized media rooms.' }
  ]

  return (
    <div className="service-detail-page-container automation-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/Smart Automation.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Lifestyle Automation</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Smart Living, Seamlessly Controlled</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              We design and integrate intelligent systems that give you complete control over your environment anytime.
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
            We transform everyday spaces into premium smart environments where lighting, audio, video, security, and climate systems connect dynamically.
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
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Our Roadmap</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>01</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Consultation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Design aligned to lifestyle needs</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>02</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Integration</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Custom engineering without complexity</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>03</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>High-fidelity setup by expert technicians</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>04</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Support</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Continuous system software upgrades</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 5: Applications */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Applications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Luxury Homes</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Hotels</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Apartments</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Premium Offices</span>
          </div>
        </section>

        {/* Screen 6: Related Projects */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Related Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/Anfield Residence.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Anfield Residence</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>Smart Home Automation</p>
            </div>
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start Your Smart Automation</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Experience the pinnacle of lifestyle convenience. Contact our specialized team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/Smart Automation.jpeg')` }}>
          <div className="service-hero-overlay">
            <div className="service-hero-content">
              <span className="service-badge-accent">Lifestyle Automation</span>
              <h1 className="service-hero-title">Smart Living, Seamlessly Controlled</h1>
              <p className="service-hero-subtext">
                COSMOTECH PROJECT LTD designs and integrates intelligent automation systems that give you complete control over your home or building — anytime, anywhere.
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
              <span className="overview-badge">Our Focus</span>
              <h2 className="overview-title">Smart Home & Building Automation</h2>
              <p className="overview-desc">
                We transform residential and commercial spaces into intelligent environments where lighting, climate, security, and entertainment systems work together seamlessly.
              </p>
              <p className="overview-desc">
                Our solutions are designed to enhance comfort, improve energy efficiency, and simplify everyday living through completely intuitive, consolidated control systems.
              </p>
            </div>
            <div className="overview-image" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}></div>
          </div>
        </section>

        {/* 3. WHAT WE OFFER */}
        <section className="service-offerings-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Control Your Environment With Ease</h2>
            <p className="services-section-subtitle centered">Unified smart technologies directly at your fingertips.</p>
          </div>
          <div className="service-offerings-grid">
            {offerings.map((off) => (
              <div key={off.id} className="offering-card">
                <div className="offering-icon">💡</div>
                <h3 className="offering-title">{off.title}</h3>
                <p className="offering-desc">{off.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="service-process-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Our Simple Integration Roadmap</h2>
            <p className="services-section-subtitle centered">We focus on clean, intuitive controls without adding technical complexity.</p>
          </div>
          <div className="process-timeline-grid">
            <div className="timeline-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-desc">We listen intently to match solutions to your unique everyday lifestyle and environment.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">02</div>
              <h3 className="step-title">System Design</h3>
              <p className="step-desc">Our technical designers create a seamless, non-intrusive automation plan.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Installation & Setup</h3>
              <p className="step-desc">Expert in-wall and ceiling setups by highly skilled local installation specialists.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Centralized Control</h3>
              <p className="step-desc">We consolidate all connected devices into a single, straightforward control app or dashboard.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">05</div>
              <h3 className="step-title">Support & Upgrades</h3>
              <p className="step-desc">Ongoing technical tune-ups and system software upgrades for continued efficiency.</p>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="service-footer-cta-section">
          <div className="service-cta-inner">
            <h2 className="cta-main-title">Experience Premium Automation Today</h2>
            <p className="cta-main-desc">
              Work with our experienced team to transform your living spaces into an intelligent, high-comfort environment.
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
