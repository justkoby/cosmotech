import React, { useState, useEffect } from 'react'

export default function InteractiveServices({ setCurrentPage }) {
  const [activeIdx, setActiveIdx] = useState(0)

  const servicesList = [
    {
      category: 'IT INFRASTRUCTURE',
      title: 'IT INFRASTRUCTURE',
      desc: 'We design and deploy modern, high-availability IT networks, data backbones, server architectures, and cyber defenses.',
      image: '/IT Infrastructure.jpg',
      route: 'service-it'
    },
    {
      category: 'TELECOM SYSTEMS',
      title: 'TELECOM SYSTEMS',
      desc: 'High-speed fiber-optic backbones, unified enterprise VoIP, and reliable communication paths to power your enterprise.',
      image: '/Telecom Systems.jpeg',
      route: 'service-telecoms'
    },
    {
      category: 'SECURITY SYSTEMS',
      title: 'SECURITY SYSTEMS',
      desc: 'Advanced biometric access control, full multi-zone alarm platforms, and professional high-definition CCTV systems.',
      image: '/Security Systems.png',
      route: 'service-security'
    },
    {
      category: 'SMART AUTOMATION',
      title: 'SMART AUTOMATION',
      desc: 'Intelligent building and residential automation of lighting, climate, multi-room AV, and security from a single panel.',
      image: '/Smart Automation.jpeg',
      route: 'service-automation'
    },
    {
      category: 'FIRE DETECTION',
      title: 'FIRE DETECTION & ALARM SYSTEMS',
      desc: 'Advanced smoke, thermal, and addressable alarm systems that continuously monitor for hazards to protect life and property.',
      image: '/fire safety.png',
      route: 'service-fire'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % servicesList.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIdx])

  const selectService = (idx) => {
    setActiveIdx(idx)
  }

  return (
    <section className="services-section-recreated">
      <div className="services-recreated-inner">
        {/* Left Column */}
        <div className="services-recreated-left">
          {servicesList.map((svc, idx) => {
            const isActive = activeIdx === idx
            return (
              <div 
                key={idx} 
                className={`service-recreated-item ${isActive ? 'active' : 'inactive'}`}
                onClick={() => selectService(idx)}
              >
                <div className="service-recreated-line-wrapper">
                  {isActive && (
                    <div 
                      key={activeIdx} 
                      className="service-recreated-line-fill active-timer"
                    ></div>
                  )}
                </div>
                <div className="service-recreated-content">
                  <span className="service-recreated-cat">{svc.category}</span>
                  <h3 className="service-recreated-title">{svc.title}</h3>
                  {isActive && (
                    <div className="service-recreated-details">
                      <p className="service-recreated-desc">{svc.desc}</p>
                      <a 
                        href="#" 
                        className="service-recreated-link"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          setCurrentPage(svc.route); 
                          window.scrollTo(0, 0); 
                        }}
                      >
                        ABOUT SERVICE
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column */}
        <div className="services-recreated-right">
          <div className="services-recreated-img-frame">
            <img 
              src={servicesList[activeIdx].image} 
              alt={servicesList[activeIdx].title} 
              className="services-recreated-img" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
