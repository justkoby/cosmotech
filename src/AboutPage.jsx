import React from 'react'

export default function AboutPage({ setCurrentPage }) {
  const clients = [
    { name: 'GOIL PLC', img: '/goil-plc.jpg' },
    { name: 'IAC', img: '/iac.png' },
    { name: 'Key Architectural', img: '/Key Architectural.png' },
    { name: 'Coral Pro', img: '/Coral Pro.png' },
    { name: 'GOBITUMEN', img: '/GOBITUMEN.png' },
    { name: 'APAL Developers', img: '/APAL Developers.png' },
    { name: 'KOAN Energy', img: '/koan.png' },
    { name: 'Blue Valley', img: '/blue-valley.png' },
    { name: 'Accra City Hotel', img: '/Accra City Hotel.jpg' },
    { name: 'The Urban Apartments', img: '/The Urban Apartments.png' },
    { name: 'Iris Apartments', img: '/iris-apartment.png' },
    { name: 'Hope Wells Hotel Plaza', img: '/Hope Wells Hotel Plaza.png' }
  ]

  return (
    <div className="about-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section className="mob-page-hero" style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/1-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Intelligent Infrastructure</span>
            <h1 style={{ fontSize: '30px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Built on Engineering.<br />Driven by Innovation.</h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              COSMOTECH delivers advanced systems that power modern homes and institutions across Ghana.
            </p>
            <button className="mob-cta-primary" style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Request Consultation
            </button>
          </div>
        </section>

        {/* Screen 2: Who We Are */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Who We Are</h2>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
            COSMOTECH PROJECT LTD is a technology solutions company delivering advanced IT, telecommunications, security, and smart infrastructure systems designed to empower residential, commercial, and institutional environments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <img src="/logo - Copy.png" alt="COSMOTECH Logo" style={{ maxWidth: '140px', animation: 'floatLogo 3s ease-in-out infinite alternate' }} />
          </div>
        </section>

        {/* Screen 3: What We Do */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#0c1b10', color: '#ffffff' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>What We Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>✏️</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Design</h4>
                <p style={{ fontSize: '13.5px', opacity: 0.85, margin: 0 }}>System architectures tailored to your requirements.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>🛠️</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Build</h4>
                <p style={{ fontSize: '13.5px', opacity: 0.85, margin: 0 }}>Professional standards-compliant installations.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>🔄</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Integrate</h4>
                <p style={{ fontSize: '13.5px', opacity: 0.85, margin: 0 }}>Unified technologies that connect seamlessly.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>💬</span>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Support</h4>
                <p style={{ fontSize: '13.5px', opacity: 0.85, margin: 0 }}>Proactive long-term technical maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 4: Vision & Mission */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderLeft: '4px solid #5c7853', paddingLeft: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Our Vision</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', margin: 0, lineHeight: '1.5' }}>To become a leading technology integration partner in Africa, shaping connected smart environments.</p>
            </div>
            <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px 0' }}>Our Mission</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', margin: 0, lineHeight: '1.5' }}>To deliver reliable, scalable, and secure technology systems that enable operations and safety.</p>
            </div>
          </div>
        </section>

        {/* Screen 5: Core Values */}
        <section className="mob-page-content-box" style={{ padding: '48px 20px', backgroundColor: '#f8fafc' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '20px' }}>💡</span>
              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px 0' }}>Innovation</h4>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Modern technologies</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '20px' }}>🛡️</span>
              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px 0' }}>Integrity</h4>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Full transparency</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '20px' }}>✔️</span>
              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px 0' }}>Quality</h4>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>High standards</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '20px' }}>🤝</span>
              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px 0' }}>Customer</h4>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Focus & partnership</p>
            </div>
          </div>
        </section>

        {/* Screen 6: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Talk to Our Team</h2>
          <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>
            Bring your residential, commercial, or institutional projects to life with our expert engineering team.
          </p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="about-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
          <div className="about-hero-overlay">
            <div className="about-hero-content">
              <span className="about-badge">About COSMOTECH</span>
              <h1 className="about-hero-title">Built on Engineering.<br />Driven by Innovation.</h1>
              <p className="about-hero-subtext">
                COSMOTECH PROJECT LTD delivers intelligent infrastructure systems that power modern homes, businesses, and institutions across Ghana.
              </p>
            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE */}
        <section className="about-who-section">
          <div className="about-who-grid">
            <div className="about-who-left">
              <h2 className="about-section-title">Who We Are</h2>
              <p className="about-p">
                <strong>COSMOTECH PROJECT LTD</strong> is a technology solutions company delivering advanced IT, telecommunications, security, and smart infrastructure systems.
              </p>
              <p className="about-p">
                Our expertise allows us to design and implement integrated technology solutions for residential, commercial, and institutional environments. We combine engineering expertise with modern technologies to deliver solutions that improve connectivity, security, efficiency, and automation.
              </p>
            </div>
            <div className="about-who-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo - Copy.png" alt="COSMOTECH Animated Logo" className="about-animated-logo" style={{ maxWidth: '250px', animation: 'floatLogo 3s ease-in-out infinite alternate', filter: 'drop-shadow(0 4px 12px rgba(128, 160, 107, 0.25))' }} />
            </div>
          </div>
        </section>

        {/* 3. WHAT WE DO */}
        <section className="about-process-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0c1b10', color: '#ffffff' }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="about-process-video-bg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
              opacity: 0.18,
              pointerEvents: 'none'
            }}
          >
            <source src="/0502(1).webm" type="video/webm" />
            <source src="/13549420_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(12, 27, 16, 0.82)', zIndex: 1 }}></div>
          <div className="about-container-inner" style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="about-section-title centered" style={{ color: '#ffffff' }}>What We Do</h2>
            <p className="about-section-subtitle centered" style={{ color: 'rgba(255,255,255,0.85)' }}>We engineer tailored solutions from initial blueprint to ongoing optimization.</p>
            <div className="about-process-grid">
              <div className="process-block">
                <div className="process-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
                </div>
                <h3 className="process-title">Design</h3>
                <p className="process-desc">Engineering tailored system architectures that fit your specific requirements.</p>
              </div>
              <div className="process-block">
                <div className="process-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h3 className="process-title">Build</h3>
                <p className="process-desc">Professional, standards-compliant installation & physical deployment.</p>
              </div>
              <div className="process-block">
                <div className="process-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h3 className="process-title">Integrate</h3>
                <p className="process-desc">Unified, fully connected technologies that work seamlessly together.</p>
              </div>
              <div className="process-block">
                <div className="process-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.32 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.5z"/></svg>
                </div>
                <h3 className="process-title">Support</h3>
                <p className="process-desc">Long-term proactive maintenance & technical systems optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISION & MISSION */}
        <section className="about-vision-mission-section">
          <div className="about-container-inner">
            <div className="vision-mission-grid">
              <div className="vision-mission-box">
                <div className="vm-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <h3 className="vm-title">Our Vision</h3>
                </div>
                <p className="vm-desc">
                  To become a leading technology integration company in Africa, shaping the future of connected homes and smart business environments.
                </p>
              </div>
              <div className="vision-mission-box">
                <div className="vm-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <h3 className="vm-title">Our Mission</h3>
                </div>
                <p className="vm-desc">
                  To design and deliver reliable, scalable, and secure technology systems that enable smarter operations and safer environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CORE VALUES */}
        <section className="about-values-section">
          <div className="about-container-inner">
            <h2 className="about-section-title centered">Our Core Values</h2>
            <p className="about-section-subtitle centered">The principles that guide our technical excellence and relationships.</p>
            <div className="about-values-grid">
              <div className="value-item-box">
                <div className="value-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h4 className="value-item-title">Innovation</h4>
                <p className="value-item-desc">Adopting modern technologies and forward-thinking engineering best practices.</p>
              </div>
              <div className="value-item-box">
                <div className="value-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4 className="value-item-title">Integrity</h4>
                <p className="value-item-desc">Operating with full transparency, commitment, and professionalism in every project.</p>
              </div>
              <div className="value-item-box">
                <div className="value-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                </div>
                <h4 className="value-item-title">Quality</h4>
                <p className="value-item-desc">High standards and rigorous validation processes without any compromises.</p>
              </div>
              <div className="value-item-box">
                <div className="value-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h4 className="value-item-title">Customer Focus</h4>
                <p className="value-item-desc">Fostering deep long-term partnerships and delivering sustained value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LEADERSHIP */}
        <section className="about-leadership-section">
          <div className="about-container-inner">
            <div className="leadership-message-box" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <h2 className="about-section-title">A Message from Our Founder</h2>
                <p className="about-p founder-text">
                  "At COSMOTECH PROJECTS LTD, we are more than just a technology and security solutions provider; we are innovators, problem-solvers, and trusted partners committed to delivering excellence. Our mission is to transform businesses and institutions through cutting-edge technology, seamless integration, and intelligent security solutions tailored to meet the evolving demands of the digital age."
                </p>
                <p className="about-p founder-text">
                  "Our team is made up of passionate professionals who bring expertise, creativity, and dedication to every project. We thrive on collaboration, leveraging our collective strengths to develop innovative solutions that drive efficiency, enhance security, and support sustainable growth."
                </p>
                <div className="founder-signature">
                  <strong>Anthony D. Donkor</strong>
                  <span>Lead, Cosmotech Projects Ltd.</span>
                </div>
              </div>
              <div className="founder-img-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="/pp.webp" alt="Anthony D. Donkor" className="founder-pp-img" style={{ width: '100%', maxWidth: '380px', height: 'auto', borderRadius: '12px', boxShadow: '0 12px 28px rgba(0,0,0,0.15)', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 7. TRUST / LOGO STRIP */}
        <section className="about-trust-section">
          <div className="about-container-inner">
            <h2 className="about-section-title centered">Trusted by Leading Organizations</h2>
            <div className="about-logo-marquee-wrapper">
              <div className="about-logo-marquee">
                {[...clients, ...clients].map((c, i) => (
                  <div className="about-logo-track-item" key={i}>
                    <img src={c.img} alt={c.name} title={c.name} className="about-client-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA SECTION */}
        <section className="about-cta-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 10%', backgroundColor: '#5c7853', color: '#ffffff' }}>
          <div className="about-container-inner centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="cta-heading" style={{ fontSize: '42px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Let’s Build Smarter Systems Together</h2>
            <p className="cta-desc" style={{ fontSize: '18px', opacity: 0.9, marginBottom: '36px', maxWidth: '650px', color: 'rgba(255,255,255,0.9)' }}>Work with our professional team of expert engineers to transform your technology infrastructure.</p>
            <button className="about-cta-btn" onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }} style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '16px 36px', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Request a Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
