import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StoryText from '../components/game/StoryText';
import ChoiceList from '../components/game/ChoiceList';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import './GamePlay.css';

const API_URL = 'http://localhost:5000';

const GamePlay = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [currentNode, setCurrentNode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [choiceDisabled, setChoiceDisabled] = useState(false);
  
  const formatStoryName = (name) => {
    if (!name) return '';
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  useEffect(() => {
    const fetchNode = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/story/${storyId}/1`);
        console.log('Fetched story node:', res.data); // Debug log
        setCurrentNode(res.data);
        setError('');
      } catch (err) {
        console.error('Error fetching story:', err);
        setError('Failed to load the story. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (storyId) {
      fetchNode();
    }
  }, [storyId]);

  const handleChoice = async (nextId) => {
    if (!nextId || nextId === 'end') {
      navigate('/end');
      return;
    }

    setChoiceDisabled(true);
    
    try {
      const res = await axios.get(`${API_URL}/story/${storyId}/${nextId}`);
      console.log('Next node:', res.data); 
      setCurrentNode(res.data);
      setError('');
    } catch (err) {
      console.error('Error fetching next node:', err);
      setError('Failed to load the next part of the story.');
    } finally {
      setChoiceDisabled(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <Header title={formatStoryName(storyId)} />
        <div className="loader-container">
          <Loader />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <Header title="Error" />
        <div className="error-container">
          <div className="error-message">
            <p>{error}</p>
            <Button onClick={() => navigate('/select-story')}>
              Choose Another Story
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!currentNode) {
    return (
      <div className="page">
        <Header title="Story Not Found" />
        <div className="error-container">
          <div className="error-message">
            <p>Story content could not be loaded.</p>
            <Button onClick={() => navigate('/select-story')}>
              Choose Another Story
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page gameplay-page">
      <Header title={currentNode.title || formatStoryName(storyId)} />
      
      <main className="game-content">
        <div className="story-container">
          <div className="story-node">
            <StoryText text={currentNode.text || ''} />
            
            {currentNode.choices && currentNode.choices.length > 0 ? (
              <ChoiceList 
                choices={currentNode.choices}
                onSelect={handleChoice}
                disabled={choiceDisabled}
              />
            ) : (
              <div className="story-end">
                <p className="end-message">The End</p>
                <Button onClick={() => navigate('/select-story')}>
                  Play Another Story
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <div className="game-actions">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/select-story')}
          disabled={choiceDisabled}
        >
          Choose Another Story
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default GamePlay;