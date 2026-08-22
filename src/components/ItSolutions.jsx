import React from 'react';
import './Itsolution.css';
import { 
  ShieldCheck, 
  Users, 
  Cloud, 
  Building2, 
  Server, 
  Cpu 
} from 'lucide-react';

const ItSolutions = () => {
  return (
    <section className="it-hero-section">
      <div className="it-overlay"></div>

      {/* 3D Big Oval Rotating Icons Container */}
      <div className="hologram-beam-wrapper">
        {/* 3D Tilted Big Oval Orbit Plane */}
        <div className="oval-orbit-plane">
          <div className="oval-orbit-ring">
            
            <div className="oval-circle-icon item-1">
              <div className="icon-inner">
                <ShieldCheck size={24} />
              </div>
            </div>

            <div className="oval-circle-icon item-2">
              <div className="icon-inner">
                <Users size={24} />
              </div>
            </div>

            <div className="oval-circle-icon item-3">
              <div className="icon-inner">
                <Cloud size={24} />
              </div>
            </div>

            <div className="oval-circle-icon item-4">
              <div className="icon-inner">
                <Building2 size={24} />
              </div>
            </div>

            <div className="oval-circle-icon item-5">
              <div className="icon-inner">
                <Server size={24} />
              </div>
            </div>

            <div className="oval-circle-icon item-6">
              <div className="icon-inner">
                <Cpu size={24} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="it-container">
        {/* Left Side Content Container */}
        <div className="it-content-left">
          <span className="it-tagline">SERVICE IT SOLUTIONS</span>
          
          <h1 className="it-title">
            Your Business <span>Progress Matters</span>
          </h1>

          <p className="it-description">
            Building future-ready digital infrastructure for businesses — with 20+ years of proven expertise.
          </p>

          <div className="it-features">
            <div className="it-feature-item">
              <h4>Personalised Client Consulting</h4>
            </div>
            <div className="it-feature-item">
              <h4>Providing end to end Tech Solutions for your business Problems</h4>
            </div>
          </div>

          <button className="it-btn">
            Tell Us How Can We Help
          </button>

          {/* Stats Grid */}
          <div className="it-stats-grid">
            <div className="it-stat-card">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="it-stat-card">
              <h3>8+</h3>
              <p>Industries Catered</p>
            </div>
            <div className="it-stat-card">
              <h3>10+</h3>
              <p>Multinational Clients</p>
            </div>
            <div className="it-stat-card">
              <h3>95%</h3>
              <p>Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolutions;