import React, { useState, useEffect } from 'react'

export default function FAQPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('general')
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'support', label: 'Support' }
  ]

  const faqs = {
    general: [
      {
        q: 'What does COSMOTECH specialize in?',
        a: 'COSMOTECH PROJECT LTD specializes in IT infrastructure, telecommunications systems, security systems, smart home automation, and fire detection systems.'
      },
      {
        q: 'Where are your services available?',
        a: 'We operate across Ghana, delivering solutions in Accra and other regions depending on project requirements.'
      },
      {
        q: 'Why should I choose COSMOTECH?',
        a: 'We combine engineering expertise, integrated solutions, and reliable support to deliver systems that are built for performance and long-term use.'
      }
    ],
    services: [
      {
        q: 'Do you handle both small and large projects?',
        a: 'Yes. We work on a wide range of projects, from residential installations to large-scale infrastructure systems for businesses and institutions.'
      },
      {
        q: 'Can you combine multiple systems into one solution?',
        a: 'Yes. We specialize in integrated systems where security, infrastructure, automation, and communication technologies work together seamlessly.'
      },
      {
        q: 'Do you supply equipment as well as installation?',
        a: 'Yes. We provide both equipment and professional installation as part of our end-to-end solutions.'
      }
    ],
    process: [
      {
        q: 'What happens after I request a consultation?',
        a: 'Our team will assess your requirements, evaluate your site if necessary, and propose a tailored solution based on your needs.'
      },
      {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary depending on complexity and scale. Smaller installations take days, while larger projects may take several weeks.'
      }
    ],
    pricing: [
      {
        q: 'How much do your services cost?',
        a: 'Pricing depends on the type of system, size, and requirements. We provide quotes after evaluating your exact requirements.'
      },
      {
        q: 'Do you offer consultations before pricing?',
        a: 'Yes. We typically assess your requirements first before providing a detailed quote.'
      }
    ],
    support: [
      {
        q: 'Do you provide after-installation support?',
        a: 'Yes. We offer ongoing maintenance, system monitoring, and technical support to ensure long-term performance.'
      },
      {
        q: 'Can systems be upgraded later?',
        a: 'Yes. Our solutions are designed to be scalable, allowing for upgrades and expansion as your needs grow.'
      }
    ]
  }

  const activeFaqs = faqs[activeTab] || []

  return (
    <div className="faq-page-container">
      {/* -------------------- MOBILE PAGE FLOW (lg:hidden) -------------------- */}
      <div className="lg:hidden">
        {/* Screen 1: Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(12, 27, 16, 0.8), rgba(12, 27, 16, 0.9)), url('/1-01.webp')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', color: '#ffffff', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Direct Answers</span>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '16px 0', lineHeight: '1.25' }}>Frequently Asked Questions</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: '1.5' }}>
              Have questions? Find direct, specialized answers right below.
            </p>
            <button style={{ backgroundColor: '#f59e0b', color: '#0c1b10', padding: '14px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', width: '100%' }} onClick={() => { setCurrentPage('home'); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100); }}>
              Enquire &rarr;
            </button>
          </div>
        </section>

        {/* Screen 2: Filters */}
        <section style={{ padding: '24px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '4px' }} className="no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
                style={{ backgroundColor: activeTab === cat.id ? '#0c1b10' : '#ffffff', color: activeTab === cat.id ? '#ffffff' : '#475569', border: '1px solid #e2e8f0', borderRadius: '50px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, flexShrink: 0 }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Screen 3: Accordion FAQ list */}
        <section style={{ padding: '32px 20px', backgroundColor: '#ffffff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeFaqs.map((faq, idx) => (
              <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                <div
                  style={{ backgroundColor: openIndex === idx ? '#0c1b10' : '#f8fafc', color: openIndex === idx ? '#ffffff' : '#1e293b', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span>Q: {faq.q}</span>
                  <span>{openIndex === idx ? '−' : '+'}</span>
                </div>
                {openIndex === idx && (
                  <div style={{ padding: '14px 16px', backgroundColor: '#ffffff', color: '#64748b', fontSize: '13.5px', lineHeight: '1.5' }}>
                    A: {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Screen 4: CTA */}
        <section style={{ padding: '48px 20px', backgroundColor: '#5c7853', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Still Have Questions?</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: '1.5' }}>Talk to COSMOTECH engineers to get answers tailored to your exact project goals.</p>
          <button style={{ backgroundColor: '#ffffff', color: '#5c7853', padding: '14px 28px', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: 700, width: '100%', textTransform: 'uppercase' }} onClick={() => { setCurrentPage('home'); window.scrollTo(0, document.body.scrollHeight); }}>
            Request Consultation
          </button>
        </section>
      </div>

      {/* -------------------- DESKTOP PAGE FLOW (hidden lg:block) -------------------- */}
      <div className="hidden lg:block">
        {/* 1. HERO SECTION */}
        <section className="about-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
          <div className="about-hero-overlay">
            <div className="about-hero-content">
              <span className="about-badge" style={{ color: '#f59e0b' }}>Direct Answers</span>
              <h1 className="about-hero-title">Frequently Asked Questions</h1>
              <p className="about-hero-subtext">
                Find answers to common questions about our services, process, and how COSMOTECH delivers reliable technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FAQ CATEGORIES */}
        <section className="faq-categories-tabs-section">
          <div className="faq-tabs-flex">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                className={`faq-tab-chip ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* 3. CORE ACCORDION SECTION */}
        <section className="faq-accordion-section">
          <div className="faq-accordion-inner">
            <div className="faq-accordion-list">
              {activeFaqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${openIndex === idx ? 'open' : ''}`}
                >
                  <div 
                    className="faq-item-header"
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  >
                    <h4 className="faq-item-question">Q: {faq.q}</h4>
                    <span className="faq-item-chevron">{openIndex === idx ? '−' : '+'}</span>
                  </div>
                  {openIndex === idx && (
                    <div className="faq-item-answer">
                      <p className="faq-answer-text">A: {faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. STILL HAVE QUESTIONS (Conversion Section) */}
        <section className="faq-conversion-section">
          <div className="faq-conversion-inner">
            <h2 className="conversion-title">Still Have Questions?</h2>
            <p className="conversion-desc">
              Talk to COSMOTECH engineers and get answers tailored specifically to your project needs.
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
