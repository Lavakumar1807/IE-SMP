import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import StorySelection from './pages/StorySelection';
import GamePlay from './pages/GamePlay';
import EndScreen from './pages/EndScreen';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/select-story" element={<StorySelection />} />
        <Route path="/play/:storyId" element={<GamePlay />} />
        <Route path="/end" element={<EndScreen />} />
      </Routes>
    </Router>
  );
}

export default App;