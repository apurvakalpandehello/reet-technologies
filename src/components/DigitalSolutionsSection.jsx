import React from 'react';
import './DigitalSolutionsSection.css';
import nexusLogoImg from '../assets/images/Nexus India Logo-01.jpg';

export default function DigitalSolutionsSection() {
  return (
    <section className="ds-main-wrapper">
      {/* Background Subtle Ambient Glows */}
      <div className="ds-ambient-glow ds-glow-left"></div>
      <div className="ds-ambient-glow ds-glow-right"></div>

      {/* Top Header Section */}
      <div className="ds-header-container">
        <div className="ds-banner-box">
          <h2>EXPLORE OUR DIGITAL SOLUTIONS</h2>
          <div className="ds-underline-gradient"></div>
        </div>
        <p className="ds-subtitle-text">
          Designed to help businesses grow, adapt, and lead in the digital era
        </p>
      </div>

      {/* Cards Grid Container */}
      <div className="ds-cards-grid">
        
        {/* Card 1: NEXUS INDIA - THE CARING MARKET */}
        <div className="ds-card-box">
          {/* Top-Right Ambient Specular & Dot Grid */}
          <div className="card-top-right-laser"></div>
          <div className="card-dot-pattern"></div>

          {/* Top-Right Glowing Blue Curve Line (SVG) */}
          <svg 
            className="card-top-right-curve-svg" 
            viewBox="0 0 300 200" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 50,-10 Q 150,110 320,130" 
              fill="none" 
              stroke="#00d2ff" 
              strokeWidth="3" 
            />
            <path 
              d="M 10,-10 Q 120,80 320,100" 
              fill="none" 
              stroke="rgba(0, 210, 255, 0.45)" 
              strokeWidth="1.5" 
            />
          </svg>

          {/* Ambient Glows */}
          <div className="card-orange-glow-base"></div>
          <div className="card-blue-glow-base"></div>
          <div className="card-orange-perspective-rays"></div>

          {/* Continuous Connected Bottom-Swoop Curved Wave (SVG) */}
          <svg 
            className="card-connected-wave-svg" 
            viewBox="0 0 600 300" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Orange Wave Gradient */}
              <linearGradient id="orangeConnectedGrad1" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#ff4500" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#ff7700" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffaa00" stopOpacity="0.0" />
              </linearGradient>

              {/* Blue Laser Wave Gradient */}
              <linearGradient id="blueConnectedGrad1" x1="100%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.5" />
                <stop offset="60%" stopColor="#00d2ff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.0" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="laserGlow1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Orange Smooth Wave Body */}
            <path 
              d="M -20,320 L -20,80 Q 80,240 220,265 Q 360,285 620,120 L 620,320 Z" 
              fill="url(#orangeConnectedGrad1)" 
            />

            {/* Right Blue Radiant Wave Body */}
            <path 
              d="M 620,320 L 620,100 Q 420,240 280,260 Q 150,275 -20,210 L -20,320 Z" 
              fill="url(#blueConnectedGrad1)" 
            />

            {/* Orange Connected Main Curved Laser Stroke */}
            <path 
              d="M -20,80 Q 80,240 220,265 Q 360,285 620,120" 
              fill="none" 
              stroke="#ff7b00" 
              strokeWidth="3.5" 
              filter="url(#laserGlow1)"
            />

            {/* Right Multi-Layer Blue Glowing Connected Laser Lines */}
            <path 
              d="M -20,210 Q 150,275 280,260 Q 420,240 620,100" 
              fill="none" 
              stroke="#00d2ff" 
              strokeWidth="3" 
              filter="url(#laserGlow1)"
            />
            <path 
              d="M 60,280 Q 200,295 320,270 Q 460,240 620,70" 
              fill="none" 
              stroke="rgba(0, 210, 255, 0.4)" 
              strokeWidth="1.5" 
            />
          </svg>

          {/* Top Brand Header */}
          <div className="card-brand-header">
            <div className="brand-logo-badge">
              <img 
                src={nexusLogoImg} 
                alt="Nexus India Logo" 
                className="brand-logo-img" 
              />
            </div>
            <div className="brand-title-group">
              <h3 className="brand-orange-title">NEXUS INDIA</h3>
              <h4 className="brand-blue-subtitle">THE CARING MARKET</h4>
            </div>
          </div>

          {/* Lead Description */}
          <p className="card-lead-description">
            A powerful digital initiative tailored to support India's small and medium-sized businesses.
          </p>

          {/* Feature Grid (2x2) with Icons */}
          <div className="card-features-grid">
            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <polyline points="8 9 6 10.5 8 12"></polyline>
                  <polyline points="16 9 18 10.5 16 12"></polyline>
                  <line x1="13" y1="8" x2="11" y2="13"></line>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Affordable Tech Solutions</h5>
                <p>Cost-effective technology tailored for SMEs.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Localized Tools</h5>
                <p>Specialized tools for e-commerce and logistics.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Easy Onboarding &amp; Support</h5>
                <p>Smooth onboarding with dedicated support.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <rect x="7" y="13" width="3" height="5" rx="1"></rect>
                  <rect x="12" y="9" width="3" height="9" rx="1"></rect>
                  <polyline points="7 10 13 4 17 8 21 3"></polyline>
                  <polyline points="17 3 21 3 21 7"></polyline>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Scalable for Growth</h5>
                <p>Built to scale with your business needs.</p>
              </div>
            </div>
          </div>

          {/* Centered Pill Button */}
          <div className="card-action-center">
            <a href="#learn-more-caring-market" className="ds-btn-pill-orange">
              <span>Learn More</span>
              <span className="btn-arrow-circle">›</span>
            </a>
          </div>
        </div>

        {/* Card 2: NEXUS INDIA - THE BUSINESS MANAGEMENT SOFTWARE */}
        <div className="ds-card-box">
          {/* Top-Right Ambient Specular & Dot Grid */}
          <div className="card-top-right-laser"></div>
          <div className="card-dot-pattern"></div>

          {/* Top-Right Glowing Blue Curve Line (SVG) */}
          <svg 
            className="card-top-right-curve-svg" 
            viewBox="0 0 300 200" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 50,-10 Q 150,110 320,130" 
              fill="none" 
              stroke="#00d2ff" 
              strokeWidth="3" 
            />
            <path 
              d="M 10,-10 Q 120,80 320,100" 
              fill="none" 
              stroke="rgba(0, 210, 255, 0.45)" 
              strokeWidth="1.5" 
            />
          </svg>

          {/* Ambient Glows */}
          <div className="card-orange-glow-base"></div>
          <div className="card-blue-glow-base"></div>
          <div className="card-orange-perspective-rays"></div>

          {/* Continuous Connected Bottom-Swoop Curved Wave (SVG) */}
          <svg 
            className="card-connected-wave-svg" 
            viewBox="0 0 600 300" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Orange Wave Gradient */}
              <linearGradient id="orangeConnectedGrad2" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#ff4500" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#ff7700" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffaa00" stopOpacity="0.0" />
              </linearGradient>

              {/* Blue Laser Wave Gradient */}
              <linearGradient id="blueConnectedGrad2" x1="100%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.5" />
                <stop offset="60%" stopColor="#00d2ff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.0" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="laserGlow2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Orange Smooth Wave Body */}
            <path 
              d="M -20,320 L -20,80 Q 80,240 220,265 Q 360,285 620,120 L 620,320 Z" 
              fill="url(#orangeConnectedGrad2)" 
            />

            {/* Right Blue Radiant Wave Body */}
            <path 
              d="M 620,320 L 620,100 Q 420,240 280,260 Q 150,275 -20,210 L -20,320 Z" 
              fill="url(#blueConnectedGrad2)" 
            />

            {/* Orange Connected Main Curved Laser Stroke */}
            <path 
              d="M -20,80 Q 80,240 220,265 Q 360,285 620,120" 
              fill="none" 
              stroke="#ff7b00" 
              strokeWidth="3.5" 
              filter="url(#laserGlow2)"
            />

            {/* Right Multi-Layer Blue Glowing Connected Laser Lines */}
            <path 
              d="M -20,210 Q 150,275 280,260 Q 420,240 620,100" 
              fill="none" 
              stroke="#00d2ff" 
              strokeWidth="3" 
              filter="url(#laserGlow2)"
            />
            <path 
              d="M 60,280 Q 200,295 320,270 Q 460,240 620,70" 
              fill="none" 
              stroke="rgba(0, 210, 255, 0.4)" 
              strokeWidth="1.5" 
            />
          </svg>

          {/* Top Brand Header */}
          <div className="card-brand-header">
            <div className="brand-logo-badge">
              <img 
                src={nexusLogoImg} 
                alt="Nexus India Logo" 
                className="brand-logo-img" 
              />
            </div>
            <div className="brand-title-group">
              <h3 className="brand-orange-title">NEXUS INDIA</h3>
              <h4 className="brand-blue-subtitle">THE BUSINESS MANAGEMENT SOFTWARE</h4>
            </div>
          </div>

          {/* Lead Description */}
          <p className="card-lead-description">
            An all-in-one scalable enterprise suite designed to streamline operations and enhance team productivity.
          </p>

          {/* Feature Grid (2x2) with Icons */}
          <div className="card-features-grid">
            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Smart Dashboards</h5>
                <p>Real-time analytics and dynamic visual data reports.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Role-Based Access</h5>
                <p>Strict access controls and secure staff permissions.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Centralized Data</h5>
                <p>Unified database with powerful collaboration tools.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                </svg>
              </div>
              <div className="feature-text">
                <h5>Custom Integrations</h5>
                <p>Seamless connectivity with REST APIs &amp; third-party tools.</p>
              </div>
            </div>
          </div>

          {/* Centered Pill Button */}
          <div className="card-action-center">
            <a href="#learn-more-business-software" className="ds-btn-pill-orange">
              <span>Learn More</span>
              <span className="btn-arrow-circle">›</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}