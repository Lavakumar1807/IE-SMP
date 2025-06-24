import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './AddStory.css';

export default function AddStory() {
  const [storyName, setStoryName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [choices, setChoices] = useState([{ text: '', nextId: '' }]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChoiceChange = (i, field, val) => {
    const arr = [...choices];
    arr[i][field] = val;
    setChoices(arr);
  };

  const addChoice = () => {
    setChoices([...choices, { text: '', nextId: '' }]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!storyName.trim()) {
      return alert('Please enter a story key (no spaces).');
    }
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/story/${encodeURIComponent(storyName)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, text, choices }),
        }
      );
      if (!res.ok) throw new Error(`Status ${res.status}`);
      await res.json();
      alert(`Story "${storyName}" created!`);
      navigate('/select-story'); 
    } catch (err) {
      console.error(err);
      alert('Failed to create story. Make sure the backend supports new story keys.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <><Header title="Create your own Adventure" />
    <div className="addstory-container">
        
      <h1>Create New Story</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Story Key
          <input
            type="text"
            value={storyName}
            onChange={e => setStoryName(e.target.value)}
            placeholder="e.g. myNewAdventure"
            required
          />
        </label>

        <label>
          Node Title
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="The Beginning"
            required
          />
        </label>

        <label>
          Node Text
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="You stand at the edge of a dark forest..."
            required
          />
        </label>

        <div className="choices-block">
          <h2>Choices</h2>
          {choices.map((c, i) => (
            <div key={i} className="choice-row">
              <input
                type="text"
                placeholder="Choice Text"
                value={c.text}
                onChange={e => handleChoiceChange(i, 'text', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Next Node ID"
                value={c.nextId}
                onChange={e => handleChoiceChange(i, 'nextId', e.target.value)}
              />
            </div>
          ))}
          <Button variant="secondary" type="button" onClick={addChoice}>
            + Add Choice
          </Button>
        </div>

        <div className="actions">
          <Button type="submit" disabled={loading}>
            {loading ? 'Creating…' : 'Create Story'}
          </Button>
          <Button variant="outline" onClick={() => navigate('/select-story')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
      <Footer />
    </>
  );
}