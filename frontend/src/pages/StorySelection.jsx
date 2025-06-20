import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import './StorySelection.css';

const API_URL = 'http://localhost:5000';

const StorySelection = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(`${API_URL}/storylines`);
        setStories(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load stories. Please try again later.');
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const handleSelectStory = (storyId) => {
    navigate(`/play/${storyId}`);
  };

  const formatStoryName = (name) => {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  if (loading) return (
    <div className="page">
      <Header title="Loading Stories" />
      <Loader />
      <Footer />
    </div>
  );

  if (error) return (
    <div className="page">
      <Header title="Error" />
      <div className="error-message">
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="page story-selection-page">
      <Header title="Choose Your Adventure" />
      
      <main className="selection-content">
        <h2>Select a Story</h2>
        <p className="subtitle">Each journey offers unique challenges and outcomes</p>
        
        <div className="stories-grid">
          {stories.map((story) => (
            <Card 
              key={story} 
              className="story-card"
              onClick={() => handleSelectStory(story)}
            >
              <div className="story-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3>{formatStoryName(story)}</h3>
              <p>Embark on a journey filled with mystery and choices that shape your destiny.</p>
              <Button variant="outline" className="play-button">Begin Adventure</Button>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StorySelection;