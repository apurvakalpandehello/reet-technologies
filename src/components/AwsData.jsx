import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AwsData.css';

// Background image import
import awsDataBg from '../assets/images/awsdatapagebg.avif';

export default function AwsData() {
  const navigate = useNavigate();

  return (
    <div className="aws-data-page">
      
      {/* 01. Hero Section (With Background Image and Dark Overlay applied only here) */}
      <section 
        className="aws-hero-section"
        style={{ backgroundImage: `url(${awsDataBg})` }}
      >
        <div className="aws-dark-overlay"></div>

        <div className="aws-hero-container">
          
          {/* Left Side: Content */}
          <div className="aws-hero-content">
            <div className="aws-badge">
              <span className="badge-dot"></span> Cloud Infrastructure
            </div>
            
            <h1 className="aws-hero-title">
              <span className="aws-white-text">AWS & Data</span> <br />
              <span className="aws-grey-text">Management</span>
            </h1>
            
            <p className="aws-hero-description">
              Secure, scalable, and intelligent cloud and data solutions designed to help businesses modernize infrastructure, manage data efficiently, and turn data into meaningful business insights.
            </p>
          </div>

          {/* Right Side: Architecture Visual */}
          <div className="aws-hero-visual">
            <div className="architecture-card">
              <div className="arch-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="arch-card-heading">AWS Cloud & Data Architecture</span>
              </div>

              <div className="arch-tree">
                <div className="arch-node parent-node">
                  <div className="node-icon cloud-icon">☁️</div>
                  <span>AWS CLOUD</span>
                </div>

                <div className="connector-vertical"></div>

                <div className="arch-grid-3">
                  <div className="arch-node child-node">
                    <div className="node-icon">⚡</div>
                    <h4>COMPUTE</h4>
                    <span className="service-tag">EC2</span>
                  </div>
                  <div className="arch-node child-node">
                    <div className="node-icon">📦</div>
                    <h4>STORAGE</h4>
                    <span className="service-tag">S3</span>
                  </div>
                  <div className="arch-node child-node">
                    <div className="node-icon">🗄️</div>
                    <h4>DATABASE</h4>
                    <span className="service-tag">RDS</span>
                  </div>
                </div>

                <div className="connector-vertical"></div>

                <div className="arch-node parent-node highlight-node">
                  <div className="node-icon">📊</div>
                  <span>DATA ANALYTICS</span>
                </div>

                <div className="connector-vertical"></div>

                <div className="arch-node parent-node final-node">
                  <div className="node-icon">💡</div>
                  <span>BUSINESS INSIGHTS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02. Introduction Section */}
      <section className="aws-intro-section">
        <div className="aws-intro-container">
          
          {/* Left Side: Large Heading, Paragraph & Bullet List */}
          <div className="aws-intro-left">
            <div className="aws-badge">
              <span className="badge-dot"></span> Core Expertise
            </div>
            
            <h2 className="aws-intro-title">
              <span className="aws-white-text">Cloud Infrastructure Meets</span> <br />
              <span className="aws-grey-text">Intelligent Data Management</span>
            </h2>
            
            <p className="aws-intro-description">
              Modern businesses generate massive amounts of data every day. Managing that data securely while maintaining scalable infrastructure requires the right cloud architecture and data strategy.
            </p>

            <div className="aws-intro-features-list">
              <h4 className="list-heading">Our AWS and Data Management services help organizations:</h4>
              <ul>
                <li>
                  <span className="check-icon">✓</span> Modernize legacy infrastructure
                </li>
                <li>
                  <span className="check-icon">✓</span> Build scalable AWS environments
                </li>
                <li>
                  <span className="check-icon">✓</span> Secure business-critical data
                </li>
                <li>
                  <span className="check-icon">✓</span> Optimize databases and storage
                </li>
                <li>
                  <span className="check-icon">✓</span> Build reliable data pipelines
                </li>
                <li>
                  <span className="check-icon">✓</span> Transform raw data into actionable insights
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: 4 Compact Statistics / Cards Grid */}
          <div className="aws-intro-right">
            <div className="intro-cards-grid">
              
              {/* Card 1 */}
              <div className="intro-stat-card">
                <div className="stat-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3>SCALABLE</h3>
                <p>Cloud</p>
              </div>

              {/* Card 2 */}
              <div className="intro-stat-card">
                <div className="stat-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <rect x="9.5" y="11" width="5" height="4" rx="1"></rect>
                  </svg>
                </div>
                <h3>SECURE</h3>
                <p>Data</p>
              </div>

              {/* Card 3 */}
              <div className="intro-stat-card">
                <div className="stat-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="8" rx="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                  </svg>
                </div>
                <h3>RELIABLE</h3>
                <p>Infrastructure</p>
              </div>

              {/* Card 4 */}
              <div className="intro-stat-card">
                <div className="stat-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 21H3v-3h18v3M3 11h18v3H3v-3M5 3h14v3H5V3z"></path>
                  </svg>
                </div>
                <h3>INSIGHTFUL</h3>
                <p>Analytics</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 03. Data Management Services Section */}
      <section className="aws-services-section">
        <div className="aws-services-container">
          
          <div className="services-section-header">
            <div className="aws-badge">
              <span className="badge-dot"></span> Data Management Services
            </div>
            <h2 className="aws-services-title">
              <span className="aws-white-text">Comprehensive</span> <span className="aws-grey-text">Data Management Solutions</span>
            </h2>
            <p className="aws-services-subtitle">
              End-to-end management frameworks to streamline data flow, ensure high integrity, and empower secure access across platforms.
            </p>
          </div>

          <div className="services-grid-6">
            
            {/* Card 1 — Data Integration */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <span className="service-card-num">01</span>
              </div>
              <h3>Data Integration</h3>
              <p>Connect data from multiple sources seamlessly and reliably.</p>
              <ul className="service-tags-list">
                <li>Multi-Source Sync</li>
                <li>Pipelines</li>
                <li>ETL Workflows</li>
                <li>Unified Views</li>
              </ul>
            </div>

            {/* Card 2 — Data Migration */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                    <polyline points="16 12 12 8 8 12"></polyline>
                    <line x1="12" y1="8" x2="12" y2="21"></line>
                  </svg>
                </div>
                <span className="service-card-num">02</span>
              </div>
              <h3>Data Migration</h3>
              <p>Move data securely across platforms with minimal downtime.</p>
              <ul className="service-tags-list">
                <li>Secure Transfer</li>
                <li>Cross-Platform</li>
                <li>Zero Disruption</li>
                <li>Validation</li>
              </ul>
            </div>

            {/* Card 3 — Database Management */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <span className="service-card-num">03</span>
              </div>
              <h3>Database Management</h3>
              <p>Optimize database performance, availability, and resource scaling.</p>
              <ul className="service-tags-list">
                <li>Performance Tuning</li>
                <li>Indexing</li>
                <li>High Availability</li>
                <li>Scaling</li>
              </ul>
            </div>

            {/* Card 4 — Data Governance */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <span className="service-card-num">04</span>
              </div>
              <h3>Data Governance</h3>
              <p>Maintain quality, security & control throughout data lifecycles.</p>
              <ul className="service-tags-list">
                <li>Data Quality</li>
                <li>Compliance</li>
                <li>Access Control</li>
                <li>Auditing</li>
              </ul>
            </div>

            {/* Card 5 — Data Security */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <span className="service-card-num">05</span>
              </div>
              <h3>Data Security</h3>
              <p>Protect sensitive business data against evolving cyber threats.</p>
              <ul className="service-tags-list">
                <li>Encryption</li>
                <li>Threat Defense</li>
                <li>Backup Control</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            {/* Card 6 — Data Analytics */}
            <div className="service-card-item">
              <div className="service-card-top">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <span className="service-card-num">06</span>
              </div>
              <h3>Data Analytics</h3>
              <p>Generate useful business insights to make informed decisions.</p>
              <ul className="service-tags-list">
                <li>Business Intelligence</li>
                <li>Reporting</li>
                <li>Visualizations</li>
                <li>Predictive Metrics</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 04. Security & Compliance Section */}
      <section className="aws-security-section">
        <div className="aws-security-container">
          
          <div className="aws-security-content-side">
            <div className="aws-badge">
              <span className="badge-dot"></span> Security & Compliance
            </div>
            
            <h2 className="aws-security-title">
              <span className="aws-white-text">Secure Your Cloud.</span> <br />
              <span className="aws-grey-text">Protect Your Data.</span>
            </h2>
            
            <p className="aws-security-description">
              Safeguard your entire cloud infrastructure and sensitive assets with multi-layered compliance frameworks, strict access barriers, and resilient disaster recovery strategies.
            </p>

            <div className="security-blocks-grid">
              
              <div className="sec-block-item">
                <div className="sec-block-icon">🔑</div>
                <div>
                  <h4>Identity & Access</h4>
                  <p>Control who can access your AWS resources and data.</p>
                </div>
              </div>

              <div className="sec-block-item">
                <div className="sec-block-icon">🛡️</div>
                <div>
                  <h4>Data Encryption</h4>
                  <p>Protect sensitive data at rest and in transit.</p>
                </div>
              </div>

              <div className="sec-block-item">
                <div className="sec-block-icon">🌐</div>
                <div>
                  <h4>Network Security</h4>
                  <p>Secure cloud workloads using VPCs, security groups and network controls.</p>
                </div>
              </div>

              <div className="sec-block-item">
                <div className="sec-block-icon">💾</div>
                <div>
                  <h4>Backup & Recovery</h4>
                  <p>Protect business-critical information against data loss.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="aws-security-visual-side">
            <div className="architecture-card security-arch-card">
              <div className="arch-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="arch-card-heading">SECURITY FRAMEWORK</span>
              </div>

              <div className="arch-tree">
                <div className="arch-node parent-node security-parent-node">
                  <div className="node-icon">🛡️</div>
                  <span>SECURITY</span>
                </div>

                <div className="connector-vertical"></div>

                <div className="arch-grid-3">
                  <div className="arch-node child-node">
                    <div className="node-icon">🔑</div>
                    <h4>IDENTITY</h4>
                    <span className="service-tag">IAM</span>
                  </div>
                  <div className="arch-node child-node">
                    <div className="node-icon">🔒</div>
                    <h4>ENCRYPT</h4>
                    <span className="service-tag">SSL/KMS</span>
                  </div>
                  <div className="arch-node child-node">
                    <div className="node-icon">🌐</div>
                    <h4>NETWORK</h4>
                    <span className="service-tag">VPC</span>
                  </div>
                </div>

                <div className="connector-vertical"></div>

                <div className="arch-node parent-node final-node security-final-node">
                  <div className="node-icon">💾</div>
                  <span>BACKUP & RECOVERY</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05. Our AWS & Data Management Process Section */}
      <section className="aws-process-section">
        <div className="aws-process-container">
          
          <div className="services-section-header">
            <div className="aws-badge">
              <span className="badge-dot"></span> Implementation Roadmap
            </div>
            <h2 className="aws-services-title">
              <span className="aws-white-text">From Strategy</span> <span className="aws-grey-text">to Implementation</span>
            </h2>
            <p className="aws-services-subtitle">
              A structured step-by-step framework ensuring seamless execution from initial discovery to optimal scaling.
            </p>
          </div>

          <div className="process-timeline-grid">
            
            {/* Step 01 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">01</div>
              <div className="process-card-content">
                <h3>DISCOVER</h3>
                <p>Understand your infrastructure, applications and data.</p>
              </div>
            </div>

            <div className="process-timeline-arrow">↓</div>

            {/* Step 02 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">02</div>
              <div className="process-card-content">
                <h3>ASSESS</h3>
                <p>Identify risks, challenges and optimization opportunities.</p>
              </div>
            </div>

            <div className="process-timeline-arrow">↓</div>

            {/* Step 03 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">03</div>
              <div className="process-card-content">
                <h3>DESIGN</h3>
                <p>Create scalable AWS and data architecture.</p>
              </div>
            </div>

            <div className="process-timeline-arrow">↓</div>

            {/* Step 04 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">04</div>
              <div className="process-card-content">
                <h3>IMPLEMENT</h3>
                <p>Deploy infrastructure, databases and data pipelines.</p>
              </div>
            </div>

            <div className="process-timeline-arrow">↓</div>

            {/* Step 05 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">05</div>
              <div className="process-card-content">
                <h3>SECURE</h3>
                <p>Apply security, access control and governance.</p>
              </div>
            </div>

            <div className="process-timeline-arrow">↓</div>

            {/* Step 06 */}
            <div className="process-timeline-item">
              <div className="process-step-badge">06</div>
              <div className="process-card-content">
                <h3>OPTIMIZE</h3>
                <p>Monitor performance, cost and data quality.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}