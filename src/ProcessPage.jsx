import React, { useEffect } from 'react'

export default function ProcessPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="process-page-container">
      {/* 1. HERO SECTION */}
      <section className="process-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
        <div className="process-hero-overlay">
          <div className="process-hero-content">
            <span className="process-badge-accent">Our Process</span>
            <h1 className="process-hero-title">From Concept to Connected Systems</h1>
            <p className="process-hero-subtext">
              COSMOTECH follows a structured engineering process to design, install, integrate, and support reliable technology systems for homes, businesses, and institutions.
            </p>
            <button className="process-hero-cta" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
              Request Consultation &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROCESS OVERVIEW */}
      <section className="process-overview-section">
        <div className="process-section-header">
          <h2 className="process-section-title centered">Workflow Overview</h2>
          <p className="process-section-subtitle centered">A modern visual breakdown of our sequential engineering delivery.</p>
        </div>
        <div className="horizontal-process-timeline">
          <div className="timeline-segment">
            <div className="timeline-node">#1</div>
            <h4 className="timeline-label">Consultation</h4>
          </div>
          <div className="timeline-segment">
            <div className="timeline-node">#2</div>
            <h4 className="timeline-label">Site Assessment</h4>
          </div>
          <div className="timeline-segment">
            <div className="timeline-node">#3</div>
            <h4 className="timeline-label">System Design</h4>
          </div>
          <div className="timeline-segment">
            <div className="timeline-node">#4</div>
            <h4 className="timeline-label">Installation</h4>
          </div>
          <div className="timeline-segment">
            <div className="timeline-node">#5</div>
            <h4 className="timeline-label">Integration</h4>
          </div>
          <div className="timeline-segment">
            <div className="timeline-node">#6</div>
            <h4 className="timeline-label">Support</h4>
          </div>
        </div>
      </section>

      {/* 3. DETAILED PROCESS SECTIONS */}
      <section className="process-details-section">
        <div className="process-step-block">
          <div className="step-content-col">
            <span className="step-index">#1</span>
            <h2 className="step-main-title">Consultation</h2>
            <p className="step-body-desc">
              We begin by understanding your project goals, environment, budget, and technical requirements. This allows our team to outline exactly how technology can improve your operational workflows or everyday lifestyle.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/2-01.webp')` }}></div>
        </div>

        <div className="process-step-block reverse">
          <div className="step-content-col">
            <span className="step-index">#2</span>
            <h2 className="step-main-title">Site Assessment</h2>
            <p className="step-body-desc">
              Our team thoroughly evaluates your physical space, existing infrastructure, risks, and performance limitations. This prevents unneeded surprises during physical deployment.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/oxford.webp')` }}></div>
        </div>

        <div className="process-step-block">
          <div className="step-content-col">
            <span className="step-index">#3</span>
            <h2 className="step-main-title">System Design</h2>
            <p className="step-body-desc">
              We develop a tailored, compliant system architecture covering advanced equipment choice, placement, network integration, scalability, and bandwidth limit planning.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/monarch-hotel.jpg')` }}></div>
        </div>

        <div className="process-step-block reverse">
          <div className="step-content-col">
            <span className="step-index">#4</span>
            <h2 className="step-main-title">Installation & Quality Control</h2>
            <p className="step-body-desc">
              Our certified technicians deploy the approved systems with precision, full safety compliance, and minimal disruption to operations. We maintain stringent quality control and assurance at every phase of deployment.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/Anfield Residence.jpg')` }}></div>
        </div>

        <div className="process-step-block">
          <div className="step-content-col">
            <span className="step-index">#5</span>
            <h2 className="step-main-title">Integration & Testing</h2>
            <p className="step-body-desc">
              We connect all technology components into one working system and test performance, reliability, and usability end-to-end.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/goil-plc.jpg')` }}></div>
        </div>

        <div className="process-step-block reverse">
          <div className="step-content-col">
            <span className="step-index">#6</span>
            <h2 className="step-main-title">Support & Maintenance</h2>
            <p className="step-body-desc">
              After completion, we provide ongoing support, preventative testing, hardware checks, and continuous technical assistance.
            </p>
          </div>
          <div className="step-visual-col" style={{ backgroundImage: `url('/Accra-City-Hotel.png')` }}></div>
        </div>
      </section>

      {/* 4. WHAT CLIENTS CAN EXPECT */}
      <section className="client-expectations-section">
        <div className="process-section-header">
          <h2 className="process-section-title centered">What Clients Can Expect</h2>
          <p className="process-section-subtitle centered">We focus on high-end communication and elite delivery standards.</p>
        </div>
        <div className="expectations-icon-grid">
          <div className="expect-item-card">
            <span className="expect-icon">💬</span>
            <div className="expect-text-box">
              <h4 className="expect-title">Clear project communication</h4>
              <p className="expect-desc">Regular progress status updates and transparent technical timelines.</p>
            </div>
          </div>
          <div className="expect-item-card">
            <span className="expect-icon">👷</span>
            <div className="expect-text-box">
              <h4 className="expect-title">Professional engineering guidance</h4>
              <p className="expect-desc">Access to specialized technicians for optimal system advice.</p>
            </div>
          </div>
          <div className="expect-item-card">
            <span className="expect-icon">⭐</span>
            <div className="expect-text-box">
              <h4 className="expect-title">Quality installation standards</h4>
              <p className="expect-desc">Stringent in-wall and hardware mounting procedures.</p>
            </div>
          </div>
          <div className="expect-item-card">
            <span className="expect-icon">🛡️</span>
            <div className="expect-text-box">
              <h4 className="expect-title">Reliable after-sales support</h4>
              <p className="expect-desc">On-call diagnostic testing and preventative servicing.</p>
            </div>
          </div>
          <div className="expect-item-card">
            <span className="expect-icon">📈</span>
            <div className="expect-text-box">
              <h4 className="expect-title">Scalable systems built for growth</h4>
              <p className="expect-desc">Modularity that lets you expand line counts or endpoints at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="process-footer-cta-section">
        <div className="process-cta-inner">
          <h2 className="cta-main-title">Ready to Start Your Project?</h2>
          <p className="cta-main-desc">
            Talk to COSMOTECH engineers and let's design the right system for your environment.
          </p>
          <button className="cta-action-btn" onClick={() => { setCurrentPage('home'); setTimeout(() => { window.scrollTo(0, document.body.scrollHeight); }, 100); }}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
