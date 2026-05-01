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
        { id: 'projects', title: 'GOIL PLC' },
        { id: 'projects', title: 'GOBITUMEN' },
        { id: 'projects', title: 'KOAN Energy' }
      ]
    }
  ]

  const activeInd = industries.find(ind => ind.id === activeTab)

  return (
    <div className="industries-page-container">
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

          <div className="ind-projects-showcase">
            <h4 className="ind-sub-header">Relevant Case Studies</h4>
            <div className="ind-projects-grid">
              {activeInd.projects.map((proj, i) => (
                <div 
                  key={i} 
                  className="ind-proj-card" 
                  onClick={() => setCurrentPage(proj.id)}
                >
                  <h5 className="ind-proj-name">{proj.title}</h5>
                  <span className="ind-proj-link">View Portfolio &rarr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY INDUSTRY EXPERTISE MATTERS */}
      <section className="industry-expertise-importance-section">
        <div className="expertise-importance-inner">
          <h2 className="expertise-title">Why Industry-Specific Solutions Matter</h2>
          <p className="expertise-desc">
            Every environment has unique operational challenges. COSMOTECH designs systems that align precisely with industry requirements, ensuring long-term efficiency, reliability, and performance.
          </p>
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
  )
}
