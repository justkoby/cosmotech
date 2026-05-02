import React, { useState, useEffect } from 'react'

export default function IndustriesPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('residential')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const industries = [
    {
      id: 'residential',
      title: 'Residential Developments',
      desc: 'We design smart, secure, and connected systems for modern homes and residential communities.',
      needs: [
        'Reliable internet connectivity',
        'Smart home automation',
        'Security and surveillance',
        'User-friendly control systems'
      ],
      solutions: [
        'Smart home automation systems',
        'CCTV surveillance systems',
        'Network infrastructure',
        'Integrated security systems'
      ],
      projects: [
        { id: 'case-study-urban', title: 'The Urban Apartments' }
      ]
    },
    {
      id: 'hospitality',
      title: 'Hotels & Hospitality',
      desc: 'We deliver technology systems that enhance guest experience, improve security, and support smooth operations.',
      needs: [
        'Guest safety and monitoring',
        'Seamless connectivity',
        'Operational efficiency',
        'Integrated systems'
      ],
      solutions: [
        'Security systems (CCTV, access control)',
        'IT infrastructure',
        'Communication systems',
        'Integrated monitoring platforms'
      ],
      projects: [
        { id: 'case-study-accra', title: 'Accra City Hotel' }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Facilities',
      desc: 'We provide reliable infrastructure and secure systems that support critical healthcare operations.',
      needs: [
        'System reliability and uptime',
        'Secure access to sensitive areas',
        'Efficient communication systems',
        'Safety and monitoring'
      ],
      solutions: [
        'IT infrastructure systems',
        'Security and access control',
        'Communication systems',
        'Integrated monitoring solutions'
      ],
      projects: [
        { id: 'case-study-blue-valley', title: 'Blue Valley Specialist Hospital' }
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Offices',
      desc: 'We design systems that improve productivity, communication, and operational efficiency.',
      needs: [
        'Reliable connectivity',
        'Secure environments',
        'Efficient communication',
        'Scalable infrastructure'
      ],
      solutions: [
        'Network infrastructure',
        'Access control systems',
        'Communication systems',
        'Integrated technology platforms'
      ],
      projects: [
        { id: 'projects', title: 'Enterprise installations (various clients)' }
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial & Energy Facilities',
      desc: 'We deliver robust and scalable systems for industrial environments where reliability and performance are critical.',
      needs: [
        'High-performance infrastructure',
        'System reliability',
        'Security and monitoring',
        'Scalable solutions'
      ],
      solutions: [
        'IT infrastructure systems',
        'Security and surveillance',
        'Communication systems',
        'Integrated monitoring platforms'
      ],
      projects: [
        { id: 'projects', title: 'GOIL PLC' }
      ]
    }
  ]

  const activeInd = industries.find(ind => ind.id === activeTab) || industries[0]

  return (
    <div className="industries-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/2-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Our Sector Expertise</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Tailored Sector Solutions</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              We design specialized systems tailored precisely to your specific operational needs.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Enquire &rarr;
            </button>
          </div>
        </section>

        {/* Screen 2: Sector Selector Tabs */}
        <section style={{ padding: '24px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '4px' }} className="no-scrollbar">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                style={{ backgroundColor: activeTab === ind.id ? '#0c1b10' : '#ffffff', color: activeTab === ind.id ? '#ffffff' : '#475569', border: '1px solid #e2e8f0', borderRadius: '50px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, flexShrink: 0 }}
              >
                {ind.title.split(' & ')[0].split(' Developments')[0].split(' Facilities')[0]}
              </button>
            ))}
          </div>
        </section>

        {/* Screen 3: Focus details */}
        <section style={{ padding: '48px 20px', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>{activeInd.title}</h2>
          <p style={{ fontSize: '14.5px', color: '#475569', margin: '0 0 24px 0', lineHeight: '1.6' }}>{activeInd.desc}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Key Needs</h4>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                {activeInd.needs.map((n, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#1e293b', fontWeight: 700 }}>Our Solutions</h4>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                {activeInd.solutions.map((s, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Screen 4: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Request Industry Design</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Ensure maximum efficiency and data uptime today. Contact our technical team.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="industries-hero" style={{ backgroundImage: `url('/2-01.webp')` }}>
          <div className="industries-hero-overlay">
            <div className="industries-hero-content">
              <span className="industries-badge-accent">Our Sector Expertise</span>
              <h1 className="industries-hero-title">Technology Solutions Across Industries</h1>
              <p className="industries-hero-subtext">
                COSMOTECH PROJECT LTD delivers tailored infrastructure, security, and automation systems designed to meet the unique needs of different industries.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INDUSTRIES OVERVIEW (Quick navigation chips) */}
        <section className="industries-nav-tabs-section">
          <div className="industry-tabs-flex">
            {industries.map(ind => (
              <button 
                key={ind.id} 
                className={`industry-tab-chip ${activeTab === ind.id ? 'active' : ''}`}
                onClick={() => setActiveTab(ind.id)}
              >
                {ind.title.split(' & ')[0].split(' Developments')[0].split(' Facilities')[0]}
              </button>
            ))}
          </div>
        </section>

        {/* 3. CORE SELECTED INDUSTRY */}
        <section className="industry-focus-section">
          <div className="industry-focus-inner">
            <div className="ind-top-header">
              <h2 className="ind-focus-title">{activeInd.title}</h2>
              <p className="ind-focus-desc">{activeInd.desc}</p>
              <p className="ind-signature-text">Designed and delivered by COSMOTECH engineers.</p>
            </div>

            <div className="ind-needs-solutions-grid">
              <div className="ind-block-col">
                <h4 className="ind-sub-header">Key Needs</h4>
                <ul className="ind-needs-list">
                  {activeInd.needs.map((n, i) => (
                    <li key={i}>📌 {n}</li>
                  ))}
                </ul>
              </div>

              <div className="ind-block-col">
                <h4 className="ind-sub-header">Our Solutions</h4>
                <ul className="ind-solutions-list">
                  {activeInd.solutions.map((s, i) => (
                    <li key={i}>✔️ {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="industries-footer-cta-section">
          <div className="industries-cta-inner">
            <h2 className="cta-main-title">Find the Right Solution for Your Industry</h2>
            <p className="cta-main-desc">
              Talk to COSMOTECH engineers about designing a system tailored precisely to your environment.
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
