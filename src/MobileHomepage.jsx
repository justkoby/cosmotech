import React, { useState, useEffect } from 'react'
import { client } from './sanityClient'

export default function MobileHomepage({ setCurrentPage }) {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(index)
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/233531018219', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+233531018219'
  }

  const [homepageData, setHomepageData] = useState(null)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [hp, svcs] = await Promise.all([
          client.fetch(`*[_type == "homepage"][0]`),
          client.fetch(`*[_type == "service"]`)
        ])
        if (hp) setHomepageData(hp)
        if (svcs && svcs.length > 0) setServices(svcs)
      } catch (error) {
        console.error("Error fetching Sanity data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const defaultHero = {
    heroTitle: "Engineering Smart Technology Infrastructure for Businesses, Institutions and Homes",
    heroSubtitle: "IT infrastructure, security, automation, telecoms, and fire safety solutions across Ghana."
  }

  const mobileServices = services.length > 0 ? services.map(s => ({
    title: s.title,
    desc: s.description,
    route: s.slug?.current || 'home'
  })) : [
    {
      title: 'IT Infrastructure',
      desc: 'High-availability server deployments, network backbones, and enterprise firewalls.',
      route: 'service-it'
    },
    {
      title: 'Security Systems',
      desc: 'Real-time surveillance, smart multi-zone alarms, and biometric access controls.',
      route: 'service-security'
    },
    {
      title: 'Smart Automation',
      desc: 'Integrated convenience including smart climate, lighting, and entertainment.',
      route: 'service-automation'
    },
    {
      title: 'Telecommunications',
      desc: 'Redundant communication paths, unified enterprise PBX, and fiber infrastructure.',
      route: 'service-telecoms'
    },
    {
      title: 'Fire Detection',
      desc: 'Rapid hazard notification systems, addressable fire alarms, and continuous coverage.',
      route: 'service-fire'
    }
  ]

  return (
    <div className="mobile-only-homepage lg:hidden">
      {/* 1. HERO SECTION */}
      <section className="mob-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(15, 34, 20, 0.85) 0%, rgba(15, 34, 20, 0.5) 100%), url('/1-01.webp')" }}>
        <div className="mob-hero-content">
          <span className="mob-badge-accent">Intelligent Systems</span>
          <h1 className="mob-hero-title">{homepageData?.heroTitle || defaultHero.heroTitle}</h1>
          <p className="mob-hero-desc">
            {homepageData?.heroSubtitle || defaultHero.heroSubtitle}
          </p>
          <div className="mob-hero-ctas">
            <button className="mob-cta-primary" onClick={() => setCurrentPage('consultation')}>
              Request for Consultation
            </button>
            <button className="mob-cta-whatsapp" onClick={handleWhatsApp}>
              Chat via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION STRIP */}
      <section className="mob-quick-strip">
        <h2 className="mob-strip-title">What do you need help with?</h2>
        <div className="mob-strip-buttons">
          <button onClick={() => setCurrentPage('service-security')}>🔒 Security</button>
          <button onClick={() => setCurrentPage('service-it')}>📶 Networking</button>
          <button onClick={() => setCurrentPage('service-automation')}>🏠 Smart Home</button>
          <button onClick={() => setCurrentPage('service-telecoms')}>📞 Telecom</button>
          <button onClick={() => setCurrentPage('service-fire')}>🔥 Fire Safety</button>
        </div>
      </section>

      {/* 3. TRUST PROOF */}
      <section className="mob-trust-proof">
        <h2 className="mob-section-title">Trusted by leading organizations</h2>
        <div className="mob-trust-logos-wrapper">
          <div className="mob-trust-logos-track">
            <img src="/goil-plc.jpg" alt="GOIL PLC" />
            <img src="/iac.png" alt="IAC" />
            <img src="/Key Architectural.png" alt="Key Architectural" />
            <img src="/Coral Pro.png" alt="Coral Pro" />
            <img src="/GOBITUMEN.png" alt="GOBITUMEN" />
            <img src="/APAL Developers.png" alt="APAL Developers" />
            <img src="/koan.png" alt="KOAN Energy" />
            <img src="/blue-valley.png" alt="Blue Valley Specialist Hospital" />
            <img src="/Accra City Hotel.jpg" alt="Accra City Phase 2" />
            <img src="/goil-plc.jpg" alt="GOIL PLC" />
            <img src="/iris-apartment.png" alt="Iris Apartments" />
            <img src="/Hope Wells Hotel Plaza.png" alt="Hope Wells Hotel Plaza" />
            {/* Duplicate track for infinite loop */}
            <img src="/goil-plc.jpg" alt="GOIL PLC" />
            <img src="/iac.png" alt="IAC" />
            <img src="/Key Architectural.png" alt="Key Architectural" />
            <img src="/Coral Pro.png" alt="Coral Pro" />
            <img src="/GOBITUMEN.png" alt="GOBITUMEN" />
            <img src="/APAL Developers.png" alt="APAL Developers" />
            <img src="/koan.png" alt="KOAN Energy" />
            <img src="/blue-valley.png" alt="Blue Valley Specialist Hospital" />
            <img src="/Accra City Hotel.jpg" alt="Accra City Phase 2" />
            <img src="/goil-plc.jpg" alt="GOIL PLC" />
            <img src="/iris-apartment.png" alt="Iris Apartments" />
            <img src="/Hope Wells Hotel Plaza.png" alt="Hope Wells Hotel Plaza" />
          </div>
        </div>
        <button className="mob-view-projects-btn" onClick={() => setCurrentPage('projects')}>
          View Our Projects &rarr;
        </button>
      </section>

      {/* 4. SERVICES ACCORDION */}
      <section className="mob-services-accordion-section">
        <h2 className="mob-section-title">Our Core Services</h2>
        <div className="mob-accordion-list">
          {mobileServices.map((svc, idx) => (
            <div key={idx} className={`mob-accordion-item ${openAccordion === idx ? 'open' : ''}`}>
              <div className="mob-accordion-header" onClick={() => toggleAccordion(idx)}>
                <span className="mob-accordion-title">{svc.title}</span>
                <span className="mob-accordion-icon">{openAccordion === idx ? '−' : '+'}</span>
              </div>
              {openAccordion === idx && (
                <div className="mob-accordion-body">
                  <p className="mob-accordion-desc">{svc.desc}</p>
                  <button className="mob-learn-more-btn" onClick={() => setCurrentPage(svc.route)}>
                    Learn More &rarr;
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY COSMOTECH */}
      <section className="mob-why-section">
        <h2 className="mob-section-title">Why COSMOTECH?</h2>
        <div className="mob-why-rows">
          <div className="mob-why-row">
            <span className="mob-why-icon">⚙️</span>
            <div>
              <h3 className="mob-why-row-title">Engineering Expertise</h3>
              <p className="mob-why-row-desc">High-end architecture from initial consultation to continuous maintenance.</p>
            </div>
          </div>
          <div className="mob-why-row">
            <span className="mob-why-icon">🔄</span>
            <div>
              <h3 className="mob-why-row-title">Integrated Technology Solutions</h3>
              <p className="mob-why-row-desc">Harmonized systems ensuring flawless cross-device automation and security.</p>
            </div>
          </div>
          <div className="mob-why-row">
            <span className="mob-why-icon">🤝</span>
            <div>
              <h3 className="mob-why-row-title">Reliable Support</h3>
              <p className="mob-why-row-desc">Ongoing technical support and dedicated project optimization teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="mob-projects-section">
        <h2 className="mob-section-title">Featured Projects</h2>
        <div className="mob-projects-vertical">
          <div className="mob-project-tile" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('/Accra-City-Hotel.png')" }} onClick={() => setCurrentPage('case-study-accra')}>
            <h3 className="mob-proj-name">Accra City Phase 2</h3>
            <span className="mob-proj-cat">Security & Infrastructure</span>
          </div>

          <div className="mob-project-tile" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('/blue-valley.png')" }} onClick={() => setCurrentPage('case-study-blue-valley')}>
            <h3 className="mob-proj-name">Blue Valley Specialist Hospital</h3>
            <span className="mob-proj-cat">Healthcare Infrastructure</span>
          </div>

          <div className="mob-project-tile" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('/goil-plc.jpg')" }} onClick={() => setCurrentPage('case-study-goil')}>
            <h3 className="mob-proj-name">GOIL PLC Headquarters</h3>
            <span className="mob-proj-cat">Enterprise Networks & Infrastructure</span>
          </div>
        </div>

        <button className="mob-view-all-projects-btn" onClick={() => setCurrentPage('projects')}>
          View All Projects
        </button>
      </section>

      {/* 7. PARTNERS CREDIBILITY */}
      <section className="mob-partners-section">
        <h2 className="mob-section-title">Built with trusted technologies</h2>
        <div className="mob-partners-2col">
          <div className="mob-partner-card">Legrand</div>
          <div className="mob-partner-card">Hikvision</div>
          <div className="mob-partner-card">Vimar</div>
          <div className="mob-partner-card">Schneider</div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="mob-final-cta">
        <h2 className="mob-final-title">Ready to start your project?</h2>
        <p className="mob-final-desc">Talk to COSMOTECH engineers today.</p>
        <div className="mob-final-ctas">
          <button className="mob-final-btn-primary" onClick={() => setCurrentPage('consultation')}>
            Request for Consultation
          </button>
          <button className="mob-final-btn-secondary" onClick={handleCall}>
            Call Now
          </button>
        </div>
      </section>

      <div className="mob-sticky-bottom-actions">
        <button className="mob-stick-btn-call" onClick={handleCall}>
          📞 Call
        </button>
        <button className="mob-stick-btn-consult" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
          💡 Consult
        </button>
      </div>
    </div>
  )
}
