import React, { useState, useEffect } from 'react'

export default function ProjectsPage({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filters = ['All', 'Residential', 'Hospitality', 'Industrial', 'Healthcare', 'Corporate']

  const projects = [
    {
      id: 'accra-city-hotel',
      name: 'Accra City Phase 2',
      category: 'Hospitality',
      shortDesc: 'Complete security surveillance and advanced infrastructure integration.',
      longDesc: 'Complete deployment of integrated security and infrastructure systems for a prominent high-traffic hospitality environment in Accra, Ghana.',
      scope: [
        'Advanced IP CCTV surveillance systems',
        'Enterprise IT network infrastructure',
        'High-end access control & guest management'
      ],
      tech: ['Hikvision', 'Legrand', 'Vimar'],
      outcome: 'Improved 24/7 continuous facility security monitoring and operational staff efficiency across the hotel.',
      img: '/Accra-City-Hotel.png'
    },
    {
      id: 'blue-valley',
      name: 'Blue Valley Specialist Hospital',
      category: 'Healthcare',
      shortDesc: 'Secure intelligent infrastructure and high-speed data networks.',
      longDesc: 'Specialized technology integration providing secure network backbones and physical access controls for a modern multi-facility medical center.',
      scope: [
        'Secure patient record network infrastructure',
        'CCTV and door access control',
        'Nurse call systems'
      ],
      tech: ['Legrand', 'Schneider Electric'],
      outcome: 'Created a highly reliable, high-uptime digital environment supporting patient healthcare workflows seamlessly.',
      img: '/blue-valley.png'
    },
    {
      id: 'goil-plc',
      name: 'GOIL PLC Headquarters',
      category: 'Corporate',
      shortDesc: 'Enterprise networks, server setups, and access systems.',
      longDesc: 'Modern technology integration at GOIL PLC headquarters to support multi-departmental communications and secure facility oversight.',
      scope: [
        'Core network routing and switching',
        'Biometric access control systems',
        'Smart fire protection systems'
      ],
      tech: ['Schneider Electric', 'Legrand'],
      outcome: 'A modern, secure data systems environment ensuring data continuity and highly efficient staff operations.',
      img: '/goil-plc.jpg'
    },
    {
      id: 'anfield-residence',
      name: 'Anfield Residence',
      category: 'Residential',
      shortDesc: 'Unified luxury automation and smart climate controls.',
      longDesc: 'Design and deployment of premium residential automation systems for a luxury villa in a prime Accra neighborhood.',
      scope: [
        'Smart lighting control',
        'Integrated multi-room audio & visual systems',
        'Automated curtains and centralized app controls'
      ],
      tech: ['Vimar', 'Legrand'],
      outcome: 'An ultra-premium residential living experience that unifies ease of control with optimal energy utilization.',
      img: '/Anfield Residence.jpg'
    },
    {
      id: 'koan-energy',
      name: 'KOAN Energy Center',
      category: 'Industrial',
      shortDesc: 'Failsafe industrial networks and remote CCTV systems.',
      longDesc: 'End-to-end industrial networking and security automation deployed for a high-value energy storage terminal.',
      scope: [
        'Fiber optic cabling and network splicing',
        'Long-range outdoor perimeter surveillance',
        'Physical access logging systems'
      ],
      tech: ['Hikvision', 'Schneider Electric'],
      outcome: 'Robust remote asset monitoring with minimal maintenance needs, securing critical energy logistics.',
      img: '/koan.png'
    },
    {
      id: 'the-urban-apartments',
      name: 'The Urban Apartments',
      category: 'Residential',
      shortDesc: 'Modern residential smart infrastructure & security systems.',
      longDesc: 'Integrating automated climate, convenience, and security systems within a high-density, high-end smart residential apartment complex.',
      scope: [
        'Advanced perimeter access control',
        'Video intercom and centralized security desks',
        'Smart home lighting & climate automation'
      ],
      tech: ['Vimar', 'Hikvision'],
      outcome: 'Enhanced resident living comfort and overall building safety via a robust centralized automation platform.',
      img: '/The Urban.jpg'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="projects-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/1-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Our Portfolio</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Projects That Power Environments</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              From complex networks to residential living, COSMOTECH delivers advanced infrastructure across Ghana.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Enquire &rarr;
            </button>
          </div>
        </section>

        {/* Screen 2: Filter chips */}
        <section style={{ padding: '24px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '4px' }} className="no-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{ backgroundColor: activeFilter === f ? '#0c1b10' : '#ffffff', color: activeFilter === f ? '#ffffff' : '#475569', border: '1px solid #e2e8f0', borderRadius: '50px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, flexShrink: 0 }}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Screen 3: Project list */}
        <section style={{ padding: '32px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}
                onClick={() => {
                  if (proj.id === 'accra-city-hotel') setCurrentPage('case-study-accra')
                  else if (proj.id === 'blue-valley') setCurrentPage('case-study-blue-valley')
                  else if (proj.id === 'the-urban-apartments') setCurrentPage('case-study-urban')
                  else if (proj.id === 'goil-plc') setCurrentPage('case-study-goil')
                  else if (proj.id === 'anfield-residence') setCurrentPage('case-study-anfield')
                  else if (proj.id === 'koan-energy') setCurrentPage('case-study-koan')
                  else setSelectedProject(proj)
                }}
              >
                <div style={{ backgroundImage: `url('${proj.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '180px' }}></div>
                <div style={{ padding: '16px' }}>
                  <span style={{ fontSize: '11px', color: '#5c7853', fontWeight: 700, textTransform: 'uppercase' }}>{proj.category}</span>
                  <h4 style={{ fontSize: '17px', color: '#1e293b', fontWeight: 700, margin: '4px 0 8px 0' }}>{proj.name}</h4>
                  <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 12px 0', lineHeight: '1.4' }}>{proj.shortDesc}</p>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0c1b10' }}>View Details &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Screen 4: Trust strip */}
        <section style={{ padding: '40px 20px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', marginBottom: '16px', textAlign: 'center' }}>Trusted by Leading Organizations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#475569' }}>GOIL PLC</div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#475569' }}>Accra City Phase 2</div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#475569' }}>KOAN Energy</div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#475569' }}>Blue Valley Specialist Hospital</div>
          </div>
        </section>

        {/* Screen 5: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Start a Similar Project</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Need specialized engineering and technology solutions? Let’s talk.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="projects-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
          <div className="projects-hero-overlay">
            <div className="projects-hero-content">
              <span className="projects-badge-accent">Our Portfolio</span>
              <h1 className="projects-hero-title">Projects That Power Real Environments</h1>
              <p className="projects-hero-subtext">
                From residential developments to large-scale infrastructure, COSMOTECH delivers integrated technology systems across Ghana.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FILTER / CATEGORY NAV */}
        <section className="projects-filter-section">
          <div className="filter-chips-container">
            {filters.map((f) => (
              <button 
                key={f}
                className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* 3. PROJECT GRID */}
        <section className="projects-grid-section">
          <div className="portfolio-masonry-grid">
            {filteredProjects.map((proj, idx) => (
              <div 
                key={proj.id} 
                className={`portfolio-tile ${idx % 3 === 0 ? 'large-tile' : 'medium-tile'}`}
                style={{ backgroundImage: `url('${proj.img}')` }}
                onClick={() => {
                  if (proj.id === 'accra-city-hotel') {
                    setCurrentPage('case-study-accra');
                  } else if (proj.id === 'blue-valley') {
                    setCurrentPage('case-study-blue-valley');
                  } else if (proj.id === 'the-urban-apartments') {
                    setCurrentPage('case-study-urban');
                  } else if (proj.id === 'goil-plc') {
                    setCurrentPage('case-study-goil');
                  } else if (proj.id === 'anfield-residence') {
                    setCurrentPage('case-study-anfield');
                  } else if (proj.id === 'koan-energy') {
                    setCurrentPage('case-study-koan');
                  } else {
                    setSelectedProject(proj);
                  }
                }}
              >
                <div className="portfolio-overlay">
                  <span className="proj-category-label">{proj.category}</span>
                  <h3 className="proj-name-label">{proj.name}</h3>
                  <p className="proj-desc-short">{proj.shortDesc}</p>
                  <span className="proj-view-link">View Project &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CLIENT LOGOS */}
        <section className="client-logos-section">
          <div className="services-section-header">
            <h2 className="services-section-title centered">Reinforcing Credibility</h2>
            <p className="services-section-subtitle centered">Trusted by multi-national corporations and key local enterprises across distinct markets.</p>
          </div>
          <div className="client-logos-grid">
            <div className="client-logo-card">GOIL PLC</div>
            <div className="client-logo-card">GOBITUMEN</div>
            <div className="client-logo-card">KOAN Energy</div>
            <div className="client-logo-card">Accra City Phase 2</div>
            <div className="client-logo-card">Blue Valley Specialist Hospital</div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="projects-footer-cta-section">
          <div className="projects-cta-inner">
            <h2 className="cta-main-title">Have a Project in Mind?</h2>
            <p className="cta-main-desc">
              Let's design and build the right system for your environment. Speak to our team today for dedicated end-to-end consulting.
            </p>
            <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation
            </button>
          </div>
        </section>
      </div>

      {/* Detail modal for extra desktop support if needed */}
      {selectedProject && (
        <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            <div style={{ padding: '32px' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700, color: '#5c7853' }}>{selectedProject.category}</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1e293b', margin: '4px 0 16px 0' }}>{selectedProject.name}</h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>{selectedProject.longDesc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
