import React, { useState, useEffect } from 'react'

export default function SmartAssistantPage({ setCurrentPage }) {
  const [activeView, setActiveView] = useState('matcher')

  // Matcher State
  const [mType, setMType] = useState('')
  const [mNeed, setMNeed] = useState('')
  const [mSize, setMSize] = useState('')
  const [matchedRec, setMatchedRec] = useState(null)

  // Quote Form State
  const [qType, setQType] = useState('Residential')
  const [qLocation, setQLocation] = useState('')
  const [qServices, setQServices] = useState('')
  const [qBudget, setQBudget] = useState('')
  const [quoteSuccess, setQuoteSuccess] = useState(false)

  // Interactive Selector State
  const [selectedGoal, setSelectedGoal] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Smart Project Matcher Calculation
  const handleMatchProject = (e) => {
    e.preventDefault()
    if (!mType || !mNeed || !mSize) return

    let recTitle = 'Custom Technology System Architecture'
    let recItems = []

    if (mNeed === 'Security') {
      recTitle = 'Advanced Integrated Security Infrastructure'
      recItems = [
        'AI-driven IP CCTV systems for real-time risk assessment',
        'Multi-zone Access Control (biometrics or RFID) to limit unauthorized personnel',
        'Perimeter alarm and continuous event logging via centralized dashboards'
      ]
    } else if (mNeed === 'Network') {
      recTitle = 'High-Speed Enterprise IT Infrastructure'
      recItems = [
        'Structured fiber optic and Cat6 cabling paths with redundant routing',
        'Scalable server racks, core switching, and secure firewall configuration',
        'High-density managed Wi-Fi points for comprehensive indoor & outdoor signal coverage'
      ]
    } else if (mNeed === 'Smart Systems') {
      recTitle = 'Custom Building Automation System'
      recItems = [
        'Unified Vimar or Legrand smart switches for lighting, HVAC, and power management',
        'Central control panel with integrated voice & smartphone mobile apps',
        'Smart sensor triggers & scene routines optimizing convenience and energy use'
      ]
    } else if (mNeed === 'Fire Safety') {
      recTitle = 'High-End Smart Fire Detection System'
      recItems = [
        'Addressable smoke, heat, and flame multi-sensors for instant detection',
        'Zone-based alarm system ensuring safe, clear building evacuation paths',
        'Fully integrated notification dashboards routing directly to building operators'
      ]
    }

    setMatchedRec({ title: recTitle, points: recItems })
  }

  // Quick Quote Calculation
  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    if (!qLocation || !qServices || !qBudget) return
    setQuoteSuccess(true)
  }

  return (
    <div className="assistant-page-container">
      {/* 1. HERO SECTION */}
      <section 
        className="assistant-hero" 
        style={{
          backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.7), rgba(12, 27, 16, 0.85)), url('/1-01.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '160px 10% 80px 10%',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div className="assistant-hero-overlay" style={{ background: 'none' }}>
          <div className="assistant-hero-content" style={{ maxWidth: '850px' }}>
            <span className="assistant-badge-accent" style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block', marginBottom: '12px' }}>Interactive Sales Assistant</span>
            <h1 className="assistant-hero-title" style={{ fontSize: '42px', color: '#ffffff', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>Custom Technology Project Solutions</h1>
            <p className="assistant-hero-subtext" style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '720px' }}>
              Let our intelligent assistant guide you to the exact engineering solutions, quick estimates, and relevant services designed for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION TOOL SELECTOR */}
      <section className="assistant-tools-nav">
        <div className="assistant-tools-flex">
          <button className={`tool-nav-chip ${activeView === 'matcher' ? 'active' : ''}`} onClick={() => setActiveView('matcher')}>
            🧩 Project Matcher
          </button>
          <button className={`tool-nav-chip ${activeView === 'quote' ? 'active' : ''}`} onClick={() => setActiveView('quote')}>
            💰 Quick Quote Form
          </button>
          <button className={`tool-nav-chip ${activeView === 'selector' ? 'active' : ''}`} onClick={() => setActiveView('selector')}>
            🎯 Goal Selector
          </button>
        </div>
      </section>

      {/* 3. CORE TOOLS CONTAINER */}
      <section className="assistant-body-section">
        <div className="assistant-body-inner">

          {/* VIEW A: SMART PROJECT MATCHER */}
          {activeView === 'matcher' && (
            <div className="tool-content-block">
              <div className="tool-intro-header">
                <h2 className="tool-title">Guided Project Matcher</h2>
                <p className="tool-desc">Answer 3 simple questions to see exactly what technology systems we recommend for your environment.</p>
              </div>

              {!matchedRec ? (
                <form className="matcher-form" onSubmit={handleMatchProject}>
                  <div className="matcher-form-group">
                    <label className="matcher-label">What type of project?</label>
                    <select className="matcher-select" value={mType} onChange={(e) => setMType(e.target.value)} required>
                      <option value="">Select Project Sector</option>
                      <option value="Home">Home / Residential</option>
                      <option value="Office">Office / Corporate</option>
                      <option value="Hotel">Hotel / Hospitality</option>
                      <option value="Industrial">Industrial / Factory</option>
                    </select>
                  </div>

                  <div className="matcher-form-group">
                    <label className="matcher-label">What do you need most?</label>
                    <select className="matcher-select" value={mNeed} onChange={(e) => setMNeed(e.target.value)} required>
                      <option value="">Select Core Technology</option>
                      <option value="Security">Security Systems</option>
                      <option value="Network">IT Infrastructure & Networks</option>
                      <option value="Smart Systems">Smart Automation Systems</option>
                      <option value="Fire Safety">Fire Detection & Safety</option>
                    </select>
                  </div>

                  <div className="matcher-form-group">
                    <label className="matcher-label">Project size?</label>
                    <select className="matcher-select" value={mSize} onChange={(e) => setMSize(e.target.value)} required>
                      <option value="">Select Scale</option>
                      <option value="Small">Small (Single Suite / Private Home)</option>
                      <option value="Medium">Medium (Corporate Office / Medium Building)</option>
                      <option value="Large">Large (Industrial Park / Expansive Facility)</option>
                    </select>
                  </div>

                  <button type="submit" className="matcher-submit-btn">
                    Get Recommendation &rarr;
                  </button>
                </form>
              ) : (
                <div className="recommendation-result-box">
                  <span className="rec-badge">Recommended Solution</span>
                  <h3 className="rec-title">{matchedRec.title}</h3>
                  <p className="rec-desc">Based on your input, COSMOTECH engineers recommend deploying a comprehensive environment matching these specifications:</p>
                  <ul className="rec-points-list">
                    {matchedRec.points.map((pt, i) => (
                      <li key={i}>✔️ {pt}</li>
                    ))}
                  </ul>
                  <div className="rec-actions">
                    <button className="rec-primary-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
                      Request Consultation &rarr;
                    </button>
                    <button className="rec-secondary-btn" onClick={() => { setMatchedRec(null); setMType(''); setMNeed(''); setMSize(''); }}>
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW B: QUICK QUOTE FORM */}
          {activeView === 'quote' && (
            <div className="tool-content-block">
              <div className="tool-intro-header">
                <h2 className="tool-title">Quick Quote Estimate</h2>
                <p className="tool-desc">Tell us a few core details, and our technical estimators will contact you within 24 hours.</p>
              </div>

              {!quoteSuccess ? (
                <form className="quote-form" onSubmit={handleQuoteSubmit}>
                  <div className="quote-form-row">
                    <div className="quote-form-group">
                      <label className="quote-label">Project Type</label>
                      <select className="quote-input" value={qType} onChange={(e) => setQType(e.target.value)}>
                        <option value="Residential">Residential</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Corporate">Corporate</option>
                      </select>
                    </div>

                    <div className="quote-form-group">
                      <label className="quote-label">Project Location</label>
                      <input type="text" className="quote-input" placeholder="e.g. Accra, Ghana" value={qLocation} onChange={(e) => setQLocation(e.target.value)} required />
                    </div>
                  </div>

                  <div className="quote-form-group">
                    <label className="quote-label">Services Needed</label>
                    <textarea className="quote-textarea" placeholder="e.g. Server infrastructure, security surveillance, fiber optics..." value={qServices} onChange={(e) => setQServices(e.target.value)} required></textarea>
                  </div>

                  <div className="quote-form-group">
                    <label className="quote-label">Budget Range (GHS)</label>
                    <select className="quote-input" value={qBudget} onChange={(e) => setQBudget(e.target.value)} required>
                      <option value="">Select approximate budget</option>
                      <option value="GHS 10k - 50k">GHS 10k - GHS 50k</option>
                      <option value="GHS 50k - 150k">GHS 50k - GHS 150k</option>
                      <option value="GHS 150k+">GHS 150k+</option>
                    </select>
                  </div>

                  <button type="submit" className="quote-submit-btn">
                    Submit Request &rarr;
                  </button>
                </form>
              ) : (
                <div className="quote-success-box">
                  <span className="success-icon">🎉</span>
                  <h3 className="success-title">Estimate Request Submitted</h3>
                  <p className="success-desc">
                    Thank you. We have received your preliminary project details. One of our specialized engineering coordinators will reach out to you within 24 hours.
                  </p>
                  <button className="success-reset-btn" onClick={() => { setQuoteSuccess(false); setQLocation(''); setQServices(''); setQBudget(''); }}>
                    Request Another Quote
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW C: INTERACTIVE SERVICE SELECTOR */}
          {activeView === 'selector' && (
            <div className="tool-content-block">
              <div className="tool-intro-header">
                <h2 className="tool-title">Interactive Goal Selector</h2>
                <p className="tool-desc">Select exactly what you want to achieve, and we'll showcase the matching services to support your goals.</p>
              </div>

              <div className="goals-options-grid">
                <button className={`goal-card ${selectedGoal === 'secure' ? 'active' : ''}`} onClick={() => setSelectedGoal('secure')}>
                  🔒 I want to secure a property
                </button>
                <button className={`goal-card ${selectedGoal === 'network' ? 'active' : ''}`} onClick={() => setSelectedGoal('network')}>
                  📶 I want to set up a network
                </button>
                <button className={`goal-card ${selectedGoal === 'automate' ? 'active' : ''}`} onClick={() => setSelectedGoal('automate')}>
                  🏠 I want to automate my home
                </button>
              </div>

              {selectedGoal && (
                <div className="selected-goal-results">
                  {selectedGoal === 'secure' && (
                    <div className="goal-detail-panel">
                      <h4 className="g-panel-title">Recommended Services for Security</h4>
                      <div className="g-panel-cards">
                        <div className="g-service-card" onClick={() => setCurrentPage('service-security')}>
                          <h5>Security Systems</h5>
                          <p>Modern surveillance, thermal threat assessments, and biometric access controls.</p>
                          <span className="g-link">View Service &rarr;</span>
                        </div>
                        <div className="g-service-card" onClick={() => setCurrentPage('service-fire')}>
                          <h5>Fire Detection</h5>
                          <p>Early automated smoke detection and addressable notification networks.</p>
                          <span className="g-link">View Service &rarr;</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedGoal === 'network' && (
                    <div className="goal-detail-panel">
                      <h4 className="g-panel-title">Recommended Services for Networking</h4>
                      <div className="g-panel-cards">
                        <div className="g-service-card" onClick={() => setCurrentPage('service-it')}>
                          <h5>IT Infrastructure</h5>
                          <p>Reliable networks, server racks, server configuration, and high-performance routers.</p>
                          <span className="g-link">View Service &rarr;</span>
                        </div>
                        <div className="g-service-card" onClick={() => setCurrentPage('service-telecoms')}>
                          <h5>Telecommunications</h5>
                          <p>IP PBX calling, unified intercom networks, and structured voice infrastructures.</p>
                          <span className="g-link">View Service &rarr;</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedGoal === 'automate' && (
                    <div className="goal-detail-panel">
                      <h4 className="g-panel-title">Recommended Services for Automation</h4>
                      <div className="g-panel-cards">
                        <div className="g-service-card" onClick={() => setCurrentPage('service-automation')}>
                          <h5>Smart Automation</h5>
                          <p>Integrated lighting, HVAC units, dynamic audio, and centralized home scene management.</p>
                          <span className="g-link">View Service &rarr;</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 4. CTA */}
      <section className="assistant-footer-cta-section">
        <div className="assistant-cta-inner">
          <h2 className="cta-main-title">Still Not Sure What You Need?</h2>
          <p className="cta-main-desc">Speak directly to one of our expert engineers to get dedicated technical guidance tailored to your scenario.</p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
