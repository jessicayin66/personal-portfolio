import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Travel-themed background animations */}
      <div className="travel-background">
        <div className="floating-plane">✈️</div>
        <div className="floating-plane plane-2">✈️</div>
        <div className="floating-plane plane-3">✈️</div>
        <div className="floating-cloud cloud-1">☁️</div>
        <div className="floating-cloud cloud-2">☁️</div>
        <div className="floating-cloud cloud-3">☁️</div>
        <div className="floating-cloud cloud-4">☁️</div>
        <div className="floating-mountain mountain-1">🏔️</div>
        <div className="floating-mountain mountain-2">🏔️</div>
        <div className="floating-mountain mountain-3">🏔️</div>
        <div className="floating-sun">☀️</div>
        <div className="floating-compass">🧭</div>
        <div className="floating-camera">📷</div>
        <div className="floating-suitcase">🧳</div>
      </div>
      
      <div className="home-content">
        <h1>Welcome to my Journey</h1>
        <p>Exploring the world of software engineering, one adventure at a time.</p>
      </div>
    </div>
  );
};

export default Home;
