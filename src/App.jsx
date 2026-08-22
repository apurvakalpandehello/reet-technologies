import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing Page Components
import About from './components/About';
import Services from './components/Services';
import ServicesCards from './components/ServicesCards';
import Itsolution from './components/ItSolutions';
import ChooseUs from './components/ChooseUs';
import ClientReviews from './components/ClientReviews';
import IntegrationsSection from './components/IntegrationsSection';
import DigitalSolutionsSection from './components/DigitalSolutionsSection';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';

// Pages / Sub-Pages
import CloudDetailsPage from './components/CloudDetailsPage';
// Assume your new AWS & Data Management page component is saved here:
import AwsDataPage from './components/AwsData'; 

const HomePage = () => {
  return (
    <>
      <About />
      <Services />
      <Itsolution />
      <ServicesCards />
      <IntegrationsSection />
      <DigitalSolutionsSection />
       <ChooseUs />
      <ClientReviews />
      <GetInTouchSection />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div 
        className="app-main-container" 
        style={{ 
          background: '#080D1C', 
          minHeight: '100vh', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden' 
        }}
      >
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* Cloud Details Page Route */}
          <Route path="/services/cloud-solutions" element={<CloudDetailsPage />} />

          {/* AWS & Data Management Page Route (Last Card Destination) */}
          <Route path="/services/aws-data" element={<AwsDataPage />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}