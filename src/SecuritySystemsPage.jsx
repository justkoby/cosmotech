import React, { useEffect, useState } from 'react'

export default function SecuritySystemsPage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'CCTV Surveillance Systems', desc: 'IP cameras with real-time AI analytics, direct recording, and mobile viewing.' },
    { id: 2, title: 'Access Control Systems', desc: 'Biometric and card systems for multi-tier access of physical entry points.' },
    { id: 3, title: 'Intruder Alarm Systems', desc: 'Perimeter motion detection that triggers immediate alerts upon access.' },
    { id: 4, title: 'Video Intercom Systems', desc: 'Clear communication and visitor verification directly at points of access.' },
    { id: 5, title: 'Integrated Security Platforms', desc: 'Centralized control dashboard that tracks all internal security layers.' }
  ]

  return (
    <div className="service-detail-page-container security-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/Security Systems.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Enterprise Security</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Intelligent Security Systems</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Advanced systems providing continuous visibility, control, and absolute protection.
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
            We combine high-definition surveillance, multi-tier biometrics, and alarm networks into a single platform that protects entry points and interior spaces.
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
              <span style={{ fontWeight: 700, color: '#5c7853' }}>01</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Site Assessment</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>We analyze operational Protocols</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>02</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>System Design</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Technical camera placement blueprint</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>03</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Equipment mounting & configuration</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>04</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Support</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Periodic physical inspection & testing</p>
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
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Industrial</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Residential</span>
          </div>
        </section>

        {/* Screen 6: Related Projects */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Related Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/Accra City Hotel.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Accra City Hotel</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>IP CCTV & Access Systems</p>
            </div>
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Enhance Your Security</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure 24/7 visibility and total asset protection. Contact us.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/Security Systems.png')` }}>
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
            {offerings.map((off) => (
              <div key={off.id} className="offering-card">
                <div className="offering-icon">📹</div>
                <h3 className="offering-title">{off.title}</h3>
                <p className="offering-desc">{off.desc}</p>
              </div>
            ))}
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

        {/* 9. CTA */}
        <section className="service-footer-cta-section">
          <div className="service-cta-inner">
            <h2 className="cta-main-title">Build a Secure Environment Today</h2>
            <p className="cta-main-desc">Work with our team to protect your assets, operations, and community.</p>
            <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
