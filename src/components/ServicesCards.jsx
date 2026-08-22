import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesCards.css';

// बॅकग्राउंड इमेजेसचे पाथ
import awsBgImage from '../assets/images/BG image.png'; 
import serverBgImage from '../assets/images/ServerBG.png';
import dataBgImage from '../assets/images/DataManagementBG.png';

export default function ServicesCards() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrollingRef = useRef(false);
  const touchStartY = useRef(0);
  const sectionRef = useRef(null);

  const servicesData = [
    {
      id: "aws",
      bg: awsBgImage,
      type: "aws-classic",
      routePath: "/services/cloud-solutions",
      category: "AWS & DEVOPS",
      titleLine1: "CLOUD.",
      titleLine2: "CONTROL.",
      titleLine3: "PERFORMANCE.",
      description: "End-to-end AWS & DevOps solutions that give you complete control, security and unmatched performance.",
      items: [
        {
          label: "SERVER",
          sub: "MANAGEMENT",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="8" rx="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          )
        },
        {
          label: "COMPUTE",
          sub: "SERVICES",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          )
        },
        {
          label: "DATABASE",
          sub: "SERVICES",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          )
        },
        {
          label: "STORAGE",
          sub: "SERVICES",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 8l-2 13H5L3 8"></path>
              <path d="M1 3h22v5H1z"></path>
              <path d="M10 12h4"></path>
            </svg>
          )
        }
      ]
    },
    {
      id: "server-management",
      bg: serverBgImage,
      type: "server-management",
      routePath: "/services/server-management",
      titleMain: "SERVER",
      titleGold: "MANAGEMENT",
      description: "Reliable Server Administration & Infrastructure Management",
      items: [
        {
          title: "Cloud Servers",
          desc: "Scalable, secure, and high-performance cloud solutions.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              <rect x="8" y="11" width="8" height="3" rx="0.5" stroke="#f6a821"></rect>
              <circle cx="14.5" cy="12.5" r="0.4" fill="#f6a821"></circle>
              <rect x="8" y="15" width="8" height="3" rx="0.5" stroke="#f6a821"></rect>
              <circle cx="14.5" cy="16.5" r="0.4" fill="#f6a821"></circle>
            </svg>
          )
        },
        {
          title: "Web Servers",
          desc: "Optimized web server management for speed, reliability and uptime.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
              <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              <rect x="14" y="12" width="7" height="6" rx="1" fill="#0f172a" stroke="#f6a821"></rect>
              <circle cx="19" cy="14" r="0.5" fill="#f6a821"></circle>
              <circle cx="19" cy="16" r="0.5" fill="#f6a821"></circle>
            </svg>
          )
        },
        {
          title: "VPS (Virtual Private Servers)",
          desc: "Dedicated resources. Full control. Maximum flexibility.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="4" y="3" width="16" height="5" rx="1"></rect>
              <circle cx="16" cy="5.5" r="0.6" fill="#f6a821"></circle>
              <circle cx="18" cy="5.5" r="0.6" fill="#f6a821"></circle>
              <rect x="4" y="10" width="16" height="5" rx="1"></rect>
              <circle cx="16" cy="12.5" r="0.6" fill="#f6a821"></circle>
              <circle cx="18" cy="12.5" r="0.6" fill="#f6a821"></circle>
              <rect x="4" y="17" width="16" height="5" rx="1"></rect>
              <circle cx="16" cy="19.5" r="0.6" fill="#f6a821"></circle>
              <circle cx="18" cy="19.5" r="0.6" fill="#f6a821"></circle>
            </svg>
          )
        },
        {
          title: "Linux Servers",
          desc: "Secure, stable, and efficient Linux server administration.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 3c-2 0-3.5 1.5-3.5 3.5 0 1 .3 2.2.8 3.5-.8.5-2.3 2-2.3 4.5 0 2.5 1.8 4.5 5 4.5s5-2 5-4.5c0-2.5-1.5-4-2.3-4.5.5-1.3.8-2.5.8-3.5C15.5 4.5 14 3 12 3z"></path>
              <circle cx="10.5" cy="6.5" r="0.5" fill="currentColor"></circle>
              <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"></circle>
              <path d="M10 19c-2 1-3.5 1.5-3.5 2 0 1 2.5 1 5.5 1s5.5 0 5.5-1c0-.5-1.5-1-3.5-2" stroke="#f6a821"></path>
            </svg>
          )
        }
      ]
    },
    {
      id: "data-management",
      bg: dataBgImage,
      type: "data-management-direct",
      routePath: "/services/aws-data", // Last card route directing to AWS & Data Management page
      titlePrefix: "YOUR ",
      titleGold: "DATA MANAGEMENT,",
      titleLine2: "SCALING AND",
      titleLine3: "PERFORMANCE PARTNERS.",
      tagline: "Secure your Data.",
      description: "Smart solutions for migration, storage, security and cloud.",
      items: [
        {
          title: "DATA MIGRATION",
          desc: "Seamless migration with zero disruption.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              <polyline points="12 13 12 8 9.5 10.5"></polyline>
              <line x1="12" y1="8" x2="14.5" y2="10.5"></line>
            </svg>
          )
        },
        {
          title: "DATA STORAGE",
          desc: "Scalable, reliable and high-performance storage.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <ellipse cx="12" cy="5" rx="8" ry="2.5"></ellipse>
              <path d="M4 5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5"></path>
              <path d="M4 11v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6"></path>
              <circle cx="8" cy="11" r="0.75" fill="currentColor"></circle>
              <circle cx="8" cy="17" r="0.75" fill="currentColor"></circle>
            </svg>
          )
        },
        {
          title: "DATA SECURITY",
          desc: "Advanced security to protect what matters.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <rect x="9.5" y="11" width="5" height="4" rx="1"></rect>
              <path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11"></path>
            </svg>
          )
        },
        {
          title: "CLOUD SOLUTIONS",
          desc: "End-to-end cloud solutions built for your business.",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              <circle cx="12" cy="14" r="1.5"></circle>
              <line x1="12" y1="15.5" x2="12" y2="19"></line>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          )
        }
      ]
    }
  ];

  const totalSlides = servicesData.length;

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisibleInViewport = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isVisibleInViewport) return;

      if (e.deltaY > 0) {
        if (currentSlide < totalSlides - 1) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            setCurrentSlide((prev) => prev + 1);
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }
        }
      } else if (e.deltaY < 0) {
        if (currentSlide > 0) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            setCurrentSlide((prev) => prev - 1);
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisibleInViewport = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isVisibleInViewport) return;

      const touchEndY = e.touches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (diffY > 40) {
        if (currentSlide < totalSlides - 1) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            setCurrentSlide((prev) => prev + 1);
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }
        }
      } else if (diffY < -40) {
        if (currentSlide > 0) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            setCurrentSlide((prev) => prev - 1);
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }
        }
      }
    };

    const container = sectionRef.current;
    if (container) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSlide, totalSlides]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section 
      ref={sectionRef}
      id="aws-ppt-fullscreen-viewport"
      className="aws-ppt-fullscreen-viewport"
    >
      <div className="aws-override-stack-wrapper">
        {servicesData.map((item, index) => {
          let overrideClass = "override-waiting-bottom";

          if (index < currentSlide) {
            overrideClass = "override-passed-under";
          } else if (index === currentSlide) {
            overrideClass = "override-active-top";
          } else {
            overrideClass = "override-waiting-bottom";
          }

          return (
            <div 
              className={`aws-fullscreen-slide slide-theme-${item.type} ${overrideClass}`}
              key={item.id}
              style={{ 
                backgroundImage: `url(${item.bg})`,
                zIndex: index + 1
              }}
            >
              <div className="aws-dark-overlay"></div>

              {/* Slide 1: AWS & DevOps Layout */}
              {item.type === 'aws-classic' && (
                <div className="aws-content-container">
                  <div className="aws-top-meta">
                    <h2 className="aws-metal-category">{item.category}</h2>
                  </div>

                  <h1 className="aws-main-headline">
                    <span className="aws-line-white">{item.titleLine1}</span>
                    <span className="aws-line-gold">{item.titleLine2}</span>
                    <span className="aws-line-white">{item.titleLine3}</span>
                  </h1>

                  <div className="aws-gold-line"></div>

                  <p className="aws-description-text">
                    {item.description}
                  </p>

                  <div className="aws-split-wrapper">
                    <div className="aws-icons-row">
                      {item.items.map((feat, idx) => (
                        <div className="aws-icon-card" key={idx}>
                          <div className="aws-icon-box">
                            {feat.icon}
                          </div>
                          <div className="aws-icon-labels">
                            <span className="aws-lbl-main">{feat.label}</span>
                            <span className="aws-lbl-sub">{feat.sub}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="aws-action-row">
                      <button 
                        className="aws-explore-btn"
                        onClick={() => handleNavigate(item.routePath)}
                      >
                        <span>Explore More</span>
                        <span className="aws-arrow-circle">➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 2: Server Management Layout */}
              {item.type === 'server-management' && (
                <div className="sm-content-container">
                  <h1 className="sm-headline">
                    <span>{item.titleMain}</span><br />
                    <span className="sm-gold-text">{item.titleGold}</span>
                  </h1>

                  <div className="sm-gold-shortline"></div>

                  <p className="sm-desc-text">{item.description}</p>

                  <div className="sm-split-wrapper">
                    <div className="sm-features-row">
                      {item.items.map((feat, idx) => (
                        <div className="sm-feature-box" key={idx}>
                          <div className="dm-feat-circle">
                            {feat.icon}
                          </div>
                          <h4 className="sm-feat-title">{feat.title}</h4>
                          <p className="sm-feat-desc">{feat.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="sm-action-row">
                      <button 
                        className="aws-explore-btn"
                        onClick={() => handleNavigate(item.routePath)}
                      >
                        <span>Explore More</span>
                        <span className="aws-arrow-circle">➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 3: Data Management Layout */}
              {item.type === 'data-management-direct' && (
                <div className="dm-content-container">
                  <h1 className="dm-headline">
                    <span>{item.titlePrefix}</span>
                    <span className="dm-gold-text">{item.titleGold}</span><br />
                    <span>{item.titleLine2}</span><br />
                    <span>{item.titleLine3}</span>
                  </h1>

                  <h2 className="dm-subtagline">
                    Secure your <span className="dm-gold-text">Data.</span>
                  </h2>

                  <div className="dm-desc-row">
                    <span className="dm-horiz-line"></span>
                    <p className="dm-desc-text">{item.description}</p>
                  </div>

                  <div className="dm-split-wrapper">
                    <div className="dm-features-row">
                      {item.items.map((feat, idx) => (
                        <div className="dm-feature-box" key={idx}>
                          <div className="dm-feat-circle">
                            {feat.icon}
                          </div>
                          <h4 className="dm-feat-title">{feat.title}</h4>
                          <p className="dm-feat-desc">{feat.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="dm-action-row">
                      <button 
                        className="aws-explore-btn"
                        onClick={() => handleNavigate(item.routePath)}
                      >
                        <span>Explore More</span>
                        <span className="aws-arrow-circle">➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </section>
  );
}