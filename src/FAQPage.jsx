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
    { id: 'support', label: 'Support & Maintenance' }
  ]

  const faqs = {
    general: [
      {
        q: 'What does COSMOTECH specialize in?',
        a: 'COSMOTECH PROJECT LTD specializes in IT infrastructure, telecommunications systems, security systems, smart home automation, and fire detection systems for residential, commercial, and industrial environments.'
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
        a: 'Project timelines vary depending on complexity and scale. Smaller installations may take a few days, while larger projects may take several weeks.'
      },
      {
        q: 'Will installation disrupt my operations?',
        a: 'We plan our installations carefully to minimize disruption, especially for businesses and operational environments.'
      }
    ],
    pricing: [
      {
        q: 'How much do your services cost?',
        a: 'Pricing depends on the type of system, project size, and specific requirements. We provide customized quotes after assessing your needs.'
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
      },
      {
        q: 'What happens if there is a system fault?',
        a: 'Our support team is available to diagnose and resolve issues quickly to minimize downtime.'
      }
    ]
  }

  const activeFaqs = faqs[activeTab] || []

  return (
    <div className="faq-page-container">
      {/* 1. HERO SECTION */}
      <section className="faq-hero" style={{ backgroundImage: `url('/1-01.webp')` }}>
        <div className="faq-hero-overlay">
          <div className="faq-hero-content">
            <span className="faq-badge-accent">Direct Answers</span>
            <h1 className="faq-hero-title">Frequently Asked Questions</h1>
            <p className="faq-hero-subtext">
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
  )
}
