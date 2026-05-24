import React, { useState, useEffect } from 'react'

export default function SearchPage({ setCurrentPage }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const searchItems = [
    {
      id: 'home',
      title: 'Home',
      category: 'Pages',
      description: 'COSMOTECH main landing page. Overview of our services, featured projects, and client testimonials.',
      keywords: 'home landing cosmotech technologies engineering ghana'
    },
    {
      id: 'about',
      title: 'About Us',
      category: 'Pages',
      description: 'Learn about our mission, vision, engineering expertise, and the global partners we collaborate with.',
      keywords: 'about mission vision who we are history team leadership'
    },
    {
      id: 'services',
      title: 'Our Services',
      category: 'Services',
      description: 'Explore our complete suite of intelligent technology infrastructure solutions.',
      keywords: 'services offerings expertise automation IT fiber networks'
    },
    {
      id: 'service-it',
      title: 'IT Infrastructure',
      category: 'Services',
      description: 'Enterprise data and network systems with maximum uptime, reliability, and security.',
      keywords: 'IT infrastructure network routing switching firewalls data center servers wifi access points cabling structured cabling'
    },
    {
      id: 'service-security',
      title: 'IT Security Systems',
      category: 'Services',
      description: 'Complete security surveillance, access control, and smart monitoring.',
      keywords: 'security systems cctv cameras access control door locks barriers monitoring surveillance biometrics'
    },
    {
      id: 'service-automation',
      title: 'Smart Home Automation',
      category: 'Services',
      description: 'High-end smart home systems integrating climate control, lighting, shading, and security.',
      keywords: 'smart home automation building automation climate control lighting shades curtains motorized audio multiroom'
    },
    {
      id: 'service-telecoms',
      title: 'Telecommunications',
      category: 'Services',
      description: 'High-performance fiber, wireless networks, and structured enterprise cabling.',
      keywords: 'telecom telecommunications fiber optic wireless radio point to point structured cabling networks phone system pbx voip'
    },
    {
      id: 'service-fire',
      title: 'Fire Detection Systems',
      category: 'Services',
      description: 'Robust enterprise fire alarm and suppression systems tailored for industrial and corporate infrastructure.',
      keywords: 'fire safety smoke detector heat sensor alarm fire suppression high end enterprise systems safety hazard detection'
    },
    {
      id: 'service-electrical',
      title: 'Building Electrical Installations',
      category: 'Services',
      description: 'Code-compliant electrical distribution boards, certified power wiring, standby generator backup, and Legrand switches.',
      keywords: 'electrical installations wiring distribution boards panels power outlets lighting circuits earthing bonding generators ups legrand'
    },
    {
      id: 'projects',
      title: 'Projects Portfolio',
      category: 'Projects',
      description: 'Discover our portfolio of successful high-impact engineering projects and real-world technology deployments.',
      keywords: 'projects portfolio case studies deployment hospitality corporate residential industrial'
    },
    {
      id: 'case-study-accra',
      title: 'Accra City Phase 2',
      category: 'Projects',
      description: 'Detailed view of our advanced security, network infrastructure, and smart technology deployment at Accra City Phase 2.',
      keywords: 'accra city phase 2 hospitality security cctv access control wifi internet corporate'
    },
    {
      id: 'case-study-blue-valley',
      title: 'Blue Valley Specialist Hospital',
      category: 'Projects',
      description: 'Secure, reliable hospital network, high-availability IT systems, and emergency fire safety setup.',
      keywords: 'blue valley specialist hospital healthcare networks high availability secure it systems'
    },
    {
      id: 'case-study-urban',
      title: 'The Urban Apartments',
      category: 'Projects',
      description: 'Bespoke smart-home automation, centralized access systems, and high-performance WiFi routing for smart living.',
      keywords: 'the urban apartments smart apartments residential home automation centralized access access control'
    },
    {
      id: 'case-study-goil',
      title: 'GOIL PLC Headquarters',
      category: 'Projects',
      description: 'Enterprise networks, server setups, and access systems for a key corporate player in the market.',
      keywords: 'goil plc headquarters corporate networks server setups access systems'
    },
    {
      id: 'case-study-anfield',
      title: 'Anfield Residence',
      category: 'Projects',
      description: 'Unified luxury automation and smart climate controls for a premium residential living experience.',
      keywords: 'anfield residence luxury automation smart climate controls residential'
    },
    {
      id: 'case-study-koan',
      title: 'KOAN Energy Center',
      category: 'Projects',
      description: 'Failsafe industrial networks and remote CCTV systems for a high-value energy storage terminal.',
      keywords: 'koan energy center industrial networks failsafe remote cctv'
    },
    {
      id: 'partners',
      title: 'Our Partners',
      category: 'Company',
      description: 'Our global equipment manufacturer partners including Legrand, Hikvision, and Vimar.',
      keywords: 'partners supply chain equipment legrand hikvision vimar'
    },
    {
      id: 'industries',
      title: 'Sectors & Industries',
      category: 'Company',
      description: 'Discover the industries we serve: hospitality, healthcare, residential, corporate, data centers, and oil & gas.',
      keywords: 'industries sectors served hospitality residential healthcare data centers corporate oil gas'
    },
    {
      id: 'process',
      title: 'Our Project Delivery Process',
      category: 'How We Work',
      description: 'Learn how our structured engineering process takes your project from design and supply to support.',
      keywords: 'process delivery how we work consulting design installation support maintenance testing commissioning'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions (FAQ)',
      category: 'Support',
      description: 'Find transparent answers regarding our smart systems, pricing, equipment supply, and technical integrations.',
      keywords: 'faq frequently asked questions help info contact pricing details smart assistant'
    },
    {
      id: 'smart-assistant',
      title: 'Smart Project Matcher',
      category: 'Tools',
      description: 'Use our guided virtual assistant to match your exact technology needs with custom estimates.',
      keywords: 'smart project matcher assistant tool estimate virtual recommendation guided'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'pages', label: 'Pages' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'company', label: 'Company' },
    { id: 'support', label: 'Support' }
  ]

  // Dynamic Filtering Logic
  const filteredResults = searchItems.filter(item => {
    // 1. Filter by category
    if (activeCategory !== 'all' && item.category.toLowerCase() !== activeCategory) {
      return false
    }

    // 2. Filter by search query match in title, desc, keywords, or category
    if (!query.trim()) return true

    const lowerQuery = query.toLowerCase()
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.keywords.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    )
  })

  return (
    <div className="search-page-container">
      {/* Search Hero */}
      <section className="search-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
        <div className="search-hero-overlay">
          <div className="search-hero-content">
            <span className="search-badge-accent">Smart Lookup</span>
            <h1 className="search-hero-title">Search COSMOTECH</h1>
            <p className="search-hero-subtext">
              Quickly find our technology services, detailed project case studies, and corporate engineering insights.
            </p>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className="search-input-section">
        <div className="search-input-wrapper">
          <svg className="search-input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="text"
            className="search-main-input"
            placeholder="Type your search here (e.g., CCTV, WiFi, IT, Hospitality)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
        </div>
      </section>

      {/* Category Tabs */}
      <section className="search-categories-section">
        <div className="search-categories-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`search-tab-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Search Results Display Section */}
      <section className="search-results-section">
        <div className="search-results-inner">
          {filteredResults.length > 0 ? (
            <div className="search-results-grid">
              {filteredResults.map(item => (
                <div key={item.id} className="search-result-card" onClick={() => { setCurrentPage(item.id); window.scrollTo(0, 0); }}>
                  <div className="search-result-top">
                    <span className="search-result-category-badge">{item.category}</span>
                    <h3 className="search-result-title">{item.title}</h3>
                  </div>
                  <p className="search-result-desc">{item.description}</p>
                  <div className="search-result-footer">
                    <span className="search-result-action">Visit Page</span>
                    <span className="search-result-arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="search-no-results">
              <div className="no-results-icon-wrapper">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="12"/><line x1="11" y1="16" x2="11.01" y2="16"/></svg>
              </div>
              <h3 className="no-results-heading">No matching search results found</h3>
              <p className="no-results-subheading">Try using a more general keyword or browsing our categories above.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
