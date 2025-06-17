import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [newStory, setNewStory] = useState({ title: '', text: '' });
  const [updateStory, setUpdateStory] = useState({ id: '', title: '', text: '' });
  const [message, setMessage] = useState('');

  // Backend API base URL
  const API_URL = 'http://localhost:5000';

  // 1. GET all stories (on component mount)
  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await axios.get(`${API_URL}/storylines`);
      setStories(response.data);
      setMessage('Fetched all stories successfully!');
    } catch (error) {
      setMessage('Error fetching stories: ' + error.message);
    }
  };

  // 2. GET single story
  const fetchSingleStory = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/story/${id}`);
      setSelectedStory(response.data);
      setMessage(`Fetched story with ID ${id} successfully!`);
    } catch (error) {
      setMessage('Error fetching story: ' + error.message);
    }
  };

  // 3. POST new story
  const addStory = async () => {
    try {
      const response = await axios.post(`${API_URL}/story`, newStory);
      setStories([...stories, response.data]);
      setNewStory({ title: '', text: '' });
      setMessage('Added new story successfully!');
    } catch (error) {
      setMessage('Error adding story: ' + error.message);
    }
  };

  // 4. PUT (update) story
  const updateExistingStory = async () => {
    try {
      const response = await axios.put(`${API_URL}/story/${updateStory.id}`, {
        title: updateStory.title,
        text: updateStory.text
      });
      
      const updatedStories = stories.map(story => 
        story.id === Number(updateStory.id) ? response.data : story
      );
      
      setStories(updatedStories);
      setUpdateStory({ id: '', title: '', text: '' });
      setMessage(`Updated story with ID ${updateStory.id} successfully!`);
    } catch (error) {
      setMessage('Error updating story: ' + error.message);
    }
  };

  // 5. DELETE story
  const deleteStory = async (id) => {
    try {
      await axios.delete(`${API_URL}/story/${id}`);
      const filteredStories = stories.filter(story => story.id !== id);
      setStories(filteredStories);
      setMessage(`Deleted story with ID ${id} successfully!`);
    } catch (error) {
      setMessage('Error deleting story: ' + error.message);
    }
  };

  return (
    <div className="App">
      <h1>Web Adventure Game</h1>
      <p className="message">{message}</p>

      <div className="sections">
        {/* Section 1: Display all stories */}
        <div className="section">
          <h2>1. GET All Stories</h2>
          <button onClick={fetchStories}>Refresh Stories</button>
          <ul>
            {stories.map(story => (
              <li key={story.id}>
                <strong>{story.title}</strong> (ID: {story.id})
                <button onClick={() => fetchSingleStory(story.id)}>View</button>
                <button onClick={() => deleteStory(story.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Display single story */}
        <div className="section">
          <h2>2. GET Single Story</h2>
          {selectedStory && (
            <div className="story-details">
              <h3>{selectedStory.title}</h3>
              <p>{selectedStory.text}</p>
              <p>ID: {selectedStory.id}</p>
            </div>
          )}
        </div>

        {/* Section 3: Add new story */}
        <div className="section">
          <h2>3. POST Add New Story</h2>
          <input
            type="text"
            placeholder="Title"
            value={newStory.title}
            onChange={(e) => setNewStory({...newStory, title: e.target.value})}
          />
          <textarea
            placeholder="Text"
            value={newStory.text}
            onChange={(e) => setNewStory({...newStory, text: e.target.value})}
          />
          <button onClick={addStory}>Add Story</button>
        </div>

        {/* Section 4: Update story */}
        <div className="section">
          <h2>4. PUT Update Story</h2>
          <input
            type="number"
            placeholder="Story ID to update"
            value={updateStory.id}
            onChange={(e) => setUpdateStory({...updateStory, id: e.target.value})}
          />
          <input
            type="text"
            placeholder="New Title"
            value={updateStory.title}
            onChange={(e) => setUpdateStory({...updateStory, title: e.target.value})}
          />
          <textarea
            placeholder="New Text"
            value={updateStory.text}
            onChange={(e) => setUpdateStory({...updateStory, text: e.target.value})}
          />
          <button onClick={updateExistingStory}>Update Story</button>
        </div>
      </div>

      <div className="explanation">
        <h2>How Frontend Connects to Backend</h2>
        <p>This React app uses Axios to make HTTP requests to the backend:</p>
        <ul>
          <li><strong>GET /storylines</strong> - Fetches all stories when component loads</li>
          <li><strong>GET /story/:id</strong> - Fetches a single story when "View" is clicked</li>
          <li><strong>POST /story</strong> - Adds a new story when "Add Story" is clicked</li>
          <li><strong>PUT /story/:id</strong> - Updates a story when "Update Story" is clicked</li>
          <li><strong>DELETE /story/:id</strong> - Deletes a story when "Delete" is clicked</li>
        </ul>
        <p>Each request is handled asynchronously using async/await, and the UI updates based on the response.</p>
      </div>
    </div>
  );
}

export default App;