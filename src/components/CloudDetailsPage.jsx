import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CloudDetailsPage.css';

// होम बॅनर इमेज इम्पोर्ट (bannerimage.jpeg)
import awsHomeBanner from '../assets/images/bannerimage.jpeg';

// ================= SECTION 2 VIDEO IMPORT =================
import sectionVideo from '../assets/images/video/Sectionsecond.mp4';

// ================= SECTION 3 BACKGROUND IMAGE IMPORT (secondsection.jpeg) =================
import section3BgImage from '../assets/images/secondsection.jpeg';

// ================= 1. CODE SLATE 1 (TOP-LEFT) =================
const scriptCodeSlate1 = [
  "const design = \"Figma\";",
  "const code = \"Next.js\";",
  "",
  "function buildProduct() {",
  "    return design + code;",
  "}"
];

// ================= 2. CODE SLATE 2 (BOTTOM-LEFT TERMINAL) =================
const scriptCodeSlate2 = [
  "npm run build",
  "building project...",
  "build successful ✓"
];

// Advanced Multi-Color Syntax Color Tokenizer
const renderHighlightedCode = (text) => {
  const lines = text.split('\n');
  return lines.map((line, lIdx) => {
    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return (
        <div key={lIdx} className="syntax-comment">
          {line}
        </div>
      );
    }

    const parts = line.split(/('(?:\\'|[^'])*'|"(?:\\"|[^"])*")/g);

    return (
      <div key={lIdx} className="syntax-line">
        {parts.map((part, pIdx) => {
          if (part.startsWith("'") || part.startsWith('"')) {
            return (
              <span key={pIdx} className="syntax-string">
                {part}
              </span>
            );
          }

          const tokens = part.split(/(\b(?:import|from|const|new|await|if|export|default|return|true|false|pipeline|trigger|resource|deploy_strategy|echo|function)\b|\b(?:EC2|AutoScaling|ELBv2|CloudWatch|SecurityGroup|VPCManager|Metrics|console)\b|[{}\(\)\[\]:,.;=])/g);

          return tokens.map((token, tIdx) => {
            if (['import', 'from', 'const', 'new', 'await', 'if', 'export', 'default', 'return', 'true', 'false', 'pipeline', 'trigger', 'resource', 'deploy_strategy', 'echo', 'function'].includes(token)) {
              return <span key={tIdx} className="syntax-keyword">{token}</span>;
            }
            if (['EC2', 'AutoScaling', 'ELBv2', 'CloudWatch', 'SecurityGroup', 'VPCManager', 'Metrics', 'console'].includes(token)) {
              return <span key={tIdx} className="syntax-class">{token}</span>;
            }
            if (['{', '}', '(', ')', '[', ']', ':', ',', ';', '.', '='].includes(token)) {
              return <span key={tIdx} className="syntax-symbol">{token}</span>;
            }
            return <span key={tIdx} className="syntax-variable">{token}</span>;
          });
        })}
      </div>
    );
  });
};

// Section 3: 12 AWS Expertise Items
const awsExpertiseItems = [
  {
    id: 'ex1',
    title: 'AWS EC2 Instance Deployment & Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'ex2',
    title: 'AWS S3 Bucket Configuration & Storage Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M3 6h18"></path>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    )
  },
  {
    id: 'ex3',
    title: 'AWS Lambda Serverless Solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 'ex4',
    title: 'AWS VPC Network Configuration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    )
  },
  {
    id: 'ex5',
    title: 'AWS RDS Database Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  {
    id: 'ex6',
    title: 'Cloud Infrastructure Monitoring',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  {
    id: 'ex7',
    title: 'Data Backup & Disaster Recovery Planning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    )
  },
  {
    id: 'ex8',
    title: 'AWS Security & Access Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  },
  {
    id: 'ex9',
    title: 'Cost Optimization & Resource Utilization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: 'ex10',
    title: 'Performance Monitoring & Troubleshooting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 'ex11',
    title: 'Cloud Migration Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      </svg>
    )
  },
  {
    id: 'ex12',
    title: 'Auto Scaling & Load Balancer Configuration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  }
];

// Section 4: AWS Cloud Services
const awsCloudServices = [
  {
    id: 's1',
    title: 'Cloud Infrastructure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    desc: 'Build reliable and scalable cloud infrastructure tailored to your business requirements.'
  },
  {
    id: 's2',
    title: 'Cloud Migration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    desc: 'Move applications, databases, and workloads to the cloud with minimal disruption.'
  },
  {
    id: 's3',
    title: 'Cloud Scalability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    desc: 'Scale computing and storage resources based on your dynamic business demand.'
  },
  {
    id: 's4',
    title: 'Cloud Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    desc: 'Protect your infrastructure, applications, and data with robust security practices.'
  },
  {
    id: 's5',
    title: 'Backup & Recovery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    desc: 'Keep critical business data protected with reliable backup and recovery strategies.'
  },
  {
    id: 's6',
    title: 'Cloud Optimization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pro-svg-icon">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    desc: 'Improve performance while optimizing cloud resource utilization and costs.'
  }
];

// Section 5: Key Features Data
const keyFeaturesData = [
  {
    id: 'kf1',
    side: 'left',
    titleHighlight: 'Installation, Configuration & Activation',
    titleRest: 'of AWS Instances',
    icon: (
      <div className="kf-brand-aws">
        <span className="kf-aws-text">aws</span>
        <div className="kf-aws-smile"></div>
      </div>
    )
  },
  {
    id: 'kf2',
    side: 'left',
    titleHighlight: 'Automated',
    titleRest: 'Data Backup Solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    )
  },
  {
    id: 'kf3',
    side: 'left',
    titleHighlight: 'Secure Data',
    titleRest: 'Storage & Management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  {
    id: 'kf4',
    side: 'left',
    titleHighlight: 'Complete',
    titleRest: 'Server Monitoring & Administration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'kf5',
    side: 'right',
    titleHighlight: 'Linux Server',
    titleRest: 'Management & Optimization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M12 2a10 10 0 0 0-7.5 16.5c1 1 2 2 2.5 3.5h10c.5-1.5 1.5-2.5 2.5-3.5A10 10 0 0 0 12 2z"></path>
        <circle cx="9" cy="10" r="1.5" fill="currentColor"></circle>
        <circle cx="15" cy="10" r="1.5" fill="currentColor"></circle>
      </svg>
    )
  },
  {
    id: 'kf6',
    side: 'right',
    titleHighlight: 'Cloud',
    titleRest: 'Security Implementation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    id: 'kf7',
    side: 'right',
    titleHighlight: 'Infrastructure',
    titleRest: 'Performance Optimization',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 'kf8',
    side: 'right',
    titleHighlight: '24/7',
    titleRest: 'Monitoring & Technical Support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="kf-svg-icon">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.63-5.63"></path>
      </svg>
    )
  }
];

export default function CloudDetailsPage() {
  const navigate = useNavigate();

  const [activeNode, setActiveNode] = useState('s1');

  const [displayedText1, setDisplayedText1] = useState("");
  const [lineIdx1, setLineIdx1] = useState(0);
  const [charIdx1, setCharIdx1] = useState(0);

  const [displayedText2, setDisplayedText2] = useState("");
  const [lineIdx2, setLineIdx2] = useState(0);
  const [charIdx2, setCharIdx2] = useState(0);

  const editorBodyRef1 = useRef(null);
  const editorBodyRef2 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (editorBodyRef1.current) editorBodyRef1.current.scrollTop = editorBodyRef1.current.scrollHeight;
  }, [displayedText1]);

  useEffect(() => {
    if (editorBodyRef2.current) editorBodyRef2.current.scrollTop = editorBodyRef2.current.scrollHeight;
  }, [displayedText2]);

  useEffect(() => {
    if (lineIdx1 < scriptCodeSlate1.length) {
      const currentLine = scriptCodeSlate1[lineIdx1];
      if (charIdx1 < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText1(prev => prev + currentLine[charIdx1]);
          setCharIdx1(prev => prev + 1);
        }, 15);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText1(prev => prev + "\n");
          setLineIdx1(prev => prev + 1);
          setCharIdx1(0);
        }, 20);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayedText1("");
        setLineIdx1(0);
        setCharIdx1(0);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lineIdx1, charIdx1]);

  useEffect(() => {
    if (lineIdx2 < scriptCodeSlate2.length) {
      const currentLine = scriptCodeSlate2[lineIdx2];
      if (charIdx2 < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText2(prev => prev + currentLine[charIdx2]);
          setCharIdx2(prev => prev + 1);
        }, 15);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText2(prev => prev + "\n");
          setLineIdx2(prev => prev + 1);
          setCharIdx2(0);
        }, 20);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setDisplayedText2("");
        setLineIdx2(0);
        setCharIdx2(0);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [lineIdx2, charIdx2]);

  const [coords4, setCoords4] = useState({ x: 0, y: 0 });
  const handleMouseMove4 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords4({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };
  const handleMouseLeave4 = () => setCoords4({ x: 0, y: 0 });

  const [coords5, setCoords5] = useState({ x: 0, y: 0 });
  const handleMouseMove5 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords5({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };
  const handleMouseLeave5 = () => setCoords5({ x: 0, y: 0 });

  return (
    <div className="cd-page-full-wrapper">

      {/* =========================================================================
          SECTION 1: HERO 3D MULTI-SLATE TRANSPARENT CODING ENVIRONMENT
          ========================================================================= */}
      <section 
        className="cd-root"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 100%),
            url(${awsHomeBanner})
          `
        }}
      >
        <div className="cd-container">
          <div className="cd-left">
            <div className="cd-badge">
              <span className="cd-badge-dot"></span>
              <span className="cd-badge-text">CLOUD &amp; SERVER SOLUTIONS</span>
            </div>

            <h1 className="cd-title">
              <span className="cd-title-sub">AWS &amp; DEVOPS,</span>
              <span className="cd-title-main">
                <span className="cd-text-white-pure">SERVER MANAGEMENT</span>
              </span>
            </h1>

            <div className="cd-feature-list">
              <div className="feature-item">
                <div className="feature-icon cyan-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <rect x="9" y="10" width="6" height="5" rx="1"></rect>
                    <path d="M10 10V8a2 2 0 1 1 4 0v2"></path>
                  </svg>
                </div>
                <div className="feature-straight-line cyan-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading cyan-heading">SECURE.</h3>
                  <p className="feature-subtext">Built to protect what matters most.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon orange-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="feature-straight-line orange-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading orange-heading">OPTIMIZE.</h3>
                  <p className="feature-subtext">Maximize performance and efficiency.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon purple-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="custom-f-svg">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="feature-straight-line purple-line"></div>
                <div className="feature-content-box">
                  <h3 className="feature-heading purple-heading">SCALE.</h3>
                  <p className="feature-subtext">Seamlessly grow with your business.</p>
                </div>
              </div>
            </div>

            <p className="cd-description">
              Build a secure, scalable, and high-performance cloud environment with 
              smart server management solutions designed to help your business grow.
            </p>
          </div>

          <div className="cd-right">
            <div className="slates-composition-wrapper">
              <div className="code-slate-card new-slate-tl">
                <div className="slate-header">
                  <span className="slate-filename">Editor</span>
                </div>
                <div className="slate-editor-body" ref={editorBodyRef1}>
                  <pre className="code-display">
                    {renderHighlightedCode(displayedText1)}
                    <span className="typing-cursor">|</span>
                  </pre>
                </div>
              </div>

              <div className="code-slate-card new-slate-tr">
                <div className="ai-agent-header">
                  <div className="ai-agent-status-wrapper">
                    <span className="ai-green-dot"></span>
                    <span className="ai-agent-title">AI AGENT</span>
                  </div>
                  <span className="ai-online-text">Online</span>
                </div>
                <div className="ai-agent-body">
                  <div className="ai-pill-bubble designing-pill">Designing UI...</div>
                  <div className="ai-pill-bubble generating-pill">Generating Code...</div>
                  <div className="ai-pill-bubble deploy-pill">Deploy Ready ✓</div>
                </div>
                <div className="ai-agent-footer-glow"></div>
              </div>

              <div className="code-slate-card new-slate-br">
                <div className="slate-header">
                  <span className="slate-filename">Figma Design</span>
                </div>
                <div className="mockup-ui-body">
                  <div className="mockup-line-group">
                    <div className="mockup-line short"></div>
                    <div className="mockup-line short"></div>
                    <div className="mockup-line short"></div>
                  </div>
                  <div className="mockup-main-box"></div>
                  <div className="mockup-footer-row">
                    <div className="mockup-mini-card"></div>
                    <div className="mockup-mini-card"></div>
                  </div>
                </div>
              </div>

              <div className="code-slate-card new-slate-bl">
                <div className="slate-editor-body terminal-body" ref={editorBodyRef2}>
                  <pre className="code-display">
                    {renderHighlightedCode(displayedText2)}
                    <span className="typing-cursor">|</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: REET TECHNOLOGIES MANAGED SERVICES
          ========================================================================= */}
      <section className="reet-intro-root">
        <video 
          className="reet-bg-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={sectionVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="reet-intro-bg-overlay"></div>
        <div className="reet-intro-bg-glow"></div>

        <div className="reet-intro-container">
          <div className="reet-intro-left">
            <div className="reet-badge">
              <span className="reet-badge-dot"></span>
              <span>MANAGED CLOUD ARCHITECTURE</span>
            </div>

            <h2 className="reet-main-heading">
              AWS Cloud Management <br />
              <span className="reet-heading-gradient">&amp; Support</span>
            </h2>

            <p className="reet-paragraph">
              Reet Technologies offers professional AWS Managed Services designed to help businesses leverage the full power of Amazon Web Services. Our cloud experts manage, monitor, optimize, and secure your AWS environment, enabling you to focus on your core business operations.
            </p>

            <p className="reet-paragraph">
              We provide ongoing monthly and annual AWS management plans to ensure optimal cloud performance, cost efficiency, and infrastructure reliability.
            </p>
          </div>

          <div className="reet-intro-right">
            <div className="reet-anim-stage">
              <div className="ra-node cloud-node">Cloud (AWS)</div>
              <div className="ra-pulse-line">
                <div className="ra-glowing-dot"></div>
              </div>
              <div className="ra-node server-node">Server Administration</div>
              <div className="ra-pulse-line">
                <div className="ra-glowing-dot delay-dot"></div>
              </div>
              <div className="ra-node db-node">Database Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPREHENSIVE AWS SOLUTIONS
          ========================================================================= */}
      <section 
        className="comprehensive-aws-root"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 100%),
            url(${section3BgImage})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="section-header-centered">
          <div className="header-badge">
            <span>OUR AWS EXPERTISE INCLUDES</span>
          </div>
          <h2 className="section-main-title section-title-compact" style={{ whiteSpace: 'nowrap' }}>
            Comprehensive AWS Solutions<br />
            <span className="text-highlight-cyan">For Your Business</span>
          </h2>
          <p className="section-sub-title">
            We deliver secure, scalable, and high-performance cloud solutions tailored to your business needs.
          </p>
        </div>

        <div className="comprehensive-3col-wrapper">
          <div className="comp-column col-left">
            {awsExpertiseItems.slice(0, 6).map((item) => (
              <div key={item.id} className="comp-expertise-row">
                <span className="comp-row-icon">{item.icon}</span>
                <span className="comp-row-title">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="comp-column col-middle">
            <div className="comp-graphic-stage">
              <svg className="comp-svg-network" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="250" y2="70" className="comp-net-wire" />
                <line x1="250" y1="250" x2="410" y2="130" className="comp-net-wire" />
                <line x1="250" y1="250" x2="430" y2="290" className="comp-net-wire" />
                <line x1="250" y1="250" x2="370" y2="400" className="comp-net-wire" />
                <line x1="250" y1="250" x2="250" y2="430" className="comp-net-wire" />
                <line x1="250" y1="250" x2="130" y2="400" className="comp-net-wire" />
                <line x1="250" y1="250" x2="70" y2="290" className="comp-net-wire" />
                <line x1="250" y1="250" x2="90" y2="130" className="comp-net-wire" />
              </svg>

              <div className="comp-center-cloud-node official-aws-cloud">
                <div className="comp-cloud-glow"></div>
                <svg className="official-cloud-svg" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M125.8 45.4C124.2 30.6 111.4 19.3 95.8 19.3C83.2 19.3 72.5 26.6 67.5 37.1C61.4 31.8 53.4 28.5 44.5 28.5C24.4 28.5 8.1 44.8 8.1 64.9C8.1 69 8.8 73 10.1 76.7H128.8C141 76.7 151 66.7 151 54.5C151 43.1 142.1 33.7 130.8 32.7C129.8 37.7 128.1 41.7 125.8 45.4Z" fill="#ffffff" stroke="#ff9900" strokeWidth="6" strokeLinejoin="round"/>
                </svg>
                <div className="comp-cloud-inner">
                  <span className="comp-aws-text">aws</span>
                  <div className="comp-aws-smile"></div>
                </div>
              </div>

              <div className="comp-sat-node node-top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg></div>
              <div className="comp-sat-node node-top-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
              <div className="comp-sat-node node-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div>
              <div className="comp-sat-node node-bottom-right"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
              <div className="comp-sat-node node-bottom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
              <div className="comp-sat-node node-bottom-left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div>
              <div className="comp-sat-node node-left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
              <div className="comp-sat-node node-top-left"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sat-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
            </div>
          </div>

          <div className="comp-column col-right">
            {awsExpertiseItems.slice(6, 12).map((item) => (
              <div key={item.id} className="comp-expertise-row">
                <span className="comp-row-icon">{item.icon}</span>
                <span className="comp-row-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: AWS CLOUD SOLUTIONS (3D ECOSYSTEM)
          ========================================================================= */}
      <section className="aws-services-root" id="aws-services-section" style={{ backgroundColor: '#F0F0F0', color: '#17243D', paddingTop: '20px', paddingBottom: '50px' }}>
        <div className="section-header-centered" style={{ marginBottom: '20px' }}>
          <div className="header-badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8', color: '#0284c7' }}>
            <span>3D CLOUD ECOSYSTEM</span>
          </div>
          <h2 className="section-main-title" style={{ color: '#0f172a' }}>
            AWS CLOUD SOLUTIONS BUILT FOR <span className="text-highlight-cyan" style={{ background: 'linear-gradient(110deg, #0284c7 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>YOUR BUSINESS</span>
          </h2>
          <p className="section-sub-title" style={{ color: '#475569' }}>
            We design and manage cloud environments that are secure, flexible, and ready to scale with your business.
          </p>
        </div>

        <div className="hub-3d-layout-wrapper">
          <div className="services-column col-left">
            {awsCloudServices.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                className={`service-glass-card ${activeNode === item.id ? 'active-node-card' : ''}`}
                onMouseEnter={() => setActiveNode(item.id)}
                style={{ backgroundColor: '#060F1E', borderColor: 'rgba(56, 189, 248, 0.3)', boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="card-top-row">
                  <span className="service-icon-box" style={{ backgroundColor: 'rgba(56, 189, 248, 0.12)', borderColor: '#0284c7' }}>{item.icon}</span>
                  <span className="service-status-tag" style={{ backgroundColor: '#172554', color: '#38bdf8', border: '1px solid #1e3a8a' }}>AWS CERTIFIED</span>
                </div>
                <h3 className="service-card-title" style={{ color: '#ffffff' }}>{item.title}</h3>
                <p className="service-card-desc" style={{ color: '#94a3b8' }}>{item.desc}</p>
                <div className="card-hover-border"></div>
              </div>
            ))}
          </div>

          <div 
            className="hub-central-scene-container"
            onMouseMove={handleMouseMove4}
            onMouseLeave={handleMouseLeave4}
            style={{ height: '500px' }}
          >
            <div 
              className="hub-3d-canvas"
              style={{
                transform: `rotateX(${coords4.y * -12}deg) rotateY(${coords4.x * 14}deg)`
              }}
            >
              <div className="hub-orbital-ring ring-major" style={{ borderColor: 'rgba(14, 165, 233, 0.4)' }}></div>
              <div className="hub-orbital-ring ring-minor" style={{ borderColor: 'rgba(56, 189, 248, 0.5)' }}></div>

              <svg className="hub-connections-svg" viewBox="0 0 500 500">
                <line x1="250" y1="250" x2="60" y2="120" className="hub-laser-wire" style={{ stroke: 'rgba(14, 165, 233, 0.6)' }} />
                <line x1="250" y1="250" x2="440" y2="120" className="hub-laser-wire" style={{ stroke: 'rgba(14, 165, 233, 0.6)' }} />
                <line x1="250" y1="250" x2="60" y2="380" className="hub-laser-wire" style={{ stroke: 'rgba(14, 165, 233, 0.6)' }} />
                <line x1="250" y1="250" x2="440" y2="380" className="hub-laser-wire" style={{ stroke: 'rgba(14, 165, 233, 0.6)' }} />
                <circle cx="60" cy="120" r="4" fill="#0ea5e9" />
                <circle cx="440" cy="120" r="4" fill="#0ea5e9" />
                <circle cx="60" cy="380" r="4" fill="#0ea5e9" />
                <circle cx="440" cy="380" r="4" fill="#0ea5e9" />
              </svg>

              <div className="quantum-holo-node" style={{ width: '260px', height: '260px' }}>
                <div className="holo-orbit-ring ring-one" style={{ width: '180px', height: '180px', borderColor: 'rgba(14, 165, 233, 0.6)' }}></div>
                <div className="holo-orbit-ring ring-two" style={{ width: '230px', height: '230px', borderColor: 'rgba(56, 189, 248, 0.4)' }}></div>

                <div style={{
                  position: 'relative',
                  width: '140px',
                  height: '140px',
                  background: 'linear-gradient(145deg, #0b1326, #060f1e)',
                  borderRadius: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(56, 189, 248, 0.2)',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}>
                  <div style={{
                    width: '92px',
                    height: '92px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(2, 132, 199, 0.4)'
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '42px', height: '42px' }}>
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-column col-right">
            {awsCloudServices.slice(3, 6).map((item) => (
              <div 
                key={item.id} 
                className={`service-glass-card ${activeNode === item.id ? 'active-node-card' : ''}`}
                onMouseEnter={() => setActiveNode(item.id)}
                style={{ backgroundColor: '#060F1E', borderColor: 'rgba(56, 189, 248, 0.3)', boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="card-top-row">
                  <span className="service-icon-box" style={{ backgroundColor: 'rgba(56, 189, 248, 0.12)', borderColor: '#0284c7' }}>{item.icon}</span>
                  <span className="service-status-tag" style={{ backgroundColor: '#172554', color: '#38bdf8', border: '1px solid #1e3a8a' }}>AWS SECURE</span>
                </div>
                <h3 className="service-card-title" style={{ color: '#ffffff' }}>{item.title}</h3>
                <p className="service-card-desc" style={{ color: '#94a3b8' }}>{item.desc}</p>
                <div className="card-hover-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: KEY FEATURES (PURE BLACK BACKGROUND)
          ========================================================================= */}
      <section className="key-features-root">
        <div className="section-header-centered" style={{ marginBottom: '20px' }}>
          <div className="header-badge kf-header-badge">
            <span>OUR STRENGTH</span>
          </div>
          <h2 className="section-main-title kf-main-title">
            Key <span className="kf-title-gradient">Features</span>
          </h2>
          <p className="section-sub-title kf-sub-title">
            Powerful cloud solutions designed to ensure security, performance and peace of mind.
          </p>
        </div>

        <div className="kf-layout-wrapper">
          <div className="kf-column">
            {keyFeaturesData.filter(i => i.side === 'left').map((item) => (
              <div key={item.id} className="kf-feature-row">
                <div className="kf-icon-box">{item.icon}</div>
                <div className="kf-text-content">
                  <span className="kf-check-icon">✓</span>
                  <span className="kf-row-title">
                    <strong className="kf-highlight-text">{item.titleHighlight}</strong> {item.titleRest}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="kf-central-stage"
            onMouseMove={handleMouseMove5}
            onMouseLeave={handleMouseLeave5}
          >
            <div 
              className="kf-3d-canvas"
              style={{
                transform: `rotateX(${coords5.y * -8}deg) rotateY(${coords5.x * 10}deg)`
              }}
            >
              <div className="kf-orbit-circle kf-circle-1"></div>
              <div className="kf-orbit-circle kf-circle-2"></div>
              <div className="kf-orbit-circle kf-circle-3"></div>
              <div className="kf-orbit-arc kf-arc-1"></div>
              <div className="kf-orbit-arc kf-arc-2"></div>

              <svg className="kf-svg-connections" viewBox="0 0 460 460">
                <line x1="230" y1="230" x2="45" y2="75" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="160" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="245" className="kf-laser-line" />
                <line x1="230" y1="230" x2="45" y2="330" className="kf-laser-line" />

                <line x1="230" y1="230" x2="415" y2="75" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="160" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="245" className="kf-laser-line-purple" />
                <line x1="230" y1="230" x2="415" y2="330" className="kf-laser-line-purple" />

                <circle cx="45" cy="75" r="4" fill="#38bdf8" />
                <circle cx="45" cy="160" r="4" fill="#38bdf8" />
                <circle cx="45" cy="245" r="4" fill="#38bdf8" />
                <circle cx="45" cy="330" r="4" fill="#38bdf8" />

                <circle cx="415" cy="75" r="4" fill="#c084fc" />
                <circle cx="415" cy="160" r="4" fill="#c084fc" />
                <circle cx="415" cy="245" r="4" fill="#c084fc" />
                <circle cx="415" cy="330" r="4" fill="#c084fc" />
              </svg>

              <div className="kf-image-cloud-center">
                <svg className="kf-img-cloud-svg" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M110 40C108.5 27 97 17 83.5 17C72.5 17 63 23.5 58.5 32.8C53.2 28.1 46.2 25.2 38.5 25.2C21 25.2 6.8 39.4 6.8 56.9C6.8 60.5 7.4 64 8.7 67.2H112C122.5 67.2 131 58.7 131 48.2C131 38.2 123.2 30 113.2 29.1C112.3 33.5 110.8 37 110 40Z" stroke="url(#cloudGrad)" strokeWidth="3.5" strokeLinejoin="round" fill="rgba(14, 165, 233, 0.05)"/>
                  <defs>
                    <linearGradient id="cloudGrad" x1="6.8" y1="17" x2="131" y2="67.2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="kf-column">
            {keyFeaturesData.filter(i => i.side === 'right').map((item) => (
              <div key={item.id} className="kf-feature-row">
                <div className="kf-icon-box">{item.icon}</div>
                <div className="kf-text-content">
                  <span className="kf-check-icon">✓</span>
                  <span className="kf-row-title">
                    <strong className="kf-highlight-text">{item.titleHighlight}</strong> {item.titleRest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}