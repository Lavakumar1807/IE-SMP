import React from 'react';
import './StoryText.css';

const StoryText = ({ text }) => {
  if (!text) return null;

  // Clean and format the text
  const cleanText = text
    .replace(/\\n/g, '\n') // Handle escaped newlines
    .replace(/\n\s*\n/g, '\n\n') // Normalize multiple newlines
    .trim();

  // Split into paragraphs
  const paragraphs = cleanText.split('\n\n').filter(p => p.trim());

  return (
    <div className="story-text">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="story-paragraph">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );
};

export default StoryText;