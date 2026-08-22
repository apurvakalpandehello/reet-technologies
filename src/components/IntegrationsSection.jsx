import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './IntegrationsSection.css';
import { 
  Users, 
  Cpu, 
  Building2, 
  TrendingUp, 
  Cloud, 
  Database 
} from 'lucide-react';

// Exact File Imports matching your assets/Client Logos directory structure
import beyond6Senses from '../assets/Client Logos/beyond6senses.jpeg';
import civikLogo from '../assets/Client Logos/civik-logo.png';
import dimpleChem from '../assets/Client Logos/Dimple chem 1.jpg';
import happySoul from '../assets/Client Logos/happy-soul-logo.jpg';
import narendraJain from '../assets/Client Logos/Narendra Jain Logo.jpg';
import sonali from '../assets/Client Logos/Sonali.png';
import texcarp from '../assets/Client Logos/Texcarp.png';

// Column 1 Client Logos (Scrolls Upwards - Smooth Infinite)
const col1Logos = [
  { name: 'Beyond 6 Senses', src: beyond6Senses, delay: '0s' },
  { name: 'Civik', src: civikLogo, delay: '0.4s' },
  { name: 'Dimple Chem', src: dimpleChem, delay: '0.8s' },
  { name: 'Happy Soul', src: happySoul, delay: '1.2s' },
  { name: 'Beyond 6 Senses', src: beyond6Senses, delay: '0s' },
  { name: 'Civik', src: civikLogo, delay: '0.4s' },
  { name: 'Dimple Chem', src: dimpleChem, delay: '0.8s' },
  { name: 'Happy Soul', src: happySoul, delay: '1.2s' },
];

// Column 2 Client Logos (Scrolls Downwards - Smooth Infinite)
const col2Logos = [
  { name: 'Narendra Jain', src: narendraJain, delay: '0.2s' },
  { name: 'Sonali', src: sonali, delay: '0.6s' },
  { name: 'Texcarp', src: texcarp, delay: '1.0s' },
  { name: 'Beyond 6 Senses', src: beyond6Senses, delay: '1.4s' },
  { name: 'Narendra Jain', src: narendraJain, delay: '0.2s' },
  { name: 'Sonali', src: sonali, delay: '0.6s' },
  { name: 'Texcarp', src: texcarp, delay: '1.0s' },
  { name: 'Beyond 6 Senses', src: beyond6Senses, delay: '1.4s' },
];

