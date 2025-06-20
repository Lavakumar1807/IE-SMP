import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './About.css';

const About = () => {
  return (
    <div className="page about-page">
      <Header title="About AdventureQuest" />
      
      <main className="about-content">
        <Card className="about-intro">
          <h2>Your Journey Awaits</h2>
          <p>
            AdventureQuest is an interactive storytelling experience where your choices shape the narrative. 
            Each decision you make creates ripples that transform the story, leading to unique outcomes and endings.
          </p>
          <p>
            Immerse yourself in carefully crafted worlds, from mysterious forests to dystopian cities, 
            where every path reveals new secrets and challenges.
          </p>
          <div className="about-actions">
            <Link to="/select-story">
              <Button variant="primary">Start Your Adventure</Button>
            </Link>
          </div>
        </Card>
        
        <div className="features-section">
          <h2>What Makes AdventureQuest Unique</h2>
          <div className="features-grid">
            <Card>
              <h3>Branching Narratives</h3>
              <p>Each story has dozens of decision points that lead to different outcomes.</p>
            </Card>
            <Card>
              <h3>Rich Worldbuilding</h3>
              <p>Explore detailed settings with deep lore and atmospheric descriptions.</p>
            </Card>
            <Card>
              <h3>Multiple Endings</h3>
              <p>Discover various conclusions based on your choices and actions.</p>
            </Card>
          </div>
        </div>
        
        <Card className="story-showcase">
          <h2>Featured Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <h3>Forest of the Forgotten</h3>
              <p>Awaken in an ancient forest with no memory of who you are. Follow mysterious paths that lead to revelations about your past and the magical world around you.</p>
            </div>
            <div className="story-card">
              <h3>Neon Dystopia</h3>
              <p>Navigate a cyberpunk city filled with corporate intrigue and digital ghosts. Uncover a conspiracy that could change the fate of humanity.</p>
            </div>
            <div className="story-card">
              <h3>Echoes of the Asylum</h3>
              <p>Trapped in an abandoned mental hospital, confront terrifying memories and supernatural forces. Will you escape or uncover the dark truth?</p>
            </div>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;