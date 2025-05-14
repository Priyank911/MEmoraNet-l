// import React from 'react';
// import './App.css';
// import Navbar from './Navbar';

// function App() {
//   return (
//     <div className="memora-hero-bg">
//       <Navbar />
//       <header className="memora-hero">
//         <div className="memora-hero-content enhanced-hero-content">
//           <h1 className="memora-hero-title enhanced-hero-title">
//             The <span className="memora-gradient">RAG-Powered AI Companion</span> for Life
//           </h1>
//           <p className="memora-hero-desc enhanced-hero-desc">
//             <span className="hero-desc-muted">Used by innovators and lifelong learners,</span> <b>MEmoraNet</b> enables you to create <b>high-quality, evolving AI experiences</b> with dynamic memory, context-aware retrieval, and emotionally intelligent responses.
//           </p>
//           <div className="memora-hero-buttons enhanced-hero-buttons">
//             <a href="#get-started" className="memora-btn primary">Get Started</a>
//             <a href="#learn-more" className="memora-btn secondary">Learn More</a>
//           </div>
//           <div className="memora-hero-terminal enhanced-hero-terminal">
//              Sear🔍hed on Google  ~  MemoraNet 
//           </div>
//         </div>
//       </header>
//       <div className="memora-grid-bg"></div>
//       {/* Features Section */}
//       <section className="features">
//         <h2 className="features-title">What's in MEmoraNet?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h4>Dynamic Memory & Personalization</h4>
//             <p>MEmoraNet adapts to you, storing and retrieving memories for deeply personalized, lifelong AI interactions.</p>
//           </div>
//           <div className="feature-card">
//             <h4>Multi-Vector Memory Architecture</h4>
//             <p>Uses Pinecone, FAISS, and ChromaDB to organize memories by context: Personal, Work/School, and Financial/Other.</p>
//           </div>
//           <div className="feature-card">
//             <h4>Sentiment & Tone Adaptation</h4>
//             <p>Analyzes conversation sentiment to adjust tone, making responses feel more human and emotionally intelligent.</p>
//           </div>
//           <div className="feature-card">
//             <h4>Spiral Reinforcement Learning</h4>
//             <p>Periodically re-trains and re-embeds key conversations for long-term memory consistency and growth.</p>
//           </div>
//           <div className="feature-card">
//             <h4>Fast Retrieval</h4>
//             <p>Employs LRU or Redis cache for instant access to frequently used data and memories.</p>
//           </div>
//           <div className="feature-card">
//             <h4>Lifelong Learning & Consistency</h4>
//             <p>Remembers, adapts, and grows with you over time, ensuring a truly evolving AI companion experience.</p>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div>MEmoraNet &copy; {new Date().getFullYear()} | Advanced RAG-based AI Companion</div>
//           <div>
//             <a href="#" style={{ color: '#61dafb', textDecoration: 'none', marginRight: '1rem' }}>Docs</a>
//             <a href="#" style={{ color: '#61dafb', textDecoration: 'none', marginRight: '1rem' }}>GitHub</a>
//             <a href="#" style={{ color: '#61dafb', textDecoration: 'none' }}>Contact</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  useEffect(() => {
    // Fade in animation on load
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('feature-visible');
        }
      });
    }, observerOptions);
    
    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
      featureObserver.observe(card);
    });
    
    // Observe the features title
    const featuresTitle = document.querySelector('.features-title');
    if (featuresTitle) {
      featureObserver.observe(featuresTitle);
    }
    
    return () => {
      featureObserver.disconnect();
    };
  }, []);

  // Features data
  const features = [
    {
      id: 'dynamic-memory',
      title: 'Dynamic Memory & Personalization',
      description: 'MEmoraNet adapts to you, storing and retrieving memories for deeply personalized, lifelong AI interactions.',
      icon: '🧠'
    },
    {
      id: 'multi-vector',
      title: 'Multi-Vector Memory Architecture',
      description: 'Uses Pinecone, FAISS, and ChromaDB to organize memories by context: Personal, Work/School, and Financial/Other.',
      icon: '🔗'
    },
    {
      id: 'sentiment',
      title: 'Sentiment & Tone Adaptation',
      description: 'Analyzes conversation sentiment to adjust tone, making responses feel more human and emotionally intelligent.',
      icon: '😊'
    },
    {
      id: 'spiral-learning',
      title: 'Spiral Reinforcement Learning',
      description: 'Periodically re-trains and re-embeds key conversations for long-term memory consistency and growth.',
      icon: '🌀'
    },
    {
      id: 'fast-retrieval',
      title: 'Fast Retrieval',
      description: 'Employs LRU or Redis cache for instant access to frequently used data and memories.',
      icon: '⚡'
    },
    {
      id: 'lifelong-learning',
      title: 'Lifelong Learning & Consistency',
      description: 'Remembers, adapts, and grows with you over time, ensuring a truly evolving AI companion experience.',
      icon: '📈'
    }
  ];

  return (
    <div className="memora-hero-bg">
      <div className="animated-gradient"></div>
      <Navbar />
      <header className={`memora-hero ${isVisible ? 'visible' : ''}`}>
        <div className="memora-hero-content enhanced-hero-content">
          <div className="hero-ai-core"></div>
          <h1 className="memora-hero-title enhanced-hero-title">
            The <span className="memora-gradient">RAG-Powered AI Companion</span> for Life
          </h1>
          <p className="memora-hero-desc enhanced-hero-desc">
            <span className="hero-desc-muted">Used by innovators and lifelong learners,</span> <b>MEmoraNet</b> enables you to create <b>high-quality, evolving AI experiences</b> with dynamic memory, context-aware retrieval, and emotionally intelligent responses.
          </p>
          <div className="memora-hero-buttons enhanced-hero-buttons">
            <a href="#get-started" className="memora-btn primary">Get Started</a>
            <a href="#learn-more" className="memora-btn secondary">Learn More</a>
          </div>
          <div className="memora-hero-terminal enhanced-hero-terminal">
            <span className="cursor">›</span> Sear<span className="search-icon">🔍</span>hed on Google ~ MemoraNet
          </div>
        </div>
        
        {/* <div className="hero-graphic">
          <div className="floating-nodes">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="node node-5"></div>
            
          </div>
        </div> */}
      </header>
      
      <div className="memora-grid-bg"></div>
      
      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">What's in MEmoraNet?</h2>
        <div className="features-subtitle">Everything you need to build intelligent AI companions</div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`} 
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <div className="feature-shine"></div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Next.js 15 Highlight Section */}
      <section className="memoranet-highlight">
        <div className="highlight-content">
          <h3>MEmoraNet 1.5</h3>
          <p>The power of full-stack memory to the frontend. <a href="#release-notes">Read the release notes</a>.</p>
        </div>
        <div className="highlight-arrow">→</div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>MEmoraNet &copy; {new Date().getFullYear()} | Advanced RAG-based AI Companion</div>
          <div className="footer-links">
            <a href="#">Docs</a>
            <a href="#">GitHub</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;