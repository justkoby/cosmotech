import React, { useState } from 'react'

export default function ChatbotWidget({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello, I am the COSMOTECH virtual sales assistant. How can I help you today?"
    }
  ])

  const quickPrompts = [
    { label: 'Explain services', text: 'Explain your services' },
    { label: 'Hotel solutions', text: 'Hotel CCTV and networks' },
    { label: 'How you work', text: 'Help me understand your process' },
    { label: 'Get quote', text: 'How do I get a custom quote?' }
  ]

  const handleSendMessage = (textToSend) => {
    const userMsg = textToSend || chatInput
    if (!userMsg.trim()) return

    // Append user message
    const updatedMessages = [...messages, { sender: 'user', text: userMsg }]
    setMessages(updatedMessages)
    setChatInput('')

    // Evaluate response with realistic keyword searches
    setTimeout(() => {
      let botResponse = "Thank you for reaching out. COSMOTECH specializes in high-fidelity infrastructure. Feel free to contact our technical engineers or view our Services page for details."

      const lowerText = userMsg.toLowerCase()

      if (lowerText.includes('cctv') || lowerText.includes('security') || lowerText.includes('camera')) {
        botResponse = "We design and deploy advanced intelligent Security Systems combining high-resolution IP CCTV, multi-tier access controls, and alarms. You can read more on our specialized Security Services page."
      } else if (lowerText.includes('network') || lowerText.includes('it') || lowerText.includes('fiber')) {
        botResponse = "COSMOTECH designs extremely high-availability enterprise network infrastructures. We cover Cat6 cabling, fiber optic splicing, server integration, and managed Wi-Fi points."
      } else if (lowerText.includes('hotel') || lowerText.includes('hospitality')) {
        botResponse = "For hospitality clients like Accra City Phase 2, we deploy seamless Wi-Fi coverage, security surveillance systems, and integrated access points. View our dedicated Industries sector page."
      } else if (lowerText.includes('home') || lowerText.includes('automation') || lowerText.includes('vimar')) {
        botResponse = "We specialize in high-end premium smart home automation combining lighting, home climate, and entertainment control in partnership with Vimar & Legrand."
      } else if (lowerText.includes('fire') || lowerText.includes('detection')) {
        botResponse = "COSMOTECH designs and deploys addressable commercial and industrial fire detection systems complying with full technical safety standards."
      } else if (lowerText.includes('process') || lowerText.includes('how you work')) {
        botResponse = "Our structured process follows Consultation, Site Assessment, Tailored Design, Precision Installation, Systems Integration, and Post-Deployment Support."
      } else if (lowerText.includes('quote') || lowerText.includes('consultation')) {
        botResponse = "To receive a detailed project estimate or complimentary technical review, please click the 'Request Consultation' button at the bottom of our pages."
      }

      setMessages([...updatedMessages, { sender: 'bot', text: botResponse }])
    }, 450)
  }

  return (
    <div className="floating-sales-chatbot-widget">
      {/* 1. BUTTON TOGGLE */}
      <button className="chat-trigger-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chat">
        {isOpen ? '✕' : '💬'}
      </button>

      {/* 2. CORE CHAT DRAWER */}
      {isOpen && (
        <div className="chat-drawer">
          <div className="chat-header">
            <div className="chat-header-title">COSMOTECH Assistant</div>
            <div className="chat-header-status">Online</div>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-message-bubble ${m.sender === 'user' ? 'user' : 'bot'}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <div className="quick-prompts-row">
              {quickPrompts.map((qp, i) => (
                <button key={i} className="prompt-chip" onClick={() => handleSendMessage(qp.text)}>
                  {qp.label}
                </button>
              ))}
            </div>

            <form className="chat-input-form" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="chat-input-text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)} 
              />
              <button type="submit" className="chat-send-btn" aria-label="Send">
                &rarr;
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
