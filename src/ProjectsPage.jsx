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
      name: 'Accra City Hotel',
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
      name: 'Blue Valley Hospital',
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

      {/* 4. PROJECT DETAIL MODAL / SLIDE IN */}
      {selectedProject && (
        <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">&times;</button>
            <div className="modal-image-col" style={{ backgroundImage: `url('${selectedProject.img}')` }}></div>
            <div className="modal-content-col">
              <span className="modal-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.name}</h2>
              
              <div className="case-study-block">
                <h4 className="case-section-title">Overview</h4>
                <p className="case-section-desc">{selectedProject.longDesc}</p>
              </div>

              <div className="case-study-block">
                <h4 className="case-section-title">Scope of Work</h4>
                <ul className="case-scope-list">
                  {selectedProject.scope.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="case-study-block">
                <h4 className="case-section-title">Technologies Used</h4>
                <div className="case-tech-chips">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="case-study-block">
                <h4 className="case-section-title">Outcome / Impact</h4>
                <p className="case-section-desc outcome-highlight">{selectedProject.outcome}</p>
              </div>

              <button className="modal-cta-btn" onClick={() => { setSelectedProject(null); setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
                Enquire about a similar project &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. FEATURED PROJECT (Strong Highlight Section) */}
      <section className="projects-featured-banner-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Featured Project Highlight</h2>
          <p className="services-section-subtitle centered">A deep-dive glance at our most prominent industrial integrations.</p>
        </div>
        <div className="featured-project-banner" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}>
          <div className="featured-banner-overlay">
            <span className="feat-tag">Flagship Integration</span>
            <h2 className="feat-title">Accra City Hotel</h2>
            <p className="feat-desc">
              COSMOTECH designed and implemented a full-spectrum security and data network infrastructure for one of Accra's leading high-traffic hospitality facilities.
            </p>
            <button className="feat-action-btn" onClick={() => setCurrentPage('case-study-accra')}>Read Case Study &rarr;</button>
          </div>
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
          <div className="client-logo-card">Accra City Hotel</div>
          <div className="client-logo-card">Blue Valley Hospital</div>
        </div>
      </section>

      {/* 7. CTA (Close strong) */}
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
  )
}
