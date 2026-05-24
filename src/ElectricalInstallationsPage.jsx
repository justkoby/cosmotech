import React, { useEffect, useState } from 'react'

export default function ElectricalInstallationsPage({ setCurrentPage }) {
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const offerings = [
    { id: 1, title: 'Distribution Boards & Panels', desc: 'Supply and installation of main distribution boards, sub-boards, and consumer units. Includes MCBs, RCDs, and surge protection devices for safe load management.' },
    { id: 2, title: 'Power Wiring & Outlets', desc: 'Concealed and surface-mounted wiring installations for general power outlets, dedicated circuits for heavy equipment, and industrial socket arrangements.' },
    { id: 3, title: 'Lighting Circuits & Fixtures', desc: 'Interior and exterior lighting circuit design, installation of LED and fluorescent systems, downlights, emergency lighting, and occupancy-controlled lighting.' },
    { id: 4, title: 'Earthing & Bonding Systems', desc: 'Comprehensive earthing and equipotential bonding installations to protect occupants and equipment from fault currents in full compliance with IEE regulations.' },
    { id: 5, title: 'Generator & UPS Integration', desc: 'Standby generator connections, automatic transfer switches (ATS), and UPS systems to ensure uninterrupted power supply for critical loads and facilities.' },
    { id: 6, title: 'Cable Management Systems', desc: 'Professional cable trays, conduits, trunking, and containment systems ensuring neat, accessible, and safely segregated cable routes throughout the building.' }
  ]

  return (
    <div className="service-detail-page-container electrical-theme">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/electrical-installations.png')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Core Service</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Building Electrical Installations</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              End-to-end electrical infrastructure for commercial and residential buildings — designed for safety, efficiency, and long-term reliability.
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
            From new builds to retrofits, COSMOTECH designs and installs robust electrical systems tailored to the demands of modern commercial and residential environments.
          </p>
        </section>

        {/* Screen 3: What We Install */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>What We Install</h2>
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
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Site Survey</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Assessment & load analysis of building requirements.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#2</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Design</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Electrical drawings, diagrams, and code-aligned specs.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#3</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Installation</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Certified site execution including containment, wiring, and panels.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#4</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Testing</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Continuity, polarity, and loop impedance commissioning checks.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: '#5c7853' }}>#5</span>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Handover</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>As-built drawing manuals, certificates, and warrantee setups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 5: Sectors */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Sectors We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Commercial Offices</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Residential Buildings</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Retail & Hospitality</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Industrial Facilities</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Educational Institutions</span>
            <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 600 }}>Healthcare Facilities</span>
          </div>
        </section>

        {/* Screen 6: Related Projects */}
        <section style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Related Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.75)), url('/Anfield Residence.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '160px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#ffffff' }} onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Anfield Residence</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.85 }}>Premium Home Automation & Advanced Convenience</p>
            </div>
          </div>
        </section>

        {/* Screen 7: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Power Your Building Safely</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure IEE code-compliant, reliable electrical infrastructure. Contact our team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="service-hero" style={{ backgroundImage: `url('/electrical-installations.png')` }}>
          <div className="service-hero-overlay">
            <div className="service-hero-content">
              <span className="service-badge-accent">Core Service</span>
              <h1 className="service-hero-title">Building Electrical Installations</h1>
              <p className="service-hero-subtext">
                End-to-end electrical infrastructure for commercial and residential buildings — designed for safety, efficiency, and long-term reliability.
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
              <h2 className="overview-title">Complete Electrical Infrastructure</h2>
              <p className="overview-desc">
                From new builds to retrofits, COSMOTECH designs and installs robust electrical systems tailored to the demands of modern commercial and residential environments.
              </p>
              <p className="overview-desc">
                Every project is executed by certified electrical engineers with proven site experience, maintaining strict adherence to safety codes and using premium equipment.
              </p>
            </div>
            <div className="overview-image" style={{ backgroundImage: `url('/smart-home.png')` }}></div>
          </div>
        </section>

        {/* 3. WHAT WE INSTALL */}
        <section className="service-offerings-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Complete Electrical Solutions for Every Building</h2>
            <p className="services-section-subtitle centered">We install robust systems optimized for domestic, retail, corporate, and industrial usage.</p>
          </div>
          <div className="service-offerings-grid">
            {offerings.map((off) => (
              <div key={off.id} className="offering-card">
                <div className="offering-icon">⚡</div>
                <h3 className="offering-title">{off.title}</h3>
                <p className="offering-desc">{off.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. INSTALLATION PROCESS */}
        <section className="service-process-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Our Installation Process</h2>
            <p className="services-section-subtitle centered">A structured, transparent approach from initial assessment through to commissioning and handover.</p>
          </div>
          <div className="process-timeline-grid">
            <div className="timeline-step">
              <div className="step-number">#1</div>
              <h3 className="step-title">Site Survey</h3>
              <p className="step-desc">Assessment & load analysis of building requirements to determine optimal design.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#2</div>
              <h3 className="step-title">Design</h3>
              <p className="step-desc">Detailed single-line diagrams, circuit schedules, and material specs aligned with codes.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#3</div>
              <h3 className="step-title">Installation</h3>
              <p className="step-desc">Safe and efficient physical deployment of containments, wiring, and panel switchgear.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#4</div>
              <h3 className="step-title">Testing</h3>
              <p className="step-desc">Thorough insulation resistance, continuity, polarity, and loop checks before energising.</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">#5</div>
              <h3 className="step-title">Handover</h3>
              <p className="step-desc">As-built drawings, operations manuals, test certificates, and support contract handovers.</p>
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE COSMOTECH & LEGRAND */}
        <section className="electrical-why-section" style={{ padding: '100px 10%', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <span className="why-badge">Why Choose COSMOTECH</span>
              <h2 className="why-title">Electrical Expertise & Premium Partners</h2>
              <p className="why-desc">
                COSMOTECH brings together certified electrical engineers, premium materials from trusted manufacturers, and a disciplined project delivery methodology that ensures safety and future-ready adaptability.
              </p>
              <p className="why-desc">
                As authorized partners of <strong>Legrand</strong> — a world leader in electrical infrastructure — we specify and install premium devices, distribution boards, and smart electrical equipment backed by manufacturer warranty.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#334155' }}>✔️ IEE BS 7671 Wiring Regulations compliance on all jobs</li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#334155' }}>✔️ Full integration with smart building automation & security systems</li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '15px', color: '#334155' }}>✔️ Dedicated maintenance & after-installation support services</li>
              </ul>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #22c55e', padding: '24px', borderRadius: '4px' }}>
                <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '16px', margin: '0 0 8px 0' }}>Safety First</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Every installation adheres to Ghana Standards Authority electrical codes — with documentation and test certificates provided.</p>
              </div>
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #22c55e', padding: '24px', borderRadius: '4px' }}>
                <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '16px', margin: '0 0 8px 0' }}>Future-Ready Design</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>We build systems with spare capacity and integrations for solar PV, EV charging, and energy monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. STANDARDS & COMPLIANCE */}
        <section className="service-offerings-section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="services-section-header">
            <h2 className="services-section-title centered">Built to the Highest Standards</h2>
            <p className="services-section-subtitle centered">COSMOTECH electrical installations align with leading local and international code frameworks.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📜</div>
              <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '15px', margin: '0 0 8px 0' }}>IEE Wiring Regulations</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>BS 7671 / 18th Edition compliance verified on all circuits.</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                <img src="/gsa.jpeg" alt="Ghana Standards Authority" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '15px', margin: '0 0 8px 0' }}>Ghana Standards Authority</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>Adherence to local utility regulatory laws and parameters.</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🧯</div>
              <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '15px', margin: '0 0 8px 0' }}>Fire Safety Coordination</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>Cabling coordinated with emergency lighting & addressable alarms.</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '24px', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🧪</div>
              <h4 style={{ color: '#0f2214', fontWeight: 700, fontSize: '15px', margin: '0 0 8px 0' }}>Full Certification</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#64748b' }}>Insulation resistance and earth impedance logs documented.</p>
            </div>
          </div>
        </section>

        {/* 7. APPLICATIONS */}
        <section className="service-applications-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Powering Every Environment</h2>
            <p className="services-section-subtitle centered">Reliable, professional electrical setups tailored across sectors.</p>
          </div>
          <div className="applications-grid">
            <div className="app-block">
              <div className="app-icon">🏢</div>
              <h4 className="app-title">Commercial Offices</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏠</div>
              <h4 className="app-title">Residential Buildings</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏨</div>
              <h4 className="app-title">Retail & Hospitality</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏭</div>
              <h4 className="app-title">Industrial Facilities</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🎓</div>
              <h4 className="app-title">Educational Institutions</h4>
            </div>
            <div className="app-block">
              <div className="app-icon">🏥</div>
              <h4 className="app-title">Healthcare Facilities</h4>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="service-footer-cta-section">
          <div className="service-cta-inner">
            <h2 className="cta-main-title">Ready to Power Your Building?</h2>
            <p className="cta-main-desc">Talk to our electrical engineering team today to receive a detailed technical proposal.</p>
            <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