export default function IntegrationsSection() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer Setup
    const width = currentMount.clientWidth || 650;
    const height = currentMount.clientHeight || 640;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Main Digital Network Ecosystem Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // 2. Center Floating 3D Digital Globe
    const globeGeo = new THREE.SphereGeometry(3.5, 36, 36);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const centerGlobe = new THREE.Mesh(globeGeo, globeMat);
    networkGroup.add(centerGlobe);

    const innerCoreGeo = new THREE.SphereGeometry(3.2, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x030712,
      transparent: true,
      opacity: 0.85
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    networkGroup.add(innerCore);

    // 3. Circular Orbiting Network & Nodes
    const nodes = [
      { label: 'Client', radius: 6.2, angle: 0, color: 0x38bdf8 },
      { label: 'Technology', radius: 6.2, angle: Math.PI / 2, color: 0x60a5fa },
      { label: 'Business', radius: 6.2, angle: Math.PI, color: 0xf59e0b },
      { label: 'Growth', radius: 6.2, angle: (3 * Math.PI) / 2, color: 0x10b981 }
    ];

    const nodeMeshes = [];
    const linesGroup = new THREE.Group();
    networkGroup.add(linesGroup);

    nodes.forEach((node) => {
      const x = Math.cos(node.angle) * node.radius;
      const z = Math.sin(node.angle) * node.radius;

      const nodeGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: true,
        transparent: true,
        opacity: 0.9
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, 0, z);

      const coreGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const coreMat = new THREE.MeshBasicMaterial({ color: node.color });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      nodeMesh.add(coreMesh);

      networkGroup.add(nodeMesh);
      nodeMeshes.push({ mesh: nodeMesh, radius: node.radius, baseAngle: node.angle, color: node.color });
    });

    // 4. Glowing Lines Connecting Nodes to Center Globe
    nodeMeshes.forEach((n) => {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        n.mesh.position
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: n.color,
        transparent: true,
        opacity: 0.4
      });
      const line = new THREE.Line(lineGeo, lineMat);
      linesGroup.add(line);
    });

    // Circular Orbit Path Ring
    const ringGeo = new THREE.RingGeometry(6.15, 6.25, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    networkGroup.add(ringMesh);

    // 5. Gold + Blue Particles Universe
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const blueCol = new THREE.Color(0x38bdf8);
    const goldCol = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      const r = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const isGold = Math.random() > 0.5;
      const col = isGold ? goldCol : blueCol;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particles);

    // 6. Data Stream Flowing toward Right Side Client Logos
    const streamCount = 25;
    const streamPositions = new Float32Array(streamCount * 3);
    for (let i = 0; i < streamCount * 3; i += 3) {
      streamPositions[i] = (Math.random() - 0.2) * 6;
      streamPositions[i + 1] = (Math.random() - 0.5) * 6;
      streamPositions[i + 2] = Math.random() * 4;
    }
    const streamGeo = new THREE.BufferGeometry();
    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));

    const streamMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.18,
      transparent: true,
      opacity: 0.9
    });
    const streamMesh = new THREE.Points(streamGeo, streamMat);
    scene.add(streamMesh);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let orbitAngle = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      orbitAngle += 0.005;

      // Center Globe Rotation
      centerGlobe.rotation.y += 0.004;

      // Mouse Parallax Tilt
      networkGroup.rotation.y = orbitAngle * 0.2 + mouseX * 0.3;
      networkGroup.rotation.x = mouseY * 0.2;

      // Update Node Positions along Ring
      nodeMeshes.forEach((n, idx) => {
        const currAngle = n.baseAngle + orbitAngle;
        n.mesh.position.x = Math.cos(currAngle) * n.radius;
        n.mesh.position.z = Math.sin(currAngle) * n.radius;
        n.mesh.rotation.y += 0.02;
        n.mesh.rotation.x += 0.01;

        if (linesGroup.children[idx]) {
          const linePos = linesGroup.children[idx].geometry.attributes.position.array;
          linePos[3] = n.mesh.position.x;
          linePos[4] = n.mesh.position.y;
          linePos[5] = n.mesh.position.z;
          linesGroup.children[idx].geometry.attributes.position.needsUpdate = true;
        }
      });

      // Orbit Particles Slow Spin
      particles.rotation.y -= 0.002;

      // Data Stream Flow to Logos
      const streamPos = streamMesh.geometry.attributes.position.array;
      for (let i = 0; i < streamCount * 3; i += 3) {
        streamPos[i] += 0.08;
        if (streamPos[i] > 8) {
          streamPos[i] = -2;
          streamPos[i + 1] = (Math.random() - 0.5) * 6;
        }
      }
      streamMesh.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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

  return (
    <section className="integration-wrapper">
      
      {/* Background Glowing Field */}
      <div className="network-bg-glow"></div>

      <div className="integration-container">
        
        {/* Left Side: 3D Digital Business Network Canvas */}
        <div className="network-3d-wrapper">
          <div className="network-canvas-container" ref={mountRef}></div>

          {/* Floating Badges */}
          <div className="tech-badge badge-1"><Users size={14} /> Client</div>
          <div className="tech-badge badge-2"><Cpu size={14} /> Technology</div>
          <div className="tech-badge badge-3"><Building2 size={14} /> Business</div>
          <div className="tech-badge badge-4"><TrendingUp size={14} /> Growth</div>
          <div className="tech-badge badge-5"><Cloud size={14} /> Cloud</div>
          <div className="tech-badge badge-6"><Database size={14} /> Data</div>
        </div>

        {/* Right Side: 3D Floating Logo Wall */}
        <div className="logo-wall-perspective">
          <div className="right-marquees">
            
            {/* Left Column: Logos Slowly Upwards */}
            <div className="marquee-col marquee-up">
              <div className="marquee-track">
                {col1Logos.map((item, idx) => (
                  <div 
                    key={`col1-${idx}`} 
                    className="logo-card 3d-float-card"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="logo-card-inner">
                      <div className="logo-img-wrapper">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="client-logo-img" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Logos Slowly Downwards */}
            <div className="marquee-col marquee-down">
              <div className="marquee-track">
                {col2Logos.map((item, idx) => (
                  <div 
                    key={`col2-${idx}`} 
                    className="logo-card 3d-float-card"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="logo-card-inner">
                      <div className="logo-img-wrapper">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="client-logo-img" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}