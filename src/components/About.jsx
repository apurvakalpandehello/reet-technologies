import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './About.css';

const About = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Generate Brain Particle Coordinates
    const particleCount = 2800;
    const targetPositions = new Float32Array(particleCount * 3);
    const startPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      startPositions[i * 3] = (Math.random() - 0.5) * 40;
      startPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      startPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI;
      const hemisphere = Math.random() > 0.5 ? 1 : -1;

      let r = 1.8 + 0.3 * Math.sin(8 * u) * Math.cos(8 * v);
      let x = r * Math.sin(v) * Math.cos(u) * 0.85 + (hemisphere * 0.45);
      let y = r * Math.sin(v) * Math.sin(u) * 1.1;
      let z = r * Math.cos(v) * 0.9;

      if (y < -0.8) {
        x *= 0.6;
        z *= 0.6;
      }

      targetPositions[i * 3] = x;
      targetPositions[i * 3 + 1] = y;
      targetPositions[i * 3 + 2] = z;

      currentPositions[i * 3] = startPositions[i * 3];
      currentPositions[i * 3 + 1] = startPositions[i * 3 + 1];
      currentPositions[i * 3 + 2] = startPositions[i * 3 + 2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, '#D1EAEA');
    gradient.addColorStop(0.4, '#817EB9');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.PointsMaterial({
      size: 0.12,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    let progress = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (progress < 1) {
        progress += 0.012;
      }

      const positions = geometry.attributes.position.array;
      for (let i = 0; i < particleCount * 3; i++) {
        const start = startPositions[i];
        const target = targetPositions[i];
        positions[i] = start + (target - start) * Math.min(progress, 1);
      }
      geometry.attributes.position.needsUpdate = true;

      particleSystem.rotation.y += 0.005;
      particleSystem.rotation.x = Math.sin(Date.now() * 0.001) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: 3D Animated Particle Brain with Courses Floating Out */}
        <div className="about-left">
          <div className="brain-canvas-container" ref={mountRef}></div>

          {/* ALL Requested IT Courses Emerging from Brain */}
          <div className="course-node node-1">React JS</div>
          <div className="course-node node-2">Node.js</div>
          <div className="course-node node-3">AWS DevOps</div>
          <div className="course-node node-4">Python</div>
          <div className="course-node node-5">JavaScript</div>
          <div className="course-node node-6">Linux</div>
          <div className="course-node node-7">Database (SQL/NoSQL)</div>
          <div className="course-node node-8">HTML5 & CSS3</div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <span className="section-subtitle">ABOUT REET TECHNOLOGIES</span>
          <h2 className="section-title">
            <span className="title-gray">FUELING BUSINESS GROWTH THROUGH </span>
            <span className="title-white">INNOVATIVE TECHNOLOGICAL SOLUTIONS</span>
          </h2>
          <p className="about-description">
            Future-ready strategies – Indicates a focus on innovation and scalability—solutions designed not just for today, but to adapt and succeed in a fast-changing tech landscape.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <div>
                <h4>Digital Transformation</h4>
                <p>Transform your business with tailored, forward-thinking solutions.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <div>
                <h4>Next Gen Consulting</h4>
                <p>Strategic support powered by the latest technology.</p>
              </div>
            </div>
          </div>

          <div className="about-footer">
            <button className="cta-button">Explore More &rsaquo;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;