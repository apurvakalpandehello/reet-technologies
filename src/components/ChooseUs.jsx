import React from 'react';
import './ChooseUs.css';
import logoImg from '../assets/images/REET TECH only logo.png';

const ChooseUs = () => {
  return (
    <section className="why-choose-section">
      {/* Background Glows */}
      <div className="bg-glow bg-glow-center"></div>
      <div className="bg-glow bg-glow-left"></div>
      <div className="bg-glow bg-glow-right"></div>

      {/* Header Section */}
      <div className="choose-header">
        <span className="sub-title">WHY CHOOSE</span>
        <h2 className="main-title">
          <span className="grey-white-gradient-text">REET TECHNOLOGIES</span>
        </h2>
        <p className="header-desc">
          Innovative Technology. Reliable Solutions. Long-Term Partnership.
        </p>
      </div>

      {/* Main 3D Interactive Layout */}
      <div className="choose-container">
        
        {/* SVG Circuit Lines directly connecting Center Sphere to Cards */}
        <svg className="connecting-circuit-svg" viewBox="0 0 1400 900" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Card 01 Circuit (Top Left) */}
          <path d="M 640 430 C 560 380, 520 115, 475 115" className="circuit-line line-pulse" />

          {/* Card 02 Circuit (Mid-Top Left) */}
          <path d="M 620 445 C 550 420, 510 325, 475 325" className="circuit-line line-pulse delay-1" />

          {/* Card 03 Circuit (Mid-Bottom Left) */}
          <path d="M 620 465 C 550 490, 510 535, 475 535" className="circuit-line line-pulse delay-2" />

          {/* Card 04 Circuit (Bottom Left) */}
          <path d="M 640 480 C 560 530, 520 745, 475 745" className="circuit-line line-pulse delay-3" />

          {/* Card 05 Circuit (Top Right) */}
          <path d="M 760 430 C 840 380, 880 115, 925 115" className="circuit-line line-pulse" />

          {/* Card 06 Circuit (Mid-Top Right) */}
          <path d="M 780 445 C 850 420, 890 325, 925 325" className="circuit-line line-pulse delay-1" />

          {/* Card 07 Circuit (Mid-Bottom Right) */}
          <path d="M 780 465 C 850 490, 890 535, 925 535" className="circuit-line line-pulse delay-2" />

          {/* Card 08 Circuit (Bottom Right) */}
          <path d="M 760 480 C 840 530, 880 745, 925 745" className="circuit-line line-pulse delay-3" />
        </svg>

        {/* LEFT COLUMN: 4 CARDS */}
        <div className="cards-column left-column">
          
          {/* Card 01 - Amber / Gold */}
          <div className="feature-card-3d card-left theme-amber" id="card-01">
            <div className="card-badge-num amber-badge">01</div>
            <div className="card-text-content">
              <h3>20+ Years of Technology Expertise</h3>
              <p>Two decades of experience delivering innovative, reliable and future-ready technology solutions.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-amber">
                <div className="icon-container-box amber-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 - Cyan / Sky */}
          <div className="feature-card-3d card-left theme-cyan" id="card-02">
            <div className="card-badge-num cyan-badge">02</div>
            <div className="card-text-content">
              <h3>Industry-Focused Solutions</h3>
              <p>Tailored solutions designed to meet the unique challenges and goals of your industry.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-cyan">
                <div className="icon-container-box cyan-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 - Blue / Indigo */}
          <div className="feature-card-3d card-left theme-blue" id="card-03">
            <div className="card-badge-num blue-badge">03</div>
            <div className="card-text-content">
              <h3>End-to-End IT Services</h3>
              <p>From consulting and strategy to development, deployment and support – we handle it all.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-blue">
                <div className="icon-container-box blue-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 04 - Emerald / Teal */}
          <div className="feature-card-3d card-left theme-emerald" id="card-04">
            <div className="card-badge-num emerald-badge">04</div>
            <div className="card-text-content">
              <h3>Scalable &amp; Secure Architecture</h3>
              <p>We build robust, secure and scalable architectures that grow with your business.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-emerald">
                <div className="icon-container-box emerald-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CENTER 3D HOLOGRAPHIC CIRCLE PLATFORM */}
        <div className="center-hologram-hub">
          <div className="hologram-stage">
            
            {/* Circular Glowing IT Core */}
            <div className="holo-globe">
              <div className="globe-inner-core">
                <div className="rt-logo-brand">
                  <img 
                    src={logoImg} 
                    alt="REET Technologies Logo" 
                    className="globe-custom-logo" 
                    loading="eager"
                  />
                </div>
              </div>
              <div className="globe-mesh-grid"></div>
              <div className="globe-particles"></div>
              <div className="globe-outer-aura"></div>
            </div>

            {/* Glowing Projection Rays */}
            <div className="hologram-projector-light"></div>

            {/* Multi-layered 3D Cyber Podium Base */}
            <div className="cyber-podium-base">
              <div className="podium-disc disc-top"></div>
              <div className="podium-disc disc-mid">
                <div className="neon-light-strip"></div>
              </div>
              <div className="podium-disc disc-bot"></div>
              <div className="podium-shadow-glow"></div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 4 CARDS */}
        <div className="cards-column right-column">

          {/* Card 05 - Purple / Violet */}
          <div className="feature-card-3d card-right theme-purple" id="card-05">
            <div className="card-badge-num purple-badge">05</div>
            <div className="card-text-content">
              <h3>Dedicated Technical Support</h3>
              <p>Our expert team is always ready to assist you with dedicated and timely technical support.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-purple">
                <div className="icon-container-box purple-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 06 - Rose / Pink */}
          <div className="feature-card-3d card-right theme-rose" id="card-06">
            <div className="card-badge-num rose-badge">06</div>
            <div className="card-text-content">
              <h3>On-Time Project Delivery</h3>
              <p>We follow agile methodologies and proven processes to ensure on-time, every time.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-rose">
                <div className="icon-container-box rose-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 07 - Orange */}
          <div className="feature-card-3d card-right theme-orange" id="card-07">
            <div className="card-badge-num orange-badge">07</div>
            <div className="card-text-content">
              <h3>Transparent Communication</h3>
              <p>We believe in clear, open and regular communication at every step of the project.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-orange">
                <div className="icon-container-box orange-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 08 - Green */}
          <div className="feature-card-3d card-right theme-green" id="card-08">
            <div className="card-badge-num green-badge">08</div>
            <div className="card-text-content">
              <h3>Long-Term Client Partnerships</h3>
              <p>We focus on building lasting relationships and becoming your technology partner in growth.</p>
            </div>
            <div className="card-3d-visual">
              <div className="visual-podium podium-green">
                <div className="icon-container-box green-icon-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM 4 FEATURE PILL BADGES */}
      <div className="bottom-badges-container">
        
        <div className="feature-pill-badge">
          <div className="badge-icon-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f59e0b" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/>
            </svg>
          </div>
          <span>Innovation</span>
        </div>

        <div className="feature-pill-badge">
          <div className="badge-icon-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#06b6d4" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <span>Quality</span>
        </div>

        <div className="feature-pill-badge">
          <div className="badge-icon-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <span>Security</span>
        </div>

        <div className="feature-pill-badge">
          <div className="badge-icon-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#a855f7" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <span>Reliability</span>
        </div>

      </div>

    </section>
  );
};

export default ChooseUs;