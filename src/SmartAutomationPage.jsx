import React, { useEffect } from 'react'

export default function SmartAutomationPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="service-detail-page-container automation-theme">
      {/* 1. HERO SECTION */}
      <section className="service-hero" style={{ backgroundImage: `url('/luxury-interior.webp')` }}>
        <div className="service-hero-overlay">
          <div className="service-hero-content">
            <span className="service-badge-accent">Lifestyle Automation</span>
            <h1 className="service-hero-title">Smart Living, Seamlessly Controlled</h1>
            <p className="service-hero-subtext">
              COSMOTECH PROJECT LTD designs and integrates intelligent automation systems that give you complete control over your home or building — anytime, anywhere.
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
            <span className="overview-badge">Our Focus</span>
            <h2 className="overview-title">Smart Home & Building Automation</h2>
            <p className="overview-desc">
              We transform residential and commercial spaces into intelligent environments where lighting, climate, security, and entertainment systems work together seamlessly.
            </p>
            <p className="overview-desc">
              Our solutions are designed to enhance comfort, improve energy efficiency, and simplify everyday living through completely intuitive, consolidated control systems.
            </p>
          </div>
          <div className="overview-image" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}></div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="service-offerings-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Control Your Environment With Ease</h2>
          <p className="services-section-subtitle centered">Unified smart technologies directly at your fingertips.</p>
        </div>
        <div className="service-offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">💡</div>
            <h3 className="offering-title">Smart Lighting</h3>
            <p className="offering-desc">Adjust brightness, custom ambient color scenes, and personalized automated routines with a tap.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🌡️</div>
            <h3 className="offering-title">Climate Control</h3>
            <p className="offering-desc">Automate local temperatures for maximum personal comfort and sustainable, ongoing energy efficiency.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🪟</div>
            <h3 className="offering-title">Automated Curtains & Blinds</h3>
            <p className="offering-desc">Schedule natural sunlight exposure and control room privacy effortlessly through intelligent motorized curtains.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🛡️</div>
            <h3 className="offering-title">Home Security Integration</h3>
            <p className="offering-desc">Consolidate and monitor all physical security, cameras, and alarms on a single screen dashboard.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🎵</div>
            <h3 className="offering-title">Entertainment Systems</h3>
            <p className="offering-desc">Centralized automation for whole-house audio distributions, customized media rooms, and video streaming.</p>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE (Emotional & Visual Section) */}
      <section className="experience-dream-section">
        <div className="dream-section-inner">
          <h2 className="dream-title">Experience a Smarter Way to Live</h2>
          <p className="dream-desc">
            Imagine creating personalized visual environments, adjusting whole-house temperatures, and arming security networks from your smartphone — whether you're relaxing on the couch or away on vacation.
          </p>
          <div className="dream-scenes-flex">
            <div className="scene-item"><strong>🌙 Relaxation:</strong> Dims main living lights and lowers blinds.</div>
            <div className="scene-item"><strong>🖥️ Work:</strong> Optimizes lighting and thermal comfort for focus.</div>
            <div className="scene-item"><strong>🍿 Entertainment:</strong> Adjusts smart shades and custom ambient colors.</div>
            <div className="scene-item"><strong>🔒 Security:</strong> Activates intruder alarms and switches off unused lights.</div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="service-process-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Our Simple Integration Roadmap</h2>
          <p className="services-section-subtitle centered">We focus on clean, intuitive controls without adding technical complexity.</p>
        </div>
        <div className="process-timeline-grid">
          <div className="timeline-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Consultation</h3>
            <p className="step-desc">We listen intently to match solutions to your unique everyday lifestyle and environment.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">02</div>
            <h3 className="step-title">System Design</h3>
            <p className="step-desc">Our technical designers create a seamless, non-intrusive automation plan.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Installation & Setup</h3>
            <p className="step-desc">Expert in-wall and ceiling setups by highly skilled local installation specialists.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Centralized Control</h3>
            <p className="step-desc">We consolidate all connected devices into a single, straightforward control app or dashboard.</p>
          </div>
          <div className="timeline-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Support & Upgrades</h3>
            <p className="step-desc">Ongoing technical tune-ups and system software upgrades for continued efficiency.</p>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY PARTNERS */}
      <section className="service-partners-strip-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">High-End Automation Standards</h2>
          <p className="services-section-subtitle centered">Integrating world-class luxury components to guarantee high system stability.</p>
        </div>
        <div className="standards-content-box">
          <p className="standards-text">
            We integrate advanced, high-performance automation technologies from <strong>Vimar</strong> to deliver completely reliable, user-friendly, and scalable smart environments that match modern luxury and performance expectations.
          </p>
          <div className="standards-logos-strip">
            <span className="standards-logo">Vimar</span>
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="service-applications-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Where Automation is Applied</h2>
          <p className="services-section-subtitle centered">Adding elite automated functionalities to distinct residential and corporate spaces.</p>
        </div>
        <div className="applications-grid">
          <div className="app-block">
            <div className="app-icon">🏠</div>
            <h4 className="app-title">Residential Homes & Apartments</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏰</div>
            <h4 className="app-title">Luxury Villas & Smart Estates</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏨</div>
            <h4 className="app-title">Hotels & Hospitality Spaces</h4>
          </div>
          <div className="app-block">
            <div className="app-icon">🏢</div>
            <h4 className="app-title">Offices & Commercial Buildings</h4>
          </div>
        </div>
      </section>

      {/* 8. WHY COSMOTECH */}
      <section className="service-why-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Why Choose COSMOTECH</h2>
          <p className="services-section-subtitle centered">The ultimate nexus of luxury styling and engineering precision.</p>
        </div>
        <div className="why-grid">
          <div className="why-block">
            <div className="why-block-icon">✨</div>
            <h4 className="why-block-title">Tailored Solutions</h4>
            <p className="why-block-desc">We build completely bespoke automations configured precisely around everyday lifestyles.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">🔗</div>
            <h4 className="why-block-title">Seamless Integration</h4>
            <p className="why-block-desc">Your lighting, heating, curtains, and security work together without a hitch.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">📱</div>
            <h4 className="why-block-title">User-Friendly Control</h4>
            <p className="why-block-desc">Simple, intuitive layouts on mobile and wall-mounted panels that are a joy to use.</p>
          </div>
          <div className="why-block">
            <div className="why-block-icon">💬</div>
            <h4 className="why-block-title">Reliable Support</h4>
            <p className="why-block-desc">Full lifecycle tech maintenance, hardware checks, and updates for system longevity.</p>
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="service-projects-section">
        <div className="services-section-header">
          <h2 className="services-section-title centered">Relevant Projects</h2>
          <p className="services-section-subtitle centered">Explore our high-fidelity real-world technology deployments in Ghana.</p>
        </div>
        <div className="service-projects-grid">
          <div className="project-tile" style={{ backgroundImage: `url('/The Urban.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Residential</span>
              <h4 className="p-tile-title">The Urban Apartments</h4>
              <p className="p-tile-desc">Smart Living Systems</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Residential</span>
              <h4 className="p-tile-title">Iris Apartments</h4>
              <p className="p-tile-desc">Automation & Security Integration</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
          <div className="project-tile" style={{ backgroundImage: `url('/The Urban.jpg')` }} onClick={() => setCurrentPage('projects')}>
            <div className="project-tile-overlay">
              <span className="p-tile-tag">Residential</span>
              <h4 className="p-tile-title">Luxury Estates</h4>
              <p className="p-tile-desc">Smart Infrastructure Solutions</p>
              <span className="p-tile-link">View Portfolio &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="service-footer-cta-section">
        <div className="service-cta-inner">
          <h2 className="cta-main-title">Upgrade Your Space with Smart Technology</h2>
          <p className="cta-main-desc">
            Let COSMOTECH design a smart environment tailored precisely to your distinct routine and lifestyle.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
