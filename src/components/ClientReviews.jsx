import React, { useRef, useEffect, useState } from 'react';
import './ClientReviews.css';

const reviewsData = [
  {
    id: 1,
    name: "Client Name",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, conect adipiscing elit, sed diam wisienim minim veniam quis nostrud nonum euismod tincidunt laoreet dolore magna."
  },
  {
    id: 2,
    name: "Alex Morgan",
    role: "Tech Lead & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Outstanding end-to-end IT solutions! Their team brought our digital vision to life with extreme precision, speed, and cutting-edge 3D tech."
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Working with them transformed our business workflow completely. Highly recommended for any enterprise scalable digital infrastructure!"
  },
  {
    id: 4,
    name: "David Miller",
    role: "CTO, Enterprise Soft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Top-notch technical consulting and high performance execution! Their 3D interface designs brought a huge leap in our user engagement."
  },
  {
    id: 5,
    name: "Sophia Taylor",
    role: "Operations Head",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Incredible attention to detail and seamlessly implemented web services. The smooth UI and responsiveness exceeded all our expectations."
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "Their team delivered ahead of schedule with flawless execution. The custom architecture solved our scaling issues effortlessly!"
  },
  {
    id: 7,
    name: "Jessica Alba",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
    rating: 5,
    review: "An absolute pleasure to collaborate with. Their 3D visuals and intuitive interface gave our application a major competitive edge."
  }
];

const ClientReviews = () => {
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // --- Neural Network Canvas Engine ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Nodes
    const nodeCount = Math.floor((width * height) / 18000);
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
      });
    }

    // Traveling Light Energy Particles along lines
    const pulses = [];
    const maxPulses = 15;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw Glowing Nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Thin Connecting Lines & Spawn Pulses
      const maxDistance = 150;
      const connections = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            connections.push({ from: nodes[i], to: nodes[j] });
          }
        }
      }

      // Add new pulses randomly along existing connections
      if (pulses.length < maxPulses && connections.length > 0 && Math.random() < 0.08) {
        const conn = connections[Math.floor(Math.random() * connections.length)];
        pulses.push({
          from: conn.from,
          to: conn.to,
          progress: 0,
          speed: Math.random() * 0.015 + 0.008,
          color: Math.random() > 0.4 ? '#F59E0B' : '#67E8F9',
        });
      }

      // Update & Render Traveling Light Particles
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const currX = p.from.x + (p.to.x - p.from.x) * p.progress;
        const currY = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- Auto Scroller for Reviews ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        const cardWidth = 450;
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 450;

    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews-section">
      {/* 3D Neural Network Dynamic Canvas Background */}
      <canvas ref={canvasRef} className="neural-canvas"></canvas>

      {/* Subtle Blue/Cyan Ambient Glow */}
      <div className="bg-center-glow"></div>

      {/* Floating 3D Decor Icons */}
      <div className="floating-decor shape-star-1">✦</div>
      <div className="floating-decor shape-diamond">◆</div>
      <div className="floating-decor shape-circle">○</div>
      <div className="floating-decor shape-star-2">✦</div>

      <div className="reviews-container">
        {/* Section Header */}
        <div className="reviews-header">
          <span className="sub-title">
            <span className="gold-text">TESTIMONIALS</span> <span className="italic-text">Client Feedback</span>
          </span>
          <h2 className="main-heading">
            WHAT OUR <span className="gold-text">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Navigation Controls */}
        <div className="scroller-controls">
          <button className="nav-btn" onClick={() => handleScroll('left')} aria-label="Scroll Left">
            &#10094;
          </button>
          <button className="nav-btn" onClick={() => handleScroll('right')} aria-label="Scroll Right">
            &#10095;
          </button>
        </div>

        {/* Horizontal Card Scroller */}
        <div 
          className="reviews-row-wrapper" 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="reviews-row-track">
            {reviewsData.map((client) => (
              <div key={client.id} className="review-card-3d">
                
                {/* 3D Quote Icon */}
                <div className="quote-icon-3d">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* White Speech Bubble Box */}
                <div className="speech-bubble-3d">
                  <p className="review-text">"{client.review}"</p>

                  {/* 5 Stars */}
                  <div className="stars-container">
                    {[...Array(client.rating)].map((_, i) => (
                      <div key={i} className="star-badge">
                        <span className="star-symbol">★</span>
                        <span className="star-number">{i + 1}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pointer Tail */}
                  <div className="bubble-tail"></div>
                </div>

                {/* Avatar & Details */}
                <div className="client-footer-3d">
                  <div className="avatar-container-3d">
                    <div className="avatar-ring-glow"></div>
                    <img src={client.image} alt={client.name} className="avatar-img" />
                  </div>
                  <div className="client-info">
                    <h3 className="client-name">{client.name}</h3>
                    <p className="client-role">{client.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;