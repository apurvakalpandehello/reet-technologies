import React from "react";
import "./Footer.css";
import logoImg from "../assets/images/REET TECHNOLOGY.png"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Column 1: REET Technologies Big Logo, Title & Descriptions */}
        <div className="footer-column brand-column">
          <div className="brand-header">
            {/* Motha Logo Wrapper */}
            <div className="brand-logo-wrapper">
              <img 
                src={logoImg} 
                alt="REET Technologies Logo" 
                className="brand-logo-img" 
              />
            </div>
          </div>

          <p className="brand-headline">
            Building Digital Solutions That Drive Business Growth.
          </p>

          <p className="brand-description">
            REET Technologies delivers innovative, scalable, and future-ready technology solutions that help businesses transform ideas into powerful digital experiences.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="column-heading">Quick Links</h3>
          <ul className="footer-link-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="footer-column">
          <h3 className="column-heading">Our Services</h3>
          <ul className="footer-link-list">
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#mobile-app-development">Mobile App Development</a></li>
            <li><a href="#software-development">Software Development</a></li>
            <li><a href="#ui-ux-design">UI/UX Design</a></li>
            <li><a href="#cloud-solutions">Cloud Solutions</a></li>
            <li><a href="#api-development-integration">API Development &amp; Integration</a></li>
            <li><a href="#it-consulting">IT Consulting</a></li>
            <li><a href="#digital-transformation">Digital Transformation</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us & Social Media Links */}
        <div className="footer-column">
          <h3 className="column-heading">Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-label">Email:</span>{" "}
              <a href="mailto:info@reettechnologies.com" className="contact-link">
                info@reettechnologies.com
              </a>
            </p>
            <p className="contact-item">
              <span className="contact-label">Phone:</span>{" "}
              <a href="tel:+91XXXXXXXXXX" className="contact-link">
                +91 XXXXX XXXXX
              </a>
            </p>
            <p className="contact-item">
              <span className="contact-label">Location:</span> Pune, Maharashtra, India
            </p>
          </div>

          <h4 className="follow-title">Follow Us</h4>
          <div className="social-icons-row">
            {/* LinkedIn Icon */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn" 
              className="social-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.67 1.66 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.66-1.67-1.66z"/>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram" 
              className="social-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook Icon */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook" 
              className="social-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub" 
              className="social-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © 2024 REET Technologies. All Rights Reserved.
        </p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="legal-separator">|</span>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;