import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './EndScreen.css';

const EndScreen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storyName = searchParams.get('story') || 'your adventure';
  const endingType = searchParams.get('ending') || 'complete';
  
  const getEndingMessage = () => {
    switch(endingType) {
      case 'victory':
        return "You've achieved a glorious victory!";
      case 'defeat':
        return "Despite your efforts, darkness prevailed...";
      case 'neutral':
        return "Your journey ends, but the story continues...";
      default:
        return "Your adventure has reached its conclusion.";
    }
  };
  
  const getEndingImage = () => {
    switch(endingType) {
      case 'victory':
        return "linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(39, 174, 96, 0.2))";
      case 'defeat':
        return "linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(192, 57, 43, 0.2))";
      default:
        return "linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.2))";
    }
  };

  return (
    <div className="page end-screen-page">
      <Header title="Journey's End" />
      
      <main className="end-content">
        <Card className="ending-card" style={{ background: getEndingImage() }}>
          <h2>Your Adventure Concludes</h2>
          <div className="ending-icon">
            {endingType === 'victory' ? '🏆' : endingType === 'defeat' ? '💀' : '🔮'}
          </div>
          <p className="ending-message">{getEndingMessage()}</p>
          <p className="ending-description">
            Thank you for experiencing "{storyName}". Every choice you made shaped this outcome. 
            Would you like to explore another path or try a different story?
          </p>
          
          <div className="ending-actions">
            <Link to="/select-story">
              <Button variant="primary">Play Another Story</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Return Home</Button>
            </Link>
          </div>
        </Card>
        
        <div className="end-stats">
          <Card>
            <h3>Continue Your Adventure</h3>
            <p>Replay this story to discover different paths and endings you might have missed.</p>
            <div className="stats-actions">
              <Link to="/select-story">
                <Button variant="secondary">Replay Story</Button>
              </Link>
            </div>
          </Card>
          
          <Card>
            <h3>Explore New Worlds</h3>
            <p>Discover other immersive stories with unique challenges and narratives.</p>
            <div className="stats-actions">
              <Link to="/select-story">
                <Button variant="secondary">Browse Stories</Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EndScreen;