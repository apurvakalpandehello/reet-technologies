import React from "react";
import "./Services.css";

const servicesData = [
   {
    id: 1,
    letter: "H",
    title: "High-End Website Development",
    description: "Craft pixel-perfect, enterprise-grade websites that convert.",
    iconClass: "fa-code",
  },
  {
    id: 2,
    letter: "S",
    title: "Cyber Security",
    description: "Protect your assets with comprehensive cyber defense solutions.",
    iconClass: "fa-shield-halved",
  },
  {
    id: 3,
    letter: "D",
    title: "Digital Transformation",
    description: "Accelerate your business with innovative digital solutions.",
    iconClass: "fa-wand-magic-sparkles",
  },
  {
    id: 4,
    letter: "C",
    title: "CRM & ERP Solutions",
    description: "Streamline operations with custom CRM and ERP platforms.",
    iconClass: "fa-gears",
  },
  {
    id: 5,
    letter: "M",
    title: "Mobile & Web Applications",
    description: "Engaging, high-performance mobile and web app development.",
    iconClass: "fa-mobile-screen-button",
  },
  {
    id: 6,
    letter: "A",
    title: "AI & Machine Learning",
    description: "Unlock intelligent automation with cutting-edge AI/ML.",
    iconClass: "fa-brain",
  },
  {
    id: 7,
    letter: "M",
    title: "Digital Marketing",
    description: "Maximize reach and ROI through strategic digital campaigns.",
    iconClass: "fa-bullhorn",
  },
  {
    id: 8,
    letter: "A",
    title: "AR & VR Solutions",
    description: "Immersive augmented and virtual reality experiences.",
    iconClass: "fa-vr-cardboard",
  }
 ,
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
        <span className="sub-title">OUR SERVICES</span>
        <h1>
          OUR SERVICES <span className="highlight-text">REET SERVICES</span> & SOLUTIONS
        </h1>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="cube-wrapper" key={service.id}>
            <div className="cube">
              {/* Front Face */}
              <div className="cube-face cube-front">
                <div className="card-top-badge">{service.letter}</div>
                <div className="card-content">
                  <div className="icon-wrapper">
                    <i className={`fa-solid ${service.iconClass}`}></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
                <a href="#more" className="view-more-btn">
                  Read Out More <span>↗</span>
                </a>
              </div>

              {/* 3D Cube Sides */}
              <div className="cube-face cube-back"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-left"></div>
              <div className="cube-face cube-top"></div>
              <div className="cube-face cube-bottom"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;