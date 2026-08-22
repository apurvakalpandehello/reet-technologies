import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './ProjectsSection.css';
import { 
  ChevronLeft, 
  ChevronRight, 
  Monitor, 
  Gavel, 
  Users, 
  Globe, 
  Rocket, 
  ShieldCheck, 
  UserCheck, 
  TrendingUp 
} from 'lucide-react';

// तुमच्या इमेजमधील सर्व ४ क्लायंट प्रोजेक्ट्स
const projectsData = [
  {
    id: 1,
    title: "Puneeta's creative studio",
    category: "Creative website studio",
    icon: <Monitor size={22} />,
    imageBg: "linear-gradient(135deg, #f5f0eb 0%, #e8decb 100%)",
    tagline: "Creative Studio Layout"
  },
  {
    id: 2,
    title: "KRA",
    category: "Auction Management",
    icon: <Gavel size={22} />,
    imageBg: "linear-gradient(135deg, #0d0d11 0%, #1a1a24 100%)",
    tagline: "Bid. Win. Drive."
  },
  {
    id: 3,
    title: "Dimple chemicals",
    category: "CRM Development",
    icon: <Users size={22} />,
    imageBg: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
    tagline: "Manage Business Dashboard"
  },
  {
    id: 4,
    title: "TAW Designs & architects",
    category: "Website Development",
    icon: <Globe size={22} />,
    imageBg: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
    tagline: "Designing Spaces"
  }
  // जर भविष्यात एखादा नवीन क्लायंट ॲड करायचा असेल तर इथे फक्त असा ऑब्जेक्ट ॲड करा:
  // {
  //   id: 5,
  //   title: "New Client Name",
  //   category: "Software Development",
  //   icon: <Monitor size={22} />,
  //   imageBg: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  //   tagline: "Custom Business Solution"
  // }
];

export default function ProjectsSection() {
  const mountRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 3D Three.js Particles Background Effect
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Golden & Dark Particles Wave
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xf59e0b);
    const darkGold = new THREE.Color(0xd97706);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const col = Math.random() > 0.5 ? goldColor : darkGold;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.65
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.0015;
      particleSystem.rotation.x += (mouseY * 0.1 - particleSystem.rotation.x) * 0.05;
      particleSystem.rotation.y += (mouseX * 0.1 - particleSystem.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-main-wrapper">
      {/* Background 3D Canvas */}
      <div className="projects-3d-bg" ref={mountRef}></div>

      <div className="projects-content-container">
        
        {/* Header Section */}
        <div className="projects-header">
          <div className="projects-tag">◆ PROJECTS ◆</div>
          <h2 className="projects-title">
            Our Latest Incredible <br />
            <span className="gold-text">Client's Projects</span>
          </h2>
          <div className="header-diamond-divider">◆</div>
          <p className="projects-description">
            We take pride in delivering innovative, scalable, and results-driven
            digital solutions for businesses across industries.
          </p>
        </div>

        {/* Carousel & Cards Layout */}
        <div className="projects-carousel-wrapper">
          
          {/* Navigation Prev Button */}
          <button className="carousel-btn btn-prev" onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          {/* Cards Grid Container */}
          <div className="projects-cards-grid">
            {projectsData.map((project, idx) => (
              <div 
                key={project.id} 
                className={`project-card ${idx === activeIndex ? 'active-card' : ''}`}
              >
                {/* Screen Preview Window */}
                <div className="card-preview-window" style={{ background: project.imageBg }}>
                  <div className="window-header-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="simulated-preview-content">
                    <span className="preview-tagline">{project.tagline}</span>
                  </div>
                </div>

                {/* Floating Circle Icon */}
                <div className="card-floating-icon">
                  {project.icon}
                </div>

                {/* Title & Category */}
                <div className="card-info">
                  <h3 className="card-project-name">{project.title}</h3>
                  <p className="card-project-category">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Next Button */}
          <button className="carousel-btn btn-next" onClick={handleNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="carousel-pagination-dots">
          {projectsData.map((_, i) => (
            <span 
              key={i} 
              className={`dot ${i === activeIndex ? 'active-dot' : ''}`}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>

        {/* Bottom Highlights Bar */}
        <div className="projects-bottom-highlights">
          <div className="highlight-item">
            <div className="highlight-icon"><Rocket size={28} /></div>
            <div className="highlight-text">
              <h4>INNOVATIVE SOLUTIONS</h4>
              <p>Creative ideas that drive business forward.</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon"><ShieldCheck size={28} /></div>
            <div className="highlight-text">
              <h4>QUALITY ASSURED</h4>
              <p>We ensure the highest quality in every project.</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon"><UserCheck size={28} /></div>
            <div className="highlight-text">
              <h4>CLIENT FOCUSED</h4>
              <p>Your success is our top priority.</p>
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-icon"><TrendingUp size={28} /></div>
            <div className="highlight-text">
              <h4>RESULTS DRIVEN</h4>
              <p>Delivering measurable results that matter.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}