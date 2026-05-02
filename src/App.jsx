import React, { useState } from 'react'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ProjectsPage from './ProjectsPage'
import PartnersPage from './PartnersPage'
import ITInfrastructurePage from './ITInfrastructurePage'
import SecuritySystemsPage from './SecuritySystemsPage'
import SmartAutomationPage from './SmartAutomationPage'
import TelecommunicationsPage from './TelecommunicationsPage'
import FireDetectionPage from './FireDetectionPage'
import AccraCityHotelPage from './AccraCityHotelPage'
import BlueValleyPage from './BlueValleyPage'
import UrbanApartmentsPage from './UrbanApartmentsPage'
import ProcessPage from './ProcessPage'
import IndustriesPage from './IndustriesPage'
import FAQPage from './FAQPage'
import SmartAssistantPage from './SmartAssistantPage'
import ChatbotWidget from './ChatbotWidget'
import MobileHomepage from './MobileHomepage'
import InteractiveServices from './InteractiveServices'
import SearchPage from './SearchPage'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('cosmotech_current_page') || 'home'
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      const nav = document.querySelector('.navbar-wrapper')
      if (nav) {
        if (currentScroll > 150) {
          nav.classList.add('is-sticky')
        } else {
          nav.classList.remove('is-sticky')
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('cosmotech_current_page', currentPage)

    let title = "COSMOTECH Project Ltd | Intelligent Technology Systems"
    let desc = "We design, install, and integrate advanced IT, telecommunications, security, and smart automation systems across Ghana."

    if (currentPage === 'about') {
      title = "About Us | COSMOTECH Project Ltd"
      desc = "Learn about our mission, engineering philosophy, and the world-class clients we've served."
    } else if (currentPage === 'services') {
      title = "Our Services | COSMOTECH Project Ltd"
      desc = "Discover our expertise in building automation, high-performance IT infrastructure, and robust fire detection."
    } else if (currentPage === 'projects') {
      title = "Our Portfolio | COSMOTECH Project Ltd"
      desc = "Explore our real-world technology deployments across hospitality, healthcare, residential, and corporate sectors."
    } else if (currentPage === 'partners') {
      title = "Our Partners | COSMOTECH Project Ltd"
      desc = "We partner with leading global equipment manufacturers such as Legrand, Hikvision, and Vimar."
    } else if (currentPage === 'industries') {
      title = "Sectors & Industries Served | COSMOTECH Project Ltd"
      desc = "Specialized high-availability systems tailored for hotels, data centers, hospitals, and residential spaces."
    } else if (currentPage === 'process') {
      title = "Our Delivery Process | COSMOTECH Project Ltd"
      desc = "Understand how our structured engineering process takes your project from initial consultation to support."
    } else if (currentPage === 'faq') {
      title = "FAQ & Inquiries | COSMOTECH Project Ltd"
      desc = "Find transparent answers regarding our smart systems, pricing, equipment supply, and technical integrations."
    } else if (currentPage === 'smart-assistant') {
      title = "Smart Matcher & Estimate Tool | COSMOTECH Project Ltd"
      desc = "Use our guided virtual assistant to receive exact technology recommendations and quick price estimates."
    }

    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', desc)
  }, [currentPage])

  return (
    <div className="main-container">
      {/* MOBILE ONLY HEADER (lg:hidden) */}
      <div className="mob-header lg:hidden">
        <div className="mob-header-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0, 0); }}>
            <img src="/logo white.png" alt="COSMOTECH Logo" className="mob-logo-img" />
          </a>
          <button className="mob-menu-toggle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Sliding / Full-screen Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mob-slide-menu">
            <ul className="mob-nav-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>Home</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('search'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>🔍 Search</a>
              </li>
              <li>
                <div className="mob-nav-accordion-trigger" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}>
                  <span>Services</span>
                  <span>{isMobileServicesOpen ? '−' : '+'}</span>
                </div>
                {isMobileServicesOpen && (
                  <ul className="mob-subnav-list">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-it'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>IT Infrastructure</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-security'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>Security Systems</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-automation'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>Smart Automation</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-telecoms'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>Telecommunications</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-fire'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }}>Fire Detection</a></li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>Projects</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('industries'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>Industries</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('partners'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>Partners</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>About</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('process'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>How We Work</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>FAQ</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('smart-assistant'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>✨ Assistant</a>
              </li>
            </ul>
            <div className="mob-nav-cta-wrapper">
              <button className="mob-nav-cta-btn" onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP ONLY HEADERS (hidden lg:block) */}
      {/* 1. TOP BAR */}
      <div className="hidden lg:block">
        <div className="top-bar">
        <div className="top-bar-left">
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>


        <div className="top-bar-right">
          <a href="tel:+233531018219" className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+233 53 101 8219 / +233 54 550 8808</span>
          </a>

          <a href="mailto:info@cosmotechprojects.com" className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@cosmotechprojects.com</span>
          </a>
          <span className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Accra, Ghana</span>
          </span>
        </div>
      </div>
      </div>

      {/* 2. LOGO & CTA BAR */}
      <div className="hidden lg:block">
        <div className="logo-section">
          <div className="logo-inner">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0, 0); }}>
              <img src="/logo white.png" alt="Cosmotech Projects Ltd." />
            </a>
            <button className="contact-us-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>Contact us</button>
          </div>
        </div>
      </div>

      {/* 3. FLOATING NAVBAR */}
      <div className="hidden lg:block">
        <div className="navbar-wrapper">
          <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0, 0); }}>Home</a>
            </li>

            {/* About Menu */}
            <li className="nav-item has-dropdown">
              <span className="nav-link-label" onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}>
                About
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              <div className="simple-dropdown">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>Who We Are</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>Vision & Mission</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>Leadership</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('process'); window.scrollTo(0, 0); }}>How We Work</a>
              </div>
            </li>


            {/* Services Menu */}
            <li className="nav-item has-mega">
              <span className="nav-link-label" onClick={() => { setCurrentPage('services'); window.scrollTo(0, 0); }}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              <div className="mega-menu-container services-mega">
                <div className="mega-grid services-grid-menu">
                  {/* Column 1: Core Services */}
                  <div className="mega-col">
                    <h4 className="mega-title">Core Services</h4>
                    <div className="mega-list">
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('service-it'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">IT Infrastructure</span>
                        <span className="item-desc">Advanced network systems</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('service-telecoms'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Telecommunications</span>
                        <span className="item-desc">Fiber & wireless systems</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('service-security'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Security Systems</span>
                        <span className="item-desc">CCTV & surveillance monitoring</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('service-automation'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Smart Automation</span>
                        <span className="item-desc">Unified climate & lighting control</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('service-fire'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Fire Detection</span>
                        <span className="item-desc">High-end enterprise systems</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 2: Solutions */}
                  <div className="mega-col">
                    <h4 className="mega-title">Solutions</h4>
                    <div className="mega-list">
                      <a href="#" className="mega-item">
                        <span className="item-bold">Smart Buildings</span>
                        <span className="item-desc">Unified building technology</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Enterprise Networks</span>
                        <span className="item-desc">Servers & data systems</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Integrated Security</span>
                        <span className="item-desc">Full perimeter & facility protection</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Residential Automation</span>
                        <span className="item-desc">Premium smart-home systems</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Data & Connectivity</span>
                        <span className="item-desc">Structured cabling & fiber routing</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 3: Industries */}
                  <div className="mega-col">
                    <h4 className="mega-title">Industries</h4>
                    <div className="mega-list">
                      <a href="#" className="mega-item">
                        <span className="item-bold">Residential</span>
                        <span className="item-desc">Modern smart apartments</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Hotels & Hospitality</span>
                        <span className="item-desc">Tailored guest networks</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Healthcare Facilities</span>
                        <span className="item-desc">Secure intelligent infrastructure</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Corporate Offices</span>
                        <span className="item-desc">Enterprise data integrations</span>
                      </a>
                      <a href="#" className="mega-item">
                        <span className="item-bold">Industrial & Energy</span>
                        <span className="item-desc">Robust industrial tech</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 4: CTA / Highlight */}
                  <div className="mega-col cta-col">
                    <div className="menu-cta-card" style={{ backgroundImage: "url('/monarch-hotel.jpg')" }}>
                      <div className="menu-cta-overlay">
                        <h4>Planning a Project?</h4>
                        <p>Our expert engineers are here to deliver end-to-end intelligent systems.</p>
                        <a href="#" className="menu-cta-link">
                          Talk to our engineers
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Projects Menu */}
            <li className="nav-item has-mega">
              <span className="nav-link-label" onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }}>
                Projects
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
              <div className="mega-menu-container projects-mega">
                <div className="mega-grid projects-grid-menu">
                  {/* Left Column: Featured Project */}
                  <div className="mega-col-project-featured" style={{ backgroundImage: "url('/Accra-City-Hotel.png')" }}>
                    <div className="menu-project-overlay">
                      <span className="featured-tag">Featured</span>
                      <h3>Accra City Hotel</h3>
                      <p>Security & Infrastructure Systems</p>
                    </div>
                  </div>

                  {/* Right Column: Categories */}
                  <div className="mega-col">
                    <h4 className="mega-title">Project Categories</h4>
                    <div className="mega-list">
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Hospitality Projects</span>
                        <span className="item-desc">Hotels and resorts worldwide</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Residential Projects</span>
                        <span className="item-desc">High-end housing automation</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Industrial Projects</span>
                        <span className="item-desc">Network systems for production</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Healthcare Projects</span>
                        <span className="item-desc">Secure intelligent systems</span>
                      </a>
                    </div>
                    <div className="mega-bottom-link">
                      <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>View All Projects →</a>
                    </div>
                  </div>

                  {/* 3rd Column: Industries */}
                  <div className="mega-col">
                    <h4 className="mega-title">Industries We Serve</h4>
                    <div className="mega-list">
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('industries'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Sectors & Industries</span>
                        <span className="item-desc">Tailored high-availability systems</span>
                      </a>
                      <a href="#" className="mega-item" onClick={(e) => { e.preventDefault(); setCurrentPage('industries'); window.scrollTo(0, 0); }}>
                        <span className="item-bold">Solutions by Industry</span>
                        <span className="item-desc">Hotels, Data Centers, Corporate</span>
                      </a>
                    </div>
                    <div className="mega-bottom-link">
                      <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('industries'); window.scrollTo(0, 0); }}>View All Industries →</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Partners Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link-label" onClick={(e) => { e.preventDefault(); setCurrentPage('partners'); window.scrollTo(0, 0); }}>Partners</a>
            </li>


            {/* FAQ Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link-label" onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); window.scrollTo(0, 0); }}>FAQ</a>
            </li>

            {/* Smart Matcher Menu */}
            <li className="nav-item matcher-nav-link">
              <a href="#" className="nav-link-label" onClick={(e) => { e.preventDefault(); setCurrentPage('smart-assistant'); window.scrollTo(0, 0); }}>✨ Assistant</a>
            </li>
          </ul>
          <div className="nav-search" onClick={() => { setCurrentPage('search'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </nav>
      </div>
      </div>

      {currentPage === 'home' && (
        <>
          <MobileHomepage setCurrentPage={setCurrentPage} />
          <div className="hidden lg:block">
          {/* 4. HERO SECTION */}
          <section 
            className="hero" 
            style={{ backgroundImage: `url('/1-01.webp')` }}
          >

        <div className="hero-content-container">
          <h1 className="hero-title">
            Engineering Smart Technology Infrastructure for Homes and Businesses
          </h1>
          <p className="hero-subtitle">
            COSMOTECH PROJECT LTD delivers professional solutions in IT Infrastructure, Telecommunications, Security Systems, Smart Home Automation, and Fire Safety Systems across Ghana.
          </p>
          <div className="hero-ctas">
            <a href="#" className="cta-primary">
              Request a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a href="#" className="cta-secondary">
              View Our Projects
            </a>
          </div>
        </div>
      </section>

      {/* 4.5. TRUST BAR (Selected Clients) */}
      <section className="trust-bar">
        <div className="trust-inner">
          <span className="trust-label">Trusted By Leading Brands</span>
          <div className="trust-logos-wrapper">
            <div className="trust-logos-track">
              <img src="/goil-plc.jpg" alt="GOIL PLC" />
              <img src="/iac.png" alt="IAC" />
              <img src="/Key Architectural.png" alt="Key Architectural" />
              <img src="/Coral Pro.png" alt="Coral Pro" />
              <img src="/GOBITUMEN.png" alt="GOBITUMEN" />
              <img src="/APAL Developers.png" alt="APAL Developers" />
              <img src="/koan.png" alt="KOAN Energy" />
              <img src="/blue-valley.png" alt="Blue Valley Specialist Hospital" />
              <img src="/Accra City Hotel.jpg" alt="Accra City Hotel" />
              <img src="/The Urban Apartments.png" alt="The Urban Apartments" />
              <img src="/iris-apartment.png" alt="Iris Apartments" />
              <img src="/Hope Wells Hotel Plaza.png" alt="Hope Wells Hotel Plaza" />
              
              {/* Duplicate track for seamless infinite loop scroll */}
              <img src="/goil-plc.jpg" alt="GOIL PLC" />
              <img src="/iac.png" alt="IAC" />
              <img src="/Key Architectural.png" alt="Key Architectural" />
              <img src="/Coral Pro.png" alt="Coral Pro" />
              <img src="/GOBITUMEN.png" alt="GOBITUMEN" />
              <img src="/APAL Developers.png" alt="APAL Developers" />
              <img src="/koan.png" alt="KOAN Energy" />
              <img src="/blue-valley.png" alt="Blue Valley Specialist Hospital" />
              <img src="/Accra City Hotel.jpg" alt="Accra City Hotel" />
              <img src="/The Urban Apartments.png" alt="The Urban Apartments" />
              <img src="/iris-apartment.png" alt="Iris Apartments" />
              <img src="/Hope Wells Hotel Plaza.png" alt="Hope Wells Hotel Plaza" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEO KEYWORDS SECTION */}

      <section className="seo-keywords-section">
        <span className="seo-badge">#1 IT infrastructure Ghana</span>
        <span className="seo-badge">#1 Security systems Ghana</span>
        <span className="seo-badge">#1 Smart home installation Accra</span>
        <span className="seo-badge">#1 CCTV installation Ghana</span>
        <span className="seo-badge">#1 Network infrastructure company Ghana</span>
      </section>
      {/* 6. ABOUT SECTION */}

      <section className="ref-about-section">
        <div className="ref-about-cards">
          <div className="ref-about-card">
            <div className="ref-about-img-wrapper">
              <img src="/end-to-end engineering-square.jpg" alt="End-to-End Engineering" className="ref-about-img" />
            </div>
            <div className="ref-about-card-text">
              <div className="ref-about-card-header">
                <h3 className="ref-about-card-title">End-to-End Engineering Services</h3>
                <span className="ref-about-card-arrow">↗</span>
              </div>
              <p className="ref-about-card-desc">
                We deliver complete engineering services from system design and installation to full integration and long-term technical support.
              </p>
            </div>
          </div>

          <div className="ref-about-card">
            <div className="ref-about-img-wrapper">
              <img src="/smart-home-square.jpg" alt="Smart & Secure Systems" className="ref-about-img" />
            </div>
            <div className="ref-about-card-text">
              <div className="ref-about-card-header">
                <h3 className="ref-about-card-title">Smart & Secure Systems</h3>
                <span className="ref-about-card-arrow">↗</span>
              </div>
              <p className="ref-about-card-desc">
                From secure home setups to high-end enterprise infrastructures, our solutions are highly durable and reliable.
              </p>
            </div>
          </div>
        </div>

        <div className="ref-about-bottom">
          <div className="ref-about-bottom-left">
            <span className="ref-about-badge">About COSMOTECH</span>
            <h2 className="ref-about-title">Pioneering the Future of Technology Infrastructure</h2>
          </div>
          <div className="ref-about-bottom-right">
            <p className="ref-about-bottom-desc">
              COSMOTECH PROJECT LTD is a technology integration company specializing in IT infrastructure, telecommunications systems, smart home automation, and electronic security solutions.
            </p>
            <p className="ref-about-bottom-desc">
              Our mission is to help homes, businesses, and institutions operate with secure, reliable, and intelligent technology systems.
            </p>
          </div>
        </div>
      </section>
      {/* 7. SERVICES SECTION */}
      <InteractiveServices setCurrentPage={setCurrentPage} />
      {/* 8. WHY CHOOSE SECTION */}

      <section className="why-section">
        <div className="why-left">
          <img src="/new-image.png" alt="Cosmotech engineering project" />
        </div>

        <div className="why-right">
          <span className="why-badge">Why Choose COSMOTECH</span>
          <h2 className="why-title">Engineering Your Ultimate Advantage</h2>
          <p className="why-desc">
            We deliver highly optimized solutions across Ghana, combining exceptional engineering expertise with a commitment to long-term reliability and secure performance.
          </p>

          <div className="why-pillars">
            {/* 1. Engineering Expertise */}
            <div className="why-pillar-row">
              <div className="why-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div className="why-pillar-info">
                <h3 className="why-pillar-title">Engineering Expertise</h3>
                <p className="why-pillar-desc">Our solutions are built by professionals with strong technical and engineering backgrounds.</p>
              </div>
            </div>

            {/* 2. Integrated Technology Solutions */}
            <div className="why-pillar-row">
              <div className="why-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/></svg>
              </div>
              <div className="why-pillar-info">
                <h3 className="why-pillar-title">Integrated Technology Solutions</h3>
                <p className="why-pillar-desc">We combine multiple technologies into a unified and efficient infrastructure.</p>
              </div>
            </div>

            {/* 3. Customized Solutions */}
            <div className="why-pillar-row">
              <div className="why-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
              </div>
              <div className="why-pillar-info">
                <h3 className="why-pillar-title">Customized Solutions</h3>
                <p className="why-pillar-desc">Every project is tailored to the specific needs of our clients.</p>
              </div>
            </div>

            {/* 4. Reliable Support */}
            <div className="why-pillar-row">
              <div className="why-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v4"/><path d="M12 15h.01"/></svg>
              </div>
              <div className="why-pillar-info">
                <h3 className="why-pillar-title">Reliable Support</h3>
                <p className="why-pillar-desc">We provide ongoing maintenance and professional technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9. FEATURED PROJECTS SECTION */}
      <section className="projects-section">
        <div className="projects-header">
          <span className="projects-badge">Featured Projects</span>
          <h2 className="projects-title">Our Recent Success Stories</h2>
          <p className="projects-subtitle-desc">
            Explore some of our major commercial and institutional technology integrations.
          </p>
        </div>

        <div className="projects-grid">
          {/* Left / Large Project */}
          <div className="project-tile project-large" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}>
            <div className="project-overlay">
              <span className="project-category">Security & Infrastructure</span>
              <h3 className="project-name">Accra City Hotel</h3>
              <p className="project-desc-short">Enterprise CCTV installation and smart home integration.</p>
            </div>
          </div>

          {/* Right / Smaller Projects stacked vertically */}
          <div className="projects-stacked">
            <div className="project-tile project-small" style={{ backgroundImage: `url('/oxford.webp')` }}>
              <div className="project-overlay">
                <span className="project-category">Smart Automation</span>
                <h3 className="project-name">The Oxford Residence</h3>
                <p className="project-desc-short">Intelligent climate & access systems.</p>
              </div>
            </div>

            <div className="project-tile project-small" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}>
              <div className="project-overlay">
                <span className="project-category">Telecom Systems</span>
                <h3 className="project-name">Anfield Residence</h3>
                <p className="project-desc-short">End-to-end fiber & IT networking solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="cta-contact-section" style={{ backgroundColor: '#f8fafc', padding: '100px 10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', width: '100%', maxWidth: '1200px' }}>
          
          {/* Left: Office Information */}
          <div className="contact-info-card" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Our Office Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ display: 'inline-flex', marginTop: '4px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c5c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>Headquarters in Accra, Ghana</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                      Accra Digital Center, Ring Road West, Accra<br />
                      P.O. Box 77, Adenta, Ghana
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ display: 'inline-flex', marginTop: '4px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c5c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>Call Us Anytime</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                      <a href="tel:+233531018219" style={{ color: '#2563eb', textDecoration: 'none' }}>+233 53 101 8219</a><br />
                      <a href="tel:+233545508808" style={{ color: '#2563eb', textDecoration: 'none' }}>+233 54 550 8808</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ display: 'inline-flex', marginTop: '4px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c5c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>General & Support Inquiries</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                      <a href="mailto:Anthony.ddonkor@outlook.com" style={{ color: '#2563eb', textDecoration: 'none' }}>Anthony.ddonkor@outlook.com</a><br />
                      <a href="mailto:info@cosmotechprojects.com" style={{ color: '#2563eb', textDecoration: 'none' }}>info@cosmotechprojects.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', margin: 0 }}>Connect with Us</h4>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#" style={{ color: '#1e293b', textDecoration: 'none' }} aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" style={{ color: '#1e293b', textDecoration: 'none' }} aria-label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" style={{ color: '#1e293b', textDecoration: 'none' }} aria-label="YouTube">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" style={{ color: '#1e293b', textDecoration: 'none' }} aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="contact-form-card" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#1e293b', marginBottom: '24px' }}>Send Us a Message</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '14px 20px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: '#334155', backgroundColor: '#fafafa', outline: 'none' }} />
                <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '14px 20px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: '#334155', backgroundColor: '#fafafa', outline: 'none' }} />
              </div>

              <input type="tel" placeholder="Phone Number (Optional)" style={{ width: '100%', padding: '14px 20px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: '#334155', backgroundColor: '#fafafa', outline: 'none' }} />

              <select style={{ width: '100%', padding: '14px 20px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: '#334155', backgroundColor: '#fafafa', outline: 'none' }} required>
                <option value="">Select Service Interest</option>
                <option value="IT Infrastructure">IT Infrastructure</option>
                <option value="Security Systems">Security Systems</option>
                <option value="Smart Automation">Smart Automation</option>
                <option value="Telecoms">Telecommunications</option>
                <option value="Fire Safety">Fire Detection</option>
              </select>

              <textarea placeholder="Your Message / Project Details" rows="4" required style={{ width: '100%', padding: '14px 20px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px', color: '#334155', backgroundColor: '#fafafa', outline: 'none', resize: 'vertical' }}></textarea>

              <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#5c7853', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', alignSelf: 'flex-start', boxShadow: '0 4px 12px rgba(92,120,83,0.15)' }}>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>

        </div>
      </section>
          </div>
        </>
      )}

      {currentPage === 'about' && (
        <AboutPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'services' && (
        <ServicesPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'projects' && (
        <ProjectsPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'partners' && (
        <PartnersPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'service-it' && (
        <ITInfrastructurePage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'service-telecoms' && (
        <TelecommunicationsPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'service-security' && (
        <SecuritySystemsPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'service-automation' && (
        <SmartAutomationPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'service-fire' && (
        <FireDetectionPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'case-study-accra' && (
        <AccraCityHotelPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'case-study-blue-valley' && (
        <BlueValleyPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'case-study-urban' && (
        <UrbanApartmentsPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'process' && (
        <ProcessPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'industries' && (
        <IndustriesPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'faq' && (
        <FAQPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'smart-assistant' && (
        <SmartAssistantPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'search' && (
        <SearchPage setCurrentPage={setCurrentPage} />
      )}

      {/* Persistent Chatbot & Quick Search Assistant */}
      <ChatbotWidget setCurrentPage={setCurrentPage} />

      {/* 11. FOOTER SECTION */}
      <div className="hidden lg:block">
        {/* Sticky Sidebar CTA */}
        <div className="sticky-sidebar-cta">
          <button className="sticky-cta-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>

        <footer className="footer-section">
          <div className="footer-top">
            <div className="footer-logo-col">
              <img src="/logo.png" alt="COSMOTECH Logo" className="footer-logo" />
              <p className="footer-logo-desc">
                At COSMOTECH Project Ltd, we are more than just a solutions provider, we are a key player in the market, manufacturing and delivering advanced systems for home & building automation.
              </p>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Our Solutions</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-it'); window.scrollTo(0, 0); }}>Enterprise Network IT</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-security'); window.scrollTo(0, 0); }}>IT Security Systems</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-automation'); window.scrollTo(0, 0); }}>Smart Home Automation</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-telecoms'); window.scrollTo(0, 0); }}>Telecommunications</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('service-fire'); window.scrollTo(0, 0); }}>Fire Detection</a>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Company Info</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }}>Who We Are</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('process'); window.scrollTo(0, 0); }}>How We Work</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('partners'); window.scrollTo(0, 0); }}>Our Partners</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); window.scrollTo(0, 0); }}>Frequently Asked Questions</a>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Sectors & Tools</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('industries'); window.scrollTo(0, 0); }}>Industries Served</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0, 0); }}>Our Portfolio</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('smart-assistant'); window.scrollTo(0, 0); }}>Smart Project Matcher</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>Contact Us</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 COSMOTECH Project Ltd. All rights reserved.</span>
            <div className="footer-bottom-right">
              <span>Call us: +233 53 101 8219 / +233 54 550 8808</span>
              <div className="footer-socials">
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/></svg>
                </a>
                <a href="#">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <footer className="mob-footer lg:hidden">
        <p className="mob-footer-copy">© 2026 COSMOTECH Project Ltd. All rights reserved.</p>
        <p className="mob-footer-contact">Call us: +233 53 101 8219</p>
      </footer>
    </div>
  )
}

export default App
