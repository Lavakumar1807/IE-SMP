import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <Header title="Embark on an Adventure" />
      
      <main className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Choose Your Path, Forge Your Destiny</h1>
            <p>Step into immersive worlds where every decision shapes your story. Will you uncover hidden truths, or succumb to the shadows?</p>
            <div className="hero-actions">
              <Link to="/select-story">
                <Button variant="primary" >Begin Your Journey</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
        
        <div className="features-section">
          <h2>Why Choose AdventureQuest?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Branching Narratives</h3>
              <p>Every choice matters with stories that adapt to your decisions.</p>
            </div>
            <div className="feature-card">
              <h3>Immersive Worlds</h3>
              <p>Explore richly detailed environments from haunted asylums to cyberpunk cities.</p>
            </div>
            <div className="feature-card">
              <h3>Multiple Endings</h3>
              <p>Discover different conclusions based on your actions.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;